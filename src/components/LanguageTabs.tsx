"use client"

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Ensure you have this dependency installed
import { Button } from './ui/button';

interface Mode {
    language: string;
    tones: string[];
  }
  

interface LanguageTabsProps {
    modes: Mode[];
    activeStyle: string,
    setActiveStyle: React.Dispatch<React.SetStateAction<string>>
  }

const LanguageTabs = ({ modes, activeStyle, setActiveStyle }: LanguageTabsProps) => {

    


    return (
        <div className="">
            <div className="container py-10">

                <Tabs defaultValue={modes[0]?.language} className="border-b">
                    <TabsList className='mb-3 w-full justify-start'>
                        {modes.map((item, index) => (
                            <TabsTrigger className='capitalize active:bg-accent_one' key={`${index}-${Math.random()}-tabs`} value={item.language}>
                                {item.language}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {modes.map((item, index) => (
                        <TabsContent  key={`${index}-${Math.random()}-tabs-content`} value={item.language} className='flex m-0 items-center gap-3'>
                            <span className='text-md font-bold'>Modes:</span>
                            <ul className='flex gap-3'>
                                {item.tones.map((lang, i) => (
                                    <li key={`${index}-${Math.random()}-tabs-tones`}>
                                        <Button className={` text-md py-0 px-3 capitalize font-normal rounded-none bg-transparent text-black hover:text-black hover:bg-transparent ${lang == activeStyle ? "text-accent_one border-b-2 border-accent_one" : ""}`} onClick={()=> setActiveStyle(lang) }>
                                            {lang}
                                        </Button>
                                    </li>
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
