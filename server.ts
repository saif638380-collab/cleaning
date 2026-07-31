import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "8977660274:AAHjLF4sEcZbKhMDHG9SofK9yE-N-bPnhoI";

// Memory cache for auto-discovered chat ID
let cachedChatId = process.env.TELEGRAM_CHAT_ID || "";

async function getTelegramChatId(): Promise<string | null> {
  if (cachedChatId) return cachedChatId;
  
  try {
    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates`);
    const data = await res.json();
    if (data.ok && Array.isArray(data.result) && data.result.length > 0) {
      // Find the last message or update that has a chat ID
      for (let i = data.result.length - 1; i >= 0; i--) {
        const update = data.result[i];
        const chat = update.message?.chat || update.channel_post?.chat || update.my_chat_member?.chat;
        if (chat?.id) {
          cachedChatId = String(chat.id);
          console.log(`[Telegram] Auto-detected Chat ID: ${cachedChatId}`);
          return cachedChatId;
        }
      }
    }
  } catch (err) {
    console.error("[Telegram] Error fetching updates for chat ID:", err);
  }
  return null;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Send quote form data to Telegram
  app.post("/api/quote", async (req, res) => {
    try {
      const { fullName, phone, email, serviceNeeded, propertyAddress, details, estimatedPrice } = req.body;

      if (!fullName || !phone || !email) {
        return res.status(400).json({ error: "Missing required contact details (Name, Phone, Email)" });
      }

      // Try to get chat ID
      const chatId = await getTelegramChatId();

      // Format Telegram markdown message
      const cleanName = String(fullName).trim();
      const cleanPhone = String(phone).trim();
      const cleanEmail = String(email).trim();
      const cleanService = serviceNeeded || "Sofa & Upholstery Steam Clean";
      const cleanAddress = propertyAddress ? String(propertyAddress).trim() : "Not specified";
      const cleanPrice = estimatedPrice || "129";
      const cleanDetails = details ? String(details).trim() : "None provided";
      const timestamp = new Date().toLocaleString("en-US", {
        timeZone: "America/New_York",
        dateStyle: "medium",
        timeStyle: "short",
      });

      const messageText = 
`🛋 *PRIME CARPET SOLUTION LLC*
🚨 *NEW QUOTE REQUEST* 🚨

━━━━━━━━━━━━━━━━━━━━━
👤 *CLIENT INFORMATION*
• *Name:* ${cleanName}
• *Phone:* \`${cleanPhone}\` _(Tap to copy)_
• *Email:* \`${cleanEmail}\`

🧼 *SERVICE DETAILS*
• *Service:* ${cleanService}
• *Estimated Starting:* *$${cleanPrice}*
• *Address:* ${cleanAddress}

📝 *CUSTOMER NOTES*
_${cleanDetails}_

━━━━━━━━━━━━━━━━━━━━━
⏱ *Received:* ${timestamp} EST
⚡ *Action:* Contact client within 15 mins`;

      if (chatId) {
        // Send message to Telegram Chat
        const tgRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: messageText,
            parse_mode: "Markdown"
          })
        });

        const tgData = await tgRes.json();
        if (tgData.ok) {
          console.log(`[Telegram] Successfully sent quote notification to chat ID ${chatId}`);
          return res.json({ success: true, message: "Quote sent to Telegram successfully!" });
        } else {
          console.error("[Telegram] Telegram API error:", tgData);
          return res.json({ 
            success: true, 
            warning: "Telegram notification pending - bot needs a start message", 
            tgResponse: tgData 
          });
        }
      } else {
        console.warn("[Telegram] No chat ID found yet. The user needs to message the bot first or set TELEGRAM_CHAT_ID.");
        return res.json({ 
          success: true, 
          message: "Quote received! (Note: Send /start to the Telegram bot to activate real-time notifications)",
          botUsername: "BigLiahbot"
        });
      }

    } catch (error: any) {
      console.error("[Server Error] Failed processing quote:", error);
      res.status(500).json({ error: "Server error processing request" });
    }
  });

  // Telegram webhook or polling helper check
  app.get("/api/telegram-status", async (req, res) => {
    const chatId = await getTelegramChatId();
    res.json({
      configured: Boolean(TELEGRAM_BOT_TOKEN),
      chatIdDetected: chatId || false,
      botUsername: "BigLiahbot"
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
