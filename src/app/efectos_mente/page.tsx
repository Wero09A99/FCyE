import Backlink from "app/components/BackLink/backlink";
import Footer from "app/components/Footer/footer";
import Nav from "app/components/Nav/nav";
import Image from "next/image";

export default function Efectosmentepage() {
  return (
    <section className="p-8 font-sans bg-gray-300 min-h-screen">
      <Nav />
      <Image src="/cerebro.jpeg" width={500} height={100} alt="Drogas varias"
      className="absolute right-32 top-60 rounded-md"/>
      <h1 className="text-5xl font-bold text-teal-700 mt-10 mb-6">Efectos en la Mente</h1>

      <h2 className="text-4xl font-semibold text-teal-600 mt-10 mb-4">Depresión</h2>
      <p className="text-2xl w-[600px] text-gray-700 mb-4">
        La depresión es un efecto común del consumo de drogas, especialmente aquellas que alteran el sistema nervioso central. Después de la euforia inicial, los usuarios pueden experimentar síntomas de depresión, ansiedad y desesperanza.
      </p>

      <h2 className="text-4xl font-semibold text-teal-600 mt-10 mb-4">Psicosis y Alucinaciones</h2>
      <p className="text-2xl text-gray-700 mb-4">
        Algunas drogas, como los alucinógenos, pueden inducir psicosis y alucinaciones, alterando la percepción de la realidad, lo que puede resultar en episodios de paranoia y pérdida de contacto con la realidad.
      </p>

      <h2 className="text-4xl font-semibold text-teal-600 mt-10 mb-4">Toma de Decisiones y Autocontrol</h2>
      <p className="text-2xl text-gray-700 mb-4">
        Las drogas pueden afectar gravemente el juicio, la toma de decisiones y la capacidad de autocontrol. Esto puede llevar a comportamientos de riesgo, impulsividad, y tomar decisiones peligrosas sin considerar las consecuencias.
      </p>
      <Backlink/>

      <div className="mt-16">
        <Footer />
      </div>
    </section>
  );
}
