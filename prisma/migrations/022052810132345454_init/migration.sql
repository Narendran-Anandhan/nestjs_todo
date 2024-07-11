CREATE TABLE "Todo" (
    "id" SERIAL,
    "title" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false
);
