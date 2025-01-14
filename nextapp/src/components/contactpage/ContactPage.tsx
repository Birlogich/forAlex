"use client";
import { useState } from "react";
import ContactForm from "@/ui/contactpage/ContactForm";
import styles from "@/styles/contact/contact.module.scss";
import SuccessMessage from "@/ui/contactpage/SuccessMessage";

const Contactpage = () => {
  const [sentMes, isSentMes] = useState(false);

  console.log(sentMes);

  const sendRequest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isSentMes(true);
  };

  return (
    <section className={`${styles.contact} container`}>
      <div className="subtitleblock">
        <h2 className="subtitle">Reach Out to Us</h2>
        <p>
          Feel free to get in touch with us for any inquiries, assistance, or
          even just to say hello. Our team is ready to provide the support you
          need.
        </p>
      </div>
      {sentMes ? <SuccessMessage /> : <ContactForm onSubmit={sendRequest} />}
    </section>
  );
};

export default Contactpage;
