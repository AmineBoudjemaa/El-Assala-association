import React from 'react'
import { Link } from 'react-router-dom'

const StatisticsCard = ({category}) => {
  return (
    <Link to={category.category}>
    <div className="statistics-card">
      <i className={category.icon}></i>
      <span className="label">{category.category}</span>
    </div>
    </Link >
  )
}

export default StatisticsCard
