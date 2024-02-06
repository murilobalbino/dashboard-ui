'use client'

import { DiscordLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { Flag, Home, LogOut, Settings, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaShieldAlt as Shield } from 'react-icons/fa'
import UserInfo from './user-info'

export default function NavBar() {
    const pathName = usePathname()
    const CONTENTS = [
        {
            icon: Home,
            text: 'Inicio',
            href: '/',
        },
        {
            icon: ShoppingCart,
            text: 'Loja',
            disabled: true,
            href: '/store',
        },
        {
            icon: Flag,
            text: 'Suporte',
            href: '/support',
        },
        {
            icon: Settings,
            text: 'Configurações',
            href: '/settings',
        },
    ]
    const SOCIALS = [
        {
            icon: InstagramLogoIcon,
            label: 'Instagram',
            href: 'https://www.google.com',
        },
        {
            icon: TwitterLogoIcon,
            label: 'Twitter',
            href: 'https://www.google.com',
        },
        {
            icon: DiscordLogoIcon,
            label: 'Discord',
            href: 'https://www.google.com',
        },
    ]
    return (
        <nav className="flex w-full max-w-xs flex-col border-r pb-0">
            <UserInfo />
            <div className="w-full items-center justify-center bg-[#29922D] px-14 py-2">
                <button className="flex w-full items-center justify-center rounded-lg bg-[#0D4F10] px-9 py-1 text-base font-black ">
                    <Shield /> <p className="flex-1">Conectar</p>
                </button>
            </div>

            <ul className="my-2 flex flex-col gap-6 px-14 py-2 pr-9 font-medium">
                {CONTENTS.map((item, index) => (
                    <li
                        className="flex w-full cursor-pointer items-center justify-between rounded border border-foreground/0 px-3 text-zinc-400 transition-colors duration-300  hover:text-white data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-20"
                        key={index}
                        data-disabled={item.disabled}
                    >
                        <Link href={item.href} className="flex items-center gap-8">
                            <item.icon className="size-5" />
                            {item.text}
                        </Link>
                    </li>
                ))}
                <div className="h-[1px] w-full bg-white/20"></div>
                <ul>
                    {SOCIALS.map((item, index) => (
                        <li
                            className="flex w-full cursor-pointer items-center justify-between p-2 px-3 text-xs text-zinc-400 transition-colors duration-300 hover:text-white"
                            key={index}
                        >
                            <Link href={item.href} className="flex items-center gap-4">
                                <item.icon className="size-4 text-white" />
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="h-[1px] w-full bg-white/20"></div>
                <li className="flex w-full cursor-pointer items-center justify-between rounded border border-foreground/0 px-3 text-zinc-400 transition-colors duration-300  hover:text-white data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-20">
                    <div className="flex items-center gap-8">
                        <LogOut className="size-5 transition-all duration-300" />
                        Sair
                    </div>
                </li>
            </ul>
        </nav>
    )
}
