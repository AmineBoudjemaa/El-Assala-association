import React from "react";
import "./statistics.css";
import { useSelector } from "react-redux";
import { nbrAllStudents } from "../../features/studentsSlice";
import { selectAllCategories } from "../../features/categoriesSlice";
import StatisticsCard from "./StatisticsCard";

const Statistics = () => {
  const categories = useSelector(selectAllCategories);
  const nbrStudents = useSelector(nbrAllStudents);
  return (
    <main className="content container" >
      <section>
        <h1>Company Statistics</h1>
        <div className="statistic-container">
          <div className="statistics-card">
            <i className="fas fa-users"></i>
            <span className="label">Total Students :</span>
            <span className="value">{nbrStudents}</span>
          </div>
          <div className="statistics-card">
            <i className="fas fa-dollar-sign"></i>
            <span className="label">Total Money:</span>
            <span className="value">$10,000</span>
          </div>
          <div className="statistics-card">
            <i className="fas fa-door-open"></i>
            <span className="label">Total Classes:</span>
            <span className="value">{categories.length}</span>
          </div>
          <div className="statistics-card">
            <i className="fas fa-chalkboard-teacher"></i>
            <span className="label">Total Teachers:</span>
            <span className="value">10</span>
          </div>
        </div>
      </section>
      <section>
        <h1>category of classes</h1>
        <div className="statistic-container">
          {categories && categories.map(category => <StatisticsCard key={category.category} category={category} />)}
        </div>
      </section>
    </main>
  );
};

export default Statistics;
