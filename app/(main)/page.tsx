import React from 'react'
import Heading from './_components/heading'
import Pics from './_components/pics'
import {Footer} from './_components/footer'

const hero = () => {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading/>
        <Pics/>
      </div>
      <Footer/>
    </div>
  )
}

export default hero
