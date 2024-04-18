import { useState } from "react";
import TabItem from "./TabItem";
import tabItems from "./data";
export default function Tab() {
  const [activeTab, setActiveTab] = useState(0);
  const handleChangeTab = (idx) => {
    setActiveTab(idx);
  };
  return (
    <div className="bg-slate-100 p-10 flex items-center flex-col">
      <TabItem
        tabItems={tabItems}
        handleChangeTab={handleChangeTab}
        activeTab={activeTab}
      />
    </div>
  );
}
