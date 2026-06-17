import React from "react"

interface BrandProps {
    name: string
    description: string
}

const Brand : React.FC<BrandProps> = ({ name, description }) => {
    return (
        <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md">
                <div className="h-4 w-4 rounded-full bg-accent" />
            </div>
            <div>
                <h1 className="text-[15px] font-semibold tracking-tight">
                    { name }
                </h1>
                <p className="text-xs text-neutral-400">
                    { description }
                </p>
            </div>
        </div>
    )
}

export default Brand