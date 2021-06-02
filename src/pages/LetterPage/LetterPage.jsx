import classNamesHelper from 'classnames';
import PropTypes from 'prop-types';

import './letter-page.css';

export default function LetterPage({ className }) {
  return (
    <section className={classNamesHelper('letter-page', className)}>
      <header className="letter-page__header">
        <h3 className="letter-page__header-greeting">Hej!</h3>
        <h4>I'm Nuanprae.</h4>
        <h4>lifelong learner</h4>
        <h4>web developer</h4>
        <h4>
          mother of three (<span className="letter-page__strike">dragons</span> children)
        </h4>
      </header>
      <p className="letter-page__paragraph">
        Have you ever heard of the expression <b>'curiosity killed the cat'</b>? It implies that
        curiosity is a bad thing. Luckily IKEA doesn't agree — and neither do I. My curiosity is
        precisely what has driven me to learn, grow, and become the person I am proud to be today.
      </p>
      <p className="letter-page__paragraph">
        Having grown up learning many different <b>human languages</b> (English, Thai, German and
        Swedish), it had never crossed my mind that one day I would be learning languages that would
        allow me to <b>communicate with machines</b>. I started learning how to build a website
        using online resources in the beginning of 2017. In September of the same year I was
        accepted into a six-month software engineering internship program at Arbor Networks in
        Sydney, Australia. I was <b>able to quickly come up to speed</b> with the technologies used
        within the company and learned how to <b>effectively work in an agile team</b>. I was also a
        part of Node Girls Sydney, an organisation that runs free JavaScript and Node.js workshops
        for women, non-binary and trans people, first as a participant, then later on as{' '}
        <b>a mentor and speaker</b> at their events.
      </p>
      <p className="letter-page__paragraph">
        Before changing my career path to web development, I worked as a primary school teacher in
        both Australia and Sweden. With my <b>background in education</b>, I believe that I can{' '}
        <b>contribute to IKEA as a software developer in a unique way</b>. I value learning as a
        lifelong journey and have a repertoire of learning strategies and thinking routines. I have
        taken these to Arbor Networks and FooCoding and they have helped us learn and improve
        together.
      </p>
      <p className="letter-page__paragraph">
        After moving back to Sweden in 2018, I went on parental leave and completed a Swedish as a
        second language course (grundläggande nivå) at Komvux. In November 2020 I started an
        intensive full-stack web development course at{' '}
        <a
          className="letter-page__external-link"
          href="https://www.foocoding.org/"
          rel="noreferrer"
          target="_blank"
        >
          FooCoding
        </a>{' '}
        in Malmö, which I will complete at the end of June. This course has deepened my knowledge
        and practical skills in <b>React.js, JavaScript, Node.js, HTML, CSS and Git</b>.
      </p>
      <p className="letter-page__paragraph">
        I’m absolutely thrilled to be applying for a role within the IKEA Accelerator Program 2021 -
        Junior Software Engineer. I would love to become one of the co-workers at IKEA where my
        values and skills can help{' '}
        <b>create a meaningful digital experience for the many people in the world</b>. I believe
        that I will grow immensely by being a part of this program where I, along with co-workers,{' '}
        <b>put IKEA values into practice</b>. I look forward to an opportunity to further show you
        how I can contribute to working at IKEA.
      </p>
      <p className="letter-page__paragraph">Thank you for your time and consideration.</p>
      <p>Kind regards,</p>
      <p className="letter-page__paragraph">Nuanprae</p>
    </section>
  );
}

LetterPage.propTypes = {
  className: PropTypes.string,
};
