import {IconButton} from "./IconButton.tsx";

interface ITitleNavigationBarProps {
  showBackButton: boolean;
  showCloseButton: boolean;
  showTitle: boolean;
  title?: string;
  onBackButtonClick?: React.MouseEvent<HTMLButtonElement>;
  onCloseButtonClick?: React.MouseEvent<HTMLButtonElement>;
}

import backIcon from "../assets/icon/ic-back-arrow.svg"
import closeIcon from "../assets/icon/ic-close.svg"

export const TitleNavigationBar = ({
                                showBackButton,
                                showCloseButton,
                                showTitle,
                                title = "",
                                onBackButtonClick = () => {},
                                onCloseButtonClick = () => {},
                              }: ITitleNavigationBarProps) => {
  return (
      <div className="flex items-center justify-between py-[18px] px-[22.5px]">
        {/*뒤로가기*/}
        {showBackButton && (
            <IconButton alt="go back button" iconPath={backIcon} onClick={onBackButtonClick} />
        )}
        {showTitle && (
            <h1 className="text-lg font-bold text-center flex-1">{title}</h1>
        )}
        {/*닫기*/}
        {showCloseButton && (
            <IconButton alt={"close button"} iconPath={closeIcon} onClick={onCloseButtonClick} />
        )}
      </div>
  )
}