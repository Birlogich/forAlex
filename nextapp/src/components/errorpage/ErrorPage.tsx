import styles from "@/styles/errorpage/errorPage.module.scss";
import btn from "@/styles/button.module.scss";
import Link from "next/link";
import Image from "next/image";

const ErrorPage = () => {
  return (
    <section className={`${styles.errorPage} container`}>
      <div className="boxShadowBorder">
        <div>
          <h2>Opps! Something went wrong...</h2>
          <p>
            Don&apos;t worry, your journey through the data universe
            doesn&apos;t end here. Here&apos;s what you can do next:
          </p>
        </div>
        <Link href="/" title="Back to Homepage" className={btn.btn}>
          Back to Homepage
        </Link>
        <Image
          src="assets/images/notfound.svg"
          alt="not found"
          width={479}
          height={424}
        />
      </div>
    </section>
  );
};

export default ErrorPage;
