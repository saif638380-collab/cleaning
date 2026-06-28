import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah M.",
      initial: "S",
      text: "I have been sick and didn't have the energy to clean. Ecoverde did a wonderful job on deep cleaning my bathroom and cleaning my house. It was a huge relief!",
    },
    {
      name: "Jason T.",
      initial: "J",
      text: "The team was professional, on time, and left my home spotless. I love that they use eco-friendly botanical products!",
    },
    {
      name: "Emily R.",
      initial: "E",
      text: "Best cleaning service I've ever used. Their attention to detail is unmatched. Everything is incredibly clean, and the subtle lavender botanical scent is amazing.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-emerald-100">
            Our Reputation
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
          See What Your <span className="text-emerald-600">Neighbors Are Saying</span>
        </h2>
        
        <p className="font-sans text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-16">
          Read real reviews from satisfied homeowners who upgraded to non-toxic, spotless botanical cleaning.
        </p>

        {/* Testimonials cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-50/50 p-8 rounded-2xl border border-slate-100/80 flex flex-col justify-between hover:shadow-lg hover:border-emerald-100/50 transition-all duration-300 relative group"
            >
              <div>
                {/* Review Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-500" />
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="font-sans text-slate-600 italic text-sm sm:text-base leading-relaxed mb-6">
                  "{rev.text}"
                </p>
              </div>

              {/* User profile */}
              <div className="flex items-center gap-3 border-t border-slate-100/80 pt-5">
                <div className="h-10 w-10 rounded-full bg-emerald-600 text-white font-sans font-bold flex items-center justify-center text-sm shadow-sm">
                  {rev.initial}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-800 text-sm">{rev.name}</h4>
                  <p className="font-sans text-[10px] text-emerald-600 font-semibold tracking-wider uppercase leading-none">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
