import { useEffect, useRef, useState } from "react";
import { REVIEWS, a } from "./data.js";
import { Box, Head, Hi } from "./shared.jsx";

/* ---------- testimonials ---------- */
function Card({ r, active }) {
  const [more, setMore] = useState(false);
  const clampRef = useRef(null);
  const [hasOverflow, setHasOverflow] = useState(false);
  const paragraphs = r.t.split(/\n\s*\n/);

  useEffect(() => {
    const clamp = clampRef.current;
    const container = clamp?.parentElement;
    if (!clamp || !container) return;

    const updateOverflow = () => {
      setHasOverflow(clamp.scrollHeight > clamp.clientHeight + 1);
    };

    updateOverflow();
    const observer = new ResizeObserver(updateOverflow);
    observer.observe(container);
    return () => observer.disconnect();
  }, [r.t]);

  useEffect(() => {
    if (!hasOverflow) setMore(false);
  }, [hasOverflow]);

  return (
    <article
      className={`flex h-[420px] flex-col  overflow-hidden rounded-xl border-[1.3px] border-transparent bg-white shadow-[0_0_15px_rgba(151,151,151,.15)] transition-all duration-500 ${active ? "hover:translate-y-[-2px] hover:border-primary" : "hidden opacity-30 transition-opacity lg:flex lg:h-[420px] lg:hover:opacity-100"}`}
    >
      <div className="relative flex min-h-0 flex-1 flex-col gap-6 p-6">
        <img src={a("quote.svg")} alt="" className="h-[19.5px] w-[26px]" />
        <div
          className={`text-lg leading-[1.5] tracking-[.5px] sm:text-xl ${hasOverflow && more ? "max-h-[210px] overflow-y-auto" : hasOverflow ? "line-clamp-6" : ""}`}
        >
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={index < paragraphs.length - 1 ? "mb-3" : ""}>
              {paragraph}
            </p>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 top-6 invisible text-lg leading-[1.5] tracking-[.5px] sm:text-xl"
        >
          <div ref={clampRef} className="line-clamp-6">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className={index < paragraphs.length - 1 ? "mb-3" : ""}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        {active && hasOverflow && (
          <button
            onClick={() => setMore(!more)}
            className="flex items-center gap-1.5 text-sm font-medium text-primary"
          >
            {more ? "عرض أقل" : "عرض مزيد"}
            <img
              src={a("more.svg")}
              alt="arrqqow icon"
              className={`size-3.5 transition ${more ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>
      <div className="flex h-[100px] items-center justify-start gap-3 bg-tertiary px-6">
         {r.image && (
          <img
            src={a(r.image)}
            alt={`صورة ${r.n}`}
            className="lg:size-[50px] size-[40px] shrink-0 rounded-full object-cover"
          />
        )}
        <div className="flex min-w-0 flex-col justify-center">
          <b className="text-xl">{r.n}</b>
          <span className="text-sm text-[#5b5b5b]">{r.r}</span>
        </div>
      </div>
    </article>
  );
}
export default function Reviews() {
  const [i, setI] = useState(0);
  const touchStart = useRef(null);
  const at = (k) => (i + k + REVIEWS.length) % REVIEWS.length;

  const handleTouchStart = (event) => {
    if (!window.matchMedia("(max-width: 1023px)").matches) return;
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event) => {
    if (!touchStart.current) return;

    const deltaX = event.changedTouches[0].clientX - touchStart.current.x;
    const deltaY = event.changedTouches[0].clientY - touchStart.current.y;
    touchStart.current = null;

    if (Math.abs(deltaX) < 50 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
    setI((current) => (current + (deltaX < 0 ? 1 : -1) + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <Box id="reviews" inner="flex flex-col gap-8">
      <Head tag="آراء العملاء">
      شو بحكوا <Hi>عملائي</Hi>؟
      </Head>
      <div className="relative mx-auto w-full max-w-[1120px] md:max-w-[760px] lg:max-w-[1120px]">
        <div
          className="grid grid-cols-1 items-start gap-8 touch-pan-y lg:grid-cols-3"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* RTL: first column sits on the right */}
          <Card key={`n${at(1)}`} r={REVIEWS[at(1)]} />
          <Card key={`a${i}`} r={REVIEWS[i]} active />
          <Card key={`p${at(-1)}`} r={REVIEWS[at(-1)]} />
        </div>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-7 lg:pointer-events-none lg:absolute lg:inset-x-0 lg:top-[182px] lg:mt-0 lg:justify-between">
          <button
            aria-label="التالي"
            onClick={() => setI(at(1))}
            className="group pointer-events-auto flex size-12 items-center justify-center rounded-full bg-white shadow-[0_0_7.5px_rgba(151,151,151,.15)] transition-colors hover:bg-primary"
          >
            <img
              src={a("arrow-b.svg")}
              alt="arrow forward"
              className="size-[25px] group-hover:brightness-0 group-hover:invert"
            />
          </button>
          <div dir="ltr" className="flex items-center gap-4 lg:hidden">
            {REVIEWS.map((_, k) => (
              <i
                key={k}
                className={`h-4 rounded-full transition-all ${k === i ? "w-5 bg-primary" : "w-4 bg-[#d6d6e8]"}`}
              />
            ))}
          </div>
          <button
            aria-label="السابق"
            onClick={() => setI(at(-1))}
            className="group pointer-events-auto flex size-12 items-center justify-center rounded-full bg-white shadow-[0_0_7.5px_rgba(151,151,151,.15)] transition-colors hover:bg-primary"
          >
            <img
              src={a("arrow-a.svg")}
              alt="arrow backward"
              className="size-[25px] group-hover:brightness-0 group-hover:invert"
            />
          </button>
        </div>
      </div>
      <div dir="ltr" className="hidden items-center justify-center gap-4 lg:flex">
        {REVIEWS.map((_, k) => (
          <button
            key={k}
            aria-label={`رأي ${k + 1}`}
            onClick={() => setI(k)}
            className={`h-4 rounded-full transition-all ${k === i ? "w-5 bg-primary" : "w-4 bg-[#d6d6e8]"}`}
          />
        ))}
      </div>
    </Box>
  );
}
