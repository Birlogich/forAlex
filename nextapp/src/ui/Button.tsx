import styles from "@/styles/button.module.scss";

export interface Button {
  title: string;
  onClick?: () => void;
  transparent: boolean;
}

export default function Button({ title, onClick, transparent }: Button) {
  return (
    <button
      onClick={onClick}
      className={transparent ? styles.btn_trans : styles.btn}
    >
      {title}
    </button>
  );
}
