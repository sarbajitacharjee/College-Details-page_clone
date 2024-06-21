import React from 'react'
import Header from '@/components/Header'

import CollegeInfo from '@/components/CollegeInfo'
import Footer from '@/components/Footer'
const page = () => {
  return (
    <>
      <Header/>
      <CollegeInfo/>
      <Footer/>

      <div className="fixed right-4 bottom-4">
      <button className="bg-blue-500 hover:bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
        <img src="/face.jpg" width={100} height={100} alt="Contact" className=" rounded-full" />
      </button>
    </div>
    </>
  )
}

export default page
