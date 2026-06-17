import MainLayout from "../layouts/MainLayout"

const results = [
    {
        type: "Mieszkanie",
        title: "3-pokojowe mieszkanie na Mokotowie",
        location: "Warszawa, Mokotów",
        price: "890 000 zł",
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        description:
            "Jasne mieszkanie z balkonem, blisko komunikacji miejskiej i terenów zielonych.",
    },
    {
        type: "Artykuł",
        title: "Czy Mokotów to dobra lokalizacja inwestycyjna?",
        location: "Poradnik lokalizacyjny",
        price: null,
        image: null,
        description:
            "Analiza cen, komunikacji, dostępności usług oraz potencjału wynajmu mieszkań.",
    },
    {
        type: "Mieszkanie",
        title: "Apartament 42 m² w inwestycji Nova Mokotów",
        location: "ul. Cybernetyki 12, Warszawa",
        price: "780 000 zł",
        description:
            "Nowoczesny apartament w inwestycji premium. Układ 2-pokojowy, balkon, parking podziemny i wysoki standard części wspólnych.",
    },
    {
        type: "Artykuł",
        title: "Jak ocenić opłacalność zakupu mieszkania?",
        location: "Finansowanie i inwestowanie",
        price: null,
        description:
            "Praktyczny przewodnik po cenie za m², kosztach transakcyjnych, stopie zwrotu i ryzykach związanych z zakupem nieruchomości.",
    },
]

const SearchResults = () => {
    return (
        <MainLayout>
            <section className="flex min-h-full flex-col">
                <header className="border-b border-white/10 px-8 py-5">
                    <h2 className="text-lg font-medium text-white">
                        Wyniki wyszukiwania AI
                    </h2>
                </header>

                <div className="mx-auto w-full max-w-6xl px-8 py-10">
                    <div className="mb-10">
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
                            Estate AI Search
                        </p>

                        <h1 className="text-5xl font-semibold tracking-tight text-white">
                            Najlepiej dopasowane wyniki
                        </h1>

                        <p className="mt-4 max-w-3xl text-neutral-400">
                            Wyniki mogą zawierać mieszkania, inwestycje oraz artykuły
                            dopasowane do zapytania użytkownika.
                        </p>
                    </div>

                    <div className="mb-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
                        <p className="text-sm text-neutral-500">Zapytanie użytkownika</p>

                        <p className="mt-2 text-lg text-white">
                            Szukam mieszkania 3-pokojowego w Warszawie do 900 tys. zł,
                            najlepiej w dobrej lokalizacji pod wynajem.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {results.map((result) => (
                            <article
                                key={result.title}
                                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.07]"
                            >
                                <div className="flex flex-col md:flex-row">
                                    {result.image && (
                                        <div className="h-[240px] md:h-auto md:w-[320px]">
                                            <img
                                                src={`${result.image}?auto=format&fit=crop&w=900&q=80`}
                                                alt={result.title}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    )}

                                    <div className="flex-1 p-6">
                                        <div className="mb-4 flex items-start justify-between gap-4">
                                            <div>
                                                <span
                                                    className={`
              rounded-full px-3 py-1 text-xs font-medium
              ${result.type === "Mieszkanie"
                                                            ? "bg-emerald-500/20 text-emerald-300"
                                                            : "bg-blue-500/20 text-blue-300"
                                                        }
            `}
                                                >
                                                    {result.type}
                                                </span>

                                                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                                                    {result.title}
                                                </h2>

                                                <p className="mt-2 text-sm text-neutral-500">
                                                    {result.location}
                                                </p>
                                            </div>

                                            {result.price && (
                                                <p className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                                                    {result.price}
                                                </p>
                                            )}
                                        </div>

                                        <p className="max-w-4xl text-sm leading-6 text-neutral-300">
                                            {result.description}
                                        </p>

                                        <div className="mt-6 flex items-center gap-3">
                                            <button className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-neutral-200">
                                                Otwórz wynik
                                            </button>

                                            <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10">
                                                Zapytaj o ten wynik
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default SearchResults