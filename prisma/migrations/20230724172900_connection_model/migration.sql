-- CreateTable
CREATE TABLE "Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mappingTaskId" TEXT NOT NULL,
    "mappingName" TEXT NOT NULL,
    "srcConnectionName" TEXT NOT NULL,
    "targetConnectionName" TEXT NOT NULL,
    "createdBy" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "srcConnectorType" TEXT NOT NULL,
    "srcConnectionObject" TEXT NOT NULL,
    "targetConnectorType" TEXT,
    "targetConnectionObject" TEXT,
    "updatedTimestamp" DATETIME NOT NULL,
    "source" TEXT NOT NULL,
    "target" TEXT NOT NULL,
    "createStage" TEXT NOT NULL,
    "schedule" DATETIME NOT NULL,
    "updated" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ConnParams" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "agentId" TEXT NOT NULL,
    "agentGroupId" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "authentication_TYPE" TEXT,
    "useEC2RoletoAssumeRole" TEXT,
    "federatedUsername" TEXT,
    "samlidentityProviderARN" TEXT,
    "credentialProfileFilePath" TEXT,
    "otherAuthenticationType" TEXT,
    "accessKey" TEXT,
    "folderPath" TEXT,
    "profileName" TEXT,
    "iamroleARN" TEXT,
    "idpSsoUrl" TEXT,
    "secretKey" TEXT,
    "federatedSSOIdP" TEXT,
    "regionName" TEXT,
    "roleARN" TEXT,
    "s3RegionName" TEXT,
    CONSTRAINT "ConnParams_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Connection" ("agentId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Connection" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orgId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "agentId" TEXT NOT NULL,
    "runtimeEnvironmentId" TEXT NOT NULL,
    "instanceDisplayName" TEXT NOT NULL,
    "host" TEXT NOT NULL,
    "database" TEXT NOT NULL,
    "codepage" TEXT NOT NULL,
    "adjustedJdbcHostName" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "port" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createTime" DATETIME NOT NULL,
    "updateTime" DATETIME NOT NULL,
    "createdBy" TEXT NOT NULL,
    "updatedBy" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ConnParams_agentId_key" ON "ConnParams"("agentId");

-- CreateIndex
CREATE UNIQUE INDEX "Connection_agentId_key" ON "Connection"("agentId");
