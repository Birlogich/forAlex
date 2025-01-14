import styles from "@/styles/pricingpage/pricingcard.module.scss";

export interface IPricingCard {
  account: number;
  data: number;
  verif: number;
  access: number;
  pdf: number;
  integ: number;
}

const PricingCard = ({
  account,
  data,
  verif,
  access,
  pdf,
  integ,
}: IPricingCard) => {
  return (
    <div className={styles.pricingcard}>
      <div className={styles.cardrow}>
        <div>
          <p>Account linking</p>
          <p>account balance, due date, biller-specific metadara</p>
        </div>
        <p>{`$${account}`}</p>
      </div>
      <div className={styles.cardrow}>
        <div>
          <p>Data refresh</p>
          <p>refreshes data from a linked account</p>
        </div>
        <p>{`$${data}`}</p>
      </div>
      <div className={styles.cardrow}>
        <div>
          <p>Verification</p>
          <p>verify name and/or address against biller records</p>
        </div>
        <p>{`$${verif}`}</p>
      </div>
      <div className={styles.cardrow}>
        <div>
          <p>PII Access</p>
          <p>legal name, address, phone, email, etc.</p>
        </div>
        <p>{`$${access}`}</p>
      </div>
      <div className={styles.cardrow}>
        <div>
          <p>Access a PDF statement</p>
          <p>per statement, per account</p>
        </div>
        <p>{`$${pdf}`}</p>
      </div>
      <div className={styles.cardrow}>
        <div>
          <p>Custom site integration</p>
          <p>Cuatom solutions for unique needs, priced by complexity</p>
        </div>
        <p>{`$${integ}+`}</p>
      </div>
    </div>
  );
};

export default PricingCard;
