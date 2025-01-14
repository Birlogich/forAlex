"use client";

import styles from "@/styles/pricingpage/hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className="subtitleblock">
        <h2 className="subtitle">Find the Strukd plan that’s right for you</h2>
        <p>
          Whether you’re an individual creator or part of a team, choose the
          perfect plan to bring your ideas to life. Get started today!
        </p>
      </div>
    </div>
  );
};

export default Hero;
