// 🧩 3) Error UI (فين كيبان error)
"use client"
export default function Error({error, reset}) {
    return <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1>{error.name}</h1>
            <h2 className="text-xl font-bold">Something went wrong</h2>
<p>{error.message}</p>
            <h1>{error.digest}</h1>
            <button onClick={reset} className="">Reset</button>
        </div>
}