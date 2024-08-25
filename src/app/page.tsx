import { Card, CardContent, CardHeader } from "@/components/ui/card";
import prisma from "@/lib/prisma"
import Image from "next/image";

export default async function Home() {

  const ListaProductos = await prisma.product.findMany()
  console.log(ListaProductos)

  return (
    <>
      <div>
        {ListaProductos.map(ListaProductos => (
          <Card key={ListaProductos.id}>
            <CardHeader>
              {ListaProductos.Name} id: {ListaProductos.id}
            </CardHeader>
            <CardContent>
              <p>
                {ListaProductos.Description}
                <br /> <br />{ListaProductos.Price}$
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
