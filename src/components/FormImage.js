'use client'

// Funcionalidades
import { useForm } from "react-hook-form"
import { Fetching } from "@/libs/fetching"

// Componentes
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"

export default function FormImage() {

  const { handleSubmit, register } = useForm()

  const handleForm = async (dataform) => {
    const response = await Fetching({ url: "/api/upload", method: "POST" })
    const data = await response.json()
    console.log(data)
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
        />
        <Button className="text-white" type="submit" color="default" variant="bordered">
          Enviar
        </Button>
      </form>
    </>
  )
}
