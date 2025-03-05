import { MouseEventHandler } from 'react';

type ButtonSize =  'Large' | 'Small' | 'Xsmall';
interface ButtonProps {
  size:  ButtonSize;
  isDisabled: boolean;
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>
}
const Large = "py-[13px] px-[20px] text-base text-black border border-gray-20 rounded-[8px]";
const Small = "py-[12px] px-[16px] text-sm text-white bg-[#4D5159] rounded-[8px]";
const Xsmall = "py-[4px] px-[12px] text-sm text-white bg-[#4D5159] rounded-[100px]";

const buttonSize: Record<ButtonSize, string> = {
  Large,
  Small,
  Xsmall
}

export const Button = ({
                         size,
                         isDisabled,
                         label,
                         onClick = () => {}
}: ButtonProps) => {
  const disabledStyle = "disabled:text-white disabled:bg-gray-10 disabled:border-none"
  return (
    <button
      type="button"
      className={`
        box-border
        ${buttonSize[size]}
        ${disabledStyle}
      `}
      disabled={isDisabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
