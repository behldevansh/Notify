"use client"

import Image from 'next/image'
import React from 'react'
import {useUser} from "@clerk/clerk-react"
import { Button } from "@/components/ui/button";
import { PlusCircle } from 'lucide-react';

const page = () => {
  const {user}=useUser();


  return(
    <div className='h-full flex flex-col items-center justify-center space-y-4'>
      <Image
      src="/empty.png"
      height="300"
      width="300"
      alt='empty state image'
      className='dark:hidden'
      />
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Welcome {user?.firstName}!! 
      </h2>
      <h2 className="text-lg font-medium">
      Nothing to show here now
      </h2>
      <Button >
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>

    </div>
  )
}
  

export default page
