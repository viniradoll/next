
type Props = {
    children: string,
    link?: string,
}

export default function link({children, link}: Props){

    return (
        <a href={link} target="_blank" className="border-black-50 border-b-2 hover:border-rose-50 hover:cursor-pointer transition">
            {children}
        </a>
    )
}