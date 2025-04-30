const Newsletter = () => {
    return (
        <div className="w-full relative bg-white border-2 border-black p-6">
            <div className="w-full mx-auto">
                <div className="text-center text-black text-3xl font-bold font-['Cormorant_Garamond'] leading-10">Newsletter</div>
                
                <div className="text-center text-neutral-400 text-base font-normal leading-5 mt-2">
                    Subscribe to receive exclusive content updates, travel & photo tips!
                </div>
                
                <div className="mt-4 w-full">
                    <label htmlFor="email" className="text-black text-sm font-normal font-['Open_Sans']">Email address</label>
                    <input 
                        type="email" 
                        id="email"
                        placeholder="example@xyg.com"
                        className="w-full text-black text-base font-normal focus:outline-none"
                    />
                    <div className="w-full h-0.5 bg-black mt-1"></div>
                </div>
                
                <button className="w-full bg-black text-white py-3 mt-6">
                    <span className="text-base font-bold">Subscribe</span>
                </button>
            </div>
        </div>
    );
}

export default Newsletter;