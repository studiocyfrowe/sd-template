import SingleCard from "../components/list/SingleCard"
import MainLayout from "../layouts/MainLayout"
import { crew } from "../mocks/crew"

const AboutUs = () => {
    return (
        <MainLayout>
            <section className="flex flex-1 flex-col">
                <header className="border-b border-white/10 px-8 py-5">
                    <h2 className="text-lg font-medium text-white">
                        O nas
                    </h2>
                </header>

                <div className="mx-auto w-full max-w-6xl px-6 py-10">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div>
                            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
                                Agencja reklamowa
                            </p>

                            <h1 className="mb-6 text-5xl font-semibold tracking-tight text-white">
                                Tworzymy reklamę, która przyciąga uwagę
                            </h1>

                            <p className="mb-6 text-base leading-8 text-neutral-400">
                                Od lat pomagamy firmom budować rozpoznawalność poprzez
                                nowoczesne projekty graficzne, reklamę zewnętrzną oraz
                                kompleksową identyfikację wizualną.
                            </p>

                            <p className="text-base leading-8 text-neutral-400">
                                Łączymy kreatywność, doświadczenie i nowoczesne technologie,
                                aby dostarczać rozwiązania, które skutecznie wspierają rozwój
                                biznesu naszych klientów.
                            </p>

                            <div className="mt-10 grid gap-4 md:grid-cols-3">
                                <StatCard value="10+" label="lat doświadczenia" />
                                <StatCard value="500+" label="realizacji" />
                                <StatCard value="100%" label="zaangażowania" />
                            </div>
                        </div>

                        <div>
                            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-2 backdrop-blur-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                                    alt="Nasz zespół"
                                    className="h-[550px] w-full rounded-[1.5rem] object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-20">
                        <div className="mb-10">
                            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
                                Nasz zespół
                            </p>

                            <h2 className="text-4xl font-semibold tracking-tight text-white">
                                Poznaj ludzi, którzy tworzą nasze projekty
                            </h2>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {crew.map((member) => (
                                <SingleCard
                                    key={member.name}
                                    name={member.name}
                                    status={member.position}
                                    image={member.image}
                                    description={member.description}
                                    address="Zespół kreatywny"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

type StatCardProps = {
    value: string
    label: string
}

const StatCard = ({ value, label }: StatCardProps) => {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <h3 className="text-3xl font-semibold text-white">
                {value}
            </h3>

            <p className="mt-2 text-sm text-neutral-400">
                {label}
            </p>
        </div>
    )
}

export default AboutUs