import Link from "next/link"

export default function Nav () {
    return (
      <header className="bg-white p-6 shadow-md flex justify-between items-center">
        <div className="text-3xl font-bold">Mi Blog</div>
        <nav className="space-x-6">
          <Link href="/">Inicio</Link>
          <Link href="https://www.youtube.com/@Wero09Anano/">Sobre mí</Link>
          <Link href="/temas">Temas</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
      </header>
    )
}