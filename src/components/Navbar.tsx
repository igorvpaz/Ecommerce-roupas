
'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectCartItems } from '@/lib/store/features/cart/cartSlice';

export default function Navbar() {
    const cartItems = useSelector(selectCartItems);

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav>
            <ul className="flex space-x-6 items-center">
                <li>
                    <Link href="/" className="text-gray-600 hover:text-blue-500 transition-colors">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/products" className="text-gray-600 hover:text-blue-500 transition-colors">
                        Produtos
                    </Link>
                </li>
                <li>
                    <Link href="/cart" className="text-gray-600 hover:text-blue-500 flex items-center transition-colors">
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
    );
}