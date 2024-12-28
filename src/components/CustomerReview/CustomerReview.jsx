import React from "react";

const CustomerReview = ({ logo, rating, reviewText, reviewerName, reviewerRole, badges }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      {/* Rating Section */}
      <div className="flex items-center mb-4">
        <img src={logo} alt="Company Logo" className="h-6 mr-2" />
        <span className="text-lg font-bold">{rating}</span>
        <ul className="flex ml-2">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <li key={index}>
                <img
                  src="https://cdn-ilajckf.nitrocdn.com/utLabjbGVjpaYDQkazoKnooguTzYeQRR/assets/images/optimized/rev-b8cf3a0/tamediacdn.techaheadcorp.com/wp-content/uploads/2023/10/17054621/clutch-rate.svg"
                  alt="Star"
                  className="h-4"
                />
              </li>
            ))}
        </ul>
      </div>

      {/* Review Text */}
      <p className="text-lg font-medium mb-4">{reviewText}</p>

      {/* Reviewer Information */}
      <div>
        <p className="font-bold text-gray-800">{reviewerName}</p>
        <p className="text-sm text-gray-500">{reviewerRole}</p>
      </div>

      {/* Badges Section */}
      <div className="flex justify-center mt-6 gap-4">
        {badges.map((badge, index) => (
          <img key={index} src={badge} alt={`Badge ${index + 1}`} className="h-12" />
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
