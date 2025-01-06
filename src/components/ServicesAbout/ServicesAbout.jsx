import Image from 'next/image';

const AboutSection = ({ heading, description, imageSrc }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-[80vh] bg-gradient-to-r from-gray-300 to-gray-100 p-8 md:p-16 rounded-xl shadow-lg space-y-12 lg:space-y-0 lg:space-x-12">
      {/* Text Content */}
      <div className="w-full lg:w-1/2 max-w-3xl text-center lg:text-left space-y-6">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-gray-800 leading-tight">
          {heading}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Image Content */}
      <div className="w-full lg:w-1/2 max-w-lg flex justify-center lg:justify-start">
        <Image
          src={imageSrc}
          alt="About Section Image"
          width={600}
          height={600}
          className="rounded-xl transform hover:scale-105 hover:shadow-lg transition duration-300"
        />
      </div>
    </div>
  );
};

export default AboutSection;
