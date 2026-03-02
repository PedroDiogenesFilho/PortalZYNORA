import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-blue-400">Portal</span>
              <span className="text-white">ZYNORA</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Blog de tecnologia com as melhores notícias, tutoriais e promoções
              exclusivas de programas de afiliados para desenvolvedores e
              entusiastas de tecnologia.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Blog de Tecnologia
                </Link>
              </li>
              <li>
                <Link
                  href="/promocoes"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Promoções de Afiliados
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2">
              {["Programação", "Inteligência Artificial", "Cloud", "Front-end", "Segurança", "DevOps"].map(
                (cat) => (
                  <li key={cat}>
                    <Link
                      href={`/blog?categoria=${encodeURIComponent(cat)}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {cat}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 PortalZYNORA. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs text-center">
            Este site contém links de afiliados. Podemos receber comissão por compras realizadas através desses links,
            sem custo adicional para você.
          </p>
        </div>
      </div>
    </footer>
  );
}
