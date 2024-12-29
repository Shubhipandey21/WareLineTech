import Image from 'next/image';

const AboutSection = ({ imageSrc, content }) => {
  return (
   <div className="relative min-h-[80vh] bg-cover bg-center flex items-center justify-center">
     <section
      className="flex flex-col lg:flex-row items-center justify-between gap-8 px-6 py-12 bg-White"
      style={{ height: '90vh' }}
    >
      {/* Text Section */}
      <div className="lg:w-1/2 w-full max-w-xl text-center lg:text-left">
        <h2 className="text-lg font-semibold text-gray-800 uppercase">{content.title}</h2>
        <h3
          className="text-3xl font-bold mb-4"
          style={{
            background: 'linear-gradient(to right, #4facfe, #00f2fe)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {content.highlight}
        </h3>
        <p className="text-gray-600 mb-8">{content.description}</p>
        <ul className="space-y-6">
          {content.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-4">
              <span className="text-blue-500 text-xl">✔️</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 w-full max-w-xl flex justify-center items-center">
        <Image
          src={imageSrc}
          alt="About Section Image"
          width={1000}
          height={1200}
          className="rounded-lg"
        />
      </div>
    </section>
   </div>
  );
};

export default AboutSection;
