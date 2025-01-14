import "@/app/globals.css";
import styles from "@/styles/productspage/providers.module.scss";
import { ProvidersBlock } from "@/ui/productspage/providers/ProvidersBlock";

const Providers = () => {
  return (
    <section className={styles.providers}>
      <div className="subtitleblock">
        <h2 className="subtitle">Biller Providers Details</h2>
        <p>
          We connect you to billers in different geographics. We’re growing our
          coverage! Contact us if you would like access to utilities that we
          don’t currently cover.
        </p>
      </div>
      <ProvidersBlock />
    </section>
  );
};

export default Providers;
