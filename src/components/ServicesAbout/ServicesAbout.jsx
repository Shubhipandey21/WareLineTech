import Image from 'next/image';

const AboutSection = ({ heading, description, imageSrc }) => {
  return (
    <div className="flex  items-center justify-center min-h-[80vh] bg-gradient-to-r from-gray-300 to-gray-100 p-8 md:p-16 rounded-xl shadow-lg space-y-8">
      {/* Text Content */}
      <div className="w-full max-w-3xl text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">
          {heading}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Image Content */}
      <div className="w-full max-w-md flex justify-center transform hover:scale-105 transition duration-300">
        <Image
          src={imageSrc}
          alt="About Section Image"
          width={500}
          height={500}
          className="rounded-xl "
        />
      </div>
    </div>
  );
};

export default AboutSection;
