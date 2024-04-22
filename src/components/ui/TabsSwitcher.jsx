import React, { useState } from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import Idols from "../Home/Categories/Idols";

const commonTabClassName = "font-poppins text-xl md:text-3xl focus:outline-none";
const activeTabClassName = "text-[#F26414] font-medium";
const inactiveTabClassName = "text-[#848484] font-regular";

const tabsData = [
    { label: "Idols", value: "Idols" },
    { label: "Malas", value: "Malas" },
    { label: "Handicraft", value: "Handicraft" },
    { label: "Others", value: "others" },
];

function TabsSwitcher() {
    const [activeTab, setActiveTab] = useState(tabsData[0].value); // Default to first label

    const handleTabClick = (value) => setActiveTab(value);

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-7xl">
                <div className="relative z-10 min-h-screen px-4 py-8 sm:px-8 lg:px-16 flex flex-col justify-center">
                    <Tabs value={activeTab} className="w-full ">
                        <TabsHeader className="rounded-none bg-transparent p-4 md:p-8" indicatorProps={{ className: "bg-transparent border-b-4 border-orange-400 shadow-none rounded-none" }}>
                            {tabsData.map(({ label, value }) => (
                                <Tab
                                    key={value}
                                    value={value}
                                    onClick={() => handleTabClick(value)}
                                    className={`${commonTabClassName} ${activeTab === value ? activeTabClassName : inactiveTabClassName}`}
                                >
                                    {label}
                                </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody>
                            <TabPanel value="Idols">
                                <Idols />
                            </TabPanel>
                            <TabPanel value="Malas">
                                <p className="text-lg font-semibold mb-2">Fort 1</p>
                                <p>Description for fort 1</p>
                                {/* Add more fort contents here */}
                            </TabPanel>
                            <TabPanel value="Handicraft">
                                <p className="text-lg font-semibold mb-2">Museum 1</p>
                                <p>Description for museum 1</p>
                                {/* Add more museum contents here */}
                            </TabPanel>
                            <TabPanel value="others">
                                <p className="text-lg font-semibold mb-2">Other 1</p>
                                <p>Description for other 1</p>
                                {/* Add more other contents here */}
                            </TabPanel>
                        </TabsBody>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default TabsSwitcher;
