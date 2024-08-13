"use client"

import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useEffect, useState } from 'react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

interface EvaluationProps {
    activeStyle: string,
  }

function Evaluation({ activeStyle }: EvaluationProps) {


    const [userInput, setUserInput] = useState("")
    const [userOutput, setUserOutput] = useState("")
    const [isLoading, setisLoading] = useState(false)

    // Make sure to include these imports:
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    async function paraphrase(input: string, tone: string) {
        setisLoading(true)
        const prompt = `You are a professional content writer. Your task is to rewrite the following text: ${input} according to a ${tone} tone. The output will be in respected langugae`

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setUserOutput(text)

        setisLoading(false)
    }

    function copyText (text: string) {
        navigator.clipboard.writeText(text)
    }


    return (
        <>
            <div className="pb-10">
                <div className="container">
                    <div className="flex justify-between gap-5">
                        <div className="flex-1 relative">
                            <Textarea value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder='Write something to paraphrase...' className='pr-14 rounded-md border min-h-[500px] max-h-screen bg-muted' />
                            <Button onClick={()=> copyText(userInput)} className='absolute right-3 top-3 px-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                                </svg>

                            </Button>
                        </div>
                        <div className="flex-1 relative">
                            <Textarea value={userOutput} placeholder='Your output will be here' className='pr-14 rounded-md border min-h-[500px] max-h-screen bg-muted' />
                            <Button onClick={()=> copyText(userOutput)} className='absolute right-3 top-3 px-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                                </svg>
                            </Button>
                        </div>
                    </div>
                    <Button disabled={isLoading || userInput.length < 20} className='flex justify-center mt-5 w-fit mx-auto -translate-x-1/2 px-6 rounded-full text-lg' onClick={() => paraphrase(userInput, activeStyle)}>Paraphrase</Button>
                </div>
            </div>
        </>
    )
}

export default Evaluation