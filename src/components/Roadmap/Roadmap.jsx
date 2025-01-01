import PropTypes from "prop-types";

export default function Roadmap({ title, description, items }) {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-8">
          {title}
        </h2>
        <p className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-12">
          {description}
        </p>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {items.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* Connector Path */}
              {index !== items.length - 1 && (
                <div
                  className="absolute top-1/2 transform -translate-y-1/2 md:left-full md:translate-x-2 w-12 md:w-20 h-0 border-dotted border-blue-500 border-t-2"
                  style={{
                    zIndex: -1,
                  }}
                ></div>
              )}

              {/* Item Content */}
              <div className="bg-gray-800 p-4 rounded-full mb-4 z-10">
                <item.icon className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Prop type validation
Roadmap.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
