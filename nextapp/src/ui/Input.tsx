import Image from "next/image";
import styles from "@/styles/input.module.scss";

interface IInput {
  label: string;
  img?: string;
  placeholder: string;
  id?: string;
  type: string;
  width?: number;
  height?: number;
  alt?: string;
}

const Input = ({ img, placeholder, id, type, alt, label }: IInput) => {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <div>
        <input type={type} placeholder={placeholder} id={id} />
        {img ? (
          <Image src={img} alt={alt ? alt : ""} width={24} height={24} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Input;
