"use client";

import "../../app/globals.css";
import styles from "../../styles/homepage/benefits.module.scss";
import btn from "@/styles/button.module.scss";
import { BenefitCard } from "@/ui/BenefitCard";
import Link from "next/link";

export interface IBenefitCard {
  image: string;
  text: string;
  subtext: string;
  bottomText?: string;
}

const benefitCardsArray: IBenefitCard[] = [
  {
    image: "/assets/images/benefitCards/data.svg",
    text: "Access unstructured data",
    subtext: `80% of data is unstructured and difficult access. 
    Strukd provides access to data in those cases where there’s no API. 
    Strukd is not just a tool; it’s a treasure trove for developers seeking to unlock the full potential of their data.`,
    bottomText: `Our platform empowers you to delve into the depths of data, retrieve the most relevant insights, 
    and leverage them to drive innovation and decision-making.`,
  },
  {
    image: "/assets/images/benefitCards/integration.svg",
    text: "Seamless integration",
    subtext: `We do the dirty work so that you can focus on your core business. Data is fragmented and difficult to access.
    In addition to building integrations to aggregate data, constant maintenance and refresh is needed to keep things up to date.`,
    bottomText: `Strukd provides the access and maintenance so that you build once to our platform and we handle the maintenance and upkeep to ensure that your 
    data is consistently refreshed.`,
  },
  {
    image: "/assets/images/benefitCards/platform.svg",
    text: "Provider agnostic platform",
    subtext: `Our platform is built to provide access to any provider, website, and infrastructure. Instead of building scrappers to access external data,`,
    bottomText: `Strukd provides a single integration to access data from all the providers that you need. Adding additional data from different providers will not require 
    additional developer efforts.`,
  },
  {
    image: "/assets/images/benefitCards/developer.svg",
    text: "Developer first",
    subtext: `We focus on simplicity and focus on quick uptime. Building data access should not be your core focus.
    We believe data should be easily accessible so that developers can focus on building innovations around their customers and use cases.`,
    bottomText: `Developers need access to easy to use APIs that allow them to be productive in a matter of minutes and days.`,
  },
  {
    image: "/assets/images/benefitCards/ai.svg",
    text: "AI powered",
    subtext: `We use AI to detect and fix access and data problems so that human intervention is minimized or not required.
    We’ve built our platform so that we can use AI to address any changes in provider’s data and website so that it minimizes downtime and improves business continuity.`,
  },
  {
    image: "/assets/images/benefitCards/pricing.svg",
    text: "Simple transparent pricing.",
    subtext: `We want developers to be successful and innovate with our platform. We offer a simple and transparent pricing so that you can get started
    at any stage of your business.`,
    bottomText: `As you grow, we can work with you to provide dedicated customer support via custom pricing.
    If you have different data needs, Strukd can work with you to add a bespoke solution. We want you to succeed!`,
  },
];

const Benefits = () => {
  return (
    <div className="container">
      <div className={styles.benefits}>
        <div className="subtitleblock">
          <h2 className="subtitle">Why Strukd?</h2>
          <p>
            At Strukd, we don’t just meet expectations; we redefine them. Our
            platform is designed to adapt to your unique data challenges,
            ensuring that every solution is a step towards the future of data
            excellence.
          </p>
        </div>
        <div className="benefitsRow">
          {benefitCardsArray.map((benefit, idx) => (
            <BenefitCard {...benefit} key={idx} />
          ))}
        </div>
        <Link
          href="/products"
          className={`${btn.btn}`}
          style={{ width: "18.75rem" }}
        >
          Access Biller Data
        </Link>
      </div>
    </div>
  );
};

export default Benefits;
