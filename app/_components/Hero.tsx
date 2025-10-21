"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { LayoutDashboard, Key, Home, User, ImagePlus, ArrowUp } from 'lucide-react'
import { set } from 'date-fns';
import { SignInButton } from '@clerk/nextjs';


const suggestions = [
  {
    label: 'Dashboard',
    prompt: 'Create an analytics dashboard to track customers and revenue data for a SaaS',
    icon: LayoutDashboard
  },
  {
    label: 'SignUp Form',
    prompt: 'Create a modern sign up form with email/password fields, Google and Github login options, and terms checkbox',
    icon: Key
  },
  {
    label: 'Hero',
    prompt: 'Create a modern header and centered hero section for a productivity SaaS. Include a badge for feature announcement, a title with a subtle gradient effect',
    icon: Home
  },
  {
    label: 'User Profile Card',
    prompt: 'Create a modern user profile card component for a social media website',
    icon: User
  }
];


function Hero() {

  const [userInput, setUserInput] = useState<string>();
  return (
    <div className='flex flex-col items-center h-[80vh] justify-center'>

        {/* Header & description */}
            <h2 className='font-bold text-6xl'>What should we Design ?</h2>
            <p className='mt-2 text-xl text-gray-500'> Generate ,Edit and Explore design with AI </p>
        {/* input box */}
        <div className='w-full max-w-2xl p-5 border mt-5 rounded-2xl'>
            <textarea placeholder='Describe your page design'
            value={userInput}
            onChange={(event)=>setUserInput(event.target.value)}
            className='w-full h-24 focus:outline-none focus:ring-0 resize nome'
            />
            <div className='flex justify-between items-center'>
                <Button variant={"ghost"} size={'icon'}><ImagePlus /></Button>
                <SignInButton mode='modal' forceredirect='/workspace'>
                    <Button disabled={!userInput}> <ArrowUp /> </Button>
                </SignInButton>
            </div>
        </div>
            
        {/* suggestions list */}

        <div className='mt-4 flex gap-3'>
          {suggestions.map((suggestions,index)=>
          <Button key={index} variant={"outline"}
          onClick={()=>setUserInput(suggestions.prompt)}
          >
            
            
            <suggestions.icon/>
            {suggestions.label}
          </Button>
          )}
        </div>

    </div>
  )
}

export default Hero