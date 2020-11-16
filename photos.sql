-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Värd: localhost
-- Tid vid skapande: 16 nov 2020 kl 16:41
-- Serverversion: 8.0.18
-- PHP-version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `mgpic`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `photos`
--

CREATE TABLE `photos` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `comment` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumpning av Data i tabell `photos`
--

INSERT INTO `photos` (`id`, `title`, `url`, `comment`, `user_id`) VALUES
(1, 'dePhoto', 'www.hejsvejs', 'fint', 3),
(2, 'svan', 'www.svanbild.jpg', 'finbild', 1),
(3, 'dog', 'www.dogatm.se', 'dog', 2),
(4, 'pippi', 'www.legspla-jpg', 'nice', 13),
(5, 'katt', 'katt.jpg', 'lol', 13),
(6, 'hejhej', 'www.hejsvejs', 'fint', 2),
(7, 'Mysta', 'mysta.jpg', 'baddie', 3),
(9, 'Mysta', 'mysta.jpg', 'baddie', 3),
(10, 'Mysta', 'mysta.jpg', 'baddie', 3),
(11, 'Mystan', 'mysta.jpg', 'baddie', 3),
(12, 'Mystan', 'mysta.jpg', 'baddie', 3),
(13, 'Mystan', 'mysta.jpg', 'baddie', 3),
(14, 'kalleAnkas', 'www.imgbild', 'badde', 5),
(16, 'kallee', 'www.imgbild', 'hello', 3),
(17, 'kallee', 'www.imgbild', 'hello', 29),
(18, 'works', 'img', 'doit', 29),
(19, 'works', 'img', 'doit', 29),
(20, 'works', 'img', 'doit', 29),
(21, 'test', 'imga', 'hello', 29),
(22, 'kallesmagasin', 'imgpic', 'kajsa', 29),
(23, 'kajsa', 'imlol', 'henrik', 29),
(24, 'kajsa', 'imlol', 'henrik', 29),
(25, 'kajsasvensson', 'imlol', 'newphoto', 29),
(26, 'kajsasvensson', 'imlol', 'newphoto', 29),
(27, 'kajsasvensstn', 'imlo', 'ndwphoto', 29);

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
