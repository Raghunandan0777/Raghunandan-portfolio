import { Button1 } from '../components/Buttons'
import Pdf from "../assets/icons/pdf.svg?react";
import SvgIcon from '../components/SvgIcon';

export default function About() {


  return (
    <div className='about-section section'>
      <h2>About</h2>
      <p>
        I’m a <a href="#">First year student</a>, having a passion towards building dynamic and efficient web applications using the <a href="#">MERN stack</a>. Over the past two years, I’ve worked as a <a href='#'>freelancer</a>, including a notable stint with <a href='#'>Vino AI</a>, honing my expertise in web development and automation. I also integrate <a href='#'>AI and APIs</a> into prebuilt systems to enhance functionality. Actively seeking for new opportunities as a part time, flexible full time Full stack engineer.
      </p>
      <p>Let’s build something great! ✨</p>
      <a href="https://drive.google.com/file/d/1KIIvBZnJ1M9YltAVd6pnbtVzHrXXa5u2/view" target='_blank'>
        <Button1>
          <SvgIcon icon={Pdf} />
          Resume
        </Button1>
      </a>
    </div>
  )
}
