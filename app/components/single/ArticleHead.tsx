import React from "react"

const ArticleHead = () => {
    return (
        <div className="mb-10">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
                Estate AI
            </p>

            <h1 className="text-5xl font-semibold tracking-tight text-white">
                Najciekawsze inwestycje
            </h1>

            <p className="mt-4 max-w-2xl text-neutral-400">
                Przegląd wybranych inwestycji mieszkaniowych wraz ze statusem,
                lokalizacją i charakterem projektu.
            </p>
        </div>
    )
}

export default ArticleHead