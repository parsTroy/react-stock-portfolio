import React from 'react'

const Overview = ({ symbol, price, change, changePercent, currency }) => {
  return (
    <div>
        <div className='w-full h-full flex items-center justify-around'>
            <span className='font-bold ml-10 -mr-6 text-[#BB86FC] text-lg xl:text-xl 2xl:text-4xl'>
                {symbol}
            </span>
            <span className='ml-10 text-2xl xl:text-4xl 2xl:text-5xl flex items-center'>
                ${price}
                <span className='text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2'>
                    {currency}
                </span>
            </span>
            <span 
                className={`text-lg xl:text-xl 2xl:text-2xl ${
                    change > 0 ? "text-[#04A777]" : "text-[#FF6B6C]"
                }`}
                >
                    {change} <span>({changePercent}%)</span>
            </span>
        </div>
    </div>
  )
}

export default Overview