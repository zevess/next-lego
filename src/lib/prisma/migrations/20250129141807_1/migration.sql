/*
  Warnings:

  - A unique constraint covering the columns `[userNick]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - The required column `userNick` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatarUrl" TEXT,
ADD COLUMN     "userNick" TEXT NOT NULL,
ALTER COLUMN "image" SET DEFAULT 'https://cdn.dribbble.com/users/2406416/screenshots/6881486/lego5_4x.jpg?resize=1000x750&vertical=center';

-- CreateTable
CREATE TABLE "Set" (
    "id" SERIAL NOT NULL,
    "set_num" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "theme_id" INTEGER NOT NULL,
    "num_parts" INTEGER NOT NULL,
    "set_img_url" TEXT NOT NULL,
    "set_url" TEXT NOT NULL,
    "collectionId" INTEGER,
    "wishesId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Set_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCollection" (
    "id" SERIAL NOT NULL,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserCollection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserWishes" (
    "id" SERIAL NOT NULL,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserWishes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserCollection_userId_key" ON "UserCollection"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserWishes_userId_key" ON "UserWishes"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_userNick_key" ON "User"("userNick");

-- AddForeignKey
ALTER TABLE "Set" ADD CONSTRAINT "Set_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "UserCollection"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Set" ADD CONSTRAINT "Set_wishesId_fkey" FOREIGN KEY ("wishesId") REFERENCES "UserWishes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCollection" ADD CONSTRAINT "UserCollection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserWishes" ADD CONSTRAINT "UserWishes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
