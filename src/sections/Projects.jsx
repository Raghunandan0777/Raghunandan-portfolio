import '../styles/projects.css'
import ProjectCard, { Holder, Content, Tags, Tag } from '../components/ProjectCard'

export default function Projects() {
  return (
    <div className='section projects-section'>
      <h2>Projects</h2>
      <Holder>
        <ProjectCard>
          <img src='live-html.png' alt='Live Html Editor' />
          <Content>
            <h3>Live Html Editor</h3>
            <p>A super lightweight and user-friendly live HTML editor that runs directly in your browser. It allows you to write, edit, and preview HTML code in real-time, making it an excellent tool for web developers and designers to quickly prototype and test their code.</p>
            <Tags>
              <Tag hashtag="Html5" />
              <Tag hashtag="Css3" />
              <Tag hashtag="JavaScript" />
            </Tags>
          </Content>
        </ProjectCard>
        <ProjectCard>
          <img src='malay-patrav1.png' alt='Portfolio v1' />
          <Content>
            <h3>Malay Patra, Portfolio v1</h3>
            <p>This is the first version of my personal portfolio website. It showcases my skills, projects, and experiences as a web developer. The portfolio is designed to be visually appealing and easy to navigate, providing a detailed introduction about myself.</p>
            <Tags>
              <Tag hashtag="React" />
              <Tag hashtag="React-Scroll" />
            </Tags>
          </Content>
        </ProjectCard>
      </Holder>
    </div>
  )
}
