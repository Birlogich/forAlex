"use client";

import "@/app/globals.css";
import styles from "@/styles/homepage/products.module.scss";
import ProductCard from "@/ui/ProductCard";
import btn from "@/styles/button.module.scss";
import Link from "next/link";

export interface IProductCard {
  image: string;
  title: string;
  text: string;
  subtext?: string;
}

const productCardsArray: IProductCard[] = [
  {
    image: "/assets/images/productCards/tools.png",
    title: "Utility data access",
    text: "Biller data: bill balances, due date, PDF statements, power usage. Address verification, historical statements.",
  },
  {
    image: "/assets/images/productCards/globe.png",
    title: "Financial connection",
    text: "Connection to small banks and credit unions that are unavailable via well known providers. Custom data coverage such as interest rates, financial products, and other documents.",
    subtext: "This data can be added by request",
  },
  {
    image: "/assets/images/productCards/paper.png",
    title: "Public data",
    text: "Aggregate multiple data sources into a single point of access. Updated on demand. Government data, call reports, SEC data, business information, public databases, registration data.",
    subtext: "This data can be added by request",
  },
];

const Products = () => {
  return (
    <section className="container">
      <div className={styles.products}>
        <div className="subtitleblock">
          <h2 className="subtitle">Our Tailored Products</h2>
          <p>
            Discover tailored products that adapt to the ever-changing data
            landscape.
          </p>
        </div>
        <div>
          {productCardsArray.map((card, idx) => (
            <ProductCard {...card} key={idx} />
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
    </section>
  );
};

export default Products;
