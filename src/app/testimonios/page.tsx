import Footer from "app/components/Footer/footer";
import Nav from "app/components/Nav/nav";
import Link from "next/link";


export default function TestimonioPage() {
  return (
    <div className="font-sans p-8">
      <Nav/>

      {/* Testimonio Page Header */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Testimonio de Recuperación</h1>
        <p className="text-gray-600 text-lg">
          Una historia de lucha, esperanza y superación personal
        </p>
      </header>

      {/* Testimonio Content */}
      <section className="space-y-8">
        {/* Sección: Comienzo en el Consumo */}
        <div className="bg-green-100 p-6 rounded-md shadow-md">
          <h2 className="text-3xl font-semibold text-teal-700 mb-4">Comienzo en el Consumo</h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p><strong>¿Cómo caíste en el consumo de drogas, en la adicción, y a qué edad?</strong></p>
            <p>Con sólo 13 o 14 años, empecé a consumir dejándome llevar por las amistades que tenía por aquel entonces. De esas amistades, el 90% o están muertos o presos. En esos momentos, no era muy consciente del problema en el que me estaba metiendo.</p>
            <p><strong>¿Cómo era tu vida cuando empezaste a consumir?</strong></p>
            <p>Mi vida era la de un niño lleno de sueños, humilde, con una familia estupenda. Poco a poco fui causando preocupación en toda mi familia. Generé mucho dolor a mis padres por mis primeras detenciones, que empezaron con delitos menores y fueron empeorando hasta acabar preso con 17 años.</p>
          </div>
        </div>

        {/* Sección: Búsqueda en las Drogas */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-3xl font-semibold text-teal-700 mb-4">Búsqueda en las Drogas</h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p><strong>¿Qué crees que buscabas en las drogas?</strong></p>
            <p>No buscaba nada, simplemente, escapar de los problemas de mi vida y no afrontarlos.</p>
            <p><strong>¿Combinaste el consumo de diferentes sustancias?</strong></p>
            <p>Combiné el consumo de otras sustancias por dejarme llevar con las personas que me juntaba. Empezaba con los porros, luego pasaba a las pastillas, luego a la heroína, luego intravenosas, lo cual agravó mucho los problemas, porque para conseguir mi dosis tenía que robar, manipular, engañar hasta acabar preso.</p>
          </div>
        </div>

        {/* Sección: Consciencia de la Adicción */}
        <div className="bg-green-100 p-6 rounded-md shadow-md">
          <h2 className="text-3xl font-semibold text-teal-700 mb-4">Consciencia de la Adicción</h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p><strong>¿Cuándo y cómo fuiste consciente de que tenías una adicción?</strong></p>
            <p>Tomé consciencia de que tenía una adicción cuando me metieron preso con 19 años. Pensaba en dejarla y pasaba un día o dos sin consumir, pero el síntoma de abstinencia era tan fuerte que siempre acababa volviendo.</p>
          </div>
        </div>

        {/* Sección: Efectos en la Vida Cotidiana */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-3xl font-semibold text-teal-700 mb-4">Efectos en la Vida Cotidiana</h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p><strong>¿Cómo te afectaba la adicción en tu vida cotidiana?</strong></p>
            <p>Me aislaba, y las personas que no veían mi enfermedad no me aceptaban. Notaba una desconfianza hacia mí, que era normal por mis actitudes: yo no era de fiar y mi aspecto se degradó mucho. No podía afrontar ninguna responsabilidad.</p>
          </div>
        </div>

        {/* Sección: Consecuencias y Salida */}
        <div className="bg-green-100 p-6 rounded-md shadow-md">
          <h2 className="text-3xl font-semibold text-teal-700 mb-4">Consecuencias y Salida</h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p><strong>¿Qué cosas hacías por conseguir sustancias de las cuales hoy te arrepientes?</strong></p>
            <p>La adicción me hacía robar, manipular, mentir, y vender todas mis cosas de valor.</p>
            <p><strong>¿Cómo encontraste la salida?</strong></p>
            <p>Después de varios tratamientos fallidos, encontré mucha fuerza en un programa de rehabilitación. Con ayuda de los terapeutas y compañeros logré recuperar mi autoestima, identificar mis problemas y obtener una nueva perspectiva de la vida.</p>
          </div>
        </div>
        <Link href="/">
        <button className="mt-8 bg-teal-700 hover:bg-teal-600 text-white px-4 py-2 rounded-lg">Regresar al Blog</button>
        </Link>
      </section>
      <div className="mt-10">
      <Footer/>
      </div>
    </div>
  );
}
