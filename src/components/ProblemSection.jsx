import { a, PROBLEMS } from "./data.js";
import { Box, Hi, Reveal, Tag } from "./shared.jsx";

export default function ProblemSection() {
  return (
    <Box id="problem" inner="flex flex-col gap-6 lg:gap-8">
      <img
        src={a("deco-a.svg")}
        alt="logo icon"
        className="pointer-events-none absolute -left-24 -top-10 hidden w-72 lg:block"
      />
      <img
        src={a("deco-a.svg")}
        alt="logo icon"
        className="pointer-events-none absolute -bottom-24 -right-20 hidden w-72 lg:block"
      />
      <Reveal className="relative flex flex-col items-center gap-2 text-center md:gap-3 lg:gap-4">
        <Tag>تعرف هذا الشعور؟</Tag>
        <h2 className="text-2xl font-bold leading-10 sm:text-[32px] md:text-[28px] lg:text-[32px]">
          أنت الآن ربما <Hi>تعاني</Hi> من واحدة أو أكثر من هذه المشاكل
        </h2>
      </Reveal>
      <div className="relative grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {PROBLEMS.map((t, i) => (
          <Reveal
            key={t}
            delay={i * 80}
            className="flex flex-col items-center justify-center gap-3 rounded-xl border border-transparent bg-white p-4 text-center shadow-[0_0_10px_rgba(151,151,151,.15)] hover:translate-y-[-2px] hover:border-primary md:gap-4 md:p-5 lg:min-h-[135px] lg:p-6"
          >
            <span className="flex size-10 lg:size-12 items-center justify-center rounded-3xl bg-[#f7f7f7]">
              <img src={a(`p${i + 1}.svg`)} alt="icon" className="size-5" />
            </span>
            <p className="text-base font-medium md:text-lg lg:text-xl">{t}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="flex flex-col items-center gap-2 rounded-lg bg-tertiary px-4 py-7 text-center text-base sm:px-20 md:text-lg lg:text-xl md:px-12">
        <p>
          وكل يوم يمر بدون استراتيجية: الوقت يضيع، الفرص تضيع، المنافس يكبر،
          واسمك يختفي بين الزحمة.
        </p>
        <p>وتبدأ تسأل نفسك</p>
        <p className="text-lg font-medium text-primary md:text-xl lg:text-2xl">
          ليه ما في نتائج رغم إنك اشتغلت واجتهدت؟
        </p>
      </Reveal>
    </Box>
  );
}
