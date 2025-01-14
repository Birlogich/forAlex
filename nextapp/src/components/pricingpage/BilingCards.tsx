"use client";

import { useState } from "react";
import styles from "@/styles/pricingpage/billingcards.module.scss";
import BilingCard, { IBillingCard } from "@/ui/pricingpage/BilingCard";
import SwitchButton from "@/ui/SwitchButton";

const BilingCards = () => {
  const [activeCard, setActiveCard] = useState(1);

  const [period, setPeriod] = useState(false);

  const arrBilingCards: IBillingCard[] = [
    {
      name: "Pay As You Go",
      price: period === false ? "$20" : "$240",
      benefits: [
        "Standard pricing (see below)",
        "No upfront costs",
        "No monthly minimums",
        "No commitments",
      ],
      button: "Choose plan",
      cardNumber: 0,
    },
    {
      bestvalue: true,
      name: "Business",
      price: period === false ? "$79" : "$950",
      benefits: [
        "Monthly minimum of $1,000 - PrePaid",
        "10% discount of standard pricing (see below)",
        "Additional data support available",
        "No contracts, cancel anytime",
      ],
      button: "Choose plan",
      cardNumber: 1,
    },
    {
      name: "Enterprise",
      price: "Custom",
      custom: true,
      benefits: [
        "Standard pricing (see below)",
        "Dedicated support via Slack",
        "Custom onboarding & SLA",
        "Custom development available",
      ],
      button: "Contact us",
      cardNumber: 2,
    },
  ];

  const handleCardClick = (cardId: number) => {
    setActiveCard(cardId);
  };

  return (
    <div className={styles.billingcardsWrapper}>
      <SwitchButton onClick={() => setPeriod(!period)} period={period} />
      <div className={styles.billingcards}>
        {arrBilingCards.map((card, idx) => (
          <BilingCard
            {...card}
            key={idx}
            onClick={() => handleCardClick(idx)}
            activeCard={activeCard}
          />
        ))}
      </div>
    </div>
  );
};

export default BilingCards;
