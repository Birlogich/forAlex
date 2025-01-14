"use client";
import "@/app/globals.css";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/header.module.scss";
import Button from "@/ui/Button";
import { useEffect, useRef, useState } from "react";
import "@/app/globals.css";
import useWindowWidth from "./customHooks/useWindowWidth";

const burger = (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.75 15.5H28.25"
      stroke="#E8E6F7"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M11.75 20H28.25"
      stroke="#E8E6F7"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M11.75 24.5H28.25"
      stroke="#E8E6F7"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </svg>
);

const close = (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 14L25.6673 25.6673"
      stroke="#E8E6F7"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M14 26L25.6673 14.3327"
      stroke="#E8E6F7"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </svg>
);

const Header = () => {
  const width = useWindowWidth();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [activeMenu, setActiveMenu] = useState(false);

  useEffect(() => {
    const header = menuRef.current;
    const menu = header?.querySelector("nav");
    if (activeMenu === true) {
      menu?.classList.add("active");
    } else {
      menu?.classList.remove("active");
    }
  }, [activeMenu]);

  useEffect(() => {
    const header = menuRef.current;
    const menu = header?.querySelector("nav");
    const links = menu?.querySelectorAll("a");
    links?.forEach((link) => {
      if (link) link.addEventListener("click", () => setActiveMenu(false));
    });
  }, []);

  return (
    <div className="container">
      {width && width >= 600 ? (
        <header className={styles.header} ref={menuRef}>
          <Link href="/">
            <Image
              src="/assets/images/strukd.svg"
              alt="logo"
              priority={true}
              width={152}
              height={40}
            />
          </Link>
          <nav className="navigation">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/developers">Developers</Link>
            <Link href="/about">About us</Link>
            <Link href="/contact">Contact us</Link>
          </nav>
          <div className={styles.btns}>
            {width && width >= 500 ? (
              <Button
                title="Log in"
                onClick={() => console.log("click")}
                transparent={false}
              />
            ) : (
              ""
            )}
            <button
              className={styles.burger}
              onClick={() => setActiveMenu(!activeMenu)}
            >
              {activeMenu ? close : burger}
            </button>
          </div>
        </header>
      ) : (
        <header
          className={`${styles.header} ${styles.header_mobile}`}
          ref={menuRef}
        >
          <div className={styles.row}>
            <Link href="/">
              <Image
                src="/assets/images/strukd.svg"
                alt="logo"
                priority={true}
                width={152}
                height={40}
              />
            </Link>
            <div className={styles.btns}>
              <button
                className={styles.burger}
                onClick={() => setActiveMenu(!activeMenu)}
              >
                {activeMenu ? close : burger}
              </button>
            </div>
          </div>
          <nav className="navigation">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/developers">Developers</Link>
            <Link href="/about">About us</Link>
            <Link href="/contact">Contact us</Link>
            <Button
              title="Log in"
              onClick={() => console.log("click")}
              transparent={false}
            />
          </nav>
        </header>
      )}
    </div>
  );
};

export default Header;
