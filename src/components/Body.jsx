import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
{/* <CiCircleMinus /> */}
import React from 'react'
import { useState } from "react";
function Body(){
  const {icon, setIcon} = useState("hidden")
  const {plus, setPlus} = useState(CiCirclePlus)

    const handleClick =() => {
      if(icon === "hidden") {
        setPlus(CiCircleMinus)
        setIcon(CiCirclePlus)

    } else {
      setPlus(CiCirclePlus)
      setIcon('hidden')
    
     }
      
      }
   
  return (
<div className="bg-black rgb(255, 255, 255) ">
        <div className='mx-[12%] flex justify-center items-center h-screen'>
    <div className='flex pt-[12%] content-end'>
    <div className='flex justify-end items-center'>

<div>
     <h1 className='text-white text-6xl not-italic tracking-wide leading-none slashed-zero
        font-medium antial subpixel-antialiased whitespace-wrap'>A faster, more 
        efficient and more powerful cryptocurrency exchange platform</h1>
     <div className=" flex gap-2 my-5">
            <input
             type="email"
               name="email"
                placeholder="Enter your email address"
                className="bg-black border border-white-300 text-gray-900 text-sm rounded-lg
                 block w-80 p-2.5 dark:bg-black 
                    dark:border-white-600 dark:placeholder-gray-400 dark:text-white  
                  h-[50px]" />

            <button
                    className='bg-white rounded-full px-10 py-3 mx-10 w-[30%] '  type="button"
                    onClick={handleClick}>
                    Try OKX
            </button> 

    </div>
            <div className=" py-20 w-30 h-15 justify-items-center flex items-center gap-12 rounded-lg shadow-md">
            <img className='w-[130px] h-[60px]' src="fest.webp" alt="logo2" />
            <img className='w-[130px] h-[40px]' src="mc.webp" alt="logo3" />
            <img className='w-[80px] h-[80px]' src="city.webp" alt="logo4" />
            </div>
</div>
</div>
    <div className='h-[50%] w-[70%] mx-[15%]flex justify-end items-center'>
            <video src="video1.mp4"autoPlay loop muted playsInline
            className=''></video>

    </div>
</div>

</div>

    <div className=''>
        <video src=""></video>
    </div>
    <div className='bg-yellow-600 bg-gradient-to-r from-yellow-500 via-red-500 to-indigo-500 ... from-red-200 flex-justify-center text-white p-1 h-12'>
    <marquee direction="left" height="100px" width="100%">MATIC $0,91 (+0,67 %)    XRP $0,60 (-0,10 %)    SOL $100,25 (-1,73 %)    DOGE $0,08 (+1,16 %)
BTC $46 607,10 (-0,13 %)    ETH $2 585,04 (+0,04 %)    OKB $54,90 (+0,04 %)    MATIC $0,91 (+0,67 %)    XRP $0,60 (-0,10 %)    SOL $100,25 (-1,73 %)   DOGE $0,08 (+1,16 %)
</marquee>
    </div>


    <div className='justify-items-center text-white text-2xl my-9'>
        <h2 className='text-center text-5xl'>Trade like a pro</h2>
        <h4 className='text-center text-gray-500 mt-2'>Get the lowest fees, fastest transactions, powerful APIs, and more</h4>
    </div>
   

    <div  class="flex justify-center items-center h-screen"><video className='w-[98%] h-[90%] py-11' src="video2.mp4" autoPlay loop muted playsInline></video></div>

    <div className='justify-items-center text-white text-3xl ml-52 mt-40 flex mx-11'>
        <img className='h-[21%] w-[25%] mx-[15%]flex justify-end items-center' src="last img.png" alt="logo" />
        <div className='px-28 py-11'><h5 className='itespace-wrap flex-end top-10 right-10text-white text-6xl not-italic tracking-wide leading-none slashed-zero
     font-medium antial subpixel-antialiased wh '>An application. <br />Unlimited <br />possibilities.</h5>
        <h1 className='text-lg py-20'>Are you new to the world of cryptos? No problem. <br />Buy crypto for just $5 with just one click and build <br /> your skills as you go.</h1></div>
    </div>
        
        <div className=''>
            <p className='flex justify-center items-center text-white text-5xl  mt-40 py-5 font-semibold'>By your side every step of the way</p>
            <p className='flex justify-center items-center text-center text-white text-2xl  mx-10 '>From your first crypto trading transaction to your first NFT purchase, we will guide you through the process. No question is ridiculous.  No need to worry yourself to sleep. Have confidence in your cryptos.</p>
        </div> 
            <div className='min-height-[80vw] p-0 w-[60% py-20 px-20'>
                <video src="https://static.okx.com/cdn/assets/files/2210/D47D930F643E7A00.webm"autoPlay loop muted playsInline></video>
            </div>
        

        <div className='px-20 py-28'>
            <p className='flex justify-start items-center text-white text-5xl font-semibold'>What is OKX?</p>
            <p className='text-lg py-5 text-white'>With help from our world-class partners, find out why we're now <br />your new favorite crypto app Discover</p>
            </div>

        <div className='flex justify-between items-center p-10 m-10'>   
            <button
                    className='bg-white rounded-full px-10 py-5 mx-10 w-[200px] h-[70px] font-semibold  ' type="button"
                    onClick= {handleClick}>
                    Discover
                </button> 
                <div className='justify-end px-10 flex h-[220px] w-[530px]'><img src="logo.png" alt="" /></div>
        </div>        
           
    <div className='flex gap-5 justify-center'>
    <video className='min-height-[75vw] p-0 w-[30%]' src="https://static.okx.com/cdn/assets/files/2210/B961D658AE174818.mp4" autoPlay loop muted playsInline> </video>
    <video className='min-height-[75vw] p-0 w-[30%]' src="https://static.okx.com/cdn/assets/files/2210/D583B0A2F58732CD.mp4"autoPlay loop muted playsInline ></video>
    <video className='min-height-[75vw] p-0 w-[30%]' src="https://static.okx.com/cdn/assets/files/2210/CCAA7B610D3D33D4.mp4"autoPlay loop muted playsInline></video>
     
    </div>

        <div className='flex justify-center items-center text-white text-5xl  mt-40 py-5 font-semibold'>
            <p>You have questions ?</p>
        </div>
        <div className='flex justify-start items-center text-white text-3xl font-semibold'>
            <p> </p>
            
            <p className=' justify-start items-center text-white text-2xl font-normal'>
                
<div id="accordion-collapse" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-1">
    <button type="button" onClick={handleClick} style={{border: 'none', borderBottom: '2px solid grey', width: '1300px', margin: '60px 40px', padding: '60px 50px'}} class="" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span style={{display: 'flex', justifyContent: 'space-between'}}>
      <span>What products does OKX offer? </span>
      <span className="plus"style={{color:"white"}} >{plus}</span>
      {/* <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg> */}
      
      </span>
    </button>
  </h2>
  <h4 id="accordion-collapse-heading-2">
    <button type="button" class="flex items-center justify-between w-full p-5 text-lg text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
     {plus &&

          <span> 
                OKX is an innovative cryptocurrency exchange offering cutting-edge financial offerings. We provide industry-leading crypto earning and trading services to millions of users worldwide in over 180 regions.
                With OKX, you can:
                Trade hundreds of tokens and trading pairs across spot, margin and derivatives markets.
                Manage your DeFi wallet by connecting your Web3 wallet to organize all your decentralized assets in one place.
                Create, buy and sell NFTs on our Non-Fungible Token Marketplace.
                Discover the main decentralized applications , including DeFi DApps and blockchain games.
                Connect to DeFi with our Web3 wallet through our app or browser extension.
                Earn cryptocurrency in our mining pools , take out cryptocurrency-backed loans and discover other ways to grow your cryptos with OKX Earn.
                Connect to the world-renowned TradingView platform and trade cryptos directly with boosted charts. 
          </span>
     } 
     {!plus &&
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
     }
     {plus &&
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
     }

     
    </button>
  </h4>
  <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-3">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>What are the differences between Flowbite and Tailwind UI?</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
    <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
        <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul>
    </div>
  </div>
</div>
            </p>
        </div>

        <div>
            <p>How to buy Bitcoins on OKX?</p>

            <p>Easily buy Bitcoin in minutes in GBP, EUR, USD or your local currency. OKX supports many of the most popular payment methods, including Visa and Mastercard credit cards as well as ApplePay. To get started, check out our recent guide on how to buy Bitcoin on OKX. Interested in buying, selling, or holding other tokens that are gaining popularity in the crypto ecosystem? Check out the following free resources to get started today:
                Buy BTC
                Buy USDT
                Buy ETH
                Buy DOT
                Buy SOL
                Buy Doge
                Buy XRP
                Buy OKB
                Buy BCH
            </p>
        </div>

        <div>
            <h1>Where is OKX based?</h1>

            <p>Founded in 2017, OKX is a Seychelles-registered cryptocurrency exchange that adopts blockchain technology to create the next generation financial ecosystem. We offer industry-leading trading services for hundreds of different crypto assets.</p>
        </div>

            <div>
                <p>Can US citizens use OKX?</p>

                <p>
                Can US citizens use OKX?

                OKX is unable to offer its services to customers located in the United States of America. Our platform is available worldwide, except in the following jurisdictions: Bangladesh, Bolivia, Canada, North Korea, Crimea, Cuba, United States of America, Hong Kong (in particular regarding our derivatives services for individuals), Iran, Malaysia, Malta, United Kingdom (in particular regarding our derivatives services for individuals), Singapore and Syria.
                Visit our terms of service to learn more.
                </p>
            </div>

        <div>
        <img src="logo.png" alt="" />
    </div>
</div>

  )
}

export default Body




// flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800