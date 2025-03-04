import {IconButton} from "./IconButton.tsx";

export interface IDefaultSearchBoxProps {
  id: string;
  iconAlt: string;
  iconPath: string;
  onIconClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
import {useState} from "react";
export const DefaultSearchBox = ({
  id,
  iconAlt,
  iconPath,
  onIconClick,
  placeholder,
  onChange,
  value,
}: IDefaultSearchBoxProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor= isFocused ? 'border-blue-50' : value ? 'border-gray-30' : 'border-gray-20'

  return (
      <div>
        <div
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`relative flex justify-between text-base border rounded-[100px] py-[11px] px-[16px] box-border ${borderColor} min-w-[354px]`}>
          <input
              id={id}
              type="text"
              placeholder={placeholder}
              onChange={onChange}
              value={value}
              className="outline-transparent"
          />
          <IconButton
              alt={iconAlt}
              iconPath={iconPath}
              onClick={onIconClick}
          />
        </div>
      </div>
  )
}