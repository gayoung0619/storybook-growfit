
export interface ILabelProps {
  htmlFor: string;
  children: string;
}
export const Label = ({htmlFor, children}: ILabelProps) => {
  return (
      <label className="text-xs" htmlFor={htmlFor}>{children}</label>
  )
}