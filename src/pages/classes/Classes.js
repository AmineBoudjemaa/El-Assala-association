import React from 'react'
import Class from '../class/Class'
import { Link, useParams } from 'react-router-dom'
import { selectClasses } from '../../features/categoriesSlice';
import { useSelector } from 'react-redux';

const Classes = () => {
  const { type, level } = useParams();
  console.log(type, level);
  const classes = useSelector((state) => selectClasses(state, type, level))
  console.log(classes)
  if (classes && classes.length === 0) {
    return (
      <Class />
    )
  } else {
    return (
      <main className="content container">
        <section>
          <h1>category of classes</h1>
          <div className="statistic-container">
            {classes && classes.map(clas => (
              <Link key={clas}>
                <div className="statistics-card">
                  <i className="fa-solid fa-school-flag"></i>
                  <span className="label">{clas}</span>
                </div>
              </Link >))}
          </div>
        </section>
      </main >
    )
  }

};

export default Classes
