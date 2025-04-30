import { Menu, Search } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="absolute top-0 left-25 right-25 z-50 py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-black cursor-pointer">
                    <Menu className="w-6 h-6" />
                </div>
                
                <h1 className="text-2xl font-bold text-black">
                    TravelUp
                </h1>
                
                <div className="text-black cursor-pointer">
                    <Search className="w-6 h-6" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;