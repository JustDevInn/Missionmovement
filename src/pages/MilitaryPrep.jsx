import React, { useState } from "react";
import { Link } from "react-router-dom";
const Trainer = "/img/profilepicturehd.png";

const faqItems = [
  {
    q: "Do I need to be fit already?",
    a: "You don't need to be selection-ready on day one, but you do need a basic level of health and the willingness to train 3-6 times per week. We'll match the plan to your current level.",
  },
  {
    q: "Can you guarantee I will pass my selection?",
    a: "No one can honestly guarantee that. What I can guarantee is a structured plan, clear benchmarks, and honest feedback. You'll know where you stand instead of guessing.",
  },
  {
    q: "What if I have old injuries or joint issues?",
    a: "We discuss this up front. I've worked with plenty of people dealing with knee, shoulder, and back issues (including myself). We'll adapt volume and exercise selection and I'll be honest if I think your timeline is unrealistic.",
  },
  {
    q: "Do I need to live in the Netherlands?",
    a: "No. Coaching is fully online. You can prepare for selections in other countries as well. We work around your time zone and equipment.",
  },
];

const MilitaryPrep = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <main className="min-h-screen bg-mmPage text-mmText pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero */}
        <section className="grid gap-10 lg:grid-cols-[3fr,2fr] items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-mmAccent bg-mmAccent/10 px-4 py-1 text-[11px] font-semibold tracking-wide uppercase mb-4 text-mmAccent">
              <span className="h-1.5 w-1.5 rounded-full bg-mmAccent" />
              Military & Selection Prep Coaching
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-mmText">
              Prepare for selection like a{" "}
              <span className="text-mmAccent">professional</span>, not like
              you&apos;re guessing.
            </h1>

            <p className="mt-4 sm:text-base text-mmTextMuted max-w-xl text-base md:text-lg">
              I help you go from “I hope I&apos;m ready” to “I know I&apos;m
              prepared” for military, police, and other service selections. No
              fluff, no macho nonsense. Just clear training, structure, and
              honest feedback from a former Royal Netherlands Marine.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-full bg-mmAccent px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-mmAccentHover transition"
              >
                Apply for coaching
              </a>
              <Link
                to="/program"
                className="text-sm font-medium text-mmTextMuted hover:text-mmAccent underline underline-offset-4"
              >
                View my approach & philosophy
              </Link>
            </div>

            <p className="mt-4 text-[11px] text-mmTextMuted max-w-md">
              Fully online coaching. You can be based anywhere in the world.
              I&apos;m abroad. You don&apos;t need to be.
            </p>
          </div>

          {/* Right: image + card */}
          <div className="relative">
            {/* Background image */}
            <div className="overflow-hidden rounded-2xl border border-mmBorder bg-mmSurface shadow-sm">
              <img
                src={"/img/royalmarines.jpg"} // 👉 change to whatever image you have
                alt="Military preparation training"
                className="h-64 w-full object-cover opacity-90"
              />
            </div>

            {/* Info card overlay */}
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-mmBorder bg-mmSurface/95 backdrop-blur-md p-5 shadow-sm">
              <h2 className="text-sm font-semibold mb-2 text-mmText">
                8-Week Military Prep Accelerator
              </h2>
              <ul className="space-y-1.5 text-xs text-mmTextMuted">
                <li>
                  • Assessment of your current fitness & selection timeline
                </li>
                <li>
                  • Weekly training plan (strength, conditioning, running, ruck)
                </li>
                <li>• Mobility & joint-care focus so you stay in one piece</li>
                <li>• Weekly check-ins & adjustments based on real life</li>
                <li>
                  • Mindset & routine work so you don&apos;t fall off after week
                  2
                </li>
              </ul>
              <p className="mt-3 text-[11px] text-mmTextMuted">
                Typical commitment: 3-6 sessions per week, over 8 weeks.
                Suitable for beginners to advanced candidates.
              </p>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="grid gap-10 lg:grid-cols-2" id="who">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">
              Who this is <span className="text-mmAccent">designed for</span>
            </h2>
            <p className="mt-3 text-mmTextMuted text-base md:text-lg">
              This is for you if you&apos;re serious about a career in service
              and want to arrive at selection prepared instead of broken.
            </p>

            <div className="mt-5 grid gap-6 sm:grid-cols-2 text-sm text-mmTextMuted">
              <div className="space-y-2">
                <h3 className="font-semibold">Roles & selections</h3>
                <ul className="space-y-1 text-mmTextMuted">
                  <li>• Marines / infantry</li>
                  <li>• Commando / special forces tracks</li>
                  <li>• Airborne / rapid deployment units</li>
                  <li>• Police / KMar / firebrigade</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Typical starting point</h3>
                <ul className="space-y-1 text-mmTextMuted">
                  <li>• Motivated, but no clear plan</li>
                  <li>• Decent base fitness, not selection-ready yet</li>
                  <li>• Worried about running, load, or injury</li>
                  <li>• Want honest feedback, not hype</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-mmBorder bg-mmSurface p-6">
            <h3 className="text-sm font-semibold mb-3 text-mmText">
              How you&apos;ll feel by the end
            </h3>
            <ul className="space-y-2 text-sm text-mmTextMuted">
              <li>• Clear benchmarks: you know your numbers, not guesses</li>
              <li>
                • Structured weeks: training, recovery, and life fit together
              </li>
              <li>• Confidence in your body under load and fatigue</li>
              <li>• A routine you can keep building on after the 8 weeks</li>
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="space-y-6" id="how-it-works">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">
                How the <span className="text-mmAccent">8-Week Accelerator</span>{" "}
                works
              </h2>
              <p className="mt-2 text-mmTextMuted max-w-2xl text-base md:text-lg">
                Clear steps, clear expectations. You bring effort; I bring
                structure, experience, and honesty.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-mmBorder bg-mmSurface p-5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-mmAccent text-white text-sm font-bold">
                1
              </span>
              <h3 className="mt-4 text-sm font-semibold text-mmText">Assessment & plan</h3>
              <p className="mt-2 text-xs text-mmTextMuted">
                We go through your goals, selection timeline, current training,
                strengths, and weak links. You get a clear 8-week structure that
                fits reality, not fantasy.
              </p>
            </div>

            <div className="rounded-2xl border border-mmBorder bg-mmSurface p-5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-mmAccent text-white text-sm font-bold">
                2
              </span>
              <h3 className="mt-4 text-sm font-semibold text-mmText">Weekly execution</h3>
              <p className="mt-2 text-xs text-mmTextMuted">
                You train with clear strength, conditioning, running/ruck, and
                mobility sessions. We adjust based on your feedback, schedule,
                and recovery.
              </p>
            </div>

            <div className="rounded-2xl border border-mmBorder bg-mmSurface p-5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-mmAccent text-white text-sm font-bold">
                3
              </span>
              <h3 className="mt-4 text-sm font-semibold text-mmText">
                Check-ins & readiness
              </h3>
              <p className="mt-2 text-xs text-mmTextMuted">
                Weekly check-ins and benchmarks keep you accountable and show if
                we&apos;re on track. By week 8, you&apos;ll know where you stand
                and what your next steps are.
              </p>
            </div>
          </div>
        </section>

        {/* About + image */}
        <section className="grid gap-10 lg:grid-cols-[3fr,2fr]" id="about">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">
              Guidance from someone who&apos;s{" "}
              <span className="text-mmAccent">actually been there</span>
            </h2>
            <p className="mt-3 text-mmTextMuted max-w-2xl text-base md:text-lg">
              I joined the Royal Netherlands Marine Corps as a teenager and
              spent over a decade in infantry, operations, and leadership. Later
              I coached civilians and athletes in CrossFit gyms and private
              settings focused on strength, conditioning, and lifestyle.
            </p>
            <p className="mt-3 text-mmTextMuted max-w-2xl text-base md:text-lg">
              I know how it feels to build up to selection, to doubt if
              you&apos;re ready, and to deal with injuries and life stress along
              the way. This program is built to get you ready without burning
              you out.
            </p>
            <p className="mt-3 text-mmTextMuted max-w-2xl text-base md:text-lg">
              My style is simple: clear expectations, honest feedback, and a
              human approach. No shouting, no toxic macho culture. Just real
              preparation for a life in service.
            </p>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl border border-mmBorder bg-mmSurface shadow-sm">
              <img
                src={Trainer} // 👉 swap to a real portrait / training image
                alt="Justin during military training"
                className="h-64 w-full object-cover object-top"
              />
            </div>

            <div className="rounded-2xl border border-mmBorder bg-mmSurface p-5">
              <h3 className="text-sm font-semibold mb-2 text-mmText">
                What I bring to your prep
              </h3>
              <ul className="space-y-2 text-sm text-mmTextMuted">
                <li>• 10+ years Royal Netherlands Marine Corps experience</li>
                <li>
                  • 8+ years coaching in CrossFit and S&amp;C environments
                </li>
                <li>• Experience managing gyms, coaches, and programs</li>
                <li>
                  • First-hand understanding of discipline, burnout, recovery
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="px-4 md:px-10 max-w-5xl mx-auto py-16 space-y-4 border-t border-mmBorder"
          id="faq"
        >
          <h2 className="mm-h2 text-mmText mb-6">
            Frequently Asked Questions
          </h2>

          {faqItems.map((item, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={item.q}
                className={`border border-mmBorder rounded-2xl transition-all duration-300 ${
                  isOpen ? "bg-mmSurface border-mmAccent" : "bg-mmSurface"
                }`}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-mmAccent font-display text-base md:text-lg tracking-widest uppercase">
                    {item.q}
                  </span>
                  <span className="text-mmAccent text-xl">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[1000px] py-4 px-6" : "max-h-0"
                  }`}
                >
                  <p className="whitespace-pre-line text-mmTextMuted leading-relaxed text-base md:text-lg">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        {/* Apply section */}
        <section
          id="apply"
          className="rounded-2xl border border-mmBorder bg-mmSurface px-6 py-8 sm:px-8 sm:py-10"
        >
          <div className="max-w-3xl space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-mmText">
              Ready to prepare for{" "}
              <span className="text-mmAccent">the life you chose</span>?
            </h2>
            <p className="text-mmTextMuted text-base md:text-lg">
              Share a few details about your situation and selection timeline.
              I&apos;ll review your application and reply personally with next
              steps and an honest yes/no on whether this program is a good fit.
            </p>

            <div className="mt-4 space-y-3 text-xs text-mmTextMuted">
              <p>When you reach out, please include:</p>
              <ul className="grid gap-2 sm:grid-cols-2">
                <li>• Your age &amp; country</li>
                <li>• Which selection you&apos;re aiming for</li>
                <li>• When your selection roughly is</li>
                <li>• Your current training situation</li>
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="/contact#contact-form"
                className="inline-flex items-center justify-center rounded-full bg-mmAccent px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-mmAccentHover transition"
              >
                Apply via contact form
              </a>
              <p className="text-xs text-mmTextMuted max-w-sm">
                On the contact form, mention that you&apos;re applying for{" "}
                <span className="font-semibold">
                  Military &amp; Selection Prep
                </span>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MilitaryPrep;
