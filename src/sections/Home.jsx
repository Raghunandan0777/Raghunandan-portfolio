import IconCloud from '../components/IconCloud'
import { ThemeContext } from "../context/ThemeContext"
import { useEffect, useState, useContext } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim";
import { particleNasaTheme } from '../utils/utils'
import Sparkles from '../components/Sparkles'
import '../styles/home.css'
import Quby from '../assets/quby.jpg'
import satelite from '../assets/satelite.svg'
import SpaceBg from '../components/SpaceBg';



export default function Home() {
    const { theme, _ } = useContext(ThemeContext);
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <>
            <div className="hero-container">
                <div className='hero-1'>
                    <IconCloud />
                </div>
                <div className='hero-2'>
                    <div>
                        <div>
                            <div className='malay-img-cont'>
                                <img src={Quby} alt="Malay" className='malay-img' />
                            </div>
                            <div>Hi, I'm Malay<span className="wave">👋</span></div>
                        </div>
                        <div className='hero-text-cont'>
                            <Sparkles scale={1.5} color="#ff0">
                                <h1><span className='outlined-txt'>FULLSTACK</span></h1>
                                <h1><span className='shine-txt'>DEVELOPER</span> &</h1>
                                <h1><span className='highlight-txt'>API</span> EXPERT</h1>
                            </Sparkles>
                        </div>
                    </div>
                </div>

                <div id="space-container" className='space-container'>
                    <SpaceBg />
                    {init && (
                        <Particles
                            id="tsparticles"
                            loaded={particlesLoaded}
                            options={particleNasaTheme(theme)}
                        />
                    )}
                </div>

            </div>
        </>
    )
}