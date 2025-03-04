import {IconButton} from "./IconButton.tsx";

export interface IDefaultTextTextAreaProps {
  id: string;
  name: string;
  errorMessage: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  isError: boolean;
  count: string;
  limit: string
}
import {useState} from "react";
import {CharacterCount} from "./CharacterCount.tsx";
export const DefaultTextArea = ({
  id,
  name,
  placeholder,
  onChange,
  value,
  isError,
  count,
  limit
}: IDefaultTextTextAreaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor= isFocused ? 'border-blue-50' : value ? 'border-gray-30' : 'border-gray-20'

  return (
      <div
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`relative flex justify-between text-base border rounded-[4px] py-[11px] px-[16px] box-border ${borderColor} min-w-[335px]`}>
        <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className="outline-transparent w-full h-full resize-none"
        />
        <CharacterCount count={count} limit={limit} />
      </div>
  )
}