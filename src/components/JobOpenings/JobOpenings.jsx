import React, { useState } from 'react';

const JobOpenings = ({ jobs, departments = [] }) => {
  const [selectedDept, setSelectedDept] = useState('All');
  const [visibleJobs, setVisibleJobs] = useState(5); // Number of jobs to display initially

  const filteredJobs = selectedDept === 'All' 
    ? jobs 
    : jobs.filter(job => job.department === selectedDept);

  const showMoreJobs = () => {
    setVisibleJobs((prev) => prev + 5); // Show 5 more jobs each time
  };

  return (
    <div className="w-full mx-auto px-4 bg-slate-100">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-black mb-3">Open Positions</h2>
        <p className="text-neutral-500">
          Join our team and make an impact
        </p>
      </div>

      {/* Department filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        <button
          onClick={() => setSelectedDept('All')}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedDept === 'All'
              ? 'bg-white text-black'
              : 'bg-neutral-800 text-white hover:bg-neutral-700'
          }`}
        >
          All Departments
        </button>
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setSelectedDept(dept)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedDept === dept
                ? 'bg-white text-black'
                : 'bg-neutral-800 text-white hover:bg-neutral-700'
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Job listings */}
      <div className="space-y-4">
        {filteredJobs.slice(0, visibleJobs).map((job, index) => (
          <div
            key={job.id}
            className={`bg-white text-black rounded-lg p-6 hover:bg-neutral-700 transition-all cursor-pointer ${
              index === filteredJobs.length - 1 ? 'mb-16' : 'mb-8'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-black mb-2">{job.title}</h3>
                <p className="text-neutral-400 mb-3">
                  {job.department} · {job.location} · {job.type}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-neutral-900 text-white text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <button className="text-white hover:text-neutral-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleJobs < filteredJobs.length && (
        <div className="text-center mt-8">
          <button
            onClick={showMoreJobs}
            className="px-6 py-3 bg-neutral-800 text-white rounded-xl hover:bg-neutral-700 transition-colors"
          >
            Load More Jobs
          </button>
        </div>
      )}
    </div>
  );
};

export default JobOpenings;
