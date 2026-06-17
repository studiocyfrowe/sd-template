import MainLayout from "../layouts/MainLayout"

const Contact = () => {
  return (
    <MainLayout>
      <section className="flex flex-1 flex-col">
        <header className="border-b border-white/10 px-8 py-5">
          <h2 className="text-lg font-medium text-white">
            Kontakt
          </h2>
        </header>

        <div className="mx-auto w-full max-w-6xl px-6 py-10">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
              Porozmawiajmy o Twojej reklamie
            </p>

            <h1 className="mb-5 text-5xl font-semibold tracking-tight text-white">
              Skontaktuj się z nami
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-7 text-neutral-400">
              Opowiedz nam o swojej marce, kampanii lub planowanej realizacji.
              Przygotujemy propozycję dopasowaną do Twoich potrzeb.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
            <div className="space-y-4">
              <ContactCard
                title="Telefon"
                value="+48 500 000 000"
                description="Zadzwoń i omów szczegóły kampanii."
              />

              <ContactCard
                title="E-mail"
                value="kontakt@studioreklamy.pl"
                description="Wyślij brief, pytanie lub zapytanie ofertowe."
              />

              <ContactCard
                title="Adres"
                value="ul. Reklamowa 12, Wrocław"
                description="Zapraszamy do naszego biura po wcześniejszym kontakcie."
              />
            </div>

            <form className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Imię i nazwisko" placeholder="Jan Kowalski" />
                <Field label="Firma" placeholder="Nazwa firmy" />
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <Field label="E-mail" placeholder="kontakt@firma.pl" />
                <Field label="Telefon" placeholder="+48 000 000 000" />
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm text-neutral-400">
                  Temat
                </label>

                <select className="h-12 w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 text-sm text-white outline-none transition focus:border-white/30">
                  <option>Wybierz temat</option>
                  <option>Nośniki reklamowe</option>
                  <option>Projekt graficzny</option>
                  <option>Branding</option>
                  <option>Druk i produkcja</option>
                  <option>Inne</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm text-neutral-400">
                  Wiadomość
                </label>

                <textarea
                  rows={6}
                  placeholder="Opisz, czego potrzebujesz..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition focus:border-white/30"
                />
              </div>

              <button
                type="button"
                className="mt-5 w-full rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
              >
                Wyślij zapytanie
              </button>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

type ContactCardProps = {
  title: string
  value: string
  description: string
}

const ContactCard = ({ title, value, description }: ContactCardProps) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
      <p className="mb-3 text-sm text-neutral-500">
        {title}
      </p>

      <h3 className="text-xl font-semibold text-white">
        {value}
      </h3>

      <p className="mt-3 text-sm leading-6 text-neutral-400">
        {description}
      </p>
    </div>
  )
}

type FieldProps = {
  label: string
  placeholder: string
}

const Field = ({ label, placeholder }: FieldProps) => {
  return (
    <div>
      <label className="mb-2 block text-sm text-neutral-400">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="h-12 w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 text-sm text-white placeholder:text-neutral-600 outline-none transition focus:border-white/30"
      />
    </div>
  )
}

export default Contact