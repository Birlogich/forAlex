"use client";

import "@/app/globals.css";
import styles from "@/styles/productspage/data.module.scss";
import btn from "@/styles/button.module.scss";
import { BenefitCard } from "@/ui/BenefitCard";
import Link from "next/link";

export interface IBenefitCard {
  image: string;
  text: string;
  subtext: string;
  bottomText?: string;
}

const dataCardsArray: IBenefitCard[] = [
  {
    image: "/assets/images/productpage/data/finance.svg",
    text: "Bill Pay & Personal Finance Management",
    subtext: `Provide bill presentation information - amount & date due to enable bill pay apps with a single place to view and pay all bills.
    Bill history to provide comparison data for one account, geographic or against similar households.
    Bill data for managing finances for personal or business for accurate planning and budgeting.`,
  },
  {
    image: "/assets/images/productpage/data/verification.svg",
    text: "Address Verification",
    subtext: `Low friction verification vs bank statements.
    Eliminate manual document review.
    Increased Accuracy for accounts with active usage.
    Limits abandonment with onboarding that takes minutes vs hours or days.`,
  },
  {
    image: "/assets/images/productpage/data/monitoring.svg",
    text: "Energy Monitoring",
    subtext: `With utility data, you can provide a day to day view of utilization. Gas, electric, water, etc.
    Ability to monitor and track daily changes as your utility reports them.
    Set up custom alerts for abnormal usage for your customer.
    Comparison data across multiple customers.`,
  },
  {
    image: "/assets/images/productpage/data/est.svg",
    text: "Accurate Utility Data for Solar Panel Estimation",
    subtext: `Linking your customer’s utility account allows you to:
    Provide the most accurate energy usage for each month.
    Ability to download PDF statements for any regulatory filings & contracts.
    Determine cost savings based on the number of panels installed.
    All this in a matter of minutes removing the need for the customer to send you their information.
    `,
  },
];

const Data = () => {
  return (
    <div className={styles.data}>
      <div className="subtitleblock">
        <h2 className="subtitle">Accurate Utility Data </h2>
        <p>
          Accurate utility data for solar panel estimation, energy usage
          insights, Statements for solar install applications. With your
          customer’s login, we can fetch information about their account (active
          vs closed), statements for payment history, power usage, etc. in a
          matter of minutes.
        </p>
      </div>
      <div className="benefitsRow">
        {dataCardsArray.map((data, idx) => (
          <BenefitCard {...data} key={idx} />
        ))}
      </div>
      <Link
        href="/contact"
        className={`${btn.btn}`}
        style={{ width: "18.75rem" }}
      >
        Contact us
      </Link>
    </div>
  );
};

export default Data;
