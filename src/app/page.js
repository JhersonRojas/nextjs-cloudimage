// Funcionaldades
import { ProviderImage } from "@/providers/general-provider";

// Componentes
import { Card, CardHeader } from "@nextui-org/card";
import FormImage from "@/components/FormImage";
import ViewImage from "@/components/ViewImage";

export default function App() {
  return (
    <main className="bg-slate-950 w-full h-screen grid justify-center items-center">
      <Card className="bg-slate-800 ">
        <ProviderImage>
          <CardHeader className="p-4">
            <FormImage />
          </CardHeader>
          <ViewImage />
        </ProviderImage>
      </Card>
    </main>
  )
}
