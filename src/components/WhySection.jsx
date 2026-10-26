import { STATS } from "./data.js";
import { Box, H2, Hi, Reveal, Tag } from "./shared.jsx";

export default function WhySection() {
  return (
    <Box id="why" inner="py-10">
      <Reveal className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-8 lg:justify-start lg:gap-[120px]">
        <div className="flex w-full max-w-[544px] flex-col gap-6 md:min-w-0 md:flex-1">
          <div className="flex flex-col gap-4">
            <span className="self-center md:self-start">
              <Tag>لماذا انا</Tag>
            </span>
            <H2>
              خبرة تتحول إلى <Hi>نظام</Hi> وليس مجرد محتوى
            </H2>
          </div>
          <p className="whitespace-pre-line text-base leading-[1.5] text-body sm:text-lg">
            {
              "على مدى 6 سنوات، اشتغلت مع أكثر من 500 علامة تجارية، وبنيت ظهور أكثر من 140 خبيرًا على لينكدإن وإكس: رفعت تأثيرهم، ووصلتهم لجمهورهم الصح، وحولت حساباتهم من نشر عشوائي إلى براند مقنع يجذب الفرص.\n\nأنا ما بكتب لك محتوى بس  أنا أبني لك نظام: واضح، مستهدف، ومبني على استراتيجية تخلي اسمك أصلًا رقميًا يكبر مع الوقت."
            }
          </p>
        </div>
        <div className="relative flex w-full max-w-[219px] flex-col gap-3 py-1 md:w-[190px] md:shrink-0 lg:w-full">
          <div className="absolute bottom-0 right-1 top-0 border-r border-dashed border-[#dfdfdf]" />
          {STATS.map(([n, l], i) => (
            <div
              key={n}
              style={{ "--stat-delay": `${i * 120}ms` }}
              className="stat-card relative mr-3 flex min-h-[65px] w-[136px] flex-col justify-center gap-1.5 rounded-lg bg-primary px-3 py-2.5 sm:w-[160px] md:w-[180px] lg:w-[203px]"
            >
              <span className="absolute -right-3 top-1/2 size-2 -translate-y-1/2 rounded-full bg-secondary" />
              <b className="text-sm font-medium text-secondary">{n}</b>
              <span className="text-xs text-[#f7f7f7] sm:text-sm">{l}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </Box>
  );
}
