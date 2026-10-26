import { STEPS } from "./data.js";
import { Box, Head, Hi, Reveal } from "./shared.jsx";

export default function HowSection() {
  return (
    <Box id="how" inner="flex flex-col items-center gap-6 lg:gap-8">
      <Head tag="ألية العمل">
        نشتغل مع بعض بخطوات <Hi>واضحة</Hi>
      </Head>
      <div className="relative flex w-full max-w-[1120px] flex-col gap-4 md:gap-5 lg:gap-4">
        <i className="absolute inset-y-4 right-9 w-px bg-[#efeff1]" />
        {STEPS.map((t, i) => (
          <Reveal
            key={t}
            className="group relative flex items-center gap-2 lg:gap-3 rounded-lg border border-transparent border-b-[#efeff1] bg-white px-3 py-4 hover:translate-y-[-2px] hover:border-[#efeff1] md:gap-4 md:px-5 md:py-5 lg:px-3"
          >
            <span className="flex size-8 md:size-10 lg:size-12 shrink-0 items-center justify-center rounded-full bg-[#f7f7f7] text-base lg:text-xl font-medium text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-[#f7f7f7]">
              {(i + 1).toLocaleString("ar-EG")}
            </span>
            <p className="text-base font-medium md:text-lg lg:text-xl">{t}</p>
          </Reveal>
        ))}
        <Reveal className="group relative flex items-center gap-3 rounded-lg border border-transparent hover:translate-y-[-2px] border-b-[#efeff1] bg-white px-3 py-5 hover:border-[#efeff1]">
          <span className="flex size-8 md:size-10 lg:size-12 shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-[#f7f7f7]">
            ✓
          </span>
          <p className="text-base font-medium md:text-lg lg:text-xl">
            هذه الآلية تختصر عليك سنوات من التجربة العشوائية
          </p>
        </Reveal>
      </div>
    </Box>
  );
}
