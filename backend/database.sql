-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 26 Octobre 2017 à 13:53
-- Version du serveur :  5.7.19-0ubuntu0.16.04.1
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `simple-mvc`
--

-- --------------------------------------------------------


CREATE TABLE `adm` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `temporaryPassword` varchar(255) ,
  `question` varchar(255) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET= utf8;


CREATE TABLE `preorder` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `lastname` varchar(80) NOT NULL,
  `firstname` varchar(80) NOT NULL,
  `email` varchar(255) NOT NULL,
  `paymentMethod` enum("1x", "3x", "12x") NOT NULL,
  `checkboxStatus` boolean NOT NULL DEFAULT 0,
  `date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET= utf8;

-- datetime default now fait un timestamp et inject automatiquement une date quand une donnée est créée
-- on ne specifie pas dans la query les champs id,checkboxStatus et date car id est auto incrémenté, checkbox par défaut est 0 et date est remplis avec l'explication au dessus

INSERT INTO `preorder` (lastname, firstname, email, paymentMethod)
VALUES ('Userlastname1', 'Userfirstname1', 'Useremail1', '1x'),
       ('Userlastname2', 'Userfirstname2', 'Useremail2', '3x'),
       ('Userlastname3', 'Userfirstname3', 'Useremail3', '12x');



CREATE TABLE `popup` (
  `id` int AUTO_INCREMENT PRIMARY KEY,
  `titlePopup` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET= utf8;


CREATE TABLE `pictures` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `file` varchar(255) NOT NULL,
  `alt` varchar(255) NOT NULL,
  `pictogram` varchar(255) NULL,
  `categories` enum("carousel", "home", "methode", "produit", "propos", "contact"),
  `picSection` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET= utf8;


CREATE TABLE `text` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NULL,
  `body` mediumtext NULL,
  `page` enum("home", "methode", "produit", "propos", "contact") NOT NULL,
  `textSection` int NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET= utf8;

-- ce cas précis des valeurs doivent être passées en null car si l'insert exige des champs en not null, nous sommes obligé de les renseigner pour pouvoir insérer nos valeurs 
-- text pour la page home

INSERT INTO `text`(`title`, `body`, `page`, `textSection`) 
VALUES 
('Notre raison d’être', 'Le Maraîcheur est une microferme de production de légumes sur sol vivant créée en 2021 et s’appuyant sur les principes de la permaculture et de l’agroécologie.
 Notre objectif est de vous proposer des légumes d’excellente qualité nutritionnelle et gustative dans le respect du Vivant.', 'home', 1),

('Paniers de légumes', 'Un panier de légumes naturels, sur sol vivant et de saison chaque semaine, Composé d’au moins 6 variétés de légumes (selon saisonnalité)', 'home',2),

-- text pour la page a propos

('Un peu d’histoire', 'Pourquoi m’être lancé dans la maraîchage ?
-- Depuis mes 15 ans, j’ai toujours voulu reprendre l’entreprise familiale de poules pondeuses élevées en plein air. Après des études d’entrepreneuriat et de commerce,
 je suis parti en Irlande pendant deux ans où j’ai travaillé en tant que commercial.
  C’est en discutant avec mon père que je décide finalement de produire des légumes car je pense que les gens ont plus besoin d’excellents légumes que d’excellents œufs dans leur assiette. 
-- Ensuite, j’ai fait un an de wwoofing (volontariat dans des fermes contre gîte et couvert) en Nouvelle-Zélande. Puis, une dernière année au Luxembourg chez Krautgaart,
 l’une des fermes maraichères d’Europe les plus renommées, où j’ai énormément appris. C’est donc à mon retour fin 2021 que je dispose les premières brouettes de compost sur le terrain,
  avec l’aide de la famille et des copains du coin.
-- Ma première source d’inspiration fut le film Demain et l’exemple de la Ferme du Bec Hellouin en Normandiequi montrait qu’on pouvait produire une grande quantité de légumes sur très petite surface,
 tout en créant de la biodiversité et se dégager un revenu décent. Ensuite les travaux de Jean-Martin Fortier, Charles Dowding et Richard Perkins m’ont encouragé à passer le pas.', 'propos', 1),

('','Antoine Debray', 'propos', 2),

-- exemple insertion d'un membre d'équipe à supprimer plus tard

('Jean Michel', '', 'propos', 3),

('','Lorem ipsum dolor sit amet. Sit voluptatem minima ut internos error impedit nulla et quia optio ut dolor iste sed eveniet facere animi quisquam.
 Ex itaque quia et culpa fuga aut porro fuga et ipsa commodi.', 'propos', 2),

-- text pour la page methode

('Sol vivant','Saviez-vous que pour la consommation annuelle de nourriture de chaque personne sur terre (en moyenne 450kg), 10 tonnes de terres arables disparaissent chaque année ?
Tout ceci découle du travail du sol et notamment du labour qui crée de l’érosion. Si un sol est labouré et nu, chaque fois qu’il y a du vent ou de la pluie les fines particules d’argile s’échappent,
 entrainant des phénomènes comme les inondations ou les fameuses tempêtes de sable des Etats-Unis des années 30. 1mm de sol érodé équivaut à 10 tonnes d’argile perdu par hectare. Le sol a besoin d’être couvert,
  comme nous avons besoin de notre peau pour nous protéger des agressions extérieures.
En outre, nous avons déjà perdu 1/3 de terres arables dans le monde. Il est urgent d’agir si nous voulons sauver nos sols.', 'methode', 1),

('', "Le maraîchage sol vivant (msv) découle des principes de Permaculture et d'agroécologie. Cela consiste à ne pas travailler le sol et à ajouter du paillis (matière organique) que les êtres vivants du sol vont manger.
 Les plantes vont ensuite se nourrir de leur digestat, au fur et à mesure de leurs besoins en nutriments. 
Cela donne des légumes pleins et vitamines et minéraux, avec du goût. 
Il y a énormément d'avantages à cette méthode que vous pouvez retrouver dans bon nombre d'ouvrages, mais en voici quelques-uns :
  •	Plus de vie du sol = plus de goût et de nutriments
	•	Énorme stockage de carbone dans le sol (le sol stocke plus de carbone que l'atmosphère et l'ensemble des êtres vivants), donc réduction du CO2 d’ans l’air
	•	Pas d'érosion ni de lessivage des argiles et engrais (quand on en met, ce n’est pas mon cas ) puisque l'eau pénètre dans le sol plus facilement = moins de risques d'inondation
	•	Moins d'arrosage ", 'methode', 2),

('', 'Plus de 50 variétés de légumes et de fruits sont cultivés sur 1000 m2 de sol vivant.
« The smaller the better » est la devise de Richard Perkins, référence dans le domaine de l’Agriculture Régénérative.
Plus la surface cultivée est petite, plus le jardin est maîtrisé. Cela permet de commencer avec des plus petits investissements et on obtient une rentabilité au m2 supérieure. 
C’est aussi un plaisir de travailler à la main, sans le bruit des machines et de bouger son corps.', 'methode', 3),

('', 'Autour du jardin seront prochainement plantées des arbres aux multiples bénéfices :
  Favorisent la biodiversité
	Limitent le vent
	Produisent des fruits (miam !) et du bois
	Font de l’ombre en été
	Donnent aux légumes des nutriments auxquels ils n’ont pas accès
	Améliorent le paysage
	Et tant d’autres !', 'methode', 4);

CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` enum("legume", "fermier", "panier", "plant"),
  `popupId` int, FOREIGN KEY (`popupId`) REFERENCES `popup`(`id`),
  `pictureId` int, FOREIGN KEY (`pictureId`) REFERENCES `pictures`(`id`),
  `textId` int, FOREIGN KEY (`textId`) REFERENCES `text`(`id`)
) ENGINE=InnoDB DEFAULT CHARSET= utf8;


