import { useState } from 'react'
import './globals.css'
import { Select, SelectItem, Selection } from '@nextui-org/react'

type Props = {
    setTimezones: any,
}

export default function Menu({ setTimezones }: Props) {
    const list =
        [
            { label: "Alaska", value: "US/Alaska" },
            { label: "Baghdad", value: "Asia/Baghdad" },
            { label: "Bangkok", value: "Asia/Bangkok" },
            { label: "Berlin", value: "Europe/Berlin" },
            { label: "Buenos Aires", value: "America/Buenos_Aires" },
            { label: "Cuiaba", value: "America/Cuiaba" },
            { label: "Dubai", value: "Asia/Dubai" },
            { label: "Fiji", value: "Pacific/Fiji" },
            { label: "Hong Kong", value: "Asia/Hong_Kong" },
            { label: "Indianapolis", value: "America/Indianapolis" },
            { label: "Jerusalem", value: "Asia/Jerusalem" },
            { label: "London", value: "Europe/London" },
            { label: "Los Angeles", value: "America/Los_Angeles" },
            { label: "Moscow", value: "Europe/Moscow" },
            { label: "New York", value: "America/New_York" },
            { label: "Paris", value: "Europe/Paris" },
            { label: "Qatar", value: "Asia/Qatar" },
            { label: "Rome", value: "Europe/Rome" },
            { label: "São Paulo", value: "America/Sao_Paulo" },
            { label: "Sydney", value: "Australia/Sydney" },
            { label: "Tahiti", value: "Pacific/Tahiti" },
            { label: "Tokyo", value: "Asia/Tokyo" },
        ]
    const [valid, setValid] = useState<boolean>(true)
    
    function handleChange(set:Selection): void {
        const arr = Array.from(set)
        if (arr.length <= 4) {
            setValid(true)
            return setTimezones(set)
        }
        return setValid(false)
    }

    return (
        <div className="w-1/3 h-60 bg-default-50 rounded-2xl flex flex-col justify-start">
            <div className='px-3 flex flex-col justify-center text-5xl h-2/5 bg-gradient-to-r from-emerald-800 to-emerald-400 rounded-2xl'>
                Menu
            </div>
            <div className='h-full w-full flex justify-center items-center grow'>
                <Select
                    label="Select" onSelectionChange={handleChange} isInvalid={!valid} errorMessage={valid ? '' : 'Maximum of 4 selected'}
                    className='w-1/2 mr-5' color='default' variant='flat' selectionMode='multiple' description='Select desired timezones'>
                    {list.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                            {item.label}
                        </SelectItem>
                    ))}</Select>
            </div>
        </div>
    )
}