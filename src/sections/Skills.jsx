import { useState } from 'react'
import SkillCard from '../components/SkillCard'
import Toggle from '../components/Toggle';
import '../styles/Skills.css'

export default function Skills() {
    const [playMode, setPlayMode] = useState(false);

    const handleToggle = () => {
        setPlayMode(!playMode);
    }

    return (
        <div className='skills-section section'>
            <div className='skills-header'>
                <h2>Skills</h2>
                <div style={{
                    flex: 1
                }}></div>
                <div className='play-mode'>
                    <p>Play mode</p>
                    <Toggle value={playMode} onToggle={handleToggle} />
                </div>
            </div>
            {playMode && <p className='play-info'><i>move your cursor over the items quickly to see satisfying color animation.</i></p>}
            <SkillCard heading='Frontend' skills={[
                { 'name': 'HTML', 'icon': 'html5' },
                { 'name': 'CSS', 'icon': 'css3' },
                { 'name': 'JavaScript', 'icon': 'javascript' },
                { 'name': 'React', 'icon': 'react' },
                { 'name': 'Bootstrap', 'icon': 'bootstrap' },
                { 'name': 'Tailwind CSS', 'icon': 'tailwindcss' },
                { 'name': 'shadcn/ui', 'icon': 'https://simpleicons.org/icons/shadcnui.svg' },
            ]} playMode={playMode} />
            <SkillCard heading='Backend' hcolor="var(--clr-accent2)" skills={[
                { 'name': 'Node.js', 'icon': 'nodejs' },
                { 'name': 'Express', 'icon': 'express' },
                { 'name': 'Python', 'icon': 'python' },
                { 'name': 'Flask', 'icon': 'flask' },
                { 'name': 'MongoDB', 'icon': 'mongodb' },
                { 'name': 'PostgreSQL', 'icon': 'postgresql' },
            ]} playMode={playMode} />
            <SkillCard heading='Tools' hcolor="var(--clr-accent3)" skills={[
                { 'name': 'Git', 'icon': 'git' },
                { 'name': 'GitHub', 'icon': 'github' },
                { 'name': 'VS Code', 'icon': 'vscode' },
                { 'name': 'Postman', 'icon': 'postman' },
                { 'name': 'Heroku', 'icon': 'heroku' },
                { 'name': 'Netlify', 'icon': 'netlify' },
                { 'name': 'Vercel', 'icon': 'vercel' },
                { 'name': 'Figma', 'icon': 'figma' },
            ]} playMode={playMode} />
            <SkillCard heading='Automation' hcolor="var(--clr-sec)" skills={[
                { 'name': 'Selenium', 'icon': 'selenium' },
                { 'name': 'Puppeteer', 'icon': 'puppeteer' },
                { 'name': 'OpenAI', 'icon': 'https://simpleicons.org/icons/openai.svg' },
                { 'name': 'Web Scraping', 'icon': '' },
                { 'name': 'Gemini', 'icon': 'https://simpleicons.org/icons/googlegemini.svg' },
                { 'name': 'Hugginface', 'icon': 'https://simpleicons.org/icons/huggingface.svg' },
            ]} playMode={playMode} />

        </div>
    )
}
