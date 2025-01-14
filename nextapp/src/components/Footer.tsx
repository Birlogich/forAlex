import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/footer.module.scss";

const Footer = () => {
  return (
    <footer className="container">
      <div className={styles.footer}>
        <div className={styles.footerRow}>
          <div>
            <h3>
              WHERE DATA FINDS <br /> STRUCTURE
            </h3>
            <Image
              src="/assets/images/strukd.svg"
              alt="logo"
              width={309}
              height={88}
            />
          </div>
          <div>
            <div>
              <p>Navigation</p>
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/developers">Developers</Link>
              <Link href="/contact">Contact us</Link>
              <Link href="/about">About us</Link>
            </div>
            <div>
              <p>Legal Info</p>
              <Link href="/terms">Terms of Sevices</Link>
              <Link href="/privacy">End-User Data Privacy</Link>
            </div>
            <div>
              <p>Contacts</p>
              <a href="mailto: support@strukd.com" className={styles.follow}>
                support@strukd.com
              </a>
              <p>Follow us</p>
              <div className={styles.social}>
                <Link href="https://linkedin.com">
                  <Image
                    src="/assets/images/linkedin.svg"
                    alt="linkedin"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="https://twitter.com">
                  <Image
                    src="/assets/images/twitter.svg"
                    alt="twitter"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="https://youtube.com">
                  <Image
                    src="/assets/images/youtube.svg"
                    alt="youtube"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>© 2024 All Rights Reserved, Strukd Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
