// components/BenefitsSection.js
export default function BenefitsSection() {
    const benefits = [
      {
        id: 1,
        title: "Access the top 1% of talent",
        description: "We've already done the rigorous testing for technical, logical and soft-skill abilities so you don't have to.",
      },
      {
        id: 2,
        title: "Streamline communications",
        description: "Our developers align with your work hours, provide and listen to feedback, and have exceptional communication skills.",
      },
      {
        id: 3,
        title: "Skip recruitment delays",
        description: "Hiring the right talent is time-consuming. We assemble the right team of experts and onboard them in record time.",
      },
      {
        id: 4,
        title: "Create healthy teams",
        description: "We grill developers on their soft and behavioral skills to ensure seamless integration and positive culture-fit alignment.",
      },
    ];
  
    return (
      <section className="relative bg-gradient-radial from-purple-900 via-purple-950  to-purple-950 text-white py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-sm uppercase tracking-wider text-purple-400 mb-4">
            WarelineTech's Expertise
          </h3>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-black">
            Benefits of an embedded software development team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="relative border border-purple-400 rounded-lg p-8 bg-gradient-to-b from-gray-900 to-black"
              >
                {/* Large translucent number */}
                <div className="absolute top-1/2 left-4 -translate-y-1/2 text-9xl font-bold text-white opacity-10 pointer-events-none">
                  {benefit.id}
                </div>
                {/* Title and description */}
                <h4 className="text-xl font-semibold mb-2 text-purple-400">
                  {benefit.title}
                </h4>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  