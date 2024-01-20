'use client'
import './globals.css'
import Cartao from './card'
import React, { ReactNode, useState } from 'react'
import Menu from './menu'
import Link from './link'

export default function App() {

  const [cards, setCards] = useState<Set<string>>(new Set())

  function renderCards(): ReactNode {
    let i = 0
    const array = Array.from(cards).map(tz => <Cartao key={i++} timezone={tz} className='animate-appearance-in' />)
    return array
  }
  return (
    <div className='bg-black-0 text-white h-screen flex flex-col items-center justify-between pb-36 text-7xl'>
      <div className='text-lg h-16 w-2/5 flex flex-row items-end justify-around'>
        <Link link='https://en.wikipedia.org/wiki/Time_zone'>What are timezones?</Link>
        <Link link='https://www.timeanddate.com/time/map/'>Find your timezone</Link>
        <Link link='https://www.w3schools.com/js/js_dates.asp'>How this works?</Link>
      </div>
      <div className='flex w-screen justify-center'>
        <Menu setTimezones={setCards} />
      </div>
      <div className='flex justify-around w-4/5 min-h-72'>
        {renderCards()}
      </div>
    </div>
  )
}