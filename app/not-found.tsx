import Link from "next/link"

export default function NotFound() {
  return (
    <main>
      <div className="flex flex-col gap-10 items-center justify-center min-h-screen w-full bg-white">
        <span>Error, Not Found</span>
        <Link href="/">Return Home</Link>
      </div>
    </main>
  )
}