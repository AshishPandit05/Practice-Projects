import { useState } from "react";
import {
  Check,
  ArrowUpRight,
  Clock3,
  CalendarDays,
  Menu,
  X,
  Play,
  CircleCheck,
  Zap,
  Layers,
  ChevronRight,
} from "lucide-react";

function Logo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-3 no-underline"
      aria-label="ChronoTask home"
    >
      <span className="grid grid-cols-2 gap-[3px] w-[19px] shrink-0">
        <i className="h-[7px] w-[7px] rounded-full bg-sky-400" />
        <i className="h-[7px] w-[7px] rounded-full bg-neutral-900" />
        <i className="h-[7px] w-[7px] rounded-full bg-neutral-900" />
        <i className="h-[7px] w-[7px] rounded-full bg-neutral-900" />
      </span>
      <span className="text-[21px] font-bold tracking-[-1px]">ChronoTask</span>
    </a>
  );
}

function TaskCard() {
  return (
    <div className="paper-tab task-card absolute bottom-[-38px] left-[3.5%] z-10 w-[276px] rotate-[-2deg] rounded-[18px] border border-white/80 bg-[#f0f2f3] p-4 shadow-[0_18px_30px_#00000012]">
      <h3 className="mb-3 text-[14px] font-semibold">Today’s tasks</h3>
      <div className="space-y-2">
        <div className="rounded-lg border border-black/[.04] bg-white/90 p-2.5">
          <div className="flex items-center gap-2 text-[9px] font-medium">
            <span className="grid h-3.5 w-3.5 place-items-center rounded bg-orange-500 text-[8px] text-white">
              8
            </span>
            New ideas for campaign{" "}
            <span className="ml-auto flex -space-x-1">
              <i className="h-4 w-4 rounded-full border border-white bg-amber-300" />
              <i className="h-4 w-4 rounded-full border border-white bg-sky-300" />
            </span>
          </div>
          <div className="mt-2 flex items-center gap-2 text-[8px] text-neutral-500">
            <span>Sep 10</span>
            <div className="h-1 flex-1 rounded-full bg-neutral-200">
              <div className="h-full w-[63%] rounded-full bg-sky-400" />
            </div>
            <span>60%</span>
          </div>
        </div>
        <div className="rounded-lg border border-black/[.04] bg-white/90 p-2.5">
          <div className="flex items-center gap-2 text-[9px] font-medium">
            <span className="grid h-3.5 w-3.5 place-items-center rounded bg-emerald-500 text-[8px] text-white">
              3
            </span>
            Design PPT #4{" "}
            <span className="ml-auto flex -space-x-1">
              <i className="h-4 w-4 rounded-full border border-white bg-rose-200" />
              <i className="h-4 w-4 rounded-full border border-white bg-indigo-300" />
            </span>
          </div>
          <div className="mt-2 flex items-center gap-2 text-[8px] text-neutral-500">
            <span>Sep 18</span>
            <div className="h-1 flex-1 rounded-full bg-neutral-200">
              <div className="h-full w-[85%] rounded-full bg-sky-400" />
            </div>
            <span>92%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReminderCard() {
  return (
    <div className="paper-tab reminder-card absolute right-[1.4%] top-[5%] z-10 w-[165px] rotate-[8deg] rounded-[18px] border border-white bg-[#f0f2f3] p-4 shadow-[0_18px_30px_#00000012]">
      <h3 className="mb-3 text-[14px] font-semibold">Reminders</h3>
      <div className="rounded-xl bg-white/80 p-2.5">
        <p className="text-[8px] text-neutral-400">Meetings</p>
        <p className="mt-1 text-[11px] font-medium">Today’s Meeting</p>
        <p className="mt-1 text-[9px] text-neutral-500">
          Call with marketing team
        </p>
        <p className="mt-3 text-center text-[8px] text-neutral-500">Time</p>
        <div className="mt-1 rounded bg-sky-100 px-2 py-1 text-center text-[9px] text-sky-700">
          ◷ 13:00 - 13:45
        </div>
      </div>
    </div>
  );
}

function IntegrationsCard() {
  return (
    <div className="paper-tab integration-card absolute bottom-[-40px] right-[6%] z-10 w-[260px] rotate-[3deg] rounded-[18px] border border-white/80 bg-[#f0f2f3] p-4 shadow-[0_18px_30px_#00000012]">
      <h3 className="mb-5 text-[14px] font-semibold">100+ Integrations</h3>
      <div className="flex items-center justify-center -space-x-2">
        <div className="grid h-[70px] w-[70px] rotate-[-8deg] place-items-center rounded-[17px] bg-white shadow-md">
          <span className="gmail-mark">M</span>
        </div>
        <div className="grid h-[76px] w-[76px] rotate-[1deg] place-items-center rounded-[17px] bg-white shadow-md">
          <span className="slack-mark">✣</span>
        </div>
        <div className="grid h-[70px] w-[70px] rotate-[10deg] place-items-center rounded-[17px] bg-white shadow-md">
          <span className="calendar-mark">
            <b>31</b>
          </span>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const [email, setEmail] = useState("");
  const [demoOpen, setDemoOpen] = useState(false);

  const openDemo = () => {
    setNotice("");
    setDemoOpen(true);
  };

  const navItems = [
    ["Features", "#features"],
    ["Solutions", "#solutions"],
    ["Resources", "#resources"],
    ["Pricing", "#pricing"],
  ];

  return (
    <main id="home" className="min-h-screen bg-[#dedede] p-3 sm:p-4 md:p-5">
      <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[6px] border border-white/70 bg-white shadow-sm">
        <header className="relative z-30 flex h-[62px] items-center justify-between px-5 sm:px-8 md:px-10">
          <Logo />
          <nav className="hidden items-center gap-7 md:flex lg:gap-9">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[12px] text-neutral-700 transition hover:text-sky-600"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-6 sm:flex">
            <button
              onClick={() =>
                setNotice(
                  "Sign-in is a UI demo for now. Connect your authentication flow here.",
                )
              }
              className="text-[12px] text-neutral-800 transition hover:text-sky-600"
            >
              Sign in
            </button>
            <button
              onClick={openDemo}
              className="rounded-[11px] border border-[#c9d8eb] px-[18px] py-[9px] text-[12px] font-medium shadow-[0_0_0_1px_#eaf0f8] transition hover:bg-sky-50"
            >
              Get demo
            </button>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </header>

        {menuOpen && (
          <nav className="relative z-30 grid gap-1 border-t border-neutral-100 bg-white px-6 py-4 md:hidden">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm hover:bg-neutral-50"
              >
                {label}
              </a>
            ))}
            <button
              onClick={openDemo}
              className="mt-1 rounded-lg bg-blue-600 px-3 py-2.5 text-left text-sm text-white"
            >
              Get demo
            </button>
          </nav>
        )}

        <section
          className="hero relative mx-[10px] mb-[10px] min-h-[700px] overflow-hidden rounded-[29px] border border-[#e9e9e9] sm:min-h-[740px] lg:min-h-[748px]"
          id="features"
        >
          <div className="hero-grid absolute inset-0" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,.94)_0%,rgba(255,255,255,.7)_50%,rgba(255,255,255,.06)_100%)]" />

          {/* Decorative note and floating task tile */}
          <div className="note-wrap absolute left-[2.5%] top-[8%] z-10 h-[210px] w-[200px] rotate-[5deg]">
            <div className="absolute left-[45%] top-[-5px] z-20 h-3 w-3 rounded-full bg-red-500 shadow-[inset_0_-2px_2px_#0004]">
              <i className="absolute left-[5px] top-2 h-4 w-px bg-neutral-500" />
            </div>
            <div className="relative h-[195px] bg-[#fff08a] px-4 py-5 shadow-[0_12px_16px_#00000012]">
              <p className="font-hand text-[15px] leading-[1.25]">
                Take notes to keep track of crucial details, and accomplish more
                tasks with ease.
              </p>
            </div>
            <div className="absolute -bottom-[42px] -left-6 h-[155px] w-[170px] -rotate-[17deg] rounded-[15px] border border-white/90 bg-white/50 shadow-[0_14px_24px_#00000012]" />
          </div>
          <div className="absolute left-[4.5%] top-[30%] z-20 grid h-[87px] w-[87px] place-items-center rounded-[22px] border border-white/90 bg-white/90 shadow-[0_14px_25px_#00000017]">
            <span className="grid h-[38px] w-[38px] place-items-center rounded-[9px] bg-blue-500 text-white shadow-inner">
              <Check size={27} strokeWidth={3} />
            </span>
          </div>

          <ReminderCard />
          <div className="absolute right-[13%] top-[13%] z-20 grid h-[86px] w-[86px] place-items-center rounded-[23px] border border-white bg-white/90 shadow-[0_12px_22px_#00000012]">
            <div className="relative h-9 w-9">
              <Clock3
                size={43}
                strokeWidth={1.5}
                className="absolute -left-1 -top-1 text-neutral-900"
              />
              <span className="absolute left-[19px] top-[4px] h-[15px] w-[2px] rotate-[-8deg] bg-red-500" />
            </div>
          </div>
          <div className="absolute left-1/2 top-[22%] z-20 grid h-[87px] w-[87px] -translate-x-1/2 place-items-center rounded-[22px] border border-white bg-white/90 shadow-[0_12px_25px_#00000015]">
            <span className="grid grid-cols-2 gap-[6px]">
              <i className="h-[21px] w-[21px] rounded-full bg-sky-400 shadow-inner" />
              <i className="h-[21px] w-[21px] rounded-full bg-neutral-800 shadow-inner" />
              <i className="h-[21px] w-[21px] rounded-full bg-neutral-800 shadow-inner" />
              <i className="h-[21px] w-[21px] rounded-full bg-neutral-800 shadow-inner" />
            </span>
          </div>

          <div className="hero-copy absolute left-1/2 top-[37%] z-20 w-[min(780px,92%)] -translate-x-1/2 text-center">
            <h1 className="text-[clamp(2.5rem,5.55vw,5.25rem)] font-medium leading-[1.04] tracking-[-.065em]">
              <span className="block whitespace-nowrap">
                Think, plan, and track
              </span>
              <span className="mt-1 block text-[#a5a5a5]">
                all in one place
              </span>
            </h1>
            <p className="mt-7 text-[14px] text-neutral-700 sm:text-[16px]">
              Efficiently manage your tasks and boost productivity.
            </p>
            <button
              onClick={openDemo}
              className="group mt-7 inline-flex items-center gap-2 rounded-[11px] bg-[#2478f5] px-[29px] py-[16px] text-[14px] font-medium text-white shadow-[0_5px_10px_#2478f522] transition duration-200 hover:-translate-y-0.5 hover:bg-blue-600"
            >
              Get free demo{" "}
              <ArrowUpRight
                size={15}
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>

          <TaskCard />
          <IntegrationsCard />
        </section>

        {notice && (
          <div
            role="status"
            className="fixed bottom-5 left-1/2 z-50 flex max-w-[90vw] -translate-x-1/2 items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm shadow-xl"
          >
            <span>{notice}</span>
            <button onClick={() => setNotice("")} aria-label="Dismiss">
              <X size={16} />
            </button>
          </div>
        )}

        {demoOpen && (
          <div
            className="fixed inset-0 z-50 grid place-items-center bg-black/35 p-4 backdrop-blur-[3px]"
            onClick={(e) => {
              if (e.target === e.currentTarget) setDemoOpen(false);
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="demo-title"
              className="w-full max-w-[420px] rounded-3xl border border-white/80 bg-white p-7 shadow-2xl sm:p-9"
            >
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                <CalendarDays size={23} />
              </div>
              <h2
                id="demo-title"
                className="text-2xl font-semibold tracking-tight"
              >
                See ChronoTask in action
              </h2>
              <p className="mt-2 text-sm leading-6 text-neutral-500">
                Get a closer look at a calmer, more organized way to work.
              </p>
              <form
                className="mt-6 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setDemoOpen(false);
                  setNotice(
                    `Thanks! Demo interest recorded for ${email}. (Connect a backend to save submissions.)`,
                  );
                  setEmail("");
                }}
              >
                <label
                  htmlFor="demo-email"
                  className="block text-xs font-semibold text-neutral-700"
                >
                  Work email
                </label>
                <input
                  id="demo-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Request a demo <ChevronRight size={16} />
                </button>
              </form>
              <button
                onClick={() => setDemoOpen(false)}
                className="mt-4 w-full py-2 text-sm text-neutral-500 hover:text-neutral-900"
              >
                Maybe later
              </button>
            </div>
          </div>
        )}
      </div>

      <section
        id="solutions"
        className="mx-auto grid max-w-[1500px] gap-4 px-2 py-16 sm:grid-cols-3 sm:px-4"
      >
        {[
          {
            icon: <CircleCheck />,
            title: "Tasks that make sense",
            text: "Keep every task, note, and next step in one clear place.",
          },
          {
            icon: <Zap />,
            title: "Less busywork",
            text: "Build a rhythm that helps your team focus on meaningful work.",
          },
          {
            icon: <Layers />,
            title: "Your tools, together",
            text: "Bring your everyday workflow into one connected workspace.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-white/80 bg-white/75 p-6 shadow-sm backdrop-blur"
          >
            <div className="mb-5 grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600">
              {item.icon}
            </div>
            <h2 className="font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-neutral-500">
              {item.text}
            </p>
          </article>
        ))}
      </section>
      <footer
        id="resources"
        className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-3 px-4 pb-7 text-xs text-neutral-500"
      >
        <Logo />
        <span>© 2026 ChronoTask. Make room for what matters.</span>
        <a id="pricing" href="#home" className="hover:text-neutral-900">
          Back to top ↑
        </a>
      </footer>
    </main>
  );
}

export default App;
