import SingleCard from "../components/list/SingleCard"
import MainLayout from "../layouts/MainLayout"
import { investments } from "../mocks/investments"

const Portfolio = () => {
    return (
        <MainLayout>
            <section className="flex min-h-full flex-col">
                <header className="border-b border-white/10 px-8 py-5">
                    <h2 className="text-lg font-medium text-white">
                        Portfolio
                    </h2>
                </header>

                <div className="mx-auto w-full max-w-7xl px-8 py-10">
                    <div className="mb-12 text-center">
                        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
                            Nasze realizacje
                        </p>

                        <h1 className="mb-5 text-5xl font-semibold tracking-tight text-white">
                            Projekty, które budują widoczność marek
                        </h1>

                        <p className="mx-auto max-w-2xl text-base leading-7 text-neutral-400">
                            Zobacz wybrane realizacje graficzne, reklamowe i brandingowe —
                            od identyfikacji wizualnej po nośniki zewnętrzne, druk i montaż.
                        </p>
                    </div>

                    <div className="mb-10 grid gap-4 md:grid-cols-3">
                        <PortfolioStat value="500+" label="zrealizowanych projektów" />
                        <PortfolioStat value="10+" label="lat doświadczenia" />
                        <PortfolioStat value="7" label="specjalistów w zespole" />
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {investments.map((project) => (
                            <SingleCard
                                key={project.name}
                                name={project.name}
                                status={project.status}
                                image={project.image}
                                description={project.description}
                                address={project.address}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

type PortfolioStatProps = {
    value: string
    label: string
}

const PortfolioStat = ({ value, label }: PortfolioStatProps) => {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl">
            <h3 className="text-3xl font-semibold text-white">
                {value}
            </h3>

            <p className="mt-2 text-sm text-neutral-400">
                {label}
            </p>
        </div>
    )
}

export default Portfolio