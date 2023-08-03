import classes from "./Input.module.css";

/**
 * This is a reusable Input component in TypeScriptReact.
 * It renders an input field with the specified configurations.
 *
 * @param type - The type of input field (e.g., text, password, email)
 * @param placeholder - The placeholder text for the input field
 * @param onChange - The function called when the input field value changes
 *
 * @returns A div element with a class of 'input' and an input field
 */


type InputProps = {
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  onChange,
}) => {
  return (
    <div className={classes.input}>
      <input placeholder={placeholder} onChange={onChange} type={type} />
    </div>
  );
};
