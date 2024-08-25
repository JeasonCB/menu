-- CreateTable
CREATE TABLE "CreateProduct" (
    "id" TEXT NOT NULL,
    "ProductName" TEXT NOT NULL,
    "Description" TEXT,
    "ProductImg" TEXT,
    "ProductPrice" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CreateProduct_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CreateProduct_ProductName_key" ON "CreateProduct"("ProductName");
