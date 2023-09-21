'use client'

// Paquetes externos
import { useStore } from "zustand"

// Funcionalidades
import { useImageContext } from "@/contexts/image-context"
import { Fetching } from "@/libs/fetching"
import { useForm } from "react-hook-form"

// Componentes
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"

export default function FormImage() {

  const { handleSubmit, register } = useForm()
  const { imagen, setImagen } = useStore(useImageContext)

  const handleForm = async () => {
    const formData = new FormData()
    formData.append("file", imagen)
    const response = await Fetching({ url: "/api/upload", method: "POST", body: formData, type: "multiplatform" })
    const data = await response.json()
    console.log(data)
  }

  const handleChange = async (event) => {
    const img = event.target.files[0]
    setImagen(img)
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleForm)} className="text-white flex gap-4">
        <Input
          type="file"
          placeholder="Cargar imagen"
          accept=".png, .jpg, .jpeg, .webp"
          {...register("image")}
          color="primary"
          variant="underlined"
          onChange={handleChange}
        />
        <Button type="submit" color="default" variant="bordered" className="text-white" isDisabled={imagen ? false : true}>
          Enviar
        </Button>
      </form>
    </>
  )
}
