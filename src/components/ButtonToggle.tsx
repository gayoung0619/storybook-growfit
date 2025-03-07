import { MouseEventHandler } from 'react';
interface ButtonToggleProps {
  isOn: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const ButtonToggle = ({
                         isOn,
                         onClick = () => {}
}: ButtonToggleProps) => {
  return (
    <button
      type="button"
      className={`
        relative 
        w-[50px] h-[30px] 
        rounded-[100px] 
        transition-colors duration-500 ease-in-out
        ${isOn ? "bg-[#222222]" : "bg-[#E5E5E5]"}
      `}
      onClick={onClick}
    >
      <span
          className={`
            absolute 
            top-[4px] 
            left-[5px] 
            inline-block 
            w-[21px] h-[21px] 
            bg-white rounded-full transition-transform duration-500 ease-in-out
          ${isOn ? "translate-x-[16px]" : "translate-x-0"}
          `}
      ></span>
    </button>
  );
};
