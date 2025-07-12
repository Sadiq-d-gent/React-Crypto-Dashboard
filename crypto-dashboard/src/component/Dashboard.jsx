import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import CryptoTrending from './dashboardComponents/CryptoTrending'
import CryptoRecentlyAdded from './dashboardComponents/CryptoRecentlyAdded'
import CryptoSocialsCarousel from './dashboardComponents/CryptoSocialsCarousel'
import CryptoPriceLineChart from './dashboardComponents/CryptoPriceLineChart'
import CryptoVerticalBar from './dashboardComponents/CryptoVerticalBar'
import CryptoTable from './dashboardComponents/CryptoTable'

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="flex h-screen overflow-hidden bg">
            {/* Sidebar */}
            <div className="">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            </div>

            <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden w-[100%] bg-cyan-50 '>
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <div className=" flex justify-center gap-7 mb-5 mt-5 md:flex-wrap sm:flex-wrap max-sm:flex-wrap">
                    <CryptoTrending />
                    <CryptoRecentlyAdded />
                    <CryptoSocialsCarousel />
                </div>

                <div className="ml-8 mr-6">
                    <div className="flex justify-between sm:justify-center  lg:justify-center xl:justify-between md:flex-wrap sm:flex-wrap max-sm:flex-wrap gap-3  ">
                        <CryptoPriceLineChart />
                        <CryptoVerticalBar />
                    </div>

                    <div className="">
                        <CryptoTable />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Dashboard
