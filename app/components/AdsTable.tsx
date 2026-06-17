import { adsMedia } from "../mocks/adsMedia"

const AdvertisingTable = () => {
    return (
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-white/10 text-left text-xs uppercase tracking-[0.18em] text-neutral-500">
                            <th className="px-5 py-5">Nośnik</th>
                            <th className="px-5 py-5">Typ</th>
                            <th className="px-5 py-5">Lokalizacja</th>
                            <th className="px-5 py-5">Powierzchnia</th>
                            <th className="px-5 py-5">Ruch</th>
                            <th className="px-5 py-5">Podświetlenie</th>
                            <th className="px-5 py-5">Cena</th>
                            <th className="px-5 py-5">Status</th>
                            <th className="px-5 py-5">Akcja</th>
                        </tr>
                    </thead>

                    <tbody>
                        {adsMedia.map((media) => (
                            <tr
                                key={media.id}
                                className="border-b border-white/10 hover:bg-white/[0.04]"
                            >
                                <td className="px-5 py-5 font-semibold text-white">
                                    {media.name}
                                </td>

                                <td className="px-5 py-5 text-neutral-400">
                                    {media.type}
                                </td>

                                <td className="px-5 py-5 text-neutral-400">
                                    {media.location}
                                </td>

                                <td className="px-5 py-5 text-neutral-400">
                                    {media.size}
                                </td>

                                <td className="px-5 py-5 text-neutral-400">
                                    {media.traffic}
                                </td>

                                <td className="px-5 py-5 text-neutral-400">
                                    {media.illumination}
                                </td>

                                <td className="px-5 py-5 font-medium text-white">
                                    {media.price}
                                </td>

                                <td className="px-5 py-5">
                                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                                        {media.availability}
                                    </span>
                                </td>

                                <td className="px-5 py-5">
                                    <button className="rounded-xl bg-white px-4 py-2 text-black">
                                        Szczegóły
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdvertisingTable