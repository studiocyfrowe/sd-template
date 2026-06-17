import MainLayout from "../layouts/MainLayout"

const InvestmentDetails = () => {
  return (
    <MainLayout>
      <section className="flex min-h-full flex-col">
        <header className="border-b border-white/10 px-8 py-5">
          <h2 className="text-lg font-medium text-white">
            Szczegóły inwestycji
          </h2>
        </header>

        <div className="mx-auto w-full max-w-7xl px-8 py-10">
          <div className="mb-8 overflow-hidden rounded-[2rem] border border-emerald-500/30 bg-emerald-500/[0.06]">
            <div className="relative h-[360px]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
                alt="Nova Mokotów Residence"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8">
                <span className="rounded-full bg-emerald-500/20 px-4 py-1.5 text-sm font-medium text-emerald-300 backdrop-blur-xl">
                  Dostępne
                </span>

                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white">
                  Nova Mokotów Residence
                </h1>

                <p className="mt-3 text-lg text-neutral-300">
                  ul. Cybernetyki 12, Warszawa
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <h2 className="mb-4 text-2xl font-semibold text-white">
                  Opis inwestycji
                </h2>

                <p className="leading-8 text-neutral-300">
                  Nowoczesna inwestycja apartamentowa w biznesowej części
                  Mokotowa. Projekt łączy wysoką jakość architektury,
                  funkcjonalne układy mieszkań oraz dostęp do infrastruktury
                  miejskiej. Lokalizacja sprawdzi się zarówno dla osób
                  szukających mieszkania do życia, jak i inwestorów
                  zainteresowanych wynajmem długoterminowym.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm text-neutral-500">Cena od</p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    720 000 zł
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm text-neutral-500">Metraże</p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    32–89 m²
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm text-neutral-500">Termin oddania</p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    Q4 2026
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <h2 className="mb-5 text-2xl font-semibold text-white">
                  Dane techniczne
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <Info label="Liczba budynków" value="3" />
                  <Info label="Liczba mieszkań" value="184" />
                  <Info label="Piętra" value="6–9" />
                  <Info label="Parking" value="Podziemny" />
                  <Info label="Komórki lokatorskie" value="Tak" />
                  <Info label="Standard" value="Premium" />
                  <Info label="Rynek" value="Pierwotny" />
                  <Info label="Deweloper" value="Estate Development Group" />
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <h2 className="mb-5 text-2xl font-semibold text-white">
                  Dostępne lokale
                </h2>

                <div className="space-y-3">
                  <Apartment rooms="2 pokoje" area="42 m²" price="780 000 zł" />
                  <Apartment rooms="3 pokoje" area="61 m²" price="1 050 000 zł" />
                  <Apartment rooms="4 pokoje" area="82 m²" price="1 390 000 zł" />
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <h2 className="mb-4 text-xl font-semibold text-white">
                  Lokalizacja
                </h2>

                <div className="mb-4 h-[320px] overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
                  <iframe
                    title="Mapa inwestycji"
                    src="https://www.google.com/maps?q=Cybernetyki%2012%20Warszawa&output=embed"
                    className="h-full w-full grayscale invert"
                    loading="lazy"
                  />
                </div>

                <p className="text-sm leading-6 text-neutral-400">
                  Inwestycja znajduje się w dobrze skomunikowanej części
                  Mokotowa, blisko biur, sklepów, restauracji oraz transportu
                  publicznego.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <h2 className="mb-5 text-xl font-semibold text-white">
                  Atuty lokalizacji
                </h2>

                <ul className="space-y-3 text-sm text-neutral-300">
                  <li>• 8 min do przystanku tramwajowego</li>
                  <li>• 12 min do stacji metra</li>
                  <li>• Blisko centrum biznesowego Mokotowa</li>
                  <li>• Restauracje, sklepy i usługi w okolicy</li>
                  <li>• Dobry potencjał wynajmu</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/[0.06] p-6 backdrop-blur-xl">
                <p className="text-sm text-emerald-300">Ocena AI</p>

                <p className="mt-3 text-4xl font-semibold text-white">
                  8.7 / 10
                </p>

                <p className="mt-4 text-sm leading-6 text-neutral-300">
                  Bardzo dobra inwestycja dla osób szukających mieszkania
                  w Warszawie z potencjałem najmu długoterminowego.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

type InfoProps = {
  label: string
  value: string
}

const Info = ({ label, value }: InfoProps) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-sm text-neutral-500">{label}</p>
      <p className="mt-1 font-medium text-white">{value}</p>
    </div>
  )
}

type ApartmentProps = {
  rooms: string
  area: string
  price: string
}

const Apartment = ({ rooms, area, price }: ApartmentProps) => {
  return (
    <div className="grid grid-cols-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm">
      <p className="font-medium text-white">{rooms}</p>
      <p className="text-neutral-400">{area}</p>
      <p className="text-right font-medium text-white">{price}</p>
    </div>
  )
}

export default InvestmentDetails