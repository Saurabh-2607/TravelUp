const CategoryTemplet = ({ title, imageUrl, isSelected = false, onClick, className }) => {
    return (
        <div 
            className={`relative bg-black flex flex-col items-center justify-center cursor-pointer transition-all duration-300 w-52 ${isSelected ? 'h-60' : 'h-52'} ${className || ''}`}
            onClick={onClick}
        >
            <div className="absolute left-0 top-0 w-full h-full bg-black"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: isSelected ? 0.3 : 0,
                }}
            />
            <div className={`left-1/2 absolute text-white text-2xl mt-4 font-bold transform -translate-x-1/2`}
                 style={{ top: isSelected ? '110px' : '85px' }}>
                {title}
            </div>            
            <div className="w-16 h-1 left-1/2 absolute bg-white transform -translate-x-1/2"
                 style={{ top: isSelected ? '110px' : '85px' }} />
        </div>
    );
};

export default CategoryTemplet;
