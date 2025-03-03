interface IIconButtonProps {
  alt: string;
  iconPath: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}
export const IconButton = ({alt, iconPath, onClick}: IIconButtonProps) => {
  return (
      <button onClick={onClick}>
        <img src={iconPath} alt={alt} />
      </button>
  )
}