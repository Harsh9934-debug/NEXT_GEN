import React, { useRef } from 'react';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from 'framer-motion';
import { wrap } from '@motionone/utils';

const ServicesTicker = () => {
    const baseVelocity = -1; 
    const scrollY = useScroll().scrollY;
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const baseX = useMotionValue(0);
    const directionFactor = useRef(1);

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });
    const x = useTransform(baseX, (v) => `${wrap(-12.5, 0, v)}%`);

    return (
        <div className="w-full overflow-hidden border-t border-b border-white/10 bg-black py-8">
            <div className="relative flex w-full max-w-[100vw] overflow-hidden">
                <motion.div
                    className="flex whitespace-nowrap"
                    style={{ x }}
                >
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="flex items-center">
                            {["STRATEGY", "DESIGN", "DEVELOPMENT", "MARKETING"].map((service, index) => (
                                <React.Fragment key={index}>
                                    <span className="px-8 font-space-grotesk text-4xl font-bold uppercase text-transparent sm:text-6xl" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                                        {service}
                                    </span>
                                    <span className="h-2 w-2 rounded-full bg-[#D3FD50]" />
                                </React.Fragment>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesTicker;
