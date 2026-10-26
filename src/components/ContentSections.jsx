import Statement from "./Statement.jsx";
import ProblemSection from "./ProblemSection.jsx";
import ImagineSection from "./ImagineSection.jsx";
import WhySection from "./WhySection.jsx";
import HowSection from "./HowSection.jsx";
import OfferSection from "./OfferSection.jsx";
import Reviews from "./Reviews.jsx";
import CallToAction from "./CallToAction.jsx";
import Footer from "./Footer.jsx";

export default function ContentSections() {
  return (
    <>
      <Statement />
      <ProblemSection />
      <ImagineSection />
      <WhySection />
      <HowSection />
      <OfferSection />
      <Reviews />
      <CallToAction />
      <Footer />
    </>
  );
}
