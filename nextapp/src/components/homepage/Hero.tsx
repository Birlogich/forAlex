"use client";
import "@/app/globals.css";
import Image from "next/image";
import styles from "@/styles/homepage/hero.module.scss";
import { Stripes } from "@/ui/Stripes";
import useWindowWidth from "../customHooks/useWindowWidth";
import Link from "next/link";
import btn from "@/styles/button.module.scss";

export const Hero = () => {
  const width = useWindowWidth();

  return (
    <section className={styles.hero}>
      <div className="container">
        <h1>Unleash web data. Behind doors and beyond limits.</h1>
        <p>Elevate your data experience with our smart, adaptive solutions.</p>
        <div>
          <Link href="/products" className={`${btn.btn}`}>
            Access Biller Data
          </Link>
          <Link className={`${btn.btn_trans}`} href="/contact">
            Contact us
          </Link>
        </div>
        <Image
          src="/assets/images/scheme.webp"
          alt="strikd scheme"
          width={1118}
          height={692}
        />
      </div>
      {width && width <= 360 ? (
        ""
      ) : (
        <>
          <div className={styles.stars}></div>
          <div className={styles.stripes}>
            <Stripes />
          </div>
        </>
      )}
    </section>
  );
};
