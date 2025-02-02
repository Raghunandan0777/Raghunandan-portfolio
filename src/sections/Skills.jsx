import SkillCard from '../components/SkillCard'

export default function Skills() {
    return (
        <div className='skills-section section'>
            <h2>Skills</h2>
            <SkillCard heading='Frontend' color='var(--clr-accent)' skills={[
                'HTML',
                'CSS',
                'JavaScript',
                'React',
                'Bootstrap',
                'Tailwind CSS',
                'Material-UI',
                'Magic-UI',
            ]} />
            <SkillCard heading='Backend' color='#1d7abd' skills={[
                'Node.js',
                'Express',
                'Python',
                'Flask',
                'REST API',
                'MongoDB'
            ]} />
            <SkillCard heading='Tools' color='#ff8709' skills={[
                'Git',
                'GitHub',
                'VS Code',
                'Postman',
                'Heroku',
                'Netlify',
                'Vercel',
                'Figma'
            ]} />
            <SkillCard heading='Automation' color='#f34b7d' skills={[
                'Selenium',
                'Puppeteer',
                'OpenAI',
                'Web Scraping',
                'DeepSeek',
                'Gemini',
                'Hugginface'
            ]} />

        </div>
    )
}
