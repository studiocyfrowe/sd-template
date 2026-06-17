'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
    {
        label: 'O nas',
        href: '/about-us',
    },
    {
        label: 'Usługi',
        href: '/services',
    },
    {
        label: 'Portfolio',
        href: '/portfolio',
    },
    {
        label: 'Przykładowa oferta',
        href: '/example-offer',
    },
    {
        label: 'Kontakt',
        href: '/contact',
    }
]

const MainNavigation = () => {
    const pathname = usePathname()

    return (
        <nav className="relative z-10 space-y-1">
            {navItems.map((item) => {
                const isActive = pathname === item.href

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center rounded-2xl px-4 py-3 text-sm transition ${isActive
                                ? 'border border-white/10 bg-white/10 font-medium text-white backdrop-blur'
                                : 'text-neutral-400 hover:bg-white/5 hover:text-white'
                            }`}
                    >
                        {item.label}
                    </Link>
                )
            })}
        </nav>
    )
}

export default MainNavigation