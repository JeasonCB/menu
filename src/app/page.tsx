import { Card, CardContent, CardHeader } from "@/components/ui/card";
import prisma from "@/lib/prisma"
//import Image from "next/image";

export default async function Home() {

  const ListaProductos = await prisma.product.findMany()
  console.log(ListaProductos)

  return (
    <>
      <div>
        {ListaProductos.map((producto: any) => (
          <Card key={producto.id}>
            <CardHeader>
              {producto.Name} id: {producto.id}
            </CardHeader>
            <CardContent>
              <p>
                {producto.Description}
                <br /> <br />{producto.Price}$
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
