import Header from "@/components/organisms/01.Header/Header"
import Hero from "@/components/organisms/02.Hero/Hero";
import styles from "./MainLayout.module.scss";
import HospitalityText from "@/components/organisms/03.HospitalitySection/HospitalityText";
import ConceptSection from "@/components/organisms/04.ConceptSection/ConceptSection";
import GallerySlider from "@/components/organisms/05.GallerySlider/GallerySlider";

// Placeholder — assemble all section organisms here as you build them
export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <HospitalityText />
        <ConceptSection />
        <GallerySlider />

        <br />
        <hr />
        owner
        style
        menu
        voice
        newsletter
        reservation
        hours and map
        footer
      </main>
    </>
  );
};