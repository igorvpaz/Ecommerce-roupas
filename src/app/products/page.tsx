
'use client';

import { useGetProductsQuery, Product } from '@/lib/store/features/api/apiSlice';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux'; // Hook para despachar ações
import { addItemToCart } from '@/lib/store/features/cart/cartSlice';

export default function ProductsPage() {
    const { data: products, error, isLoading } = useGetProductsQuery();
    const dispatch = useDispatch();

    // Clique do botão de add ao carrinho
    const handleAddToCart = (product: Product) => {
        dispatch(addItemToCart(product));
    };

    if (isLoading) {
        return <p className="text-center">Carregando produtos...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">Ocorreu um erro ao buscar os produtos.</p>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Nossos Produtos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products?.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4 shadow-lg flex flex-col justify-between">
                        <div>
                            <Link href={`/products/${product.id}`}>
                                <div className="relative w-full h-48 mb-4">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        className="cursor-pointer"
                                    />
                                </div>
                                <h2 className="text-lg font-semibold truncate">{product.title}</h2>
                            </Link>
                            <p className="text-gray-700 mt-2 font-bold">R$ {product.price.toFixed(2)}</p>
                        </div>
                        <button
                            onClick={() => handleAddToCart(product)}
                            className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                        >
                            Adicionar ao Carrinho
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}