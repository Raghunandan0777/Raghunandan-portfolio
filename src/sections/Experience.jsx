import Freelancing from '../assets/freelancing.svg?react';
import '../styles/experience.css';

export default function Experience() {
    return (
        <div className='about-section section'>
            <h2>Work Experience</h2>
            <div className='experience'>
                <div className="illustration">
                    <Freelancing />
                </div>
                <div className='details'>
                    <h3>Freelancing</h3>
                    <p>As a freelancer, I have worked on a variety of projects, including web development, mobile app development, and graphic design. I have experience working with clients from different parts of the world, and I have developed a strong understanding of the importance of communication and collaboration in remote work environments.</p>
                </div>
            </div>
        </div>
    )
}
