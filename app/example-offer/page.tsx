import AdsCarousel from "../components/AdsCarousel"
import AdvertisingTable from "../components/AdsTable"
import MainLayout from "../layouts/MainLayout"

const Financing = () => {
  return (
    <MainLayout>
      <section className="flex flex-1 flex-col">
        <header className="border-b border-white/10 px-8 py-5">
          <h2 className="text-lg font-medium text-white">
            Oferta nośników reklamowych
          </h2>
        </header>

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-10">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
              Media reklamowe
            </p>

            <h1 className="mb-5 text-5xl font-semibold tracking-tight text-white">
              Wybierz nośnik dla swojej kampanii
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-7 text-neutral-400">
              Sprawdź dostępne powierzchnie reklamowe, porównaj lokalizacje,
              formaty, zasięg oraz dopasuj nośnik do celów swojej marki.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <p className="mb-3 text-sm text-neutral-400">
                Dostępne lokalizacje
              </p>

              <h3 className="text-3xl font-semibold text-white">
                24+
              </h3>

              <p className="mt-4 text-sm leading-6 text-neutral-500">
                Nośniki reklamowe w punktach o dużym natężeniu ruchu
                pieszych i samochodów.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <p className="mb-3 text-sm text-neutral-400">
                Formaty reklamy
              </p>

              <h3 className="text-3xl font-semibold text-white">
                8 typów
              </h3>

              <p className="mt-4 text-sm leading-6 text-neutral-500">
                Billboardy, citylighty, kasetony, siatki mesh, reklama LED
                oraz oznakowanie zewnętrzne.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <p className="mb-3 text-sm text-neutral-400">
                Start kampanii
              </p>

              <h3 className="text-3xl font-semibold text-white">
                7 dni
              </h3>

              <p className="mt-4 text-sm leading-6 text-neutral-500">
                Przygotowanie projektu, produkcja materiałów i uruchomienie
                ekspozycji w wybranej lokalizacji.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <button className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left transition hover:bg-white/[0.07]">
              <h3 className="mb-2 text-lg font-medium text-white">
                Dobierz nośnik do kampanii
              </h3>

              <p className="text-sm leading-6 text-neutral-400">
                Określ cel kampanii, budżet i lokalizację, a pomożemy dobrać
                najlepszy format reklamy.
              </p>
            </button>

            <button className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left transition hover:bg-white/[0.07]">
              <h3 className="mb-2 text-lg font-medium text-white">
                Sprawdź dostępność lokalizacji
              </h3>

              <p className="text-sm leading-6 text-neutral-400">
                Zweryfikuj, które powierzchnie reklamowe są dostępne w
                wybranym terminie i mieście.
              </p>
            </button>

            <button className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left transition hover:bg-white/[0.07]">
              <h3 className="mb-2 text-lg font-medium text-white">
                Zamów projekt graficzny
              </h3>

              <p className="text-sm leading-6 text-neutral-400">
                Przygotujemy czytelny, estetyczny i skuteczny projekt
                dopasowany do wybranego formatu.
              </p>
            </button>

            <button className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left transition hover:bg-white/[0.07]">
              <h3 className="mb-2 text-lg font-medium text-white">
                Zaplanuj ekspozycję reklamy
              </h3>

              <p className="text-sm leading-6 text-neutral-400">
                Ustal harmonogram kampanii, czas emisji oraz zakres produkcji
                i montażu materiałów.
              </p>
            </button>

            <div className="col-span-2">
              <AdsCarousel/>
            </div>

            <div className="col-span-2">
              <AdvertisingTable />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default Financing