import { CheckCircleIcon } from "@heroicons/react/solid";
export default function Process() {
    return (
      <div className="bg-gray-900 text-white py-16 bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/736x/56/a0/5c/56a05ce54b5b652f2014af2c22f06415.jpg')" }}>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-sm font-semibold text-indigo-400">YOUR FULL STACK DESIGN AND ENGINEERING PARTNER</h2>
            <p className="mt-4 text-3xl font-bold">
              From innovative design thinking to AI-integrated engineering solutions, 
              we empower your business transformation.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Column 1 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Design & Innovate</h3>
              <ul className="space-y-3">
                {[
                  "User Experience Design",
                  "Discovery and Prototyping",
                  "Artificial Intelligence (AI) Consulting",
                  "Internet of Things (IoT) Solutions",
                  "Digital Transformation",
                  "Custom Software Development",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-indigo-400 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
    
            {/* Column 2 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Engineer & Transform</h3>
              <ul className="space-y-3">
                {[
                  "Mobile App Development",
                  "Web App Development",
                  "Backend Development",
                  "Cloud Solutions",
                  "AI & Machine Learning Development",
                  "DevOps & Quality Engineering",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-indigo-400 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
    
            {/* Column 3 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Optimize & Scale</h3>
              <ul className="space-y-3">
                {[
                  "Performance Optimization",
                  "Legacy Modernization",
                  "Maintenance and Support",
                  "Data Analytics & Business Intelligence",
                  "Managed Cloud Services",
                  "Staff Augmentation",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-indigo-400 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    }