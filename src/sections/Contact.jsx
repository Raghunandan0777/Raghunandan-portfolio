import Sparkles from '../components/Sparkles'
import '../styles/contact.css'

export default function Contact() {
    return (
        <div className='section contact-section' id="contact">
            <h2>Contact</h2>
            <div className='heading-center'>
                <Sparkles>
                    <h1>Get In Touch</h1>
                </Sparkles>
            </div>
            <p className='contact-text'>
                Have questions? Ping me with a <a href="https://www.linkedin.com/in/raghunandan-shah-399364220/">linkedin</a> DM or email at <a href='raghunandanshah908014@gmail.com'>raghunandanshah908014@gmail.com</a>.
            </p>
        </div >
    )
}
