import Header from "@/components/06.organisms/01.Header/Header"
import Hero from "@/components/06.organisms/02.Hero/Hero";
import styles from "./MainLayout.module.scss";
import HospitalityText from "@/components/06.organisms/03.HospitalitySection/HospitalityText";
import ConceptSection from "@/components/06.organisms/04.ConceptSection/ConceptSection";
import {SalonGallerySection } from "@/components/06.organisms/05.SalonGallerySection/SalonGallerySection";
import OwnerSection from "@/components/06.organisms/07.OwnerSection/OwnerSection";
import { StyleGuideTeaser } from "@/components/06.organisms/08.StyleGuideTeaser/StyleGuideTeaser";
import MenuSection from "@/components/06.organisms/09.MenuSection/MenuSection";

// Placeholder — assemble all section organisms here as you build them
export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <HospitalityText />
        <ConceptSection />
        <SalonGallerySection />
        <OwnerSection />
        <StyleGuideTeaser />
        <MenuSection />
        <br />
        <hr />
        voice
        newsletter
        reservation
        hours and map
        footer
      </main>
    </>
  );
};

