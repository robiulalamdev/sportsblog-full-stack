/*
  Warnings:

  - Added the required column `publish` to the `blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "blog" ADD COLUMN     "publish" TIMESTAMP(3) NOT NULL;
