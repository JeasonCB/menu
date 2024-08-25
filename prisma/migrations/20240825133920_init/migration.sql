/*
  Warnings:

  - You are about to drop the `CreateProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "CreateProduct";

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Description" TEXT,
    "Image" TEXT,
    "Price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_Name_key" ON "Product"("Name");
