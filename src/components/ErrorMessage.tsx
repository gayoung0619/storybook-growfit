
export interface IErrorMessageProps {
  children: string;
}
export const ErrorMessage = ({children}: IErrorMessageProps) => {
  return (
      <p className="absolute bottom-[-10px] text-xs text-error">{children}</p>
  )
}