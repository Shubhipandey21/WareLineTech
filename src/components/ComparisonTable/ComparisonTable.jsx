export default function ResponsiveComparisonTable() {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-sm font-semibold text-gray-500 tracking-wide uppercase">
              Accelerate Growth with Top Talent
            </h2>
            <h1 className="mt-2 text-4xl font-bold text-gray-900">
              Why use our <span className="text-purple-600">software development team?</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Dedicated teams are a great option when you need to outsource a whole project
              or a discrete part of your engineering org.
            </p>
          </div>
  
          {/* Table */}
          <div className="mt-10 overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-800 bg-white rounded-lg shadow-lg">
              {/* Table Header */}
              <thead className="bg-purple-50">
                <tr>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600">
                    Feature
                  </th>
                  <th className="py-4 px-6 text-center text-sm font-semibold text-gray-600">
                    Staff Augmentation
                  </th>
                  <th className="py-4 px-6 text-center text-sm font-semibold text-gray-600 bg-purple-100">
                    Dedicated Software Development Teams
                  </th>
                  <th className="py-4 px-6 text-center text-sm font-semibold text-gray-600">
                    Software Development Outsourcing
                  </th>
                </tr>
              </thead>
  
              {/* Table Body */}
              <tbody className="divide-y divide-gray-800">
                {[
                  { feature: "Scale your lineup as needed", staff: true, dedicated: false, outsourcing: true },
                  { feature: "Get our devs on your team(s)", staff: true, dedicated: false, outsourcing: false },
                  { feature: "Get an entire team working with/for you", staff: false, dedicated: true, outsourcing: true },
                  { feature: "Manage the team yourself", staff: true, dedicated: false, outsourcing: false },
                  { feature: "Leave the project management to us", staff: false, dedicated: false, outsourcing: true },
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-4 px-6 text-sm text-gray-700">{row.feature}</td>
                    <td className="py-4 px-6 text-center">{row.staff ? <CheckIcon /> : <DashIcon />}</td>
                    <td className="py-4 px-6 text-center bg-purple-100">
                      {row.dedicated ? <CheckIcon /> : <DashIcon />}
                    </td>
                    <td className="py-4 px-6 text-center">{row.outsourcing ? <CheckIcon /> : <DashIcon />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
  
  /* Icon Components */
  const CheckIcon = () => (
    <div className="inline-flex items-center justify-center w-8 h-8 bg-purple-100 text-purple-600 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
  
  const DashIcon = () => (
    <div className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 text-gray-500 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h12" />
      </svg>
    </div>
  );
  