"use client"

import { useMemo, useState } from "react"
import MainLayout from "../layouts/MainLayout"

const apartments = [
    {
        number: "A.01",
        area: "43.26 m²",
        balcony: "3.70 m²",
        terrace: "-",
        terrace2: "-",
        rooms: 2,
        price: "649 000 zł",
        pricePerMeter: "15 002 zł/m²",
        status: "wolne",
    },
    {
        number: "B.12",
        area: "75.82 m²",
        balcony: "-",
        terrace: "14.00 m²",
        terrace2: "14.30 m²",
        rooms: 4,
        price: "949 000 zł",
        pricePerMeter: "12 517 zł/m²",
        status: "wolne",
    },
]

const filterFields = [
    { label: "Wszystkie pola", value: "all" },
    { label: "Nr mieszkania", value: "number" },
    { label: "Pow. użytkowa", value: "area" },
    { label: "Balkon", value: "balcony" },
    { label: "Taras", value: "terrace" },
    { label: "Taras 2", value: "terrace2" },
    { label: "Pokoje", value: "rooms" },
    { label: "Cena", value: "price" },
    { label: "Cena za m²", value: "pricePerMeter" },
    { label: "Dostępność", value: "status" },
] as const

type FilterField = (typeof filterFields)[number]["value"]

export default function ApartmentsTable() {
    const [search, setSearch] = useState("")
    const [filterField, setFilterField] = useState<FilterField>("all")

    const filteredApartments = useMemo(() => {
        const query = search.toLowerCase().trim()

        if (!query) return apartments

        return apartments.filter((apartment) => {
            if (filterField === "all") {
                return Object.values(apartment).some((value) =>
                    String(value).toLowerCase().includes(query)
                )
            }

            return String(apartment[filterField]).toLowerCase().includes(query)
        })
    }, [search, filterField])

    return (
        <MainLayout>
            <div className="col-span-5 flex h-full flex-col gap-6 text-white">
                <div>
                    <p className="mb-2 text-sm text-neutral-500">EstateValue</p>
                    <h1 className="text-3xl font-semibold tracking-tight">
                        Dostępne mieszkania
                    </h1>
                    <p className="mt-2 max-w-2xl text-sm text-neutral-400">
                        Przeglądaj lokale, porównuj ceny i zapisuj wybrane mieszkania do
                        ulubionych.
                    </p>
                </div>

                <div className="grid gap-3 rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 backdrop-blur md:grid-cols-[240px_1fr]">
                    <select
                        value={filterField}
                        onChange={(e) => setFilterField(e.target.value as FilterField)}
                        className="h-12 rounded-2xl border border-white/10 bg-neutral-950 px-4 text-sm text-white outline-none transition focus:border-white/30"
                    >
                        {filterFields.map((field) => (
                            <option key={field.value} value={field.value}>
                                {field.label}
                            </option>
                        ))}
                    </select>

                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Wpisz szukaną frazę, np. A.01, 4, wolne, 949 000 zł..."
                        className="h-12 rounded-2xl border border-white/10 bg-neutral-950 px-4 text-sm text-white placeholder:text-neutral-600 outline-none transition focus:border-white/30"
                    />
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/20 backdrop-blur">
                    <div className="border-b border-white/10 px-5 py-4 text-sm text-neutral-400">
                        Znaleziono:{" "}
                        <span className="font-semibold text-white">
                            {filteredApartments.length}
                        </span>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[1200px] border-collapse text-sm">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/[0.04] text-left text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                                    <th className="px-5 py-5">Nr</th>
                                    <th className="px-5 py-5">Pow. użytkowa</th>
                                    <th className="px-5 py-5">Balkon</th>
                                    <th className="px-5 py-5">Taras</th>
                                    <th className="px-5 py-5">Taras 2</th>
                                    <th className="px-5 py-5">Pokoje</th>
                                    <th className="px-5 py-5">Cena</th>
                                    <th className="px-5 py-5">Cena / m²</th>
                                    <th className="px-5 py-5">Status</th>
                                    <th className="px-5 py-5">Ulubione</th>
                                    <th className="px-5 py-5">Rzut</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredApartments.map((apartment) => (
                                    <tr
                                        key={apartment.number}
                                        className="border-b border-white/10 transition hover:bg-white/[0.05]"
                                    >
                                        <td className="px-5 py-5">
                                            <span className="rounded-2xl border border-white/10 bg-white/10 px-3 py-2 font-semibold text-white">
                                                {apartment.number}
                                            </span>
                                        </td>

                                        <td className="px-5 py-5 text-neutral-300">
                                            {apartment.area}
                                        </td>
                                        <td className="px-5 py-5 text-neutral-300">
                                            {apartment.balcony}
                                        </td>
                                        <td className="px-5 py-5 text-neutral-300">
                                            {apartment.terrace}
                                        </td>
                                        <td className="px-5 py-5 text-neutral-300">
                                            {apartment.terrace2}
                                        </td>
                                        <td className="px-5 py-5 text-neutral-300">
                                            {apartment.rooms}
                                        </td>

                                        <td className="px-5 py-5 font-semibold text-white">
                                            {apartment.price}
                                        </td>

                                        <td className="px-5 py-5 text-neutral-400">
                                            {apartment.pricePerMeter}
                                        </td>

                                        <td className="px-5 py-5">
                                            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                                                {apartment.status}
                                            </span>
                                        </td>

                                        <td className="px-5 py-5">
                                            <button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-neutral-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white">
                                                <span className="text-lg">♡</span>
                                                Dodaj
                                            </button>
                                        </td>

                                        <td className="px-5 py-5">
                                            <button className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200">
                                                Zobacz rzut
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                                {filteredApartments.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan={11}
                                            className="px-5 py-12 text-center text-neutral-500"
                                        >
                                            Brak mieszkań spełniających kryteria wyszukiwania.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}