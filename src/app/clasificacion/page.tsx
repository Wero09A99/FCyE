import Backlink from "app/components/BackLink/backlink";
import Footer from "app/components/Footer/footer";
import Nav from "app/components/Nav/nav";


export default function Clasificacionpage() {
  return (
    <section className="p-8 font-sans bg-gray-300 min-h-screen">
      <Nav />
      <h1 className="text-5xl font-bold text-teal-700 mt-10 mb-6">Clasificación de Drogas</h1>
      <p className="w-[600px] text-2xl text-gray-700 mb-4">
        Las drogas se dividen en dos grandes grupos: las legales y las ilegales. Esta clasificación ayuda a entender cómo las sociedades regulan y controlan el uso de estas sustancias.
      </p>

      <h2 className="text-4xl font-semibold text-teal-600 mt-10 mb-4">Drogas Legales</h2>
      <p className="text-2xl text-gray-700 mb-4">
        Las drogas legales son aquellas cuyo consumo está regulado por las leyes de un país. Estas sustancias se consumen de forma común en muchas sociedades y están generalmente disponibles en mercados controlados.
      </p>
      <ul className="list-disc pl-8 text-2xl text-gray-700 mb-4">
        <li>Alcohol: Una de las drogas más consumidas a nivel mundial, aunque su abuso puede generar consecuencias graves como la dependencia y problemas de salud.</li>
        <li>Tabaco: El cigarro es la forma más común de consumo, conocido por su impacto negativo en los pulmones y la salud cardiovascular.</li>
        <li>Cafeína: Una sustancia presente en bebidas como el café, té y bebidas energéticas, que es un estimulante del sistema nervioso central.</li>
      </ul>

      <h2 className="text-4xl font-semibold text-teal-600 mt-10 mb-4">Drogas Ilegales</h2>
      <p className="text-2xl text-gray-700 mb-4">
        Las drogas ilegales son sustancias cuyo consumo y distribución están prohibidos por las leyes de la mayoría de los países. El uso de estas sustancias puede conllevar sanciones legales y sociales.
      </p>
      <ul className="list-disc pl-8 text-2xl text-gray-700 mb-4">
        <li>Cocaína: Un potente estimulante que puede causar adicción severa y dañar el sistema cardiovascular.</li>
        <li>Heroína: Un opioide extremadamente adictivo que puede causar daño cerebral y llevar a la sobredosis fatal.</li>
        <li>Metanfetaminas: Drogas sintéticas altamente adictivas que afectan al sistema nervioso central, con efectos devastadores a largo plazo.</li>
      </ul>
      <Backlink/>

      <div className="mt-16">
        <Footer />
      </div>
    </section>
  );
}
