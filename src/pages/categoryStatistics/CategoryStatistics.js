import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { selectCategoriesByNiveau } from '../../features/categoriesSlice'

const CategoryStatistics = () => {
  const { type } = useParams()
  const category = useSelector((state) => selectCategoriesByNiveau(state, type))
  return (
    <main className="content container">
      <section>
        <h1>category of classes</h1>
        <div className="statistic-container">
          {category && category.niveaux.map(niveau => (
          <Link to={niveau.path} key={niveau.title}>
            <div className="statistics-card">
              <i className={category.icon}></i>
                <span className="label">{niveau.title}</span>
            </div>
          </Link >))}
        </div>
      </section>
    </main >
  )
}

export default CategoryStatistics
