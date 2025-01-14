"use client";

import Link from "next/link";
import styles from "@/styles/pricingpage/billingcard.module.scss";
import btn from "@/styles/button.module.scss";

export interface IBillingCard {
  bestvalue?: boolean;
  name: string;
  price?: string;
  custom?: boolean;
  benefits: string[];
  button: string;
  onClick?: () => void;
  cardNumber?: number;
  activeCard?: number;
}

const BilingCard = ({
  bestvalue,
  name,
  price,
  benefits,
  button,
  custom,
  onClick,
  cardNumber,
  activeCard,
}: IBillingCard) => {
  return (
    <div
      className={
        activeCard === cardNumber
          ? `${styles.billingcard} ${styles.billingcard_active}`
          : styles.billingcard
      }
      id={name}
      onClick={onClick}
    >
      {bestvalue && activeCard === cardNumber ? <span>BEST VALUE</span> : ""}
      <div className={styles.cardtitle}>
        <p>{name}</p>
        {custom ? "" : <p className={styles.permonth}>per month</p>}
        <p className={styles.price}>{price}</p>
      </div>
      <div className={styles.benefits}>
        <p>What you get:</p>
        <div>
          {benefits.map((benefit, idx) => {
            return (
              <p className={styles.benefit} key={idx}>
                {benefit}
              </p>
            );
          })}
        </div>
      </div>
      {name === "Enterprise" ? (
        <Link
          className={`${btn.btn_trans}`}
          style={{ width: "100%" }}
          href={{
            pathname: "/contact",
          }}
          onClick={() => console.log("123")}
        >
          {button}
        </Link>
      ) : (
        <Link
          className={`${btn.btn_trans}`}
          style={{ width: "100%" }}
          href={{
            pathname: "/pricing/payment",
          }}
          onClick={() => console.log("123")}
        >
          {button}
        </Link>
      )}
    </div>
  );
};

export default BilingCard;
