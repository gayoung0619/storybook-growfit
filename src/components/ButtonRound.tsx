import {MouseEventHandler} from 'react';
interface IButtonRoundProps {
  isDisabled: boolean;
  isPressed: boolean;
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>
}
export const ButtonRound = ({
                              isPressed,
                              isDisabled,
                              label,
                              onClick = () => {}
}: IButtonRoundProps) => {
  const pressedStyle = "text-white bg-bluegray-80";
  const disabledStyle = "disabled:text-white disabled:bg-gray-10"
  return (
    <button
      type="button"
      className={`
        rounded-[100px]
        py-[3px]
        px-[12px]
        text-black
        border
        border-gray-10
        ${isPressed ? pressedStyle : ""}  // 눌렸을 때 스타일 추가
        ${disabledStyle}
      `}
      disabled={isDisabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
