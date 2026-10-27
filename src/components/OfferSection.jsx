import { a, OFFER } from "./data.js";
import { Box, Btn, Head, Reveal } from "./shared.jsx";

export default function OfferSection() {
  return (
    <Box
      id="offer"
      className="bg-tertiary"
      inner="flex flex-col items-center gap-7 md:gap-8"
    >
      <img
        src={a("deco-c.svg")}
        alt=""
        className="pointer-events-none absolute -right-16 -top-6 hidden w-64 lg:block"
      />
      <div className="flex flex-col items-center gap-4 text-center">
        <Head tag="العرض">
          <span className="block">باقة التمكين الرقمي</span>
        </Head>
        <p className="max-w-[1120px] text-center text-sm lg:text-base leading-[1.5] text-body sm:text-xl">
          هذه الباقة مصممة لأي خبير او بائع خدمات أو صاحب مهارة يريد يتحول من
          شخص يقدم محتوى إلى براند قوي يجذب فرص باستمرار
        </p>
      </div>

      <Reveal className="relative mt-3 flex w-full max-w-[432px] flex-col items-stretch gap-6 rounded-xl border border-transparent bg-white p-6 shadow-[0_0_7.5px_rgba(151,151,151,.15)] hover:translate-y-[-2px] hover:border-primary md:max-w-[520px] md:p-8 lg:max-w-[432px] lg:p-6">
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-xl bg-secondary px-3 py-1  lg:px-5 lg:py-1.5 text-xs lg:text-sm font-bold">
          تمكين الرقمي
        </span>
        <ul className="flex flex-col gap-5 pt-2">
          {OFFER.map((t, i) => (
            <li key={t} className="flex items-center gap-2 font-medium">
              <img
                src={a(i < 5 ? "check.svg" : "check.svg")}
                alt="check icon"
                className="size-5"
              />
              <p className="text-sm lg:text-base">{t}</p>
            </li>
          ))}
        </ul>
        <Btn>احجز استشارتك الآن</Btn>
        <hr className="border-[#dfdfdf]" />
        <p className="text-center text-sm lg:text-base font-medium">
          هذه الباقة هي الطريق الأسرع{" "}
          <span className="text-secondary-90">للتحول الرقمي الحقيقي</span>
        </p>
      </Reveal>
    </Box>
  );
}
