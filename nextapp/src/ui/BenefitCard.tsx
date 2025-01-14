import { IBenefitCard } from "@/components/homepage/Benefits";
import styles from "@/styles/benefitCard.module.scss";
import Image from "next/image";

export const BenefitCard = ({
  image,
  text,
  subtext,
  bottomText,
}: IBenefitCard) => {
  return (
    <div className={styles.benefitCard}>
      <div>
        <Image src={image} alt="benefit" width={400} height={400} />
      </div>
      <div>
        <p>{text}</p>
        <p>{subtext}</p>
        {bottomText ? <p>{bottomText}</p> : ""}
      </div>
    </div>
  );
};
