import BilingCards from "./BilingCards";
import Details from "./Details";
import Hero from "./Hero";
import styles from "@/styles/pricingpage/pricingpage.module.scss";

const PricingPage = () => {
  return (
    <section className={`${styles.pricingpage} container`}>
      <Hero />
      <BilingCards />
      <Details />
    </section>
  );
};

export default PricingPage;
