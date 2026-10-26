import { a, d } from "./data.js";
import { Btn, Reveal } from "./shared.jsx";

/* ---------- hero (animated) ---------- */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(172deg,#f6f5ff_8%,#f9f9ff_54%,#f1efff_92%)]"
    >
      <i className="pointer-events-none absolute -left-24 bottom-0 h-[344px] w-[359px] animate-blob rounded-full bg-[#5130cd]/15 blur-[64px]" />
      <i className="pointer-events-none absolute -top-12 right-0 h-48 w-[243px] animate-blob rounded-full bg-[#5132d0]/15 blur-[64px] [animation-delay:-4s]" />
      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-6 px-4 py-4 sm:px-10 md:flex-row md:gap-6 md:px-10 md:py-10 lg:gap-8 lg:px-20 lg:py-6">
        <div className="flex w-full max-w-[588px] flex-col items-center gap-8 text-center md:w-1/2 md:items-start md:text-right lg:w-full">
          <div className="flex flex-col items-center gap-4 md:items-start lg:gap-6">
            <div className="flex flex-col items-center gap-[14px] md:items-start">
              <span
                className="animate-fade-up rounded-xl text-xs lg:text-base bg-[#f2f2f2] px-4 py-2 lg:px-6 lg:py-2 font-bold text-primary"
                style={d(100)}
              >
                حياك الله
                <span className="inline-block origin-[70%_70%] animate-wave">
                  👋
                </span>
              </span>
              <Reveal className="w-full">
                <h1
                  className="animate-fade-up text-[32px] font-bold leading-[1.5] md:text-[36px] lg:text-[48px]"
                  style={d(250)}
                >
                  حوّل <span className="hl text-primary">اسمك</span> لبراند يجلب
                  لك دخل مستدام
                </h1>
              </Reveal>
            </div>
            <p
              className="animate-fade-up text-base leading-[1.5] text-body sm:text-xl"
              style={d(400)}
            >
              أنا ولاء حسان، أبني لك براندًا شخصيًا واضحًا ومحتوى مؤثرًا يحوّل
              وجودك على لينكدإن وإكس إلى صفقات وفرص حقيقية كل شهر.
            </p>
          </div>

          <div className="animate-fade-up" style={d(550)}>
            <Btn className="w-full sm:w-[208px]">احجز استشارتك الآن</Btn>
          </div>
        </div>

        <div className="relative aspect-square w-[min(78vw,435px)] shrink-0 animate-pop md:w-[42%] lg:w-[min(42vw,435px)]">
          <div className="absolute inset-0 animate-float">
            <img
              src={a("hero.webp")}
              alt="ولاء حسان"
              className="absolute left-1/2 top-1/2 w-[300px] max-w-none -translate-x-1/2 -translate-y-1/2 md:w-full lg:w-[435px]"
            />
          </div>
          <div className="absolute -left-3 top-8 rotate-2 sm:-left-9">
            <span className="block animate-float whitespace-nowrap rounded-xl bg-secondary-90 px-2 py-2 lg:px-3 lg:py-3 text-[10px] lg:text-sm font-medium [animation-delay:-2s]">
              كلمات تصنع فرصًا
            </span>
          </div>
          <div className="absolute -right-3 bottom-[18%] rotate-[2.5deg] sm:-right-9">
            <span className="block animate-float whitespace-nowrap rounded-xl bg-[#fac73a] px-2 py-2 lg:px-2.5 lg:py-2.5 text-[10px] lg:text-[13px] font-medium text-[#090909] [animation-delay:-4s]">
              فلسطينية الهوى والهوية
            </span>
          </div>
          <img
            src={a("sparkle.svg")}
            alt="icone"
            className="absolute -top-1 right-[22%] size-7 animate-twinkle sm:size-[45px]"
          />
          <img
            src={a("sparkle.svg")}
            alt="icone"
            className="absolute bottom-7 left-[11%] size-7 animate-twinkle sm:size-[45px] [animation-delay:-1.2s]"
          />
        </div>
      </div>
    </section>
  );
}
