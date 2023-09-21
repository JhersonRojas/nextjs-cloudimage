'use client'

import { ImageContext, useImageContext } from '@/contexts/image-context'
import { NextUIProvider } from '@nextui-org/react'

export function ProviderUI({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>
}

export const ProviderImage = ({ children }) => {
  return <ImageContext.Provider value={useImageContext}>{children}</ImageContext.Provider>
}