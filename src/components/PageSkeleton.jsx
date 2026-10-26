import { NAV } from "./data.js";

export default function PageSkeleton() {
  return (
    <div
      className="page-skeleton fixed inset-0 z-[100] overflow-y-auto bg-white"
      role="status"
      aria-label="جارٍ تحميل الصفحة"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 md:px-12 lg:px-20">
        <div className="flex h-20 items-center justify-between">
          <span className="skeleton-block h-[25px] w-[161px] rounded-md" />
          <div className="hidden items-center gap-8 lg:flex">
            {NAV.map(([label]) => (
              <span key={label} className="skeleton-block h-4 w-16 rounded" />
            ))}
          </div>
          <span className="skeleton-block hidden h-12 w-52 rounded-lg lg:block" />
          <span className="skeleton-block size-11 rounded-lg lg:hidden" />
        </div>
      </div>

      <div className="bg-[linear-gradient(172deg,#f6f5ff_8%,#f9f9ff_54%,#f1efff_92%)]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-12 px-5 py-10 sm:px-10 md:flex-row md:gap-6 md:px-10 md:py-10 lg:gap-8 lg:px-20 lg:py-12">
          <div className="flex w-full max-w-[588px] flex-col items-center gap-6 md:w-1/2 md:items-start">
            <span className="skeleton-block h-10 w-32 rounded-xl" />
            <div className="flex w-full flex-col items-center gap-3 lg:items-start">
              <span className="skeleton-block h-10 w-full max-w-[520px] rounded-lg sm:h-12" />
              <span className="skeleton-block h-10 w-4/5 rounded-lg sm:h-12" />
            </div>
            <div className="flex w-full flex-col items-center gap-2 lg:items-start">
              <span className="skeleton-block h-5 w-full max-w-[540px] rounded" />
              <span className="skeleton-block h-5 w-11/12 rounded" />
              <span className="skeleton-block h-5 w-3/4 rounded" />
            </div>
            <span className="skeleton-block h-14 w-full rounded-lg sm:w-[208px]" />
          </div>
          <span className="skeleton-block aspect-square w-[min(78vw,435px)] shrink-0 rounded-full md:w-[42%] lg:w-[min(78vw,435px)]" />
        </div>
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-12 sm:px-10 md:px-10 md:py-10 lg:px-20">
        <div className="mx-auto flex w-full max-w-lg flex-col items-center gap-3">
          <span className="skeleton-block h-8 w-32 rounded-lg" />
          <span className="skeleton-block h-9 w-4/5 rounded-lg" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => (
            <span key={i} className="skeleton-block h-[135px] rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
