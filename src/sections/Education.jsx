import Timeline from '../components/Timeline';
import TimelineItem from '../components/TimelineItem';
import { TimeStamp } from '../components/TimelineItem';
import School from '../assets/icons/school.svg?react';
import College from '../assets/icons/college.svg?react';
import Learning from '../assets/learning.svg?react';
import '../styles/education.css';

export default function Education() {
    return (
        <div className='section education-section' id='education'>
            <h2>Education</h2>
            <div className='education'>
                <div className="illustration">
                    <Learning />
                </div>
                <div className='details'>
                    <Timeline>
                        <TimelineItem icon={<School />} bgColor="#444444">
                            <h4>SMT G.N Pandaya High School [10+2]</h4>
                            <TimeStamp stamp="2019 - 2021" />
                            <p>10th grade percentage: 70%</p>
                            <p>12th grade percentage: 74.6%</p>
                        </TimelineItem>
                        <TimelineItem icon={<College />} bgColor="#444444">
                            <h4>Parul University [B.E.]</h4>
                            <TimeStamp stamp="2021 - 2025" />
                            <p>Current CGPA: 6.41</p>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    )
}
