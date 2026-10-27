import { a } from "./data.js";
import { Box, Btn, Reveal } from "./shared.jsx";

export default function CallToAction() {
  return (
    <Box inner=" py-6 lg:py-8">
      <Reveal className="relative bg-brand flex flex-col items-center gap-6 overflow-hidden rounded-xl p-4 py-8 shadow-[0_18px_50px_-24px_rgba(62,66,182,.35)] md:gap-6 md:p-6 lg:gap-8 lg:p-6 lg:py-10">
        <img
          src={a("deco-d.svg")}
          alt="icone"
          className="pointer-events-none absolute -right-16 top-1/4 hidden w-64 lg:block"
        />
        <h2 className="max-w-[414px] text-center sm:text-xl  md:text-2xl font-bold leading-[1.6] text-[#fbfcff] lg:text-[30px] sm:leading-[48px]">
          لو أنت جاهز تحوّل اسمك إلى براند يقنع ويبيع
        </h2>
        <div className="flex w-full flex-col items-center gap-4">
          <Btn
            light
            className="w-full max-w-[335px] md:max-w-[380px] lg:max-w-[335px]"
          >
            <img
              src={a("whatsapp.svg")}
              alt="WhatsApp icon"
              className="size-5"
            />
            احجز استشارتك الآن
          </Btn>
          <p className="text-xs lg:text-base font-normal text-[#fbfcff]">
            وابدأ رحلتك الرقمية بطريقة صحيحة
          </p>
        </div>
      </Reveal>
    </Box>
  );
}
