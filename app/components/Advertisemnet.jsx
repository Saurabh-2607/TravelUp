const Advertisement = () => {
    return (
        <div className="w-full h-auto relative">
            <div className="w-full h-auto left-0 top-0 absolute bg-white border-2 border-black" />
            <div className="w-72 h-14 left-[30px] top-[354px] absolute">
                <div className="w-72 h-14 left-0 top-0 absolute bg-black" />
                <div className="w-40 left-[60.98px] top-[16px] absolute text-center justify-start text-white text-base font-bold font-['Open_Sans'] leading-normal">Read more</div>
            </div>
            <div className="w-72 h-16 left-[30px] top-[120px] absolute">
                <div className="w-72 h-0.5 left-0 top-[58px] absolute bg-black" />
                <div className="left-0 top-[1px] absolute justify-start text-black text-sm font-normal font-['Open_Sans']">Destination name</div>
                <div className="left-0 top-[27px] absolute justify-start text-black text-base font-normal font-['Open_Sans'] leading-relaxed">Japan</div>
            </div>
            <div className="w-72 h-16 left-[30px] top-[198px] absolute">
                <div className="w-72 h-0.5 left-0 top-[58px] absolute bg-zinc-200" />
                <div className="left-0 top-[27px] absolute justify-start text-neutral-400 text-base font-normal font-['Open_Sans'] leading-relaxed">Check-in date</div>
            </div>
            <div className="w-72 h-16 left-[30px] top-[276px] absolute">
                <div className="w-72 h-0.5 left-0 top-[58px] absolute bg-zinc-200" />
                <div className="left-0 top-[27px] absolute justify-start text-neutral-400 text-base font-normal font-['Open_Sans'] leading-relaxed">Check-out date</div>
            </div>
            <div className="w-72 left-[30px] top-[30px] absolute justify-start text-black text-4xl font-bold font-['Cormorant_Garamond'] leading-10">Where to next?</div>
            <div className="w-72 left-[30px] top-[72px] absolute justify-start text-neutral-400 text-base font-normal font-['Open_Sans'] leading-relaxed">Ther's a wide world waiting for you</div>
        </div>
    )
};

export default Advertisement;