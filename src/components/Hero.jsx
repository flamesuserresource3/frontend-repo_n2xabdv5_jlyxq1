export default function Hero() {
  return (
    <section id="home" className="relative pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Headline + CTA */}
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
            AI automation for dental clinics
          </h1>
          <p className="text-sm sm:text-base opacity-80">
            Replace repetitive front-desk tasks with a reliable AI receptionist — 24/7.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a
              href="https://cal.com/velodent-ogbkfv/20min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-black text-white px-5 py-3 text-sm font-medium hover:bg-white hover:text-black border border-black transition-colors"
            >
              Book Now
            </a>
            <span className="text-xs sm:text-sm opacity-70">Discover Call in hero section</span>
          </div>
        </div>

        {/* Prominent Video */}
        <div className="mt-10">
          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-black/10 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Nw478YoO3og?si=0Pcoc1145T6JDndl"
                title="Velodent Founder"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Compact Testimonials near hero */}
        <div className="mt-8">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Dr. Patel', quote: 'Instant confirmations and fewer no-shows.' },
              { name: 'SmileWorks', quote: 'Freed up our front desk hours daily.' },
              { name: 'Bright Dental', quote: 'Insurance verification is finally seamless.' },
              { name: 'Northside Ortho', quote: 'Booked more recall cleanings automatically.' },
            ].map((t) => (
              <div key={t.name} className="rounded-xl border border-black/10 p-4 bg-white">
                <div className="text-xs sm:text-sm opacity-80">“{t.quote}”</div>
                <div className="mt-3 text-xs sm:text-sm font-medium">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
