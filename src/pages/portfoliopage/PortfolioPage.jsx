import Lenis from 'lenis';
import React, { useEffect, useRef } from 'react'
import Navbar from '../../global-components/NavBar';
import { Projects } from './Components/ProjectComponent';
import Footer from '../../global-components/Footer';
import gsap from 'gsap';
import { animateHeroTitle } from '../../global-animations/animation';

const PortfolioPage = () => {
    const heroRef = useRef(null);
    const timeline = useRef(gsap.timeline());

    useEffect(() => {
        const lenis = new Lenis();
        lenis.on('scroll', (e) => {
            console.log(e);
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => {
            lenis.destroy();
        };
    }, []);


    useEffect(() => {
        const context = gsap.context(() => {
            const tl = timeline.current;

            tl
                .add(animateHeroTitle(), "=+10%")

        }, heroRef);
        return () => context.revert();
    }, []);
    return (
        <div ref={heroRef}>
            <div className='bg-[#F4FBF8]'>
                <Navbar />
                <section className='lg:pt-20 pt-10'>
                    <div className="px-4 lg:pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20 text-[#303030]">
                        <div className="flex items-center justify-center lg:flex-row">
                            <div className="mb-4 lg:max-w-xl lg:pr-5 lg:mb-0">
                                <div className="max-w-xl mb-6 mt-16 md:mt-4 text-center md:text-left">
                                    <h2 className="text-center mb-8 text-4xl lg:text-[56px] sm:leading-none text-[#307457]" data-text-animation>
                                        Portfolio
                                    </h2>
                                    <p className="text-center text-xl md:text-2xl mont-regular" data-text-animation>
                                        Experience the real-world impact of our software development solutions. Read our clients' case studies to see innovation in action
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='px-4 py-8 container mx-auto  lg:px-8 lg:py-20' data-text-animation>
                    <Projects />
                </section>
                <Footer />
            </div>
        </div>
    )
}

export default PortfolioPage