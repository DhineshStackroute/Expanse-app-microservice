-- CreateTable
CREATE TABLE "shared" (
    "sharedId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "expanseId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "sharedamout" INTEGER NOT NULL,
    "paidby" TEXT NOT NULL,
    "noofShare" INTEGER NOT NULL
);
