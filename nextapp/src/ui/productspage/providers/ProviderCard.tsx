import Image from "next/image";
import { IProviderCard } from "./ProvidersBlock";
import styles from "@/styles/productspage/providerCard.module.scss";

const ProviderCard = ({ title, image, count }: IProviderCard) => {
  return (
    <div className={styles.providerCard}>
      <p>{title}</p>
      <Image src={image} alt={title} width={137} height={137} />
      <p className={styles.count}>{count}</p>
      <span>customers</span>
    </div>
  );
};

export default ProviderCard;
