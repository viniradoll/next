'use client'
import './globals.css'
import { useEffect, useState } from 'react'

type Props = {
    time: number,
    timezone: string
}

export const Clock = ({ timezone }: Props) => {
    const [time, setTime] = useState(new Date())
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])
    
    return (
        <div className='grow flex justify-center items-center'>
            {time.toLocaleTimeString('pt-BR', {timeZone: timezone})}
        </div>
    )
}