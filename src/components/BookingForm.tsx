import { useState, ChangeEvent, FormEvent } from "react";
import { Sparkles, CheckCircle2, Phone, Calculator, ClipboardList } from "lucide-react";
import { motion } from "motion/react";
import { BookingFormData } from "../types";

interface BookingFormProps {
  selectedService: string;
}

export default function BookingForm({ selectedService }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: "",
    phone: "",
    email: "",
    serviceNeeded: selectedService || "Standard Cleaning",
    propertyAddress: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Simple pricing algorithm for dynamic client estimation
  const getEstimation = () => {
    let basePrice = 119;
    switch (formData.serviceNeeded) {
      case "Deep Cleaning":
        basePrice = 189;
        break;
      case "Move-In/Out Cleaning":
        basePrice = 249;
        break;
      case "Commercial Cleaning":
        basePrice = 299;
        break;
      case "Property Management":
        basePrice = 349;
        break;
      default:
        basePrice = 119;
    }
    return basePrice;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) {
      alert("Please fill in your Name, Phone, and Email to receive your estimate.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="booking-section" className="py-20 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Badge */}
        <motion.div 
          className="flex justify-center mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-emerald-100">
            Get a Quote
          </span>
        </motion.div>

        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Ready for a <span className="text-emerald-600">Spotless Home?</span>
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            Send us a few quick details and we will reach out with the perfect cleaning solution for your space in under 15 minutes.
          </p>
        </motion.div>

        {submitted ? (
          /* Successful booking feedback view */
          <motion.div 
            className="bg-emerald-50/60 border border-emerald-100 p-8 sm:p-12 rounded-3xl text-center max-w-2xl mx-auto shadow-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center bg-emerald-100 text-emerald-700 p-4 rounded-full mb-6">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Estimate Received!
            </h3>
            <p className="font-sans text-slate-600 text-sm sm:text-base mb-8">
              Thank you, <span className="font-bold text-slate-800">{formData.fullName}</span>! We are preparing your custom botanical cleaning quote. Our local representative will text or call you shortly.
            </p>
            <div className="bg-white p-6 rounded-2xl border border-emerald-100/50 text-left space-y-3 mb-8 shadow-inner">
              <p className="font-sans text-xs text-slate-500 uppercase tracking-wider font-semibold">Your Booking Summary</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="text-slate-500">Service:</span>
                <span className="font-semibold text-slate-800">{formData.serviceNeeded}</span>
                <span className="text-slate-500">Address:</span>
                <span className="font-semibold text-slate-800 truncate">{formData.propertyAddress || "TBD"}</span>
                <span className="text-slate-500">Estimated Price:</span>
                <span className="font-bold text-emerald-600">${getEstimation()} - ${getEstimation() + 50}*</span>
              </div>
              <p className="text-[10px] font-sans text-slate-400 mt-2 italic">*Estimates based on typical room counts. Final pricing confirmed during follow-up call.</p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: "",
                  phone: "",
                  email: "",
                  serviceNeeded: "Standard Cleaning",
                  propertyAddress: "",
                  details: "",
                });
              }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-sans text-sm font-semibold shadow transition-all cursor-pointer"
            >
              Request Another Estimate
            </button>
          </motion.div>
        ) : (
          /* Input Booking Form View */
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-slate-50/50 p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-lg"
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            
            {/* Form Input Section */}
            <form onSubmit={handleSubmit} className="lg:col-span-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="fullName" className="font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="w-full bg-white border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-xl px-4 py-3 text-slate-800 text-sm transition-all outline-none"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 248-9090"
                    required
                    className="w-full bg-white border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-xl px-4 py-3 text-slate-800 text-sm transition-all outline-none"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    required
                    className="w-full bg-white border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-xl px-4 py-3 text-slate-800 text-sm transition-all outline-none"
                  />
                </div>

                {/* Service needed selection dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="serviceNeeded" className="font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Service Needed
                  </label>
                  <select
                    id="serviceNeeded"
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-xl px-4 py-3 text-slate-800 text-sm transition-all outline-none"
                  >
                    <option value="Standard Cleaning">Standard Cleaning</option>
                    <option value="Deep Cleaning">Deep Cleaning</option>
                    <option value="Move-In/Out Cleaning">Move-In/Out Cleaning</option>
                    <option value="Commercial Cleaning">Commercial Cleaning</option>
                    <option value="Property Management">Property Management</option>
                  </select>
                </div>
              </div>

              {/* Property Address */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="propertyAddress" className="font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Property Address
                </label>
                <input
                  type="text"
                  id="propertyAddress"
                  name="propertyAddress"
                  value={formData.propertyAddress}
                  onChange={handleInputChange}
                  placeholder="Street, city, zip code"
                  className="w-full bg-white border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-xl px-4 py-3 text-slate-800 text-sm transition-all outline-none"
                />
              </div>

              {/* Tell us more */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="details" className="font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Tell us more
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about the spaces you want cleaned (bedrooms, bathrooms, pets, specific clean requests...)"
                  className="w-full bg-white border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-xl px-4 py-3 text-slate-800 text-sm transition-all outline-none resize-none"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-sm font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      Get a Free Quote
                    </>
                  )}
                </button>
                <a
                  href="tel:9034203976"
                  className="w-full sm:w-auto bg-white border border-slate-200 text-slate-800 font-sans text-sm font-semibold px-8 py-4 rounded-full text-center hover:bg-slate-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="h-4 w-4 text-emerald-600" />
                  Call Now
                </a>
              </div>
            </form>

            {/* Dynamic Interactive Estimate Panel */}
            <div className="lg:col-span-4 bg-emerald-900 text-white p-6 sm:p-8 rounded-2xl border border-emerald-800 flex flex-col justify-between h-full space-y-8 shadow-md">
              <div className="space-y-4">
                <div className="flex items-center gap-2 bg-emerald-800/60 w-fit px-3.5 py-1 rounded-full border border-emerald-700/50">
                  <Calculator className="h-3.5 w-3.5 text-emerald-300" />
                  <span className="font-mono text-[9px] uppercase tracking-wider font-semibold text-emerald-200">
                    Live Estimate Calculator
                  </span>
                </div>
                
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight">
                  Instant estimate for <span className="text-amber-400 block font-serif italic">{formData.serviceNeeded}</span>
                </h3>
                <p className="font-sans text-xs text-emerald-100/80 leading-relaxed">
                  Adjusting fields in the form updates your estimate immediately. Fully plant-based organic formulas are included at no extra charge.
                </p>
              </div>

              <div className="bg-emerald-950/50 p-5 rounded-xl border border-emerald-800/40 space-y-2">
                <span className="font-mono text-[10px] uppercase text-emerald-300 tracking-wider">Estimated Starting At</span>
                <div className="flex items-baseline gap-1 text-white">
                  <span className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight">${getEstimation()}</span>
                  <span className="font-sans text-sm text-emerald-300">/one-time</span>
                </div>
              </div>

              <div className="space-y-4 text-xs font-sans text-emerald-100/90 border-t border-emerald-800/60 pt-6">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400">✔</span>
                  <span>Botanical essential oils (no harsh chemicals)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400">✔</span>
                  <span>Licensed, bonded & certified experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400">✔</span>
                  <span>100% money-back satisfaction guarantee</span>
                </div>
              </div>
            </div>

          </motion.div>
        )}

      </div>
    </section>
  );
}
