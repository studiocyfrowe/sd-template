import SingleCard from "../components/list/SingleCard"
import ArticleHead from "../components/single/ArticleHead"
import MainLayout from "../layouts/MainLayout"
import { investments } from "../mocks/investments"

const Investments = () => {
    return (
        <MainLayout>
            <section className="flex min-h-full flex-col">
                <header className="border-b border-white/10 px-8 py-5">
                    <h2 className="text-lg font-medium text-white">
                        Inwestycje deweloperskie
                    </h2>
                </header>

                <div className="mx-auto w-full max-w-7xl px-8 py-10">
                    <ArticleHead/>

                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {investments.map((investment) => (
                            <SingleCard
                                key={investment.name}
                                name={investment.name}
                                status={investment.status}
                                image={investment.image}
                                description={investment.description}
                                address={investment.address}/>
                        ))}
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default Investments