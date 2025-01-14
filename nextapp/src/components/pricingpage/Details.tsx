import PricingCard from "@/ui/pricingpage/PricingCard";
import styles from "@/styles/pricingpage/details.module.scss";
import { IPricingCard } from "@/ui/pricingpage/PricingCard";

const priceCard: IPricingCard = {
  account: 1,
  data: 1,
  verif: 1,
  access: 1,
  pdf: 4,
  integ: 500,
};

const Details = () => {
  return (
    <div className={styles.details}>
      <div className="subtitleblock">
        <h2 className="subtitle">Standard pricing</h2>
      </div>
      <PricingCard {...priceCard} />
    </div>
  );
};

export default Details;
