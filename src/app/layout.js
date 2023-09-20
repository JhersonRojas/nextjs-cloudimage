import { ProviderUI } from '@/providers/general-provider'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nextjs Cloud Image',
  description: 'Proyecto creado con Nextjs 13.5 para subir imagenes a un servicio en la nube',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderUI>
          {children}
        </ProviderUI>
      </body>
    </html>
  )
}
