'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import Link from 'next/link'

import MainNavigation from '../components/MainNavigation'
import QuestionForm from '../components/QuestionForm'
import Brand from '../components/layout/Brand'
import Insight from '../components/layout/Insight'
import Footer from '../components/layout/Footer'

type LayoutProps = {
    children: ReactNode
}

type Theme = 'light' | 'dark'

const MainLayout = ({ children }: LayoutProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [theme, setTheme] = useState<Theme>('dark')

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null
        const currentTheme = savedTheme ?? 'dark'

        setTheme(currentTheme)

        document.documentElement.classList.toggle(
            'dark',
            currentTheme === 'dark'
        )
    }, [])

    const toggleTheme = () => {
        const newTheme: Theme = theme === 'dark' ? 'light' : 'dark'

        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)

        document.documentElement.classList.toggle(
            'dark',
            newTheme === 'dark'
        )
    }

    return (
        <div className="min-h-screen overflow-hidden bg-background text-white dark:text-white">
            <div className="flex min-h-screen flex-col lg:grid lg:h-screen lg:grid-cols-[280px_1fr]">
                <aside className="relative border-b border-white/10 bg-surface/40 backdrop-blur-2xl lg:flex lg:h-screen lg:flex-col lg:border-b-0 lg:border-r">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.12),transparent_40%)]" />

                    <div className="relative z-10 flex items-center justify-between px-5 py-5 lg:block">
                        <Link href="/">
                            <Brand
                                name="SolveDesk AI Template"
                                description="New template"
                            />
                        </Link>

                        <div className="flex items-center gap-2 lg:hidden">
                            <button
                                type="button"
                                onClick={toggleTheme}
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10"
                            >
                                {theme === 'dark' ? (
                                    <Sun className="h-5 w-5" />
                                ) : (
                                    <Moon className="h-5 w-5" />
                                )}
                            </button>

                            <button
                                type="button"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10"
                            >
                                {isMenuOpen ? (
                                    <X className="h-5 w-5" />
                                ) : (
                                    <Menu className="h-5 w-5" />
                                )}
                            </button>
                        </div>

                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="mt-4 hidden w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10 lg:flex"
                        >
                            {theme === 'dark' ? (
                                <>
                                    <Sun className="h-4 w-4" />
                                    Light mode
                                </>
                            ) : (
                                <>
                                    <Moon className="h-4 w-4" />
                                    Dark mode
                                </>
                            )}
                        </button>
                    </div>

                    <div
                        className={`
                            relative z-10 overflow-hidden transition-all duration-300
                            lg:flex lg:flex-1 lg:flex-col
                            ${isMenuOpen ? 'max-h-[800px]' : 'max-h-0'}
                            lg:max-h-none
                        `}
                    >
                        <div className="px-5 pb-5">
                            <button
                                type="button"
                                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/15"
                            >
                                + New conversation
                            </button>
                        </div>

                        <div className="px-5">
                            <MainNavigation />
                        </div>

                        <div className="mt-6 px-5 pb-5 lg:mt-auto">
                            <Insight
                                title="Personalizacja AI"
                                description="Pomóż nam poznać Twoje preferencje, abyśmy mogli przygotować ofertę idealnie dopasowaną do Twoich potrzeb."
                                CTA="Przejdź do personalizacji"
                            />

                            <Footer />
                        </div>
                    </div>
                </aside>

                <main className="relative flex min-h-[calc(100vh-180px)] flex-1 flex-col overflow-hidden bg-background lg:h-screen lg:min-h-0">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute left-[-30%] top-[-10%] h-[360px] w-[360px] rounded-full bg-primary/20 blur-3xl lg:left-[-10%] lg:h-[500px] lg:w-[500px]" />

                        <div className="absolute bottom-[-15%] right-[-30%] h-[360px] w-[360px] rounded-full bg-accent/20 blur-3xl lg:right-[-10%] lg:h-[500px] lg:w-[500px]" />

                        <div className="absolute left-[25%] top-[25%] h-[220px] w-[220px] rounded-full bg-border/20 blur-3xl lg:left-[35%] lg:top-[20%] lg:h-[300px] lg:w-[300px]" />

                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_35%)]" />
                    </div>

                    <div className="relative z-10 min-h-0 flex-1 overflow-y-auto">
                        {children}
                    </div>
                    <div className='md:block hidden'>
                        <QuestionForm />
                    </div>
                </main>
                <footer className='block md:hidden'>
                    <QuestionForm />
                </footer>
            </div>
        </div>
    )
}

export default MainLayout