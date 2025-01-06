import Link from "next/link";

export default function ProcessSteps() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white py-16 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-xl font-bold uppercase mb-6">
          Let’s Discuss How Your Setup Should Look
        </h2>
        <h3 className=" text-center text-4xl font-semibold mb-24">
          Our process: Simple, Seamless, Streamlined
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-6 flex items-center justify-center w-16 h-16 bg-purple-700 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232a3 3 0 114.242 4.242l-9.192 9.192a4.5 4.5 0 11-6.364-6.364l9.192-9.192z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7L7 16" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2">Step 1</h4>
            <p className="text-lg font-medium">Complete a discovery call.</p>
            <p className="mt-4 text-base text-gray-400">
              Share your business details in a discovery call. We’ll cover team
              structure, success criteria, timeline, budget, and required
              skills.
            </p>
          </div>

          {/* Central Circle */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-96 h-96 rounded-full bg-gradient-to-b from-purple-800 to-blue-600 opacity-20"></div>
            <div className="absolute w-72 h-72 rounded-full bg-gradient-to-b from-purple-700 to-blue-500 opacity-30"></div>
            <div className="absolute w-48 h-48 rounded-full bg-gradient-to-b from-purple-600 to-blue-400 opacity-40"></div>
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-b from-purple-500 to-blue-300 flex items-center justify-center">
              <span className="text-sm font-bold text-center">Schedule a Call</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-6 flex items-center justify-center w-16 h-16 bg-purple-700 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m-1-4h2a2 2 0 012 2v1a2 2 0 01-2 2h-3m-2 6a9 9 0 1118 0H3z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2">Step 2</h4>
            <p className="text-lg font-medium">Get the exact team you need.</p>
            <p className="mt-4 text-base text-gray-400">
              We’ll assemble the perfect team based on your needs, then work
              with you to onboard and integrate them.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="mt-24 flex flex-col items-center text-center">
          <div className="mb-6 flex items-center justify-center w-16 h-16 bg-purple-700 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 16l-4-4m0 0l4-4m-4 4h16m-8 4l4-4m0 0l-4-4m4 4H4"
              />
            </svg>
          </div>
          <h4 className="text-xl font-semibold mb-2">Step 3</h4>
          <p className="text-lg font-medium">
            Get started and track performance.
          </p>
          <p className="mt-4 text-base text-gray-400">
            Once onboarded, your team starts immediately. Track progress,
            manage, and scale the team as needed.
          </p>
        </div>
      </div>
    </div>
  );
}
