const GrowthComponent = () => {
    const cards = [
      {
        id: 1,
        icon: "🔍", // Replace with SVG for better visuals
        title: "Product Research",
        description:
          "To lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase.",
      },
      {
        id: 2,
        icon: "💻", // Replace with SVG for better visuals
        title: "Product Design",
        description:
          "By putting user’s need at the forefront, we tell a unique story of your company, juggling with fancy visual elements.",
      },
      {
        id: 3,
        icon: "⚙️", // Replace with SVG for better visuals
        title: "Product Development",
        description:
          "The motto of our development process is creating digital experiences that are both appealing and functional.",
      },
      {
        id: 4,
        icon: "📈", // Replace with SVG for better visuals
        title: "Product Growth & Care",
        description:
          "With various tools, our experts can help you expand the target audience and increase brand awareness.",
      },
    ];
  
    return (
      <section className="bg-violet-100 py-16 px-8 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600">
            We enable rapid growth
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            through digital creation
          </p>
          <p className="mt-4 text-gray-500">
            Our team of experts are dedicated to helping clients navigate the
            complexities of digital transformation to unlock new avenues of
            growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {cards.map((card) => (
              <div
                key={card.id}
                className="p-6 bg-white rounded-lg shadow-md flex items-start space-x-4"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 text-white text-2xl font-bold">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-gray-500">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default GrowthComponent;
  