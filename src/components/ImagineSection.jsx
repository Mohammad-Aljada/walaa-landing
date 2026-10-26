import { a, IMAGINE } from "./data.js";
import { Box, Head, Hi, Reveal } from "./shared.jsx";

export default function ImagineSection() {
  return (
    <Box inner="flex flex-col items-center gap-6 lg:gap-8">
            <Head tag="تخيل">
              <Hi>اسمك</Hi> يكون براند
            </Head>
            <div className="flex w-full max-w-[1054px] flex-col gap-4 sm:gap-6 md:gap-5 lg:gap-6">
              {IMAGINE.map((t, i) => (
                <Reveal
                  key={t}
                  delay={i * 80}
                  className="flex items-center gap-[10px] rounded-xl border-b border-r-[2.5px] border-primary border-b-transparent bg-white p-4 shadow-[0_0_7.5px_rgba(151,151,151,.15)] hover:border-b-primary md:gap-4 md:p-5 lg:gap-[10px]"
                >
                  <img
                    src={a("check.svg")}
                    alt="check icon"
                    className="size-5 shrink-0 md:size-6 lg:size-6"
                  />
                  <p className="text-base font-medium md:text-lg lg:text-xl">{t}</p>
                </Reveal>
              ))}
            </div>
          </Box>
  );
}
