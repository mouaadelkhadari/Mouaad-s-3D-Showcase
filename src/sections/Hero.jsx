import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constans/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";

const Hero = () => {

     const isMobile = useMediaQuery({ maxWidth: 768 })
     const isTablet = useMediaQuery({ minWidth : 768, maxWidth: 1024 })
     const isSmall = useMediaQuery({ maxWidth: 440 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi, I'm Mouaad <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient text-center">Building products & Brands</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                {/*<Leva />*/}
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>

                    <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                    <HackerRoom  // scale={0.07}
                                 // position={[0, 0, 0]}
                                 // rotation={[0, 280, 0]}
                        position={sizes.deskPosition}
                        rotation={[0, -Math.PI , 0]}
                        scale={sizes.deskScale}
                    />

                        <group>
                            <Target position={sizes.targetPosition}/>
                            <ReactLogo psoition={sizes.reactLogoPosition}/>
                        </group>
                        <ambientLight intensity={1} />
                        <directionalLight position={[0, 0, 0]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}
export default Hero
