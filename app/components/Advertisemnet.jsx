import { useState } from 'react';

const Advertisement = () => {
    const [destination, setDestination] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [focus, setFocus] = useState({
        destination: false,
        checkIn: false,
        checkOut: false
    });

    const handleFocus = (field) => {
        setFocus(prev => ({...prev, [field]: true}));
    };

    const handleBlur = (field) => {
        setFocus(prev => ({...prev, [field]: false}));
    };

    return (
        <div className="w-full h-auto relative">
            <div className="w-full h-auto bg-white border-2 border-black">
                <div className="p-4">
                    <div className="text-black text-3xl font-bold leading-10 mb-1">Where to next?</div>
                    <div className="text-neutral-400 text-base font-normal leading-relaxed mb-3">There is a wide world waiting for you</div>
                    
                    <div className="mb-3 relative">
                        <label 
                            className={`absolute transition-all duration-200 ${
                                focus.destination || destination 
                                ? 'text-sm text-black top-0 left-0' 
                                : 'text-neutral-400 top-6 left-0'
                            }`}
                        >
                            Destination name
                        </label>
                        <input 
                            type="text"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            onFocus={() => handleFocus('destination')}
                            onBlur={() => handleBlur('destination')}
                            className="w-full pt-5 text-black text-base font-normal leading-relaxed focus:outline-none"
                        />
                        <div className="h-0.5 bg-black mt-1"></div>
                    </div>
                    
                    <div className="mb-3 relative">
                        <label 
                            className={`absolute transition-all duration-200 font-['Open_Sans'] ${
                                focus.checkIn || checkIn 
                                ? 'text-sm text-black top-0 left-0' 
                                : 'text-neutral-400 top-6 left-0'
                            }`}
                        >
                            Check-in date
                        </label>
                        <input 
                            type="text" 
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            onFocus={(e) => {
                                handleFocus('checkIn');
                                e.target.type = "date";
                            }}
                            onBlur={(e) => {
                                handleBlur('checkIn');
                                if (!e.target.value) {
                                    e.target.type = "text";
                                }
                            }}
                            className="w-full pt-5 text-black text-base font-normal font-['Open_Sans'] leading-relaxed focus:outline-none"
                        />
                        <div className="h-0.5 bg-zinc-200 mt-1"></div>
                    </div>
                    
                    <div className="mb-3 relative">
                        <label 
                            className={`absolute transition-all duration-200 font-['Open_Sans'] ${
                                focus.checkOut || checkOut 
                                ? 'text-sm text-black top-0 left-0' 
                                : 'text-neutral-400 top-6 left-0'
                            }`}
                        >
                            Check-out date
                        </label>
                        <input 
                            type="text"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            onFocus={(e) => {
                                handleFocus('checkOut');
                                e.target.type = "date";
                            }}
                            onBlur={(e) => {
                                handleBlur('checkOut');
                                if (!e.target.value) {
                                    e.target.type = "text";
                                }
                            }}
                            className="w-full pt-5 text-black text-base font-normal font-['Open_Sans'] leading-relaxed focus:outline-none"
                        />
                        <div className="h-0.5 bg-zinc-200 mt-1"></div>
                    </div>
                    
                    <button className="w-full h-auto py-2 bg-black text-white text-base font-bold">Read more</button>
                </div>
            </div>
        </div>
    )
};

export default Advertisement;