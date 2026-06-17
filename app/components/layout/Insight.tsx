import React from "react"

interface InsightProps {
    title: string
    description: string
    CTA: string
}

const Insight : React.FC<InsightProps> = ({ title, description, CTA }) => {
    return (
        <div className="relative z-10 mt-auto overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(54,95,153,0.18),transparent_45%)]" />

            <div className="relative z-10">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                    { title }
                </p>

                <p className="mt-3 text-sm leading-6 text-neutral-300">
                    { description }
                </p>

                <button className="mt-4 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:scale-105">
                    { CTA }
                </button>
            </div>
        </div>
    )
}

export default Insight