import { TabButton } from "./TabButton.tsx";
import {useState} from "react";

interface ITagListProps<T extends string>{
  tabList: T[];
  onTabClick: (tag: T) => void
}
export const TabList = <T extends string> ({
                          tabList,
                          onTabClick
                        }: ITagListProps<T>) => {
  const [selectedTab, setSelectedTab] = useState<T>(tabList[0]);
  return (
      <div onClick={(event) => {
          const eventTarget = event.target as HTMLButtonElement;
          const tab = eventTarget.textContent as T;
          onTabClick(tab)
      }}>
        {tabList.map((tab) => (
            <TabButton
                key={tab}
                isChecked={tab === selectedTab}
                onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </TabButton>
        ))}
      </div>
  )
}