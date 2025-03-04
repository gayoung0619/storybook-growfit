import {IconButton} from "./IconButton.tsx";

interface ILogoNavigationBarProps {
  showProfileButton: boolean;
  showAlarmButton: boolean;
  title?: string;
  onProfileButtonClick?: React.MouseEvent<HTMLButtonElement>;
  onAlarmButtonClick?: React.MouseEvent<HTMLButtonElement>;
}

import profileIcon from "../assets/icon/ic-profile.svg"
import alarmIcon from "../assets/icon/ic-alarm.svg"

export const LogoNavigationBar = ({
                                showProfileButton,
                                showAlarmButton,
                                title = "",
                                onProfileButtonClick = () => {},
                                onAlarmButtonClick = () => {},
                              }: ILogoNavigationBarProps) => {
  return (
      <div className="flex items-center justify-between py-[18px] px-[22.5px]">
        <h1 className="text-lg font-bold text-center">{title}</h1>
        <div className="flex items-center gap-[8px]">
          {/*마이페이지*/}
          {showProfileButton && (
              <IconButton alt="go back button" iconPath={profileIcon} onClick={onProfileButtonClick} />
          )}
          {/*알림*/}
          {showAlarmButton && (
              <IconButton alt={"close button"} iconPath={alarmIcon} onClick={onAlarmButtonClick} />
          )}
        </div>
      </div>
  )
}