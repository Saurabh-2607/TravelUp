
const Destination = () => {
    return (
        <div className="w-full h-auto">
            <div className="w-full mt-6">
            <div className="w-full text-black text-3xl font-bold">Destinations</div>
            
            <div className="w-full h-auto py-8 mt-2 relative">
                <div className="w-full h-full absolute inset-0 bg-black" />
                <div className="w-full flex flex-col items-center justify-center relative gap-1.5 z-10">
                <div className="w-1/3 h-1 bg-white self-center"></div>
                <div className="text-center text-white text-xl font-bold px-4">India</div>
                </div>
            </div>

            <div className="w-full h-auto py-8 mt-2 relative">
                <div className="w-full h-full absolute inset-0 bg-black" />
                <div className="w-full flex flex-col items-center justify-center relative gap-1.5 z-10">
                <div className="w-1/3 h-1 bg-white self-center"></div>
                <div className="text-center text-white text-xl font-bold px-4">Rome</div>
                </div>
            </div>

            <div className="w-full h-auto py-8 mt-2 relative">
                <div className="w-full h-full absolute inset-0 bg-black" />
                <div className="w-full flex flex-col items-center justify-center relative gap-1.5 z-10">
                <div className="w-1/3 h-1 bg-white self-center"></div>
                <div className="text-center text-white text-xl font-bold px-4">San Francisco</div>
                </div>
            </div>

            <div className="w-full h-auto py-8 mt-2 relative">
                <div className="w-full h-full absolute inset-0 bg-black" />
                <div className="w-full flex flex-col items-center justify-center relative gap-1.5 z-10">
                <div className="w-1/3 h-1 bg-white self-center"></div>
                <div className="text-center text-white text-xl font-bold px-4">Tokyo</div>
                </div>
            </div>

            <div className="w-full h-auto py-8 mt-2 relative">
                <div className="w-full h-full absolute inset-0 bg-black" />
                <div className="w-full flex flex-col items-center justify-center relative gap-1.5 z-10">
                <div className="w-1/3 h-1 bg-white self-center"></div>
                <div className="text-center text-white text-xl font-bold px-4">San Jose</div>
                </div>
            </div>

            <button className="w-full bg-black text-white text-base font-bold py-4 mt-2 cursor-pointer hover:bg-gray-800 transition-colors">
                Read more
            </button>
            </div>
        </div>
        );
}

export default Destination;