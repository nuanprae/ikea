import classNamesHelper from 'classnames';
import PropTypes from 'prop-types';

import './experience-page.css';

export default function ExperiencePage({ className }) {
  return (
    <section className={classNamesHelper('experience-page', className)}>
      <ul className="experience-page__list">
        <li className="experience-page__list-item">
          <h4 className="experience-page__list-item-name">Software Engineer Intern</h4>
          <p>Sep 2017 - Feb 2018</p>
          <p>Arbor Networks, Sydney</p>
          <ul className="experience-page__sub-list">
            <li>
              Built a single page web application which shows a global summary of DDoS attacks.
            </li>
            <li>
              Added features to an internal web application used to plot DDoS attacks on a map.
            </li>
          </ul>
        </li>
        <li className="experience-page__list-item">
          <h4 className="experience-page__list-item-name">
            Primary Years Program (International Baccalaureate) Teacher
          </h4>
          <p>Aug 2015 - Jun 2016</p>
          <p>International School of Lund - Katedralskolan</p>
          <ul className="experience-page__sub-list">
            <li>
              Developed and facilitated learning experiences for primary school-aged students from a
              diverse range of backgrounds.
            </li>
            <li>
              Organised and attended three-way conferences (student, parents and teacher). I
              communicated student progress and provided advice to parents effectively and
              sensitively.
            </li>
          </ul>
        </li>
        <li className="experience-page__list-item">
          <h4 className="experience-page__list-item-name">Classroom Teacher</h4>
          <p>Jun 2010 - Nov 2012</p>
          <p>Cabramatta West Public School, Sydney</p>
          <ul className="experience-page__sub-list">
            <li>
              Developed and facilitated learning experiences for Kindergarten – Year 6 students.
            </li>
            <li>Assessed student performance and reported student progress to parents.</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

ExperiencePage.propTypes = {
  className: PropTypes.string,
};
