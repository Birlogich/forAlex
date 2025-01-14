"use client";

import Button from "@/ui/Button";
import "@/app/globals.css";
import styles from "@/styles/pricingpage/paymentpage/paymentpage.module.scss";
import Input from "@/ui/Input";
import CustomSelect from "@/ui/CustomSelect";
import "@/app/globals.css";

const icon = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.625 8.625L3.375 3.375"
      stroke="#BCB6E9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.625 3.375L3.375 8.625"
      stroke="#BCB6E9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PaymentPage = () => {
  return (
    <section className={`${styles.paymentpage} container`}>
      <div className="subtitleblock">
        <h2 className="subtitle">Pay As You Go</h2>
      </div>
      <form>
        <div className={styles.form}>
          <Input
            img="/assets/images/paymentpage/card.svg"
            label="Card number"
            type="number"
            id="card"
            placeholder="Enter your card number"
            alt="cardIcon"
            width={24}
            height={24}
          />
          <div className={styles.formSectionRow}>
            <Input
              img="/assets/images/paymentpage/calendar.svg"
              label="Expiration date"
              type="date"
              id="date"
              placeholder="MM/YY"
              alt="cardIcon"
              width={24}
              height={24}
            />
            <Input
              img="/assets/images/paymentpage/cvv.svg"
              label="CVV"
              type="number"
              id="cvv"
              placeholder="123"
              alt="cardIcon"
              width={24}
              height={24}
            />
          </div>
          <Input
            label="Card holder name"
            type="text"
            id="holder"
            placeholder="Enter your card holder name"
          />
          <div className={`${styles.formSectionRow_bottom}`}>
            <div className={styles.formSection}>
              <label>Country or region</label>
              <CustomSelect />
            </div>
            <Input
              label="ZIP Code"
              type="number"
              id="zip"
              placeholder="123456"
            />
          </div>
        </div>
        <div className={`${styles.summary} boxShadowBorder`}>
          <p>Order Summary</p>
          <div>
            <div className="flex gap-y-1">
              <span>18</span>
              {icon}
              <span>12 month</span>
            </div>
            <span>$216</span>
          </div>
          <div>
            <div className={styles.summarySection}>
              <p>API requests</p>
              <p>75</p>
            </div>
            <p>Per month</p>
          </div>
          <div>
            <div className={styles.summarySection}>
              <p>Login attempts</p>
              <p>75</p>
            </div>
            <p>Per month</p>
          </div>
          <div>
            <div className={styles.summarySection}>
              <p>Successful links</p>
              <p>100</p>
            </div>
            <p>Per month</p>
          </div>
          <div>
            <div className={styles.summarySection}>
              <p>Statements fetched</p>
              <p>85</p>
            </div>
            <p>Per month</p>
          </div>
          <div>
            <p>Total</p>
            <span>$216</span>
          </div>
          <Button
            title="Get started"
            transparent={false}
            onClick={() => console.log("get started")}
          />
          <div className={styles.reminder}>
            <p>Next payment on 12.28.24</p>
            <p>
              Your plan will renew and bill annually or monthly unless you make
              changes. Yoy may cancel your subscription at any time
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default PaymentPage;
