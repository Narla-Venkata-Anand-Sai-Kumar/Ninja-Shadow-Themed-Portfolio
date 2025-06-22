import { useEffect, useState } from 'react'

export const useTouchGestures = () => {
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 })
  const [touchEnd, setTouchEnd] = useState({ x: 0, y: 0 })
  const [isTouching, setIsTouching] = useState(false)

  const minSwipeDistance = 50

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd({ x: 0, y: 0 }) // Reset end coordinates
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    })
    setIsTouching(true)
  }

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    })
  }

  const onTouchEnd = () => {
    if (!touchStart.x || !touchEnd.x) return
    
    const distanceX = touchStart.x - touchEnd.x
    const distanceY = touchStart.y - touchEnd.y
    const isLeftSwipe = distanceX > minSwipeDistance
    const isRightSwipe = distanceX < -minSwipeDistance
    const isUpSwipe = distanceY > minSwipeDistance
    const isDownSwipe = distanceY < -minSwipeDistance

    setIsTouching(false)
    
    return {
      isLeftSwipe,
      isRightSwipe,
      isUpSwipe,
      isDownSwipe,
      distanceX,
      distanceY
    }
  }

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    isTouching,
    touchStart,
    touchEnd
  }
}

export const useResponsiveBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth
      if (width < 768) {
        setBreakpoint('mobile')
      } else if (width < 1024) {
        setBreakpoint('tablet')
      } else {
        setBreakpoint('desktop')
      }
    }

    updateBreakpoint()
    window.addEventListener('resize', updateBreakpoint)
    return () => window.removeEventListener('resize', updateBreakpoint)
  }, [])

  return breakpoint
}

export const usePressureTouch = () => {
  const [pressure, setPressure] = useState(0)

  const handleTouchStart = (e: TouchEvent) => {
    if ('force' in e.touches[0]) {
      setPressure(e.touches[0].force)
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if ('force' in e.touches[0]) {
      setPressure(e.touches[0].force)
    }
  }

  const handleTouchEnd = () => {
    setPressure(0)
  }

  return {
    pressure,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  }
}
