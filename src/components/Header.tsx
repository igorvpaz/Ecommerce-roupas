
'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectCartItems } from '@/lib/store/features/cart/cartSlice';

export default function Header() {

    const cartItems = useSelector(selectCartItems);

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-gray-800">
                    Fake E-commerce
                </Link>
                <ul className="flex space-x-6 items-center">
                    <li><Link href="/" className="text-gray-600 hover:text-blue-500">Home</Link></li>
                    <li><Link href="/products" className="text-gray-600 hover:text-blue-500">Produtos</Link></li>
                    <li>
                        <Link href="/cart" className="text-gray-600 hover:text-blue-500 flex items-center">
                            Carrinho
                            {totalItems > 0 && (
                                <span className="ml-2 bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}