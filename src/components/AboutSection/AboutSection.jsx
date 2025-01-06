import Image from 'next/image';

const AboutSection = ({ imageSrc, content }) => {
  return (
    <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center">
      <section
        className="flex flex-col lg:flex-row items-center justify-between gap-8 px-4 md:px-8 py-12 bg-white w-full max-w-screen-xl mx-auto"
      >
        {/* Text Section */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h2 className="text-lg font-semibold text-gray-800 uppercase">
            {content.title}
          </h2>
          <h3
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{
              background: 'linear-gradient(to right, #4facfe, #00f2fe)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {content.highlight}
          </h3>
          <p className="text-gray-600 mb-6 md:mb-8">
            {content.description}
          </p>
          <ul className="space-y-4">
            {content.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-500 text-xl">✔️</span>
                <div>
                  <h4 className="text-md md:text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center items-center">
          <Image
            src={imageSrc}
            alt="About Section Image"
            width={600}
            height={500}
            className="rounded-lg w-full max-w-sm sm:max-w-md lg:max-w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
