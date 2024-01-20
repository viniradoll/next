import { Clock } from './clock'
import './globals.css'

type Props = {
    timezone: string,
    className?: string,
}

export default function card({ timezone, className }: Props) {
    const now = new Date()
    const title = timezone?.split("/")[1].replace("_", " ")
    return (
        <div className={'h-72 w-80 flex flex-col justify-start bg-default-50 rounded-2xl ' + className} >
            <div className='flex justify-between items-center text-5xl pl-4 h-1/4 rounded-2xl
                            bg-gradient-to-r from-emerald-800 to-emerald-400'>
                {title}
            </div>
            <Clock time={now.getTime()} timezone={timezone} />
        </div>
    )
}