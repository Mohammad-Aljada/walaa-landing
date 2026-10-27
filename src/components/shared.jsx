import { useEffect, useRef } from "react";
import { WA } from "./data.js";

/* ---------- helpers ---------- */
export function Reveal({ delay = 0, className = "", children, ...p }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => {
        el.classList.toggle("is-in", e.isIntersecting);
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ "--d": `${delay}ms` }}
      className={`reveal ${className}`}
      {...p}
    >
      {children}
    </div>
  );
}
export const Tag = ({ children }) => (
  <span className="rounded-[10px] bg-[#f2f2f2] px-4 py-2 text-xs font-bold text-secondary-90 md:px-5 md:py-1.5 md:text-xs lg:px-6">
    {children}
  </span>
);
export const H2 = ({ children }) => (
  <h2 className="text-2xl font-medium leading-[1.5] sm:text-[32px] md:text-[28px] lg:text-[32px]">
    {children}
  </h2>
);
export const Hi = ({ children }) => (
  <span className="hl text-secondary-90">{children}</span>
);
export const Head = ({ tag, children }) => (
  <Reveal className="flex flex-col items-center gap-4 text-center">
    <Tag>{tag}</Tag>
    <H2>{children}</H2>
  </Reveal>
);
export const Box = ({ id, className = "", inner = "", children }) => (
  <section id={id} className={`relative overflow-hidden ${className}`}>
    <div
      className={`mx-auto max-w-[1440px] px-4 py-6 sm:px-8 md:px-10 md:py-9 lg:px-20 lg:py-7 ${inner}`}
    >
      {children}
    </div>
  </section>
);
export const Btn = ({ children, className = "", light }) => (
  <a
    href={WA}
    className={`inline-flex h-12 lg:h-14 items-center justify-center gap-2 rounded-lg px-8 text-base font-medium transition duration-300 hover:shadow-[0_8px_11px_rgba(58,58,198,.2)] hover:translate-y-[-2px] focus-visible:border-2 focus-visible:border-[#311e90] focus-visible:outline-none ${light ? "bg-[#f5f6fb] text-primary" : "bg-primary text-white hover:bg-[#3131a8] active:bg-[#272785]"} ${className}`}
  >
    {children}
  </a>
);
