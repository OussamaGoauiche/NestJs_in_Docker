-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CLIENT', 'ADMIN', 'ROOT');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT,
    "role" "Role" NOT NULL DEFAULT E'CLIENT',
    "EmailIsVerified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Utilisateur" (
    "id_utilisateur" SERIAL NOT NULL,
    "nom_utilisateur" TEXT NOT NULL,
    "telephone_utilisateur" INTEGER NOT NULL,
    "email_utilisateur" TEXT NOT NULL,
    "password_utilisateur" TEXT NOT NULL,

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id_utilisateur")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id_notif" SERIAL NOT NULL,
    "data_notif" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "titre_notif" TEXT NOT NULL,
    "description_notif" TEXT NOT NULL,
    "type_notif" TEXT NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id_notif")
);

-- CreateTable
CREATE TABLE "Attribue" (
    "userid" INTEGER NOT NULL,
    "notif_id" INTEGER NOT NULL,

    CONSTRAINT "Attribue_pkey" PRIMARY KEY ("userid","notif_id")
);

-- CreateTable
CREATE TABLE "KYCUilisateur" (
    "id_kyc" SERIAL NOT NULL,
    "imageCIN_kyc" TEXT NOT NULL,
    "video_ScanFacial" TEXT NOT NULL,
    "email_verificationToken" TEXT NOT NULL,
    "phone_verificationToken" TEXT NOT NULL,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "KYCUilisateur_pkey" PRIMARY KEY ("id_kyc")
);

-- CreateTable
CREATE TABLE "Message" (
    "id_message" SERIAL NOT NULL,
    "description_message" TEXT NOT NULL,
    "date_message" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "titre_message" TEXT NOT NULL,
    "utilisateurId_utilisateur" INTEGER NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id_message")
);

-- CreateTable
CREATE TABLE "Compte" (
    "id_compte" SERIAL NOT NULL,
    "nom_compte" TEXT NOT NULL,
    "historiqueTransaction" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "Compte_pkey" PRIMARY KEY ("id_compte")
);

-- CreateTable
CREATE TABLE "CodeQr" (
    "id_codeqr" SERIAL NOT NULL,
    "Url_Qr" TEXT NOT NULL,
    "nomber_coin" INTEGER NOT NULL,
    "ScanCounter" INTEGER NOT NULL,
    "typecodeQr" TEXT NOT NULL,
    "compteId_compte" INTEGER NOT NULL,
    "historiqueId_historique" INTEGER NOT NULL,

    CONSTRAINT "CodeQr_pkey" PRIMARY KEY ("id_codeqr")
);

-- CreateTable
CREATE TABLE "HistoriqueScan" (
    "id_historiqueScan" SERIAL NOT NULL,
    "info_scan" TEXT NOT NULL,
    "date_scan" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_compte" INTEGER NOT NULL,
    "id_codeqr" INTEGER NOT NULL,
    "compteId_compte" INTEGER,

    CONSTRAINT "HistoriqueScan_pkey" PRIMARY KEY ("id_historiqueScan")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id_transac" SERIAL NOT NULL,
    "montant_transac" DOUBLE PRECISION NOT NULL,
    "date_transac" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "commission" DOUBLE PRECISION NOT NULL,
    "id_emetteur" INTEGER NOT NULL,
    "id_receveur" INTEGER NOT NULL,
    "compteId_compte" INTEGER,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id_transac")
);

-- CreateTable
CREATE TABLE "PrixGcoin" (
    "id_prixGcoin" SERIAL NOT NULL,
    "prix_Gcoin" DOUBLE PRECISION NOT NULL,
    "detail_prixGcoin" TEXT NOT NULL,

    CONSTRAINT "PrixGcoin_pkey" PRIMARY KEY ("id_prixGcoin")
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_telephone_utilisateur_key" ON "Utilisateur"("telephone_utilisateur");

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_email_utilisateur_key" ON "Utilisateur"("email_utilisateur");

-- CreateIndex
CREATE UNIQUE INDEX "KYCUilisateur_userid_key" ON "KYCUilisateur"("userid");

-- CreateIndex
CREATE UNIQUE INDEX "CodeQr_historiqueId_historique_key" ON "CodeQr"("historiqueId_historique");

-- AddForeignKey
ALTER TABLE "Attribue" ADD CONSTRAINT "Attribue_userid_fkey" FOREIGN KEY ("userid") REFERENCES "Utilisateur"("id_utilisateur") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attribue" ADD CONSTRAINT "Attribue_notif_id_fkey" FOREIGN KEY ("notif_id") REFERENCES "Notification"("id_notif") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KYCUilisateur" ADD CONSTRAINT "KYCUilisateur_userid_fkey" FOREIGN KEY ("userid") REFERENCES "Utilisateur"("id_utilisateur") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_utilisateurId_utilisateur_fkey" FOREIGN KEY ("utilisateurId_utilisateur") REFERENCES "Utilisateur"("id_utilisateur") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compte" ADD CONSTRAINT "Compte_userid_fkey" FOREIGN KEY ("userid") REFERENCES "Utilisateur"("id_utilisateur") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CodeQr" ADD CONSTRAINT "CodeQr_compteId_compte_fkey" FOREIGN KEY ("compteId_compte") REFERENCES "Compte"("id_compte") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CodeQr" ADD CONSTRAINT "CodeQr_historiqueId_historique_fkey" FOREIGN KEY ("historiqueId_historique") REFERENCES "HistoriqueScan"("id_historiqueScan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoriqueScan" ADD CONSTRAINT "HistoriqueScan_compteId_compte_fkey" FOREIGN KEY ("compteId_compte") REFERENCES "Compte"("id_compte") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_compteId_compte_fkey" FOREIGN KEY ("compteId_compte") REFERENCES "Compte"("id_compte") ON DELETE SET NULL ON UPDATE CASCADE;
