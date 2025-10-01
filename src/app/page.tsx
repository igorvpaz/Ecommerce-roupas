
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-10"> {/* min-h ajustado para caber header/footer */}
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">
        Bem-vindo à minha loja fake!
      </h1>
      <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl">
        Descubra as últimas tendências da moda e encontre seu estilo perfeito.
      </p>
      <div className="relative w-full max-w-4xl h-80 sm:h-96 md:h-[500px] mb-10 rounded-lg shadow-xl overflow-hidden">
        <Image
          src="/images/ecommerce-banner.jpg"
          alt="Banner de Ecommerce de Roupas"
          fill
          style={{ objectFit: 'cover' }}
          priority // Otimiza o carregamento da imagem
        />
      </div>

      <Link href="/products" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
        Explorar Produtos
      </Link>
    </div>
  );
}