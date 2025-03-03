import {IconButton} from "./IconButton.tsx";

export interface IDefaultTextFieldProps {
  iconAlt: string;
  errorMessage: string;
  iconPath: string;
  onIconClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isError: boolean;
}
import {ErrorMessage} from "./ErrorMessage.tsx";
export const DefaultTextField = ({
                                   errorMessage,
                                   iconAlt,
                                   iconPath,
                                   onIconClick,
                                   placeholder,
                                   onChange,
                                   value,
                                   isError
                                 }: IDefaultTextFieldProps) => {
  return (
      <div>
        <input
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
        <IconButton
            alt={iconAlt}
            iconPath={iconPath}
            onClick={onIconClick}
        />
        {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
  )
}