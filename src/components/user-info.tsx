import { CheckCircle } from 'lucide-react'

import { FaDiscord as Discord, FaSteam as Steam } from 'react-icons/fa6'

export default function UserInfo() {
    const Connections = [
        {
            icon: Discord,
            label: 'liru#0001',
        },
        {
            icon: Steam,
            label: '11000011add3d8b',
        },
    ]
    return (
        <div className="flex items-center gap-5 bg-[#47099E] px-11 py-4">
            <div className="flex flex-col items-center gap-2.5">
                <div className="size-19 rounded-full border-2 border-[#C9A4FF]"></div>
                <div className="flex w-fit max-w-19 items-center gap-2 bg-green-600 p-1 text-xxxs font-black text-green-800">
                    <CheckCircle className="size-3" /> Liberado
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="w-20 text-ellipsis text-xl font-black">Murilo Balbino</p>
                <ul className="space-y-1">
                    {Connections.map((connection, index) => (
                        <li key={index} className="flex items-center gap-1.5 text-xxs text-[#C9A4FF]">
                            <connection.icon className="size-3.5" />
                            {connection.label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
