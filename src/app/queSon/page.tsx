import Nav from "app/components/Nav/nav";
import Image from "next/image";
import Link from "next/link";

export default function DrogasPage() {
  return (
    <section className="p-8 font-sans bg-gray-300 min-h-screen">
      <Nav/>
      <h1 className="text-5xl font-bold text-teal-700 mt-10 mb-6">¿Qué son las drogas?</h1>
      <p className="w-[600px] text-2xl text-gray-700 mb-4">
        Las drogas son sustancias que, al ingresar en el organismo,
        pueden alterar su funcionamiento físico o mental.
        Estas sustancias tienen un gran impacto en la salud y
        en la sociedad, y se clasifican en varios tipos.
      </p>
      <article className="mt-32">
      <p className="w-[600px] text-2xl text-gray-700 mb-4">
        Existen drogas legales como el alcohol y la cafeína, y drogas ilegales como la cocaína y la heroína. Los efectos pueden variar dependiendo de la sustancia y del contexto de consumo.
      </p>
      <Image src="/que_son.jpg"
      width={600}
      height={100}
      alt="Imagen de que son las drogas"
      className="absolute right-32 top-44 rounded-lg"
      />

      <Link href="/">
        <button className="mt-4 bg-teal-700 text-white px-4 py-2 rounded-lg">Regresar al Blog</button>
      </Link>
      </article>

    </section>
  );
}
