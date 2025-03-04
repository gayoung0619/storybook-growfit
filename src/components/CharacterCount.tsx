
export interface IErrorCharacterCountProps {
  count: string;
  limit: string;
}
export const CharacterCount = ({count, limit}: IErrorCharacterCountProps) => {
  return (
      <span className="absolute bottom-[-18px] right-0 w-max text-xs">{count}/{limit}</span>
  )
}