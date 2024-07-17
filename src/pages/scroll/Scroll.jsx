
import "./scroll.scss";
import {useEffect, useLayoutEffect, useRef, useState} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
let callCount = 0;
export default function Layers() {
    const component = useRef(null);

    useEffect(() => {
        console.log("useEffect() call", ++callCount, "(React 18 strict mode calls twice!)");

        // create a context for all the GSAP animations and ScrollTriggers so we can revert() them in one fell swoop.
        // A context also lets us scope all the selector text to the component (like feeding selector text through component.querySelectorAll(...))
        let ctx = gsap.context(() => {
            // create as many GSAP animations and/or ScrollTriggers here as you want...
            gsap.from("h1", { // <- selector text, scoped to this component!
                opacity: 0,
                y: 100,
                ease: "power3",
                duration: 2
            });
        }, component); // <- scopes all selector text inside the context to this component (optional, default is document)

        return () => ctx.revert(); // cleanup!
    }, []);
    return (
        <div ref={component} className="App">
            <h1>gsap.context() + React = 💚</h1>
        </div>
        // <main ref={main}>
        //     <section className="description panel light">
        //         <div>
        //             <h1>Layered pinning</h1>
        //             <p>Use pinning to layer panels on top of each other as you scroll.</p>
        //             <div className="scroll-down">
        //                 Scroll down<div className="arrow"></div>
        //             </div>
        //         </div>
        //     </section>
        //     <section className="panel dark">ONE</section>
        //     <section className="panel orange">TWO</section>
        //     <section className="panel purple">THREE</section>
        //     <section className="panel green">FOUR</section>
        // </main>
    );
}
