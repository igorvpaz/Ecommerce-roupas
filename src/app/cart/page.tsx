// src/app/cart/page.tsx
'use client';

import { useSelector } from 'react-redux';
import { selectCartItems, CartItem } from '@/lib/store/features/cart/cartSlice';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
    // Usamos o seletor para pegar os itens do estado do Redux
    const cartItems = useSelector(selectCartItems);

    // Calculamos o subtotal dos itens no carrinho
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Seu Carrinho de Compras</h1>

            {/* Verificamos se o carrinho está vazio */}
            {cartItems.length === 0 ? (
                <div className="text-center py-10 border rounded-lg">
                    <p className="text-xl text-gray-600 mb-4">Seu carrinho está vazio.</p>
                    <Link href="/products" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
                        Ver produtos
                    </Link>
                </div>
            ) : (
                // Se não estiver vazio, mostramos os itens
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        {cartItems.map((item: CartItem) => (
                            <div key={item.id} className="flex items-center border-b py-4">
                                <div className="relative w-24 h-24 mr-4">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                                <div className="flex-grow">
                                    <h2 className="font-semibold">{item.title}</h2>
                                    <p className="text-gray-600">Quantidade: {item.quantity}</p>
                                </div>
                                <div className="text-right font-bold">
                                    <p>R$ {(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                                {/* Futuramente, aqui podemos adicionar um botão para remover o item */}
                            </div>
                        ))}
                    </div>

                    {/* Resumo do pedido */}
                    <div className="md:col-span-1">
                        <div className="border rounded-lg p-6 bg-gray-50">
                            <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
                            <div className="flex justify-between mb-2">
                                <span>Subtotal</span>
                                <span>R$ {subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t">
                                <span>Total</span>
                                <span>R$ {subtotal.toFixed(2)}</span>
                            </div>
                            <button className="mt-6 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors">
                                Finalizar Compra
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}