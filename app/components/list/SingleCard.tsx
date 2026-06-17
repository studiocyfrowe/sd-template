import { statusStyles } from "@/app/mocks/statusStyles"
import React from "react"

interface SingleCardProps {
    name: string
    status: string
    image: string
    address: string
    description: string
}

const SingleCard : React.FC<SingleCardProps> = ({
    name,
    status,
    image, 
    address,
    description
}) => {
    return (
        <article
            key={name}
            className={`
                  overflow-hidden rounded-3xl border backdrop-blur-xl
                  transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]
                  ${statusStyles[status]}
                `}
        >
            <div className="relative h-56 overflow-hidden">
                <div className="absolute left-4 top-4 z-10">
                    <span
                        className={`
                        rounded-full px-3 py-1 text-xs font-medium backdrop-blur-xl
                        ${status === "Dostępne"
                                ? "bg-emerald-500/20 text-emerald-300"
                                : status === "W sprzedaży"
                                    ? "bg-blue-500/20 text-blue-300"
                                    : status === "W budowie"
                                        ? "bg-amber-500/20 text-amber-300"
                                        : "bg-neutral-800/80 text-neutral-300"
                            }
                      `}
                    >
                        {status}
                    </span>
                </div>

                <img
                    src={`${image}?auto=format&fit=crop&w=900&q=80`}
                    alt={name}
                    className={`
                      h-full w-full object-cover transition duration-700 hover:scale-105
                      ${status === "Sprzedane"
                            ? "grayscale brightness-50"
                            : ""
                        }
                    `}
                />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                    {name}
                </h3>

                <p className="mt-2 text-sm text-neutral-400">
                    {address}
                </p>

                <p className="mt-4 text-sm leading-6 text-neutral-300">
                    {description}
                </p>

                <button className="mt-6 rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15">
                    Zobacz szczegóły
                </button>
            </div>
        </article>
    )
}

export default SingleCard