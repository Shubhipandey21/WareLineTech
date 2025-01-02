import Link from "next/link";
export default function Home() {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6 relative">
        <h1 className="text-center text-lg font-semibold uppercase tracking-wide mb-8">
          Let&apos;s Discuss How Your Setup Should Look
        </h1>
        <h2 className="text-center text-4xl font-bold mb-12">
          Our process: Simple, Seamless, Streamlined
        </h2>
  
        <div
          className="relative w-full max-w-3xl mx-auto flex flex-col items-center justify-center bg-center bg-contain bg-no-repeat"
          style={{ backgroundImage: "url('/Circle.jpeg')", aspectRatio: '1' }}
        >
          <Link
            href="/contact-us"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-medium py-3 px-6 rounded-full shadow-lg hover:opacity-90 transition-opacity"
          >
            Schedule a Call
          </Link>
  
          <div className="absolute top-4 left-4 text-left">
            <h3 className="text-xl font-bold mb-4">Step 1</h3>
            <p className="text-lg">Complete a discovery call.</p>
            <p className="mt-2 text-gray-300">
              Share your business details in a discovery call. We&apos;ll cover team structure, success criteria, timeline, budget, and required skills to explore how we can assist.
            </p>
          </div>
  
          <div className="absolute top-4 right-4 text-right">
            <h3 className="text-xl font-bold mb-4">Step 2</h3>
            <p className="text-lg">Get the exact team you need.</p>
            <p className="mt-2 text-gray-300">
              We&apos;ll quickly assemble the perfect team based on your needs, then work with you to onboard and integrate them.
            </p>
          </div>
  
          <div className="absolute bottom-4 left-4 text-left">
            <h3 className="text-xl font-bold mb-4">Step 3</h3>
            <p className="text-lg">Get started and track performance.</p>
            <p className="mt-2 text-gray-300">
              Once onboarded, your team starts immediately. You can track progress, manage, and scale the team as needed.
            </p>
          </div>
        </div>
      </div>
    );
  }
  