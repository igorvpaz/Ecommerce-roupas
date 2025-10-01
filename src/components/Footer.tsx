
export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-10">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Ecommerce-roupas. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}