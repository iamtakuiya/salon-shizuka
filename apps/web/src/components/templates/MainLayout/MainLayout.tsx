import Header from "@/components/organisms/Header/Header"
import Hero from "@/components/organisms/Hero/Hero";
import styles from "./MainLayout.module.scss";

// Placeholder — assemble all section organisms here as you build them
export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
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