import { useEffect, useState } from 'react'

export const useDeviceDetection = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isTouchDevice: false,
    screenWidth: 0,
    screenHeight: 0,
    devicePixelRatio: 1
  })

  useEffect(() => {
    const updateDeviceInfo = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      
      setDeviceInfo({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
        isTouchDevice,
        screenWidth: width,
        screenHeight: height,
        devicePixelRatio: window.devicePixelRatio || 1
      })
    }

    updateDeviceInfo()
    window.addEventListener('resize', updateDeviceInfo)
    window.addEventListener('orientationchange', updateDeviceInfo)

    return () => {
      window.removeEventListener('resize', updateDeviceInfo)
      window.removeEventListener('orientationchange', updateDeviceInfo)
    }
  }, [])

  return deviceInfo
}

export const optimizeForDevice = (isMobile: boolean, isTablet: boolean) => {
  return {
    animationDuration: isMobile ? 0.3 : 0.5,
    particleCount: isMobile ? 8 : isTablet ? 12 : 15, // Reduced for ninja minimalism
    cardSpacing: isMobile ? 'gap-3' : isTablet ? 'gap-4' : 'gap-6',
    textSize: {
      heading: isMobile ? 'text-2xl' : isTablet ? 'text-3xl' : 'text-4xl',
      subheading: isMobile ? 'text-lg' : isTablet ? 'text-xl' : 'text-2xl',
      body: isMobile ? 'text-sm' : 'text-base'
    },
    buttonSize: isMobile ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base',
    touchTargetSize: isMobile ? 'min-h-[44px] min-w-[44px]' : 'min-h-[40px] min-w-[40px]',
    // Ninja-specific optimizations
    ninjaEffects: {
      shadowIntensity: isMobile ? 'ninja-shadow' : 'ninja-shadow-hover',
      glowEffect: isMobile ? false : true,
      backgroundParticles: isMobile ? 5 : isTablet ? 8 : 12,
      animationComplexity: isMobile ? 'simple' : isTablet ? 'medium' : 'complex'
    }
  }
}
