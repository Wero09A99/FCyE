import Image from "next/image"
import Link from "next/link"

export default function Nav () {
    return (
      <header className="bg-white p-6 shadow-md flex justify-between items-center">
        <div className=" flex gap-2 items-center text-3xl font-bold">Las drogas <Image src="/logo.png" width={100} height={100} alt="LOGO"/></div>
        <nav className="space-x-6">
        <Link href="https://www.youtube.com/@Wero09Anano/">Apoya al creador</Link>
        <Link href="/">Inicio</Link>
        <Link href="https://estrategiaenelaula.sep.gob.mx">Campañas</Link>
        <Link href="https://www.gob.mx/salud/conadic/acciones-y-programas/centro-de-atencion-ciudadana-contra-las-adicciones-134381">Linea de la vida</Link>
        <Link href="/developed">Desarrollado en...</Link>

        </nav>
      </header>
    )
}