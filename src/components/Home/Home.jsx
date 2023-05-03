import React from 'react';
import './Home.scss';

function Home() {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <div className="home-container">
      <h3 className="home-head">Welcome to our Page!</h3>
      <p className="home-desc">
        Mathematics is the study of numbers, quantities, and shapes.
        It is an essential tool in almost every field, including science, engineering, finance,
        and technology. Mathematics is divided into various branches,
        such as geometry, algebra, calculus, and statistics.
        It is a subject that requires
        logical reasoning, problem-solving skills,
        and critical thinking.
      </p>
      <p className="home-desc">
        Mathematics has been an integral part of human civilization for thousands of years.
        From ancient civilizations such as the Egyptians, Babylonians, and Greeks,
        to modern-day scientists and mathematicians,
        the study of mathematics has helped us understand the world around us.
        Mathematics is used to solve complex problems in fields such as physics, engineering,
        and computer science. It is also used in everyday life,
        from calculating the cost of groceries to designing buildings and bridges.
      </p>
    </div>
  );
}

export default Home;
