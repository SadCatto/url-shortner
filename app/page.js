/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from "react";

export default function Home() {
  const [link, setLink] = useState(null)
  const [linkNotFound, setLinkNotFound] = useState(false)
  const [prevlink, setprevtLink] = useState(null)
  const [shortLink, setShortLink] = useState(null)
  const [copied, setCopied] = useState(false)
  const handleClickScroll = () => {
    const element = document.getElementById('middle');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const shorten = async () => {
    try {
      if (link == '' || !link) {
        setLinkNotFound(true)
      } else {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
        const data = await res.json();
        setShortLink(data.result['full_short_link'])
        setCopied(false)
        setprevtLink(link)
        setLink('')
        setLinkNotFound(false)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const copyButton = () => {
    navigator.clipboard.writeText(shortLink)
    setCopied(true)
  }
  return (
    <main>
      <div className="flex flex-col lg:gap-16 overflow-x-hidden">
        <div className="flex font-bold text-[32px] py-6 px-2 lg:px-24">
          {/* <h1>Shortly</h1> */}
          <img src="/images/logo.svg" className="pb-4" alt="logo"></img>
        </div>
        <div>
          {/* Div for Navbar */}
          {/* Div for top section */}
          <div className="flex flex-col gap-80">
            {/* Basically page 1 */}
            <div className="flex flex-col p-2 h-min items-center gap-2 bg-white lg:flex-row lg:flex-row-reverse lg:items-center lg:place-content-around lg:w-full lg:px-32 lg:py-8">
              {/* Div for homepage image */}
              <div className="p-2 lg:w-full lg:max-w-[40%]">
                <img src="/images/illustration-working.svg" alt="Working svg"></img>
              </div>
              {/* Div for main text  */}
              <div className="flex flex-col gap-4 items-center p-2 leading-10 lg:w-full">
                <h1 className="font-bold text-[40px] lg:text-[52px] text-center lg:text-left leading-none p-1">More than just shorter links</h1>
                <h2 className="leading-8 text-center p-1 text-[18px] text-n-gray">Build your brands recognition and get detailed insights on how your links are performing</h2>
                {/* Div for get started button */}
                <div className="flex justify-center text-[18px]">
                  <button className="rounded-[40px] bg-pr-cyan px-8 py-3 text-white font-[500]" onClick={handleClickScroll}>Get Started</button>
                </div>
              </div>
            </div>
            {/* Div for Enter URL section  */}
            <div className="bg-n-gray-violet p-2 lg:px-20">
              <div className="p-2 relative -top-16" id="middle">
                <div className="bg-pr-violet p-2 lg:p-12 bg-[url('/images/bg-shorten-mobile.svg')] lg:bg-[url('/images/bg-shorten-desktop.svg')] bg-cover bg-no-repeat w-full rounded-lg flex flex-col justify-center lg:flex-row lg:place-content-between gap-4 bg-right">
                  <div className="flex flex-col w-full max-w-[100%] lg:w-[80%]">
                    <input className={linkNotFound ? "p-2 lg:p-4 rounded-lg border-rose-500 border-4 w-full max-w-[100%]" : "p-2 lg:p-4 rounded-lg w-full max-w-[100%]"} placeholder="Shorten a link here..." value={link} onChange={event => setLink(event.target.value)} />
                    <div className={linkNotFound ? "text-rose-500 mt-1" : "hidden"}>Please add a link</div>
                  </div>
                  <button className="bg-pr-cyan rounded-lg p-2 h-min lg:p-4 text-center w-full lg:max-w-[15%]" onClick={shorten}>Shorten</button>
                </div>
              </div>
              <div className={prevlink ? "flex flex-col gap-2 p-4 lg:flex-row  place-content-around py-2 mb-8 bg-white rounded-md flex w-full font-bold" : "hidden"}>
                <div className="p-2 truncate">
                  {prevlink}
                </div>
                <div className="p-2 text-pr-cyan">
                  {shortLink}
                </div>
                <div className={copied ? "hidden" : ""}>
                  <button className="bg-pr-cyan w-full py-2 px-8 text-white font-bold rounded-lg" onClick={copyButton}>Copy</button>
                </div>
                <div className={copied ? "" : "hidden"}>
                  <button className="bg-pr-violet w-full py-2 px-6 text-white font-bold rounded-lg" onClick={copyButton}>Copied!</button>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 text-center leading-10 bg-n-gray-violet">
                <div className="flex flex-col gap-4 p-2">
                  <h1 className="font-bold text-[32px]">Advance Statistics</h1>
                  <h2 className="leading-8 text-center p-1 text-[18px] text-n-very-blue">Track how your links are performing across the web with our advanced statistics dashboard.</h2>
                </div>
                <div className="flex flex-col items-center justify-center p-4 lg:flex-row">
                  <div className="bg-white flex flex-col items-center p-2 rounded-lg lg:items-start lg:max-w-[30%]">
                    <div className="rounded-full bg-pr-violet h-24 w-24 mx-4 items-center justify-center relative -top-12 flex">
                      <img src="/images/icon-brand-recognition.svg" alt="brand recoginition"></img>
                    </div>
                    <h1 className="font-bold text-[24px] px-4">Brand Recognition</h1>
                    <h2 className="leading-8 text-center px-4 lg:text-start p-1 text-[16px] text-n-very-blue">Boost your brand recognition with each click. Generic links don&#39;t mean a thing. Branded links help instil confidence in your content</h2>
                  </div>
                  <div className="bg-pr-cyan lg:w-8 w-2 h-8 lg:h-2 lg:mt-8"></div>
                  <div className="bg-white flex flex-col items-center p-2 mt-8 rounded-lg lg:items-start lg:max-w-[30%] lg:mt-16">
                    <div className="rounded-full bg-pr-violet h-24 w-24 mx-4 items-center justify-center flex relative -top-12">
                      <img src="/images/icon-detailed-records.svg" alt="brand recoginition"></img>
                    </div>
                    <h1 className="font-bold text-[24px] px-4">Detailed Records</h1>
                    <h2 className="leading-8 text-center px-4 lg:text-start p-1 text-[16px] text-n-very-blue">Gain insights into who is clicking  your links. Knowing when and where people engage with your content helps inform better decisions.</h2>
                  </div>
                  <div className="bg-pr-cyan lg:w-8 w-2 h-8 lg:h-2 lg:mt-8"></div>
                  <div className="bg-white flex flex-col items-center  p-2 mt-8 rounded-lg lg:items-start lg:max-w-[30%] lg:mt-32">
                    <div className="rounded-full bg-pr-violet h-24 w-24 mx-4 items-center justify-center flex relative -top-12">
                      <img src="/images/icon-fully-customizable.svg" alt="brand recoginition"></img>
                    </div>
                    <h1 className="font-bold text-[24px] px-4">Fully Customizable</h1>
                    <h2 className="leading-8 text-center px-4 lg:text-start p-1 text-[16px] text-n-very-blue">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</h2>
                  </div>
                </div>
                <div>
                  <div className="bg-[url('/images/bg-boost-mobile.svg')] lg:bg-[url('/images/bg-boost-desktop.svg')] bg-pr-violet bg-cover h-min w-screen bg-no-repeat flex flex-col gap-4 py-24 justify-center items-center text-white">
                    <h1 className="font-bold text-[32px]">Boost your links today</h1>
                    <button className="rounded-[40px] bg-pr-cyan px-8 py-3 text-white font-[500]" onClick={handleClickScroll}>Get Started</button>
                  </div>
                  <div className="bg-n-very-violet text-white flex flex-col items-center lg:flex-row lg:place-content-around py-8 gap-4">
                    <h1 className="font-bold text-[32px]">Shortly</h1>
                    <div className="flex flex-col gap-1">
                      <h1 className="text-[20px]">Features</h1>
                      <div className="flex flex-col items-center jusify-center">
                        <h2 className="text-n-gray">Link Shortning</h2>
                        <h2 className="text-n-gray">Branded Links</h2>
                        <h2 className="text-n-gray">Analytics</h2>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-[20px]">Resources</h1>
                      <div className="flex flex-col items-center jusify-center">
                        <h2 className="text-n-gray">Blog</h2>
                        <h2 className="text-n-gray">Developers</h2>
                        <h2 className="text-n-gray">Support</h2>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-[20px]">Company</h1>
                      <div className="flex flex-col items-center jusify-center">
                        <h2 className="text-n-gray">About</h2>
                        <h2 className="text-n-gray">Our Team</h2>
                        <h2 className="text-n-gray">Careers</h2>
                        <h2 className="text-n-gray">Contact</h2>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <img src="/images/icon-facebook.svg" className="h-min" alt="facebook"></img>
                      <img src="/images/icon-twitter.svg" className="h-min" alt="twitter"></img>
                      <img src="/images/icon-pinterest.svg" className="h-min" alt="pinterest"></img>
                      <img src="/images/icon-instagram.svg" className="h-min" alt="instagram"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}