import Link from "next/link"


export default function Footer () {
    return (
        <section>
      {/* Footer */}
      <footer className="bg-teal-700 text-white p-10 text-center">
      <p>&copy; 2024 Blog | Todos los derechos reservados para Wero09Anano</p>
      <p>&copy; Programed by Wero09A(Felipe A.)</p>

      <nav className="space-x-6 mt-4">
        <Link href="https://www.youtube.com/@Wero09Anano/">Apoya al creador</Link>
        <Link href="/">Inicio</Link>
        <Link href="https://estrategiaenelaula.sep.gob.mx">Campañas</Link>
        <Link href="https://www.gob.mx/salud/conadic/acciones-y-programas/centro-de-atencion-ciudadana-contra-las-adicciones-134381">Linea de la vida</Link>

      </nav>
      </footer>
        </section>

    )
}