import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { RiArrowUpSLine } from 'react-icons/ri'

import trending from '../../data/Trending'

const CryptoTrending = () => {
  return (
    <div className='flex-col w-96 border shadow rounded-xl bg-[#1B1F2A] text-[#ffffff] pt-3 pb-3 pl-5 pr-5 transform duration-500 hover:-translate-y-2'>
      <div className='flex justify-between mb-3'>
        <div className="flex items-center gap-2">
          <img src="https://s2.coinmarketcap.com/static/cloud/img/TrendingIcon.png?_=0a1112e" width={25} alt="trending" />
          <span className='font-semibold text-xl'>Trending</span>
        </div>
        <a className='flex items-center' href="#">
          <span className="font-semibold ">More</span>
          <BiChevronRight className='' />
        </a>
      </div>

      <div className="flex-col justify-center items-center">
        {trending.map(trend => {
          return (
            <div className="flex mt-4 mb-4" key={trend?.coin_id}>
              <span className="ml-2 mr-5 font-semibold">{trend?.score}</span>
              <div className="flex items-center w-60 gap-3 mr-2">
                <img className='rounded-full' width={20} src={trend?.small} alt="trendingIcon" />
                <a href="#" className="flex items-center gap-3 hover:text-green-50">
                  <span className="font-semibold">{trend?.name}</span>
                  <span className="text-xs">{trend?.symbol}</span>
                </a>
              </div>
              <div className="flex items-center gap-1 ml-2">
                <a href="#">
                  <RiArrowUpSLine className='' />
                </a>
                <a href="#">
                  <span className="text-green-300 font-semibold hover:text-green-100">{trend?.market_cap_rank}%</span>
                </a>                
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CryptoTrending
