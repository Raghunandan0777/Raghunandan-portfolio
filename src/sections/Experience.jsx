import Freelancing from '../assets/freelancing.svg?react';
import Opensource from '../assets/opensource.svg?react';
import '../styles/experience.css';
import Timeline from '../components/Timeline';
import TimelineItem from '../components/TimelineItem';
import { TimeStamp } from '../components/TimelineItem';
import Upwork from '../assets/icons/upwork.svg?react';
import Fiverr from '../assets/icons/fiverr.svg?react';
import Github from '../assets/icons/github.svg?react';
import Vinoai from '../assets/vinoai.avif'

export default function Experience() {
    return (
        <div className='experience-section section'>
            <h2>Work Experience</h2>
            <div className='experience'>
                <div className="illustration">
                    <Freelancing />
                </div>
                <div className='details'>
                    <h3>Freelancing</h3>
                    <p>As a freelancer, I have worked on a variety of projects, including web development, mobile app development, and graphic design. I have experience working with clients from different parts of the world, and I have developed a strong understanding of the importance of communication and collaboration in remote work environments.</p>
                    <Timeline>
                        <TimelineItem icon={<Upwork />} color="#6fda44" to="https://www.upwork.com/freelancers/~013f6c37770776680c?mp_source=share">
                            <h4>Web & Automation Expert, Upwork</h4>
                            <TimeStamp stamp="2023 - now" />
                            <p>Specialized in creating automated web solutions for clients. Carting modern web interface for tools for your simplicity.</p>
                        </TimelineItem>
                        <TimelineItem icon={<Fiverr />} color="#1dbf73" to="https://fiverr.com/malaypatra9418">
                            <h4>Web Developer, Fiverr</h4>
                            <TimeStamp stamp="2023 - now" />
                            <p>Developing websites for clients using Reactjs, Expressjs, Mongodb, Nodejs (MERN).</p>
                        </TimelineItem>
                        <TimelineItem icon={<img src={Vinoai} />} color="#d4a7b4" bgColor="white" to="https://www.vino-app.com/">
                            <h4>Automation Developer, Vino.ai</h4>
                            <TimeStamp stamp="2023, Feb" />
                            <p>Built an automated documentation generator for input git repo integrating Openai, GPT-4 model.</p>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
            <div className='experience reverse'>
                <div className='details'>
                    <h3>Open Source Contribution</h3>
                    <p>Actively contributed to open-source projects by developing new features, resolving issues, and enhancing documentation. Engaged with the community through code reviews and discussions to drive improvements.</p>
                    <Timeline>
                        <TimelineItem icon={<Github />} color="#0745a3" to="https://github.com">
                            <h4>Github</h4>
                            <TimeStamp stamp="2022 - now" />
                            <p>Maintained and contributed to repositories, collaborating on code, issues, and pull requests.</p>
                        </TimelineItem>
                    </Timeline>
                </div>
                <div className="illustration">
                    <Opensource />
                </div>
            </div>
        </div>
    )
}
