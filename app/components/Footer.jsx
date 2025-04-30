import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="w-full  absoulute left-25 right-25 bg-white mt-auto border-t">
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="md:w-auto mb-4 md:mb-0">
                        <div className="text-center md:text-left text-black text-2xl font-bold font-['Cormorant_Garamond']">TravelUp</div>
                        <div className="text-neutral-400 text-sm font-normal font-['Open_Sans']">Copyrights © {currentYear}. All Rights Reserved.</div>
                    </div>
                    <nav className="flex flex-wrap space-x-6">
                        <Link href="/" className="text-neutral-400 hover:text-black text-lg font-normal font-['Open_Sans'] leading-relaxed">Home</Link>
                        <Link href="/about" className="text-neutral-400 hover:text-black text-lg font-normal font-['Open_Sans'] leading-relaxed">About me</Link>
                        <Link href="/categories" className="text-neutral-400 hover:text-black text-lg font-normal font-['Open_Sans'] leading-relaxed">Categories</Link>
                        <Link href="/contact" className="text-neutral-400 hover:text-black text-lg font-normal font-['Open_Sans'] leading-relaxed">Contact</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;