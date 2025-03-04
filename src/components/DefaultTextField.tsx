import {IconButton} from "./IconButton.tsx";

export interface IDefaultTextFieldProps {
  id: string;
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
import {useState} from "react";
export const DefaultTextField = ({
  id,
  errorMessage,
  iconAlt,
  iconPath,
  onIconClick,
  placeholder,
  onChange,
  value,
  isError
}: IDefaultTextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor= isFocused ? 'border-blue-50' : value ? 'border-gray-30' : 'border-gray-20'

  return (
      <div>
        <div
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`relative flex justify-between text-base border rounded-[4px] py-[11px] px-[16px] box-border ${borderColor} min-w-[335px]`}>
          <input
              id={id}
              type="text"
              placeholder={placeholder}
              onChange={onChange}
              value={value}
              className="outline-transparent"
          />
          {!!value && (
              <IconButton
                  alt={iconAlt}
                  iconPath={iconPath}
                  onClick={onIconClick}
              />
          )}
        </div>

        {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
  )
}