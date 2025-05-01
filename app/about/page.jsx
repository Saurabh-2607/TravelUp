import {Facebook, Instagram, Youtube, Github,} from 'lucide-react';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'About Me | TravelUp',
  description: 'Learn more about the author behind TravelUp and their journey'
};
  
  
  const AboutMe = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="relative w-full h-screen">
                <div className="absolute inset-0 z-10">

                <Navbar/>
                </div>
                <div className="absolute inset-0">
                    <img className="object-cover w-full h-full" src="https://plus.unsplash.com/premium_photo-1681400745727-c69f8e47f524?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero background" />
                </div>
                <div className='absolute w-3/4 h-1/3 -mt-40 mx-auto left-0 right-0 bottom-0 bg-white p-8'>
                    <h1 className="text-4xl font-bold text-center">My name is</h1>
                    <h1 className="text-4xl font-bold text-center">Saurabh Sharma</h1>
                </div>
                <div className="absolute bottom-0 justify-center w-full">
                    <div className="flex justify-center gap-2 mb-6">
                        <a href="#" className="w-11 h-11 bg-black flex items-center justify-center">
                            <Facebook size={30} className="text-white" />
                        </a>                        
                        <a href="#" className="w-11 h-11 bg-black flex items-center justify-center">
                            <Instagram size={30} className="text-white" />
                        </a>
                        <a href="#" className="w-11 h-11 bg-black flex items-center justify-center">
                            <Youtube size={30} className="text-white" />
                        </a>                        
                        <a href="#" className="w-11 h-11 bg-black flex items-center justify-center">
                            <Github size={30} className="text-white" />
                        </a>
                    </div>
                </div>
            </div>

            <section className="bg-white flex flex-col items-center px-4 py-10 mx-auto">  
                <div className="w-full max-w-[706px] h-0.5 bg-zinc-200 mb-12" />
                <p className="text-3xl text-center max-w-[706px] text-gray-700 s-font font-light italic">
                    Some beautiful paths can't be discovered without getting lost.
                </p>
                <div className="w-full h-0.5 max-w-[706px] bg-zinc-200 mt-8 mb-8" />
        
                <p className="max-w-2xl justify-start text-justify text-base font-normal s-font mb-8 text-gray-700">
                    For as long as I can remember I've been  obsessed with the idea of travel.
                    I was always that person who was forever daydreaming of foreign lands and unfamiliar cultures,
                    coming up with travel itineraries that would challenge my perceptions and help me gain a deeper understanding of the world.
                </p>
        
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-10">
                    <div className="relative w-full h-[612px]">
                        <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1620400975473-777541fd7add?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Travel photo 1" />
                    </div>
                    <div className="relative w-full h-[612px]">
                        <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1723320505410-ace9381ea741?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbiUyMGltYWdlc3xlbnwwfDB8MHx8fDA%3D" alt="Travel photo 2" />
                    </div>
                </div>
        
                <div className="w-[704px] justify-start text-black text-base font-normal s-font leading-relaxed">To keep you on the road to safety, here are a few basic tips for motorists at rail crossings:<br/><br/>• Expect a train at any time. Trains can run anytime of day or night, on any track, in any direction.<br/><br/>• Don't be fooled. The train is closer and faster than you think. It's easy to misjudge a train's speed and its distance, especially at night. If you see a train, just wait.<br/><br/>• Trains can't stop quickly or swerve; be prepared to yield. After fully applying the brakes, a loaded freight train traveling at 55 miles per hour takes a mile or more to stop.<br/><br/>• Stop and wait when gates are down or lights are flashing. Only continue across after the gates go up and red lights stop flashing. Remember, too, that when on foot, you should stay off railroad cars and tracks. It's illegal and too often it's deadly.<br/><br/>These tips come from the safety experts at Voith Turbo, York, Pa., which manufactures a device that helps trains with braking, to make train travel even better. The new type of railcar is on track to save Americans time, trouble and maybe even their lives. These trains can go from stations in the suburbs to stations in the city without switching locomotives. Such flexible trains, called DMUs–or Diesel Multiple Units -were designed so commuters in the suburbs would not have to switch to locomotives that work only on city rails. According to Colorado Railcar Manufacturing, the company that designed the cars, the DMU combines its drive systems and passenger accommodations into a single unit-each DMU has seating for 90 passengers and can pull additional motorized coaches.</div>
            </section>
        </div>
    );
  };
  
  export default AboutMe;

