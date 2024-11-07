import Backlink from "app/components/BackLink/backlink";
import Footer from "app/components/Footer/footer";
import Nav from "app/components/Nav/nav";
import Link from "next/link";


export default function Clasificacionpage() {
  return (
    <section className="p-8 font-sans bg-gray-300 min-h-screen">
      <Nav />
      <h1 className="text-5xl font-bold text-teal-700 mt-10 mb-6">Desarrollado en:</h1>
      <p className="w-[600px] text-2xl text-gray-700 mb-4"> Next.JS(un framework de React.JS), HTML5, CSS, Tailwind CSS, Typescript y Javascript. 
      </p>
      <h1 className="text-5xl font-bold text-teal-700 mt-10 mb-6">Desplegado en</h1>

       <Link href="https://vercel.com/">
       <button className="mt-4 text-xl bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-lg">Vercel</button>
       </Link>
       <h3 className="text-5xl font-bold text-teal-700 mt-10 mb-6">Desarrollado por Wero09A(Felipe 0w0)</h3>

       <Link href="https://www.youtube.com/@Wero09Anano/">
       <button className="mt-4 text-xl bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-lg">Apoyame</button>
       </Link>
       
<div className="mt-8">
<Backlink/>

</div>

      <div className="mt-16">
        <Footer />
      </div>
    </section>
  );
}
