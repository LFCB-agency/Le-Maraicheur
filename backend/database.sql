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

--
-- Structure de la table `item`
--
CREATE TABLE `adm` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `question` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET= utf8;

-- INSERT INTO `adm`(`email`, `password`, `question`) VALUES (``)


CREATE TABLE `preorder` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `lastname` varchar(80) NOT NULL,
  `firstname` varchar(80) NOT NULL,
  `email` varchar(255) NOT NULL,
  `paymentMethod` enum("1x", "3x", "12x"),
  `checkboxStatus` boolean NOT NULL DEFAULT 0,
  `date` date
) ENGINE=InnoDB DEFAULT CHARSET= utf8;


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
<<<<<<< HEAD
  `body` mediumtext  NULL,
=======
  `body` mediumtext NOT NULL,
>>>>>>> dev
  `page` enum("home", "methode", "produit", "propos", "contact"),
  `textSection` int NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET= utf8;

-- INSERT INTO `text`(`title`, `body`, `page`, `textSection`) VALUES (`Notre raison d’être`, "", `home`, 1; "", `Le Maraîcheur est une microferme de production de légumes sur sol vivant créée en 2021 et s’appuyant sur les principes de la permaculture et de l’agroécologie. Notre objectif est de vous proposer des légumes d’excellente qualité nutritionnelle et gustative dans le respect du Vivant.`, `home`, 2);

CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` enum("legume", "fermier", "panier", "plant"),
  `popupId` int, FOREIGN KEY (`popupId`) REFERENCES `popup`(`id`),
  `pictureId` int, FOREIGN KEY (`pictureId`) REFERENCES `pictures`(`id`),
  `textId` int, FOREIGN KEY (`textId`) REFERENCES `text`(`id`)
) ENGINE=InnoDB DEFAULT CHARSET= utf8;

--
-- Contenu de la table `item`
--

-- INSERT INTO `item` (`id`, `title`) VALUES
-- (1, 'Stuff'),
-- (2, 'Doodads');

-- --
-- -- Index pour les tables exportées
-- --

-- --
-- -- Index pour la table `item`
-- --
-- ALTER TABLE `item`
--   ADD PRIMARY KEY (`id`);

-- --
-- -- AUTO_INCREMENT pour les tables exportées
-- --

-- --
-- -- AUTO_INCREMENT pour la table `item`
-- --
-- ALTER TABLE `item`
--   MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
-- /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
-- /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
-- /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
