import classNamesHelper from 'classnames';
import PropTypes from 'prop-types';

import './education-page.css';

export default function EducationPage({ className }) {
  return (
    <section className={classNamesHelper('education-page', className)}>
      <ul className="education-page__list">
        <li className="education-page__list-item">
          <h4 className="education-page__list-item-name">Full-stack web development course</h4>
          <p>Nov 2020 - Jun 2021</p>
          <p>FooCoding, Malmö</p>
        </li>
        <li className="education-page__list-item">
          <h4 className="education-page__list-item-name">JavaScript Summer Camp</h4>
          <p>Jun 2020</p>
          <p>Pink Programming</p>
        </li>
        <li className="education-page__list-item">
          <h4 className="education-page__list-item-name">LevelUp Build</h4>
          <p>Sep 2020</p>
          <p>ThoughtWorks</p>
        </li>
        <li className="education-page__list-item">
          <h4 className="education-page__list-item-name">Master of Teaching (Primary)</h4>
          <p>2009-2010</p>
          <p>Western Sydney University</p>
        </li>
        <li className="education-page__list-item">
          <h4 className="education-page__list-item-name">
            Bachelor of Arts (Advanced German Studies and Japanese Studies)
          </h4>
          <p>2006-2008</p>
          <p>University of New South Wales</p>
        </li>
        <li className="education-page__list-item">
          <h4 className="education-page__list-item-name">AFS Exchange Program</h4>
          <p>2003-2004</p>
          <p>Gymnasieskolan Spyken</p>
        </li>
      </ul>
    </section>
  );
}

EducationPage.propTypes = {
  className: PropTypes.string,
};
