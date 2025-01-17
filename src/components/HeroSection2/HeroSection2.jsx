// components/HeroSection.jsx
import Image from "next/image";
import Link from "next/link";

const HeroSection2 = ({ 
  backgroundImage, 
  buttonGradient, 
  title, 
  description, 
  imageSrc 
}) => {
  return (
    <div
      className="relative min-h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center px-6 md:px-12 lg:px-20">
        {/* Left Content */}
        <div className="text-center lg:text-left lg:w-1/2">
          
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            {description}
          </p>
          <Link href="/contact-us">
          <button
            className={`py-3 px-8 text-white font-semibold text-lg rounded-md ${buttonGradient}`}
          >
            Get a Free Quote
          </button>
          </Link>
          
        </div>

        {/* Right Content */}
        <div className="mt-12 lg:mt-0 lg:ml-12 relative lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-96 h-96 lg:w-[30rem] lg:h-[30rem]">
            <Image
              src={imageSrc}
              alt="Hero Section Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
           
            
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default HeroSection2;
