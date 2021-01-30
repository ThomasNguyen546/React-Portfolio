import React from 'react';
import Project from '../Project';

import img1 from '../../assets/images/RecipeRoundup.png';
import img2 from '../../assets/images/HolidayPlanner.png';
import img3 from '../../assets/images/BudgetTracker.png';
import img4 from '../../assets/images/NoteTaker.png';
import img5 from '../../assets/images/PizzaHunt.png';
import img6 from '../../assets/images/FortressOfFandom.png';


function Portfolio () {

  const projects = [
    {
      id: 6,
      name: 'Fortress of Fandom',
      liveUrl: 'https://immense-mesa-76865.herokuapp.com/',
      gitUrl: 'https://github.com/ThomasNguyen546/fortress-of-fandom',
      style: {
        backgroundImage: "url( " + img6 + ")"
      }
    },
    {
      id: 1,
      name: 'Recipe Roundup',
      liveUrl: 'https://thomasnguyen546.github.io/Recipe-Finder/',
      gitUrl: 'https://github.com/ThomasNguyen546/Recipe-Finder',
      style: {
        backgroundImage: "url( " + img1 + ")"
      }
    },
    {
      id: 2,
      name: 'Holiday Planner',
      liveUrl: 'https://desolate-inlet-16467.herokuapp.com/',
      gitUrl: 'https://github.com/ThomasNguyen546/holiday-planner',
      style: {
        backgroundImage: "url( " + img2 + ")"
      }
    },
    {
      id: 3,
      name: 'Budget Tracker',
      liveUrl: 'https://arcane-peak-75147.herokuapp.com/',
      gitUrl: 'https://github.com/ThomasNguyen546/Budget-Tracker',
      style: {
        backgroundImage: "url( " + img3 + ")"
      }
    },
    {
      id: 4,
      name: 'Note Taker',
      liveUrl: 'https://nameless-earth-68005.herokuapp.com/',
      gitUrl: 'https://github.com/ThomasNguyen546/Note-Taker',
      style: {
        backgroundImage: "url( " + img4 + ")"
      }
    },
    {
      id: 5,
      name: 'Pizza Hunt',
      liveUrl: 'https://floating-journey-93525.herokuapp.com/',
      gitUrl: 'https://github.com/ThomasNguyen546/Pizza-Hunt',
      style: {
        backgroundImage: "url( " + img5 + ")",
      }
    }
  ];


  return (
    <section id="project-container">
      <div className="section-title">
        <h2 id="project-header">Projects</h2>
      </div>
      <div id="project-grid">
        {projects.map(project => (
          <Project {...project}
          key={project.id}
          />
        ))}
      </div>
    </section>
  )
}

export default Portfolio;