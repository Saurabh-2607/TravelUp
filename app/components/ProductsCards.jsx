const ProductsCards = ({title, price, imageurl}) => {
    return (
        <div className="w-40 h-64 left-[257px] top-[109px] absolute">
            <button className="w-40 h-14 left-0 top-[195px] absolute bg-white text-center text-black text-base font-bold font-['Open_Sans'] leading-normal">
                Buy
            </button>
            <div 
                className="w-40 h-48 left-0 top-0 absolute bg-cover bg-center"
                style={{
                    backgroundImage: `url(${imageurl})`,
                    position: 'relative',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
            </div>
            <div className="px-3.5 left-[21px] top-[115px] absolute inline-flex justify-start items-start gap-2.5 overflow-hidden">
                <div className="text-center justify-center text-white text-2xl font-bold font-['Cormorant_Garamond'] leading-loose">{title}</div>
            </div>
            <div className="w-12 h-12 left-[117px] top-0 absolute overflow-hidden">
                <div className="w-12 h-12 left-0 top-0 absolute bg-white" />
                <div className="left-[9px] top-[11px] absolute text-center justify-start text-black text-lg font-bold font-['Open_Sans'] leading-relaxed">${price}</div>
            </div>
        </div>
    );
}

export default ProductsCards;