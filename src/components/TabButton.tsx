import { MouseEventHandler } from "react";

interface ITagButtonProps {
  children: string,
  isChecked: boolean,
  onClick: MouseEventHandler<HTMLButtonElement>
}
export const TabButton = ({
                            onClick,
                            isChecked,
                            children
}: ITagButtonProps) => {
  const buttonStyle = isChecked? "border-bluegray-80" : "border-transparent"
  return <button className={`cursor-pointer text-base font-bold py-[12.5px] px-[11px] border-b-3 box-border ${buttonStyle}`} onClick={onClick}>{children}</button>
}