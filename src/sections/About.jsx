import { Button1 } from '../components/Buttons'
import Pdf from "../assets/icons/pdf.svg?react";
import SvgIcon from '../components/SvgIcon';

export default function About() {


  return (
    <div className='about-section section'>
      <h2>About</h2>
      <p>
        I’m <span className="hl">Malay Patra</span>, an undergraduate (2028) engineering student at <a href='https://jadavpuruniversity.in/' target="_blank">Jadavpur University</a>, passionate about building dynamic and efficient web applications using the <span className="hl">MERN stack</span>. Over the past two years, I’ve worked as a <a href='https://www.upwork.com/freelancers/~013f6c37770776680c' target="_blank">freelancer</a>, including a notable stint with <a href='https://www.vino-app.com/' target="_blank">Vino AI</a>, honing my expertise in web development and automation. I currently work as a Fullstack SDE Intern at <a href='https://souloxy.com/' target="_blank">Souloxy</a>, where I continue to grow my skills in real-world projects. I also integrate <span className="hl">AI and APIs</span> into prebuilt systems to enhance functionality. Actively seeking new opportunities as a part-time or flexible full-time full stack engineer.
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
