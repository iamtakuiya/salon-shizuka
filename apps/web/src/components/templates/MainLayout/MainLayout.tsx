import Header from "@/components/organisms/01.Header/Header"
import Hero from "@/components/organisms/02.Hero/Hero";
import styles from "./MainLayout.module.scss";
import HospitalityText from "@/components/organisms/03.HospitalitySection/HospitalityText";

// Placeholder — assemble all section organisms here as you build them
export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <HospitalityText />

        <br />
        <hr />
        concept
        gallery
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