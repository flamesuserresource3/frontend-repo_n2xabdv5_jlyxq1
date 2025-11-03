import { useEffect, useRef } from 'react';

export default function BookingCalendar() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Inject Cal.com embed script once
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;

    const init = () => {
      if (!window.Cal) return;
      window.Cal('init', '20min', { origin: 'https://app.cal.com' });
      window.Cal.ns['20min']('inline', {
        elementOrSelector: '#my-cal-inline-20min',
        config: { layout: 'month_view' },
        calLink: 'velodent-ogbkfv/20min',
      });
      window.Cal.ns['20min']('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    };

    script.onload = init;

    // If the script already exists, just init
    if (document.querySelector('script[src="https://app.cal.com/embed/embed.js"]')) {
      init();
    } else {
      document.head.appendChild(script);
    }

    return () => {};
  }, []);

  return (
    <section id="booking" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">Book a 20-minute discovery call</h2>
          <p className="text-sm mt-2 opacity-80">Choose a time that works for you. No pressure — explore how Velodent can automate your clinic.</p>
        </div>
        <div className="rounded-2xl border border-black/10 shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white">
          <div id="my-cal-inline-20min" ref={containerRef} style={{ width: '100%', height: '100%', overflow: 'auto' }} />
        </div>
      </div>
    </section>
  );
}
