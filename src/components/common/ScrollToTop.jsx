import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
    const location = useLocation()

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }, [location.pathname])

    return null
}

export default ScrollToTop
