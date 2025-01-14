import { IProductCard } from "@/components/homepage/Products";
import styles from "@/styles/productCard.module.scss";
import Image from "next/image";

const ProductCard = ({ image, title, text, subtext }: IProductCard) => {
  return (
    <div className={styles.productCard}>
      <div>
        <Image src={image} alt={title} width={60} height={60} />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.text}>{text}</p>
      {subtext ? <p className={styles.subtext}>{subtext}</p> : ""}
    </div>
  );
};

export default ProductCard;
