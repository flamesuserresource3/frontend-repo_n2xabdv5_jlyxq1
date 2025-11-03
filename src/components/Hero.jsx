export default function Hero() {
  return (
    <section id="home" className="relative pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Headline + CTA (unchanged) */}
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

        {/* Prominent Video (unchanged) */}
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

        {/* Under-video booking heading with aligned CTA (testimonials removed) */}
        <div className="mt-8 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <a
              href="https://cal.com/velodent-ogbkfv/20min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-black text-white px-5 py-2.5 text-sm font-medium hover:bg-white hover:text-black border border-black transition-colors"
            >
              Book Now
            </a>
            <h2 className="text-lg sm:text-xl font-semibold">Book a 20-minute Discover Call</h2>
          </div>
          <p className="text-sm opacity-80">Choose a time that works for you. No pressure — explore how Velodent can automate your clinic.</p>
        </div>
      </div>
    </section>
  );
}
