'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

type QuestionFormData = {
    question: string
}

type SavedQuestion = {
    id: string
    question: string
    createdAt: string
}

const STORAGE_KEY = 'solvedesk-ai-questions'

const QuestionForm = () => {
    const [questions, setQuestions] = useState<SavedQuestion[]>([])

    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting },
    } = useForm<QuestionFormData>()

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY)

        if (saved) {
            setQuestions(JSON.parse(saved))
        }
    }, [])

    const onSubmit = (data: QuestionFormData) => {
        if (!data.question.trim()) return

        const newQuestion: SavedQuestion = {
            id: crypto.randomUUID(),
            question: data.question,
            createdAt: new Date().toISOString(),
        }

        const updatedQuestions = [...questions, newQuestion]

        setQuestions(updatedQuestions)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedQuestions))

        reset()
    }

    return (
        <div className="relative z-10 border-t border-white/10 bg-black/20 p-6 backdrop-blur-2xl">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mx-auto flex max-w-4xl items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 backdrop-blur-xl"
            >
                <input
                    type="text"
                    placeholder="Napisz np. Szukam mieszkania 3-pokojowego w Warszawie do 900 tys..."
                    className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-neutral-500"
                    {...register('question', {
                        required: true,
                        minLength: 2,
                    })}
                />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-neutral-200 disabled:opacity-50"
                >
                    Wyślij
                </button>
            </form>
        </div>
    )
}

export default QuestionForm