import { Button1 } from '../components/Buttons'
import Pdf from "../assets/icons/pdf.svg?react";
import SvgIcon from '../components/SvgIcon';

export default function About() {


  return (
    <div className='about-section section' id="about">
      <h2>About</h2>
      <p>
        I'm <span className="hl">Malay Patra</span>, an undergraduate (2028) <a href="https://jadavpuruniversity.in">engineering student at Jadavpur University</a>. I am passionate about building dynamic and efficient web applications with the <span className="hl">MERN stack</span>. As a self-taught developer, I am constantly exploring new technologies to sharpen my skills.
      </p>
      <p>
        In 2023, I began my freelancing journey on <span className="hl">Upwork</span>, collaborating with clients before pausing in mid-2024 to focus on advancing my technical expertise and balancing my engineering academics. I have also gained hands-on experience working with <span className="hl">startups</span>, contributing to real-world projects and production environments.
      </p>
      <p>
        Currently, I am <span className="hl">actively seeking a full-stack web developer role</span> where I can apply my skills, grow professionally, and build impactful digital solutions
      </p>
      <p>Let’s build something great! ✨</p>
      <a href="https://drive.google.com/file/d/1ndeSxjR6InKTRdrs69jDwf1PTqHN_JSt/view" target='_blank'>
        <Button1>
          <SvgIcon icon={Pdf} />
          Resume
        </Button1>
      </a>
    </div>
  )
}
