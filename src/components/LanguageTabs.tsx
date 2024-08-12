"use client"

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Ensure you have this dependency installed

interface Mode {
    language: string;
    modes: string[];
}

interface LanguageTabsProps {
    modes: Mode[];
}


const LanguageTabs = ({ modes }: LanguageTabsProps) => {

    const [activeStyle, setActiveStyle] = useState("")

    

    return (
        <div className="">
            <div className="container py-10">

                <Tabs defaultValue={modes[0]?.language} className="">
                    <TabsList>
                        {modes.map((item, index) => (
                            <TabsTrigger key={index} value={item.language}>
                                {item.language}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {modes.map((item, index) => (
                        <TabsContent key={index} value={item.language} className='flex gap-3'>
                            <span>Modes:</span>
                            <ul className='flex gap-3'>
                                {item.modes.map((lang, i) => (
                                    <li>{lang}</li>
                                ))}
                            </ul>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </div>
    );
};

export default LanguageTabs;
