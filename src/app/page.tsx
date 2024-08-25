import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {prisma} from "@/lib/prisma"
//import Image from "next/image";

export default async function Home() {

  const ListaProductos = await prisma.product.findMany()
  
  return (
    <>
      home
      <div>
        {ListaProductos.map(ListaProductos => (
          <Card key={ListaProductos.id}>
            <CardHeader>
              {ListaProductos.Name}
            </CardHeader>
            <CardContent>
              <p>
                {ListaProductos.Description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
