"use client";

import { useImageContext } from "@/contexts/image-context";
import { CardBody } from "@nextui-org/card";
import { useStore } from "zustand";
import { IconImage } from "./icons/icons";

export default function ViewImage() {

  const { imagen } = useStore(useImageContext)

  return (
    <>
      {
        imagen
          ? <CardBody className="h-min">
            Hola mundo
          </CardBody>
          : <CardBody className="h-[50vh]">
            <IconImage />
          </CardBody>
      }
    </>
  )
}
