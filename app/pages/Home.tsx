import HomeCarousel from "../components/HomeCarousel"
import MainLayout from "../layouts/MainLayout"

const Home = () => {
    return (
        <MainLayout>
            <section className="flex h-[80vh] flex-col">
                <header className="border-b border-white/10 px-16 py-5">
                    <h2 className="text-lg font-medium text-white">
                        Poznajmy się!
                    </h2>
                </header>
                <div className="px-12 pt-5 pb-4">
                    <HomeCarousel />
                </div>
                <footer className="flex flex-row items-center justify-center space-x-4">
                    <div className="mt-2 flex flex-col items-center text-white/40">
                        <svg
                            className="h-3 w-3 animate-bounce"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>

                        <svg
                            className="-mt-2 h-5 w-5 animate-bounce"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                    <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                        Odkryj możliwości współpracy
                    </span>

                    <div className="mt-2 flex flex-col items-center text-white/40">
                        <svg
                            className="h-3 w-3 animate-bounce"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>

                        <svg
                            className="-mt-2 h-5 w-5 animate-bounce"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                </footer>
            </section>
        </MainLayout>
    )
}

export default Home