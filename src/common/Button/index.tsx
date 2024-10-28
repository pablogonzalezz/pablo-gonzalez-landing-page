import { ButtonProps } from "../types";
import "./styles.scss";

export const Button = ({ children, onClick, link }: ButtonProps) =>
  link ? (
    <a href={link} target="_blank" className="styled-button" onClick={onClick}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className="styled-button">
      {children}
    </button>
  );
