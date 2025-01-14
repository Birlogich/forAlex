import styles from "@/styles/switchbutton.module.scss";

interface SwitchButton {
  onClick: () => void;
  period: boolean;
}

const SwitchButton = ({ onClick, period }: SwitchButton) => {
  return (
    <div
      className={`${styles.switchbutton} ${
        period === false ? styles.togglebtnmonthly : styles.togglebtnyearly
      } `}
    >
      <button onClick={onClick}>per month</button>
      <button onClick={onClick}>per year</button>
    </div>
  );
};

export default SwitchButton;
