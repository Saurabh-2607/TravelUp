const ProductsCards = () => {
    return (
        <div className="w-40 h-64 left-[257px] top-[109px] absolute">
            <div className="w-40 h-14 left-0 top-[195px] absolute">
                <div className="w-40 h-14 left-0 top-0 absolute bg-white" />
                <div className="w-24 left-[36.19px] top-[16px] absolute text-center justify-start text-black text-base font-bold font-['Open_Sans'] leading-normal">Buy</div>
            </div>
            <div className="w-40 h-48 left-0 top-0 absolute bg-gradient-to-l from-zinc-950 to-black/0" />
            <div className="px-3.5 left-[21px] top-[115px] absolute inline-flex justify-start items-start gap-2.5 overflow-hidden">
                <div className="text-center justify-center text-white text-2xl font-bold font-['Cormorant_Garamond'] leading-loose">Mystery <br/>of Europe</div>
            </div>
            <div className="w-12 h-12 left-[117px] top-0 absolute overflow-hidden">
                <div className="w-12 h-12 left-0 top-0 absolute bg-white" />
                <div className="left-[9px] top-[11px] absolute text-center justify-start text-black text-lg font-bold font-['Open_Sans'] leading-relaxed">$29</div>
            </div>
        </div>
    );
}

export default ProductsCards;