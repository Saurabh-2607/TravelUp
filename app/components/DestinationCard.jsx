const DestinationCard = () => {
    return (
        <div className="">
            <div className="mt-6 relative w-full">
                <div className="w-full relative text-black text-2xl font-bold">Destinations</div>
                <div className="w-full h-auto py-8 mt-4 relative">
                    <div className="w-full h-full absolute bg-black" />
                    <div className="w-full  flex ">
                        <div className="w-full h-1 bg-white"></div>
                        <div className="text-center text-white text-2xl font-bold">Tokyo</div>
                    </div>
                </div>
                
                <div className="w-full h-auto py-4 mt-8 relative">
                    <div className="w-full h-full bg-black" />
                    <div className="w-full text-center text-white text-base font-bold font-['Open_Sans'] leading-normal py-4">Read more</div>
                </div>
            </div>
        </div>
    );
}

export default DestinationCard;