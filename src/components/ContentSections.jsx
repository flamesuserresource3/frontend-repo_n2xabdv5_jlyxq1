import { Bot, Calendar, CreditCard, Phone, Shield, BarChart3, ArrowRight } from 'lucide-react';

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-black/10 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-10 w-10 rounded-full border border-black/10 flex items-center justify-center bg-white">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="text-sm opacity-80">{desc}</p>
    </div>
  );
}

function MetricCard({ label, value, change }) {
  return (
    <div className="rounded-xl border border-black/10 p-5 bg-white">
      <div className="text-xs opacity-70 mb-2">{label}</div>
      <div className="text-2xl font-semibold">{value}</div>
      {change && <div className="text-xs mt-1">{change}</div>}
    </div>
  );
}

export default function ContentSections() {
  return (
    <>
      {/* About */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Premium AI automation for clinics that value time</h2>
            <p className="opacity-80 text-sm leading-6">
              Velodent replaces repetitive front-desk tasks with a reliable AI receptionist that answers calls, books appointments, verifies insurance, collects payments, and follows up — 24/7. Reduce no-shows, fill empty slots, and deliver a seamless patient experience.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://cal.com/velodent-ogbkfv/20min" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm underline underline-offset-4">
                Book Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <MetricCard label="Average no-show reduction" value="-38%" change="Past 90 days" />
            <MetricCard label="Calls handled by AI" value="82%" change="First response" />
            <MetricCard label="Booking conversion" value="+27%" change="From inbound leads" />
            <MetricCard label="Admin time saved" value="12h/wk" change="Per location" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 border-t border-black/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature icon={Bot} title="AI Receptionist" desc="Answers calls, triages, books, reschedules, and cancels appointments — available 24/7." />
            <Feature icon={Calendar} title="Follow-ups & Reminders" desc="Automated SMS/call reminders, including 1 day/hour before and 6-month cleaning recalls." />
            <Feature icon={Shield} title="Insurance Verification" desc="Automated eligibility checks and verification workflows to reduce admin overhead." />
            <Feature icon={CreditCard} title="Payments" desc="Securely collect and reconcile payments with automated links and reminders." />
            <Feature icon={Phone} title="Lead Generation" desc="Capture and convert ad leads with instant outreach and scheduling automation." />
            <Feature icon={BarChart3} title="Treatment Scheduling" desc="Smart timelines for braces tightening and treatment milestones." />
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" className="py-20 border-t border-black/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold">Dashboard</h2>
            <button className="text-sm underline underline-offset-4">Sign in</button>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-2xl border border-black/10 p-6 bg-white">
              <div className="text-sm font-medium mb-4">Weekly Activity</div>
              <div className="h-56 w-full rounded-lg border border-black/10 grid grid-cols-12 items-end gap-1 p-3">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="bg-black/80" style={{ height: `${20 + ((i * 7) % 70)}%` }} />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <MetricCard label="Patients scheduled" value="124" />
              <MetricCard label="No-shows prevented" value="36" />
              <MetricCard label="Insurance verified" value="91%" />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 border-t border-black/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold">Case Studies</h2>
            <p className="text-sm opacity-80 mt-2">Real clinics. Real outcomes. Explore the workflow and results.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[1,2].map((i) => (
              <a key={i} href="#case-studies" className="block rounded-2xl border border-black/10 p-6 bg-white hover:shadow-md transition-shadow">
                <div className="text-xs opacity-70 mb-1">Orthodontics — Multi-location</div>
                <div className="font-medium text-lg mb-2">Reduced no-shows by 42% and filled 3.2 more slots/day</div>
                <ul className="text-sm list-disc pl-5 opacity-80 space-y-1">
                  <li>AI triage and booking across locations</li>
                  <li>Insurance verification before visit</li>
                  <li>Automated follow-up and recall campaigns</li>
                </ul>
                <div className="mt-3 text-sm underline underline-offset-4">Read more</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 border-t border-black/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              name: 'Dr. Patel', quote: 'We recovered hours each day. Patients love the instant confirmations.'
            }, {
              name: 'SmileWorks', quote: 'No-shows dropped dramatically and our phones aren\'t ringing off the hook.'
            }, {
              name: 'Bright Dental', quote: 'Insurance verification used to take forever — now it\'s hands-off.'
            }].map((t) => (
              <div key={t.name} className="rounded-2xl border border-black/10 p-6 bg-white">
                <div className="text-sm opacity-80">“{t.quote}”</div>
                <div className="mt-4 text-sm font-medium">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 border-t border-black/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8">FAQ</h2>
          <div className="divide-y divide-black/10 border border-black/10 rounded-2xl bg-white">
            {[{
              q: 'How does the 2X ROI guarantee work?',
              a: 'If Velodent does not generate at least 2X ROI in the agreed period, we extend and optimize at no additional cost until it does.'
            }, {
              q: 'Can it integrate with our existing tools?',
              a: 'Yes. We integrate scheduling, EHR, payments, and communication tools commonly used by dental clinics.'
            }, {
              q: 'Is patient data secure?',
              a: 'Yes. Data is encrypted in transit and at rest. Access controls ensure compliance with industry standards.'
            }].map((item, idx) => (
              <details key={idx} className="group open:bg-white">
                <summary className="cursor-pointer list-none p-5 text-sm font-medium flex items-center justify-between">
                  {item.q}
                  <span className="ml-4 text-xs opacity-60">{/* icon placeholder */}+{/* purely visual */}</span>
                </summary>
                <div className="p-5 pt-0 text-sm opacity-80">{item.a}</div>
              </details>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="https://cal.com/velodent-ogbkfv/20min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-black text-white px-5 py-3 text-sm font-medium hover:bg-white hover:text-black border border-black transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm opacity-70">© {new Date().getFullYear()} Velodent. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#home" className="hover:opacity-70">Home</a>
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
            <a href="https://cal.com/velodent-ogbkfv/20min" target="_blank" rel="noreferrer" className="hover:opacity-70">Book</a>
          </div>
        </div>
      </footer>
    </>
  );
}
