import { Facebook, Instagram, Youtube as YouTube, Medal, Github } from 'lucide-react';

const AboutCard = () => {
    return (
        <div>
            <div className="border-2 border-black p-4 relative">
                <div className="flex flex-col items-center">
                    {/* Profile Image */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-35 h-35 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-2 border-white">
                        <img 
                            src="/Profile.jpg" 
                            alt="Saurabh Sharma" 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Name */}
                    <h3 className="text-2xl font-bold mt-14 mb-1">Saurabh Sharma</h3>
                    
                    {/* Bio */}
                    <p className="text-gray-400 text-sm s-font text-center mb-4">
                        For as long as I can remember I've been obsessed with the idea of travel. 
                        I was always that person who was forever daydreaming of foreign lands and unfamiliar cultures; 
                        coming up with travel itineraries that would challenge my perceptions and 
                        help me gain a deeper understanding of the world.
                    </p>
                    
                    {/* Follow me text */}
                    <p className="text-m s-font font-bold mb-6">Follow me</p>
                </div>
                
                {/* Social Media Icons - positioned to overlap bottom */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <div className="flex justify-center gap-2">
                        {/* Facebook */}
                        <a href="#" className="w-13 h-13 bg-black flex items-center justify-center">
                            <Facebook size={30} className="text-white" />
                        </a>
                        
                        {/* Instagram */}
                        <a href="#" className="w-13 h-13 bg-black flex items-center justify-center">
                            <Instagram size={30} className="text-white" />
                        </a>
                        
                        {/* YouTube */}
                        <a href="#" className="w-13 h-13 bg-black flex items-center justify-center">
                            <YouTube size={30} className="text-white" />
                        </a>
                        
                        {/* Github */}
                        <a href="#" className="w-13 h-13 bg-black flex items-center justify-center">
                            <Github size={30} className="text-white" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutCard;