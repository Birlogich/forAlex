"use client";

import styles from "@/styles/customSelect.module.scss";
import "@/app/globals.css";
import Image from "next/image";
import { useState } from "react";

const CustomSelect = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={`${styles.customSelect}`}>
      <button
        className="customSelectButton"
        type="button"
        role="combobox"
        aria-labelledby="select button"
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-controls="select-dropdown"
        onClick={() => setActive(!active)}
      >
        <span>Please select</span>
      </button>
      <Image
        src="/assets/images/paymentpage/dropdown.svg"
        width={24}
        height={24}
        alt="dropdown"
        className={`${styles.dropdown} ${
          active ? `${styles.dropdown_active}` : `${styles.dropdown}`
        }`}
      />
      <ul
        className={`${styles.selectDropDown} ${
          active
            ? `${styles.selectDropDown_active}`
            : `${styles.selectDropDown}`
        }`}
      >
        <li>
          <input
            type="radio"
            id="usa"
            name="country"
            className={styles.input}
          />
          <Image
            src="/assets/images/paymentpage/icons/US.svg"
            width={24}
            height={16}
            alt="usaflag"
          />
          <label htmlFor="usa">United States</label>
        </li>
        <li>
          <input
            type="radio"
            id="germany"
            name="country"
            className={styles.input}
          />
          <Image
            src="/assets/images/paymentpage/icons/DE.svg"
            width={24}
            height={16}
            alt="usaflag"
          />
          <label htmlFor="germany">Germany</label>
        </li>
        <li>
          <input
            type="radio"
            id="france"
            name="country"
            className={styles.input}
          />
          <Image
            src="/assets/images/paymentpage/icons/FR.svg"
            width={24}
            height={16}
            alt="usaflag"
          />
          <label htmlFor="france">France</label>
        </li>
        <li>
          <input
            type="radio"
            id="moldova"
            name="country"
            className={styles.input}
          />
          <Image
            src="/assets/images/paymentpage/icons/MD.svg"
            width={24}
            height={16}
            alt="usaflag"
          />
          <label htmlFor="moldova">Moldova, Republic of</label>
        </li>
        <li>
          <input
            type="radio"
            id="ukraine"
            name="country"
            className={styles.input}
          />
          <Image
            src="/assets/images/paymentpage/icons/UA.svg"
            width={24}
            height={16}
            alt="usaflag"
          />
          <label htmlFor="ukraine">Ukraine</label>
        </li>
        <li>
          <input type="radio" id="uk" name="country" className={styles.input} />
          <Image
            src="/assets/images/paymentpage/icons/GB.svg"
            width={24}
            height={16}
            alt="usaflag"
          />
          <label htmlFor="uk">United Kingdom</label>
        </li>
      </ul>
    </div>
  );
};

export default CustomSelect;
