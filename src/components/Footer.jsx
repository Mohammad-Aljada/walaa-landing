import { a, Instagram, Linkedin, NAV, WA, X } from "./data.js";

export default function Footer() {
  return (
    <footer className="bg-[#f5f6fb]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-4 pb-6 pt-10 sm:px-10 md:px-8 md:py-8 lg:px-20 lg:pb-8 lg:pt-14">
        <div className="flex flex-col items-center gap-6 py-4 lg:py-5 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-2">
            <img
              src={a("logo.png")}
              alt="ولاء حسان"
              className="lg:h-[25px] lg:w-[161px] md:h-[25px] md:w-[120px] h-[15px] w-[100px]"
            />
          </div>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 md:gap-x-6">
            {NAV.map(([l, h]) => (
              <a
                key={h}
                href={h}
                className="lg:font-medium font-normal  lg:text-base text-sm transition-colors hover:text-primary"
              >
                {l}
              </a>
            ))}
          </nav>
          <div className="flex gap-2.5">
            {["linkedin", "instagram", "whatsapp", "x"].map((s) => (
              <a
                key={s}
                href={
                  s === "whatsapp"
                    ? WA
                    : s === "linkedin"
                      ? Linkedin
                      : s === "instagram"
                        ? Instagram
                        : s === "x"
                          ? X
                          : "#"
                }
                aria-label={s}
                className="flex size-8 md:size-9 lg:size-12 items-center justify-center rounded-full group bg-white transition-colors hover:bg-primary"
              >
                <img
                  src={a(`${s}.svg`)}
                  alt={`${s} icon`}
                  className="size-4 group-hover:brightness-0 group-hover:invert"
                />
              </a>
            ))}
          </div>
        </div>
        <hr className="border-[#e4e4ee]" />
        <p className="text-center font-light text-sm text-body md:text-base lg:text-right">
          © 2026 ولاء حسان جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
