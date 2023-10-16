import React from "react";

export default function AboutMeComponent() {
  return (
    <div className="pt-4 border-t border-black max-w-4xl mx-auto">
      <h3 className="my-4 text-2xl font-medium font-display">About Me</h3>
      <p className="mb-4 text-lg font-normal">
        A full-stack Software engineer & designer and a creative thinker with 6+
        years of industrial experience. Strongly driven towards creating value
        for business & technology stakeholders, bringing design innovation to
        the product. Worked in diverse domains ranging from E-Commerce, Consumer
        Technology, Finance, Networking, Construction & Entertainment
        Industries. Experience in building end-to-end UI/UX design teams, grow &
        mentor.
      </p>
      <ul className="list-disc list-inside">
        <span className="text-lg font-medium font-display">
          Worked in diverse domains ranging from
        </span>
        {list.map((item) => (
          <li key={item} className="text-lg font-normal list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

const list = [
  "E-Commerce",
  "Consumer Technology",
  "Finance",
  "Networking",
  "Construction & Entertainment.",
];
