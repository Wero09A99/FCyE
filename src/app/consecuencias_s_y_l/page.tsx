import Backlink from "app/components/BackLink/backlink";
import Footer from "app/components/Footer/footer";
import Nav from "app/components/Nav/nav";

export default function Consecuenciassocialespage() {
  return (
    <section className="p-8 font-sans bg-gray-300 min-h-screen">
      <Nav />
      <h1 className="text-5xl font-bold text-teal-700 mt-10 mb-6">Consecuencias Sociales y Legales</h1>
      <p className="w-[600px] text-2xl text-gray-700 mb-4">
        Las consecuencias del consumo de drogas van más allá de los efectos en la salud. También pueden generar repercusiones significativas en la vida social y legal de una persona.
      </p>

      <h2 className="text-4xl font-semibold text-teal-600 mt-10 mb-4">Repercusiones Sociales</h2>
      <p className="text-2xl text-gray-700 mb-4">
        Las drogas pueden tener un impacto profundo en las relaciones personales, laborales y familiares. El abuso de sustancias puede llevar al aislamiento social, rupturas familiares, y deterioro de la salud mental.
      </p>

      <h2 className="text-4xl font-semibold text-teal-600 mt-10 mb-4">Repercusiones Legales</h2>
      <p className="text-2xl text-gray-700 mb-4">
        Dependiendo de la legislación del país, las personas que son atrapadas consumiendo, vendiendo o distribuyendo drogas ilegales pueden enfrentar graves consecuencias legales, incluyendo prisión, multas y antecedentes penales que pueden afectar sus vidas para siempre.
      </p>
      <Backlink/>

      <div className="mt-16">
        <Footer />
      </div>
    </section>
  );
}
