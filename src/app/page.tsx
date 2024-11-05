import Nav from "app/components/Nav/nav";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="font-sans">
      <Nav/>
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100">
        <h1 className="text-5xl font-bold mb-4">
          Explorando temas de salud, sociedad y bienestar
        </h1>
        <p className="text-gray-700 text-xl">
          Un espacio para aprender y reflexionar sobre temas de actualidad.
        </p>
      </section>

      {/* Blog Sections */}
      <section className="p-10 space-y-12">
        <div className="bg-green-100 p-8 rounded-md flex items-center">
          <Image src="/drogas.jpg" width={250} height={250} alt="Imagen sobre el tema de drogas" className="rounded-xl mr-8" />
          <div>
            <h2 className="text-4xl font-bold text-teal-700 mb-4">¿Qué son las drogas?</h2>
            <p className="text-gray-700 text-2xl">
              Son sustancias que, al ingresar en el organismo, pueden alterar su funcionamiento físico o mental.
            </p>
            <Link href="/queSon/">
              <button className="mt-4 bg-teal-700 text-white px-4 py-2 rounded">Leer más</button>
            </Link>
          </div>
        </div>

        <div className="bg-white p-8 rounded-md flex items-center">
          <div className="mr-8">
            <h3 className="text-3xl font-semibold text-teal-600 mb-4">Clasificación:</h3>
            <ul className="list-disc list-inside text-gray-700 text-2xl">
              <li><strong>Legales:</strong> Drogas cuyo consumo está regulado en muchas sociedades, como el alcohol, tabaco y cafeína.</li>
              <li><strong>Ilegales:</strong> Drogas prohibidas en la mayoría de los países, como la cocaína, heroína y metanfetaminas.</li>
            </ul>
            <Link href="/leer-mas/clasificacion">
              <button className="mt-4 bg-teal-700 text-white px-4 py-2 rounded">Leer más</button>
            </Link>
          </div>
          <Image src="/drogas6.jpg" width={250} height={250} alt="Imagen sobre la clasificación de drogas" className="rounded-xl" />
        </div>

        <div className="bg-green-100 p-8 rounded-md flex items-center">
          <Image src="/drogas7.jpg" width={250} height={250} alt="Imagen sobre efectos en el cuerpo" className="rounded-xl mr-8" />
          <div>
            <h3 className="text-3xl font-semibold text-teal-600 mb-4">Efectos en el cuerpo:</h3>
            <ul className="list-disc list-inside text-gray-700 text-2xl">
              <li>Sistema cardiovascular: Aumento del riesgo de arritmias y problemas cardíacos.</li>
              <li>Hígado y riñones: Daños por el abuso de alcohol y otras sustancias.</li>
              <li>Sistema digestivo: Pérdida de apetito y malnutrición.</li>
              <li>Sistema inmunológico: Debilitamiento que aumenta la susceptibilidad a infecciones.</li>
            </ul>
            <Link href="/leer-mas/efectos-cuerpo">
              <button className="mt-4 bg-teal-700 text-white px-4 py-2 rounded">Leer más</button>
            </Link>
          </div>
        </div>

        <div className="bg-white p-8 rounded-md flex items-center">
          <div className="mr-8">
            <h3 className="text-3xl font-semibold text-teal-600 mb-4">Efectos en la mente:</h3>
            <ul className="list-disc list-inside text-gray-700 text-2xl">
              <li>Depresión: La euforia inicial suele ser seguida por una “bajada” emocional.</li>
              <li>Psicosis y alucinaciones: Drogas alucinógenas y estimulantes pueden causar episodios de psicosis.</li>
              <li>Toma de decisiones y autocontrol: Afectación del juicio y aumento de conductas impulsivas.</li>
            </ul>
            <Link href="/leer-mas/efectos-mente">
              <button className="mt-4 bg-teal-700 text-white px-4 py-2 rounded">Leer más</button>
            </Link>
          </div>
          <Image src="/drogas4.jpg" width={250} height={250} alt="Imagen sobre efectos en la mente" className="rounded-xl" />
        </div>

        <div className="bg-green-100 p-8 rounded-md flex items-center">
          <Image src="/drogas2.jpg" width={250} height={250} alt="Imagen sobre consecuencias sociales" className="rounded-xl mr-8" />
          <div>
            <h3 className="text-3xl font-semibold text-teal-600 mb-4">Consecuencias sociales y legales:</h3>
            <p className="text-gray-700 text-2xl">
              Las repercusiones dependen del tipo de droga, la frecuencia de uso y las leyes de cada país.
            </p>
            <Link href="/leer-mas/consecuencias-sociales">
              <button className="mt-4 bg-teal-700 text-white px-4 py-2 rounded">Leer más</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-700 text-white p-10 text-center">
        <p>&copy; 2024 Blog | Todos los derechos reservados para Wero09Anano</p>
        <p>&copy; Programed by Wero09A(Felipe A.)</p>

        <nav className="space-x-6 mt-4">
          <Link href="/">Inicio</Link>
          <Link href="https://www.youtube.com/@Wero09Anano/">Sobre mí</Link>
          <Link href="/temas">Temas</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
      </footer>
    </div>
  );
}
