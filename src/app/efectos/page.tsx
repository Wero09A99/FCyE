import Backlink from "app/components/BackLink/backlink";
import Footer from "app/components/Footer/footer";
import Nav from "app/components/Nav/nav";
import Image from "next/image";

export default function Efectoscuerpopage() {
  return (
    <section className="p-8 font-sans bg-gray-300 min-h-screen">
      <Nav />
      <h1 className="text-5xl font-bold text-teal-700 mt-10 mb-6">Efectos en el Cuerpo</h1>

      <div className="flex flex-wrap justify-between gap-64 mt-10">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-teal-600 mb-4">Sistema Cardiovascular</h2>
          <p className="text-xl text-gray-700 mb-4">
            El consumo de sustancias como las drogas estimulantes puede afectar el sistema cardiovascular, aumentando el ritmo cardíaco y la presión arterial, lo que eleva el riesgo de infartos o arritmias.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/cardio.jpeg"
            width={300}
            height={200}
            alt="Sistema cardiovascular afectado por las drogas"
            className="rounded-lg mb-6"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-64 mt-10">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-teal-600 mb-4">Hígado y Riñones</h2>
          <p className="text-xl text-gray-700 mb-4">
            El abuso de alcohol y algunas drogas recreativas puede afectar gravemente el hígado y los riñones, provocando enfermedades hepáticas crónicas, cirrosis o insuficiencia renal.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/higado.jpeg"
            width={300}
            height={200}
            alt="Hígado y riñones afectados por drogas"
            className="rounded-lg mb-6"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-64 mt-10">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-teal-600 mb-4">Sistema Digestivo</h2>
          <p className="text-xl text-gray-700 mb-4">
            El abuso de drogas puede alterar el sistema digestivo, ocasionando pérdida de apetito, trastornos digestivos y desnutrición debido a la reducción de la absorción de nutrientes.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/diges.jpeg"
            width={300}
            height={200}
            alt="Efectos de las drogas en el sistema digestivo"
            className="rounded-lg h-[275px] mb-6"
          />
        </div>
      </div>

      <Backlink />

      <div className="mt-16">
        <Footer />
      </div>
    </section>
  );
}
