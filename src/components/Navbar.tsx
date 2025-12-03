import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="w-full bg-black text-white p-4 shadow-md flex justify-between items-center">
            <h1 className="text-xl font-bold">Portfolio Management</h1>


            <div className="flex gap-6 text-lg">
                <Link to="/" className="hover:text-yellow-400">Home</Link>
                <Link to="/portfolio" className="hover:text-yellow-400">Portfolio</Link>
                <Link to="/blogs" className="hover:text-yellow-400">Blogs</Link>

            </div>
        </nav>
    );
}