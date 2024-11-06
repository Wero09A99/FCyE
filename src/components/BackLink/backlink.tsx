import Link from "next/link"
export default function Backlink () {
    return (
        <Link href="/">
        <button className="mt-4 bg-teal-700 hover:bg-teal-600 text-white px-4 py-2 rounded-lg">Regresar al Blog</button>
        </Link>
    )
}