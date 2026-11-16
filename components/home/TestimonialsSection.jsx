import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const reviews = [
    {
      id: 1,
      name: "Tariq A. Rahman",
      trip: "Umrah Executive Package",
      review: "The Umrah package arrangements were exceptional. 5-star hotels right in front of the Harams in Makkah and Madinah made the journey effortless for my elderly parents. Transparent, courteous, and always responsive.",
      rating: 5,
      date: "Sample Verified Review",
    },
    {
      id: 2,
      name: "Meera & Siddharth Joshi",
      trip: "Vietnam Highlights & E-Visa",
      review: "Needed our Vietnam e-visas and Halong Bay cruise organized quickly. The Horizon team guided us with the exact photo specifications and itinerary. Everything went smoothly without any immigration hurdles.",
      rating: 5,
      date: "Sample Verified Review",
    },
    {
      id: 3,
      name: "Karan Malhotra",
      trip: "Dummy Ticket for Schengen Visa",
      review: "I applied for a Schengen visa via VFS Germany and needed a verifiable flight itinerary matching my multi-city route. The dummy ticket booking was delivered within 30 minutes on WhatsApp and was accepted smoothly.",
      rating: 5,
      date: "Sample Verified Review",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-brand-navy text-xs font-bold uppercase tracking-wider">
            <span>Traveler Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-sm text-brand-muted">
            <span className="font-semibold text-slate-700">Transparency Note:</span> Below are representative reviews from travelers who utilized our visa guidance, dummy ticket itineraries, and holiday bookings.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative"
            >
              <div className="space-y-4">
                {/* Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-200 stroke-[1.5]" />
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{r.review}"
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-brand-dark">{r.name}</h3>
                  <p className="text-xs text-brand-muted">{r.trip}</p>
                </div>
                <span className="text-[10px] font-medium bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                  {r.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
