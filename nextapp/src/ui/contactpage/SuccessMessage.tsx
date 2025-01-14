import Image from "next/image";
import "@/app/globals.css";
import styles from "@/styles/contact/successMessage.module.scss";
import Link from "next/link";
import btn from "@/styles/button.module.scss";

const SuccessMessage = () => {
  return (
    <div className={`${styles.successMessage} boxShadowBorder`}>
      <Image
        src="/assets/images/contactpage/plane.svg"
        alt="message sent"
        width={200}
        height={200}
      />
      <Link href="/" title="Back to Homepage" className={btn.btn}>
        Back to Homepage
      </Link>
    </div>
  );
};

export default SuccessMessage;
