import "../styles/projects.css";
import ProjectCard, {
  Holder,
  Content,
  Tags,
  Tag,
  CardActions,
} from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="section projects-section" id="projects">
      <h2>Projects</h2>
      <Holder>
        <ProjectCard>
          <img src="/src/assets/icons/Ecommarce.png" alt="FOREVER" />
          <Content>
            <h3>FOREVER</h3>
            <p>
              Built full e-commerce solution with Stripe payment integration.
              Reduced transaction failures by 95% and cart abandonment by 20%.
              Added real-time chat support, improving customer satisfaction by
              35%.
            </p>
            <Tags>
              <Tag hashtag="JavaScript" />
              <Tag hashtag="Reactjs" />
              <Tag hashtag="Node.js" />
              <Tag hashtag="MongoDB" />
              <Tag hashtag="TailwindCSS" />
            </Tags>
          </Content>
          <CardActions
            visit="https://forever-full-stack-frontend-slwl.onrender.com"
            source="https://github.com/Raghunandan0777/forever-full-stack"
          />
        </ProjectCard>
        <ProjectCard>
          <img src="/src/assets/icons/Quick.ai.png" alt="Quick.ai" />
          <Content>
            <h3>Quick.ai</h3>
            <p>
              Developed MERN stack SaaS platform with multiple AI tools using OpenAI
              API. Scalable APIs handled 1,000+ daily requests with 99.8%
              uptime. Responsive UI with React and Tailwind CSS achieved 95+
              Lighthouse score.
            </p>
            <Tags>
              <Tag hashtag="JavaScript" />
              <Tag hashtag="Reactjs" />
              <Tag hashtag="Node.js" />
              <Tag hashtag="Postersql" />
              <Tag hashtag="TailwindCSS" />
            </Tags>
          </Content>
          <CardActions
            visit="https://quick-ai-client-n6it5xqdh-raghunandan-shahs-projects.vercel.app/"
            source="https://github.com/Raghunandan0777/QuickAi"
          />
        </ProjectCard>
        {/* <ProjectCard>
          <img src="physoxy.png" alt="Physoxy" />
          <Content>
            <h3>Physoxy</h3>
            <p>
              A full-stack, production-ready web app with secure JWT
              authentication, role-based access, and user subscriptions.
              Features a decoupled architecture, email verification, theme
              support, and admin tools—all and many more.
            </p>
            <Tags>
              <Tag hashtag="React" />
              <Tag hashtag="Mongodb" />
              <Tag hashtag="Express js" />
              <Tag hashtag="Tailwind Css" />
              <Tag hashtag="daisy UI" />
            </Tags>
          </Content>
          <CardActions
            visit="https://physoxy.vercel.app"
            source="https://github.com/malay77patra/Physoxy"
          />
        </ProjectCard>
        <ProjectCard>
          <img src="flamecoders.png" alt="Flamecoders" />
          <Content>
            <h3>Flamecoders</h3>
            <p>
              A full-stack article platform with a rich markdown editor, theme
              support, and secure JWT-based auth. Designed with scalable,
              decoupled architecture and production-grade structure for seamless
              writing, deployment, and user experience.
            </p>
            <Tags>
              <Tag hashtag="React" />
              <Tag hashtag="Mongodb" />
              <Tag hashtag="Express js" />
              <Tag hashtag="Tailwind Css" />
              <Tag hashtag="daisy UI" />
            </Tags>
          </Content>
          <CardActions
            visit="https://flamecoders.vercel.app/"
            source="https://github.com/malay77patra/flamecoders-frontend"
          />
        </ProjectCard>
        <ProjectCard>
          <img src="malay-patrav1.png" alt="Portfolio v1" />
          <Content>
            <h3>Malay Patra, Portfolio v1</h3>
            <p>
              This is the first version of my personal portfolio website. It
              showcases my skills, projects, and experiences as a web developer.
              The portfolio is designed to be visually appealing and easy to
              navigate, providing a detailed introduction about myself.
            </p>
            <Tags>
              <Tag hashtag="React" />
              <Tag hashtag="React-Scroll" />
            </Tags>
          </Content>
          <CardActions
            visit="https://malaypatra.vercel.app/"
            source="https://github.com/malay77patra/portfolio"
          />
        </ProjectCard> */}
      </Holder>
    </div>
  );
}
