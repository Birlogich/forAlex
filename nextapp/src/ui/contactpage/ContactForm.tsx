import Button from "../Button";
import styles from "@/styles/contact/contactForm.module.scss";
import "@/app/globals.css";

interface IContactForm {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ContactForm = ({ onSubmit }: IContactForm) => {
  const handleClick = () => {};
  return (
    <>
      <form
        className={`${styles.contactForm} boxShadowBorder`}
        onSubmit={onSubmit}
      >
        <div>
          <label>Email</label>
          <input type="email" placeholder="Enter your email here" />
        </div>
        <div>
          <label>Message</label>
          <textarea placeholder="Enter your message here" />
        </div>
        <Button title="Send" transparent={false} onClick={handleClick} />
      </form>
    </>
  );
};

export default ContactForm;
