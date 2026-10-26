import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ContentSections from "./components/ContentSections.jsx";
import PageSkeleton from "./components/PageSkeleton.jsx";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    let fallbackTimer;
    let minimumTimer;
    const startedAt = Date.now();

    const revealPage = () => {
      if (cancelled) return;
      window.clearTimeout(fallbackTimer);
      minimumTimer = window.setTimeout(
        () => setIsLoading(false),
        Math.max(0, 500 - (Date.now() - startedAt)),
      );
    };

    const imagesReady = Promise.all(
      Array.from(document.images, (image) =>
        image.complete
          ? Promise.resolve()
          : new Promise((resolve) => {
              image.addEventListener("load", resolve, { once: true });
              image.addEventListener("error", resolve, { once: true });
            }),
      ),
    );
    const pageReady =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise((resolve) => {
            window.addEventListener("load", resolve, { once: true });
          });

    fallbackTimer = window.setTimeout(revealPage, 10000);
    Promise.all([pageReady, imagesReady]).then(revealPage);

    return () => {
      cancelled = true;
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(minimumTimer);
    };
  }, []);

  return (
    <div
      dir="rtl"
      className={`bg-white font-sans text-heading antialiased ${isLoading ? "page-content-loading" : ""}`}
    >
      {isLoading && <PageSkeleton />}
      <Header />
      <Hero />
      <ContentSections />
    </div>
  );
}
