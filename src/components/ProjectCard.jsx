import React from 'react'

export default function ProjectCard({ children, to }) {
  if (to) {
    return (
      <div className='project-card'>
        <a href={to} target="_blank">
          {children}
        </a>
      </div>
    )
  }
  return (
    <div className='project-card'>
      {children}
    </div>
  )
}

function Content({ children }) {
  return (
    <div className='project-card-content'>
      {children}
    </div>
  )
}

function Holder({ children }) {
  return (
    <div className='project-card-holder'>
      {children}
    </div>
  )
}

function Tags({ children }) {
  return (
    <div className='project-card-tags'>
      {children}
    </div>
  )
}

function Tag({ hashtag }) {
  return (
    <span className='project-card-tag'>
      {hashtag}
    </span>
  )
}

export { Holder, Content, Tags, Tag }
