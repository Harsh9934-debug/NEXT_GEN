import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import FooterCTA from '../components/home/FooterCTA';
import MagneticButton from '../components/common/MagneticButton';
import { Link } from 'react-router-dom';

const Pricing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const plans = [
        {
            name: "Starter",
            price: "$2,999",
            description: "Perfect for startups and small businesses looking to establish a strong digital presence.",
            features: ["Custom Landing Page", "Mobile Responsive", "Basic SEO Setup", "1 Month Support"],
            highlight: false
        },
        {
            name: "Professional",
            price: "$5,999",
            description: "A comprehensive solution for growing brands that need more functionalities.",
            features: ["5-Page Website", "CMS Integration", "Advanced SEO & Analytics", "3 Months Support", "Animation & Motion"],
            highlight: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "Tailored solutions for large organizations with complex requirements.",
            features: ["Full Web Application", "Custom Backend", "Priority Support", "Dedicated Project Manager", "Scalable Architecture"],
            highlight: false
        }
    ];

    return (
        <div className="bg-black min-h-screen text-white pt-32">
            <div className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="font-space-grotesk text-5xl sm:text-7xl font-bold uppercase mb-6">Pricing Plans</h1>
                    <p className="text-white/60 text-xl max-w-2xl mx-auto">
                        Transparent pricing for world-class results. Choose the plan that fits your ambition.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative p-8 rounded-3xl border ${plan.highlight ? 'border-[#D3FD50] bg-white/5' : 'border-white/10 bg-black'} flex flex-col`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D3FD50] text-black text-xs font-bold uppercase px-4 py-1 rounded-full tracking-widest">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-bold uppercase mb-2">{plan.name}</h3>
                            <div className="text-4xl font-bold mb-6 text-white">{plan.price}</div>
                            <p className="text-white/60 text-sm mb-8 h-12">{plan.description}</p>

                            <ul className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-sm text-white/80">
                                        <Check size={16} className="text-[#D3FD50] mr-3 mt-0.5" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <MagneticButton>
                                <Link to="/contact" className={`w-full flex items-center justify-center gap-2 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all ${plan.highlight ? 'bg-[#D3FD50] text-black hover:bg-white' : 'bg-white/10 text-white hover:bg-white hover:text-black'}`}>
                                    Start Project <ArrowRight size={16} />
                                </Link>
                            </MagneticButton>
                        </motion.div>
                    ))}
                </div>
            </div>
            <FooterCTA />
        </div>
    );
};

export default Pricing;
