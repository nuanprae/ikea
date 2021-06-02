import classNamesHelper from 'classnames';
import PropTypes from 'prop-types';

import animalCrossingImg from '../../assets/animal-crossing.png';
import memoryGameImg from '../../assets/memory-game.png';

import './projects-page.css';

export default function ProjectsPage({ className }) {
  return (
    <section className={classNamesHelper('projects-page', className)}>
      <article className="projects-page__project">
        <header className="projects-page__project-title">
          <h3>Animal Crossing Daily Report</h3>
        </header>
        <a href="https://nuanprae.github.io/animal-crossing-app/" rel="noreferrer" target="_blank">
          <img
            className="projects-page__project-image"
            src={animalCrossingImg}
            alt="animal crossing daily report"
          />
        </a>
        <main className="projects-page___project-description">
          <h4>A web app built with React for Animal Crossing game players</h4>
          <h4>Features include:</h4>
          <ul className="projects-page__project-list">
            <li>finding out which critters are available at the time users visit the app</li>
            <li>
              listening to background music from Animal Crossing which changes according to the time
              and weather of the day, just like in the game
            </li>
            <li>filtering critters</li>
            <li>finding information about each critter</li>
          </ul>
        </main>
      </article>
      <article className="projects-page__project">
        <header className="projects-page__project-title">
          <h3>Nostalgic Games</h3>
        </header>
        <a href="https://nuanprae.github.io/games/" rel="noreferrer" target="_blank">
          <img className="projects-page__project-image" src={memoryGameImg} alt="games" />
        </a>
        <main className="projects-page___project-description">
          <h4>A web app built with React for playing nostalgic games</h4>
          <h4>Features include:</h4>
          <ul className="projects-page__project-list">
            <li>memory game</li>
            <li>snake game</li>
            <li>timer and leader board in memory game</li>
          </ul>
        </main>
      </article>
    </section>
  );
}

ProjectsPage.propTypes = {
  className: PropTypes.string,
};
