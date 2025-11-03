import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest">
              <span className="h-2 w-2 rounded-full bg-black" /> AI For Dental Clinics
            </span>
            <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
              AI automation for dental clinics
            </h1>
            <ul className="text-base sm:text-lg list-disc pl-5 space-y-2">
              <li>2X ROI guarantee</li>
              <li>Full front desk automation and follow-up management</li>
            </ul>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://cal.com/velodent-ogbkfv/20min"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-black text-white px-5 py-3 text-sm font-medium hover:bg-white hover:text-black border border-black transition-colors"
              >
                Book Now
              </a>
              <a href="#booking" className="text-sm underline underline-offset-4">See Availability</a>
            </div>
          </div>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-black/10">
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05),transparent_60%)]" />
          </div>
        </div>

        <div className="mt-10">
          <div className="relative rounded-2xl overflow-hidden border border-black/10 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
            <div className="aspect-video w-full">
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
      </div>
    </section>
  );
}
