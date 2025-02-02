

import React from 'react'

export default function Card({ heading = ' ', skills = [], color = 'currentColor' }) {
  return (
    <div className='skill-card' style={{ '--clr': color }}>
      <h3>
        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round">
          <path strokeWidth="3" d="M5.99 6H6m5.99 0H12m5.99 0H18M5.99 12H6m5.99 0H12m5.99 0H18M5.99 18H6m5.99 0H12m5.99 0H18" />
        </svg>
        {heading}
      </h3>
      <ul className='skill-list'>
        {skills.map((skill, index) => (
          <li key={index}>{'#' + skill}</li>
        ))}
      </ul>
    </div>
  )
}
