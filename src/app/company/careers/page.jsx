'use client'

import CareerForm from "@/components/CareerForm/CareerForm";
import JobOpenings from "@/components/JobOpenings/JobOpenings";
import TeamBanner from "@/components/TeamBanner/TeamBanner";

// Example usage
const jobData = [
    {
        id: 1,
        title: "Senior Full Stack Developer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        skills: ["React", "Node.js", "AWS"]
    },
    {
        id: 2,
        title: "UX/UI Designer",
        department: "Design",
        location: "Remote",
        type: "Full-time",
        skills: ["Figma", "Adobe XD", "Prototyping"]
    },
    {
        id: 3,
        title: "UX/UI Designer",
        department: "Design",
        location: "Remote",
        type: "Full-time",
        skills: ["Figma", "Adobe XD", "Prototyping"]
    },
    {
        id: 4,
        title: "UX/UI Designer",
        department: "Design",
        location: "Remote",
        type: "Full-time",
        skills: ["Figma", "Adobe XD", "Prototyping"]
    },
    {
        id: 5,
        title: "UX/UI Designer",
        department: "Design",
        location: "Remote",
        type: "Full-time",
        skills: ["Figma", "Adobe XD", "Prototyping"]
    },
    {
        id: 6,
        title: "UX/UI Designer",
        department: "Design",
        location: "Remote",
        type: "Full-time",
        skills: ["Figma", "Adobe XD", "Prototyping"]
    }
];

const departments = ["Engineering", "Design", "Marketing", "Operations"];

// In your page/component:
const Page = () => {
    return (
        <>
            <TeamBanner />
            <JobOpenings jobs={jobData} departments={departments} />
            <div id="career-form" className="mt-12">
        <CareerForm />
      </div>
        </>
    );
}
export default Page;