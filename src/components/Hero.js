
import mapImage from '../assets/Map-UI.png.webp';
import mobileLayout from '../assets/iphone13-Layout.png'; 
import FoodieLogo from '../assets/FoodieLogo.png'; 
function Hero() {
  return (
    <div className="relative w-full h-auto bg-cover bg-center flex flex-col items-center md:flex-row md:h-[68vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${mapImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#e23232',
          backgroundBlendMode: 'overlay',
        }}
      ></div>

     
      <div className="absolute top-0 left-0 w-full h-[130px] bg-white z-10" 
        style={{
          clipPath: 'polygon(-33% 30%, 120% 0%, 40% 100%)',
          zIndex: 10,
          opacity: 0.8,
        }}
      ></div>
      

      {/* Content for Mobile and Tablet */}
      <div className="relative z-20 flex flex-col items-center justify-center md:flex-row md:justify-between md:gap-24 gap-8 mt-12 md:mt-0 max-w-screen-xl mx-auto px-4">
        
        {/* Mobile Layout Container */}
        <div className="relative flex-shrink-0" style={{
            width: '180px', // Adjust width as needed
          }}>
          <img src={mobileLayout} alt="Mobile Layout" className="w-60" />

          {/* Video Inside Mobile Layout */}
          <div className="absolute inset-0 flex items-center justify-center">
            <iframe
              src="https://www.youtube.com/embed/fGzZT9hbwbs?autoplay=1" // Replace with your reel video URL
              title="Reel Video"
              style={{ width: '160px', height: '345px' }}
              className="border-0 rounded-3xl"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left ">
          <img src={FoodieLogo} alt="Foodie Logo" className="h-16 md:h-10 md:mt-12" />
          <h1 className="text-white text-3xl mb-3 font-bold">Welcome to Foodie</h1>
          <p className="text-white mb-4 text-sm max-w-sm">
          At Foodie, we redefine convenience with our seamless food delivery service. 
          Whether you're craving the flavors of home or exploring new culinary delights,
           Foodie brings it all to your doorstep. From hearty breakfasts to gourmet dinners
            and everything in between, our curated menu caters to every palate and preference.
          </p>

          
          <button
            type="submit"
            className="bg-white text-black font-bold py-1 px-2 rounded-full text-sm mb-4 hidden md:block"
          >
            Join the Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
