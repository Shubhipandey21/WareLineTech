import React from 'react';

const Team = ({
    // Section headings props
    mainTitle = "LEADERSHIP THAT INSPIRES",
    subtitle = "We are a Mosaic that thrives on challenges",
    description = "Here's our leadership team that is driving our purpose to help our clients succeed.",

    // Styling props
    className = "py-16 px-4 max-w-7xl mx-auto",
    headingClassName = "text-center text-3xl font-bold mb-4",
    subtitleClassName = "text-center text-4xl mb-4",
    descriptionClassName = "text-center text-xl mb-16 text-gray-600",

    // Grid props
    gridClassName = "flex justify-center items-center gap-4 flex-wrap", // Adjusted for better spacing

    // Card props
    cardClassName = "bg-blue-50 rounded-3xl p-6 flex flex-col items-center w-[90%] sm:w-[60%] lg:w-[40%] mx-4", // Adjusted width and spacing
    nameClassName = "text-xl font-bold mb-2",
    titleClassName = "text-sm uppercase font-bold text-gray-600 text-center",
    descriptionClassNameCard = "text-base text-gray-700 text-center", // Description styling

    // Team members data
    teamMembers = []
}) => {
    return (
        <section className={className}>
            {/* Section Headers */}
            <h2 className={headingClassName}>{mainTitle}</h2>
            <h3 className={subtitleClassName}>{subtitle}</h3>
            <p className={descriptionClassName}>{description}</p>

            {/* Team Members Grid */}
            <div className={gridClassName}>
                {teamMembers.map((member, index) => (
                    <div key={index} className={cardClassName}>
                        {/* Member Info */}
                        <h3 className={nameClassName}>{member.name}</h3>
                        <h4 className={titleClassName}>{member.title}</h4>
                        <p className={descriptionClassNameCard}>{member.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
