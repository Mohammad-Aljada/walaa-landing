import { useState } from "react";
import { a, NAV } from "./data.js";
import { Btn } from "./shared.jsx";

/* ---------- header ---------- */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-10 md:px-12 lg:px-20">
        <a href="#home" className="flex items-center gap-2">
          <img
            src={a("logo.png")}
            alt="ولاء حسان"
            className="lg:h-[25px] lg:w-[161px] md:h-[25px] md:w-[120px] h-[15px] w-[100px]"
          />
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map(([l, h]) => (
            <a
              key={h}
              href={h}
              onClick={() => setActive(h)}
              className={`border-b-2 pb-1 text-base transition-colors hover:text-primary ${active === h ? " border-primary font-bold text-primary" : " border-transparent font-medium hover:border-primary"}`}
            >
              {l}
            </a>
          ))}
        </nav>
        <Btn className="hidden !h-12 !w-52 lg:inline-flex">
          احجز استشارتك الآن
        </Btn>
        <button
          aria-label="القائمة"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex size-11 flex-col items-center justify-center gap-[5px] md:size-12 lg:hidden"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-0.5 w-6 rounded bg-heading transition ${open ? (i === 1 ? "opacity-0" : i === 0 ? "translate-y-[7px] rotate-45" : "-translate-y-[7px] -rotate-45") : ""}`}
            />
          ))}
        </button>
      </div>
      <div
        className={`grid transition-all duration-300 lg:hidden ${open ? "grid-rows-[1fr] border-t border-[#efeff1]" : "grid-rows-[0fr]"}`}
      >
        <nav className="flex flex-col overflow-hidden px-5 sm:px-10 md:px-12">
          {NAV.map(([l, h]) => (
            <a
              key={h}
              href={h}
              onClick={() => {
                setActive(h);
                setOpen(false);
              }}
              className={`border-b border-[#efeff1] py-4 ${active === h ? "font-bold text-primary" : "font-medium"}`}
            >
              {l}
            </a>
          ))}
          <Btn className="my-4">احجز استشارتك الآن</Btn>
        </nav>
      </div>
    </header>
  );
}
