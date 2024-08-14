
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <>
            <div className="flex py-3 justify-between border-t border-b-slate-200">
                <div className="container justify-between flex flex-col md:flex-row gap-3 items-start md:items-center">
                    <div className='flex items-center justify-between gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white bg-accent_one p-2 rounded-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                        <span className='text-sm text-accent_one'>Powered by <Link className='font-semibold underline' href="https://eulerbytes.com">Eulerbytes</Link> </span>
                    </div>
                    <div className='w-full md:w-fit'>
                        <div className="flex gap-4 sm:gap-10 items-center justify-between ">
                            <ul className='flex items-center gap-7'>
                                <li>
                                    <a href="https://www.instagram.com/eulerbytes/" target='_blank'>
                                        <span className="h-5 block w-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="fill-current text-black transition hover:text-accent_one"
                                                fill="currentColor"
                                                viewBox="0 0 448 512">
                                                <path
                                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                            </svg>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/eulerbytes/" target='_blank'>
                                        <span className="h-5 block w-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="fill-current text-black transition hover:text-accent_one"
                                                fill="currentColor"
                                                viewBox="0 0 448 512">
                                                <path
                                                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                            </svg>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://x.com/EulerBytes" target='_blank'>
                                        <span className="h-5 block w-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="fill-current text-black transition hover:text-accent_one"
                                                fill="currentColor"
                                                viewBox="0 0 512 512">
                                                <path
                                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                            </svg>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <span className='text-[14px] sm:text-[16px]'>© Copyright 2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer