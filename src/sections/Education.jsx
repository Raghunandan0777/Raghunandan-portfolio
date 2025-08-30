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
                            <h4>ENV High School [10+2]</h4>
                            <TimeStamp stamp="2014 - 2022" />
                            <p>10th grade percentage: 84.85%</p>
                            <p>12th grade percentage: 78.6%</p>
                        </TimelineItem>
                        <TimelineItem icon={<College />} bgColor="#444444">
                            <h4>Jadavpur University [B.E.]</h4>
                            <TimeStamp stamp="2024 - 2028" />
                            <p>Current CGPA: 8.41</p>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    )
}
