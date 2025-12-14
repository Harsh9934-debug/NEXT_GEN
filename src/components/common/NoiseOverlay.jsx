import React from 'react';

const NoiseOverlay = () => {
    return (
        <div className="hidden md:block pointer-events-none fixed inset-0 z-50 opacity-[0.03]">
            <div
                className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 brightness-100 contrast-150"
                style={{
                    filter: "contrast(170%) brightness(100%)",
                }}
            />
        </div>
    );
};

export default NoiseOverlay;
