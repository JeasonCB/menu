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

export function Taskform() {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Agregar producto</CardTitle>
                <CardDescription>Crea un producto</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="ProductName">Producto</Label>
                            <Input id="ProductName" placeholder="Nombre de tu producto" />
                        </div>

                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="Descripcion">Descripción</Label>
                            <Textarea placeholder="Escribe tu mensaje aqui." />
                        </div>

                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="ProductName">Imagen de Producto</Label>
                            <Input id="ProductName" type="file" placeholder="Imagen de tu producto" />
                        </div>

                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="ProductName">Precio</Label>
                            <Input id="ProductName" placeholder="Nombre de tu producto" />
                        </div>

                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="envio">Envío</Label>
                            <Select>
                                <SelectTrigger id="envio">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="next">Para comer aqui</SelectItem>
                                    <SelectItem value="sveltekit">Para llevar</SelectItem>

                                </SelectContent>
                            </Select>
                        </div>

                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
            </CardFooter>
        </Card>
    )
}
