
export interface IStepBarProps {
  width: string;
}
export const StepBar = ({ width }: IStepBarProps) => {
  return (
      <div className="relative w-full h-[4px] bg-[#F7F7F7]">
        <div className="absolute block bg-blue-70 h-[100%]" style={{ width }}></div>
      </div>
  )
}