
import Link from 'next/link';
import Navbar from './Navbar';

export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-gray-800">
                    DevStore
                </Link>

                <Navbar />
            </div>
        </header>
    );
}