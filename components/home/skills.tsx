import React from "react";

export default function Skills() {
  return (
    <div>
      <h3 className="mt-8 text-3xl font-medium font-display">Core Skills</h3>
      <ul className="list-disc list-inside">
        {data.map((item) => (
          <li key={item} className="text-lg leading-10 font-normal">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

const data = [
  "Project Building",
  "Cross-Functional Collaboration, Market and Competitors Analysis",
  "User -Centred Design",
  "Leadership Communication",
  "Technical Acumen",
  "Agile Methodologies",
  "Decision Making",
];
