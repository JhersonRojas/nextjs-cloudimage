import { createStore } from "zustand";
import { createContext } from "react";

// hooks donde se establecen los estados definidos
export const useImageContext = createStore((set) => ({
  imagen: null,
  setImagen: (data) =>
    set((state) => ({ imagen: data }))
}))

export const ImageContext = createContext(useImageContext)
