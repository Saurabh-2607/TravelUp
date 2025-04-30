import { useState } from 'react';

const Newsletter = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [email, setEmail] = useState('');
    
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => {
        if (!email) setIsFocused(false);
    };

    return (
        <div className="w-full relative bg-white border-2 border-black p-6">
            <div className="w-full mx-auto">
                <div className="text-center text-black text-3xl font-bold font-['Cormorant_Garamond'] leading-10">Newsletter</div>
                
                <div className="text-center text-neutral-400 text-base font-normal leading-5 mt-2">
                    Subscribe to receive exclusive content updates, travel & photo tips!
                </div>
                
                <div className="mt-4 w-full relative">
                    {(isFocused || email) && (
                        <label 
                            htmlFor="email" 
                            className="absolute pb-8 text-xs text-black -top-2.5 left-0 transition-all"
                        >
                            Email address
                        </label>
                    )}
                    <input 
                        type="email" 
                        id="email"
                        placeholder={isFocused ? "" : "Email address"}
                        className="w-full text-black text-base font-normal focus:outline-none"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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