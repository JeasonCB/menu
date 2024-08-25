import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

import prisma from "@/lib/prisma"

export function Taskform() {

    async function createTask(formData: FormData) {
        "use server"
        const Name = formData.get("Name")
        const Description = formData.get("Description")
        const Image = formData.get("Image")
        const Price = formData.get("Price")

        const priceNumber = parseFloat(Price?.toString() ?? "0") || 0;

        // console.log(Name, Description, Image, Price)

        if (!Name || !Description || !Image || isNaN(priceNumber)) {
            return
        }

        type ProductCreateInputLocal = {
            id: string;
            Name: string;
            Description: string;
            Image: string;
            Price: number;
        };

        const newTask = await prisma.product.create({
            data: {
                Name: Name as string,
                Description: Description as string,
                Image: Image as string,
                Price: priceNumber, // Asegúrate de que Price no sea null y conviértelo a número
            } as ProductCreateInputLocal,
        });
        console.log(newTask)
    }

    return (
        <form action={createTask}>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Agregar producto</CardTitle>
                    <CardDescription>Crea un producto</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="Name">Producto</Label>
                            <Input name="Name" id="Name" placeholder="Nombre de tu producto" />
                        </div>

                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="Descripcion">Descripción</Label>
                            <Textarea name="Description" className="resize-none" placeholder="Escriba la descripción del producto aqui." />
                        </div>

                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="Image">Imagen del Producto</Label>
                            <Input name="Image" id="Image" placeholder="Imagen del producto" />
                        </div>

                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="Price">Precio</Label>
                            <Input name="Price" id="Price" placeholder="Precio del producto" />
                        </div>

                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancelar</Button>
                    <Button>Crear</Button>
                </CardFooter>
            </Card>
        </form>
    )
}
