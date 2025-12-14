import { motion } from 'framer-motion'
import { useLayoutEffect } from 'react'

const PageWrapper = ({ children, className = "" }) => {
    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for "premium" feel
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default PageWrapper
