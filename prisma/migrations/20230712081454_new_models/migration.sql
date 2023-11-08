/*
  Warnings:

  - Made the column `password` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateTable
CREATE TABLE "jobs" (
    "batchid" TEXT NOT NULL PRIMARY KEY,
    "mappingTaskName" TEXT NOT NULL,
    "jobTaskName" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "startedTstamp" DATETIME NOT NULL,
    "updatedTstamp" DATETIME NOT NULL,
    "completedTstamp" DATETIME,
    "etlexecStatus" TEXT NOT NULL,
    "deleteFlag" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "jobs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "schedules" (
    "scheduleId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "scheduleName" TEXT NOT NULL,
    "description" TEXT,
    "startDate" DATETIME NOT NULL,
    "timezone" TEXT NOT NULL,
    "interval" TEXT NOT NULL,
    "frequency" INTEGER,
    "repeat" BOOLEAN DEFAULT false,
    "hourlyFrequencyKill" BOOLEAN DEFAULT false,
    "jobBatchId" TEXT NOT NULL,
    CONSTRAINT "schedules_jobBatchId_fkey" FOREIGN KEY ("jobBatchId") REFERENCES "jobs" ("batchid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "status" TEXT DEFAULT 'ACTIVATED',
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "role" TEXT DEFAULT 'USER'
);
INSERT INTO "new_users" ("createdAt", "email", "id", "last_name", "name", "password", "role", "status") SELECT "createdAt", "email", "id", "last_name", "name", "password", "role", "status" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE UNIQUE INDEX "users_password_key" ON "users"("password");
CREATE INDEX "users_id_idx" ON "users"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "schedules_jobBatchId_key" ON "schedules"("jobBatchId");
