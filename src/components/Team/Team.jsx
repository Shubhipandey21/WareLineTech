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
    gridClassName = "flex justify-center items-center gap-0", // Center the cards horizontally without gaps

    // Card props
    cardClassName = "bg-blue-50 rounded-3xl p-6 flex flex-col items-center w-[45%] sm:w-[40%] lg:w-[30%] mx-4", // Add some margin between cards
    imageContainerClassName = "w-48 h-48 rounded-full overflow-hidden mb-6 border-2 border-blue-200",
    nameClassName = "text-xl font-bold mb-2",
    titleClassName = "text-sm uppercase text-gray-600 text-center",

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
                        {/* Member Image */}
                        <div className={imageContainerClassName}>
                            {member.imageUrl ? (
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-200" />
                            )}
                        </div>
                        {/* Member Info */}
                        <h4 className={nameClassName}>{member.name}</h4>
                        <p className={titleClassName}>{member.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
