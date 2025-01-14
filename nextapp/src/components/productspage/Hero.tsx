import Image from "next/image";
import "@/app/globals.css";
import styles from "@/styles/productspage/hero.module.scss";
import { Stripes } from "@/ui/Stripes";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className="subtitleblock">
        <h2 className="subtitle">Access your customer’s billing data</h2>
        <p>
          Bill pay, verification, budgeting, lending, and more. The faster way
          to access your customer’s billing data, balance due, date due,
          historical PDF statements.
        </p>
      </div>
      <div>
        <Image
          src="/assets/images/productpage/billingData1.svg"
          alt="billing image"
          width={552}
          height={668}
        />
        <Image
          src="/assets/images/productpage/billingData2.svg"
          alt="billing image"
          width={552}
          height={668}
        />
      </div>
      <div className={styles.stripes}>
        <Stripes />
      </div>
    </div>
  );
};

export default Hero;
