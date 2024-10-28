import { withTranslation } from "react-i18next";
import { Label } from "../TextArea/styles";
import { InputProps } from "../types";

const Input = ({ name, placeholder, onChange, t }: InputProps) => (
  <div>
    <Label htmlFor={name}>{t(name)}</Label>
    <input
      placeholder={t(placeholder)}
      name={name}
      id={name}
      onChange={onChange}
    />
  </div>
);

export default withTranslation()(Input);
