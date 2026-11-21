"use client";

import { useRef, useState } from "react";

const projects = [
  { title: "DNF Trading", type: "3D configurator", image: "/instruments.png", description: "A product catalog and ordering platform with a live 3D customizer. My work included the customer workflow, admin dashboard, and instrument configuration options." },
  { title: "Wilton Dental", type: "Website pitch prototype", image: "/tooth.webp", description: "A multi-page redesign concept that uses responsive treatment pages and a guided care journey to help patients explore their options." },
  { title: "Hotel Javson", type: "Hospitality pitch prototype", image: "/hotel.jpg", description: "A cinematic hospitality website concept with a filterable gallery and an interactive stay planner." },
  { title: "SpendTrail", type: "Flutter mobile app", image: "/spendtrail.png", description: "An Android demonstration app that tracks spending and simulates purchases and refunds, with a PostgreSQL backend." },
  { title: "TRST Maintenance", type: "Service website pitch", image: "/property.png", description: "An independent redesign concept for a maintenance business, with a service map, searchable FAQs, and an enquiry journey." },
  { title: "3DFV", type: "Restaurant ordering app", image: "/restaurant.jpg", description: "An Expo and FastAPI restaurant app. My work included guest browsing, menu details, size-based pricing, cart confirmation, and a QR-to-AR flow. The photo is illustrative." },
];

export default function WorkIndex() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dialog = useRef(null);
  const selected = projects[selectedIndex];

  function move(step) {
    setSelectedIndex((index) => (index + step + projects.length) % projects.length);
  }

  function navigateWithKeys(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      move(event.key === "ArrowLeft" ? -1 : 1);
    }
  }

  return (
    <main className="archive">
      <header className="bar">
        <span>Huzaifa Jayyad</span>
        <a href="https://github.com/HJM-10">GitHub</a>
      </header>
      <div className="index">
        <div className="hexagon" role="group" aria-label="Project selector" onKeyDown={navigateWithKeys}>
          <div className="center">
            <h1>Work index</h1>
            <span>Huzaifa Jayyad</span>
          </div>
          {projects.map((project, index) => (
            <button
              className={`panel panel-${index + 1}`}
              type="button"
              key={project.title}
              aria-pressed={index === selectedIndex}
              onClick={() => setSelectedIndex(index)}
            >
              <img src={project.image} alt="" />
              <span>{project.title}</span>
            </button>
          ))}
        </div>
        <div className="selection">
          <button type="button" onClick={() => move(-1)}>Previous</button>
          <div className="active-project">
            <div aria-live="polite">
              <p>{selected.type}</p>
              <h2>{selected.title}</h2>
            </div>
            <button type="button" className="details" onClick={() => dialog.current.showModal()}>View project</button>
          </div>
          <button type="button" onClick={() => move(1)}>Next</button>
        </div>
      </div>

      <dialog ref={dialog} aria-labelledby="project-title">
        <form method="dialog"><button type="submit">Close</button></form>
        <img src={selected.image} alt="" />
        <p>{selected.type}</p>
        <h2 id="project-title">{selected.title}</h2>
        <p>{selected.description}</p>
      </dialog>
    </main>
  );
}
