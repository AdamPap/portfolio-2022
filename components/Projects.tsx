import Image from "next/image";
import React from "react";
import vanImg from "../public/trip.webp";

const Projects = () => {
  return (
    <section className="mt-32">
      <h3 className="regular-text mb-16">
        <span className="text-crimson">01.</span>
        <span className="ml-10">Projects</span>
      </h3>

      <div className="w-3/4 relative">
        <Image
          objectFit="cover"
          src={vanImg}
          alt="Mini van in a road surroinded by mountains"
        />
        <div className="regular-text mt-3">
          Web App <span className="text-crimson">/</span> Travel Advice
        </div>
        <div className="project-title-right">Next Journey</div>
      </div>

      <div className="flex justify-end mt-16">
        <div className="w-3/4 relative">
          <Image
            objectFit="cover"
            src={vanImg}
            alt="Mini van in a road surroinded by mountains"
          />
          <div className="regular-text mt-3">
            Web App <span className="text-crimson">/</span> Travel Advice
          </div>
          <div className="project-title-left">Next Journey</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
