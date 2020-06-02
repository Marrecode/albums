-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Värd: localhost
-- Tid vid skapande: 02 jun 2020 kl 15:33
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
-- Tabellstruktur `albums`
--

CREATE TABLE `albums` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumpning av Data i tabell `albums`
--

INSERT INTO `albums` (`id`, `title`) VALUES
(1, 'albert'),
(2, 'hejsve'),
(3, 'metallica'),
(4, 'kungen'),
(5, 'tv'),
(6, 'jul'),
(7, 'hejhejhejhej'),
(8, 'hejsvennebannan');

-- --------------------------------------------------------

--
-- Tabellstruktur `albums_photos`
--

CREATE TABLE `albums_photos` (
  `album_id` int(11) NOT NULL,
  `photo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumpning av Data i tabell `albums_photos`
--

INSERT INTO `albums_photos` (`album_id`, `photo_id`) VALUES
(1, 1),
(2, 2),
(1, 2),
(3, 2),
(2, 4),
(3, 3),
(2, 1),
(2, 5),
(2, 7),
(5, 3);

-- --------------------------------------------------------

--
-- Tabellstruktur `photos`
--

CREATE TABLE `photos` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `comment` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `album_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumpning av Data i tabell `photos`
--

INSERT INTO `photos` (`id`, `title`, `url`, `comment`, `album_id`, `user_id`) VALUES
(1, 'dePhoto', 'www.hejsvejs', 'fint', 2, 3),
(2, 'svan', 'www.svanbild.jpg', 'finbild', 1, 1),
(3, 'dog', 'www.dogatm.se', 'dog', 2, 2),
(4, 'pippi', 'www.legspla-jpg', 'nice', 2, 13),
(5, 'katt', 'katt.jpg', 'lol', 4, 13),
(6, 'hejhej', 'www.hejsvejs', 'fint', 20, 2),
(7, 'Mysta', 'mysta.jpg', 'baddie', 15, 3),
(8, 'Mysta', 'mysta.jpg', 'baddie', 15, 3);

-- --------------------------------------------------------

--
-- Tabellstruktur `photos_users`
--

CREATE TABLE `photos_users` (
  `user_id` int(11) NOT NULL,
  `photo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumpning av Data i tabell `photos_users`
--

INSERT INTO `photos_users` (`user_id`, `photo_id`) VALUES
(1, 1),
(2, 3),
(2, 2),
(13, 2),
(11, 3),
(13, 1),
(12, 1),
(20, 3),
(20, 5),
(20, 5),
(19, 4),
(18, 2),
(16, 5);

-- --------------------------------------------------------

--
-- Tabellstruktur `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumpning av Data i tabell `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `first_name`, `last_name`, `username`) VALUES
(1, 'yallyalla@hotmail.com', '202cb962ac59075b964b07152d234b70', 'emil', 'hest', 'hej'),
(8, 'goodemailyesds123', '$2b$10$5SYLJrdxGV0f2U8ML/U85e0E93mZEUjxu5GkxePU5.bwR1Xof3h6O', 'kallesve', 'hejsvensson', 'hejsan'),
(9, 'myemail', '$2b$10$TQaRCtU270VpaZsZEMwEyumIoX.7.6IqU/2F85ab1DkqPyI4u4DgC', 'peter', 'hejs', 'hejsan'),
(10, 'myemail1', '$2b$10$rMb1x4sVq/6YJpEd80Ls6epssayigLzAfynI2YtTVYhRLu/wO80Hu', 'peter', 'hejs', 'hejsan'),
(11, 'email123', '$2b$10$z1tZfNANZ3hvMMwkSKJdZuNgdgBrlMaQL/cPI3DhBFP9Q7vKt.LZe', 'peter', 'hejs', 'hejsan1'),
(12, 'emailmartin', '$2b$10$zCwUZW5VgzO284MbFHTcAuw1WSE4qBjIUE56xk2boPiCnk010ZZSW', 'peter', 'hejs', 'hejsan1'),
(15, 'emaiin', '$2b$10$wN7CQPGiWzFwJdausoreU.86WYAXcNtL4TGjj7NgSA8dmkO2HJTUu', 'peter', 'hejs', 'lol'),
(16, 'em4a', '$2b$10$nb.bW7ci1ZPznwe2qrkI/.pye5nURAeYPHfhSlGMuLvrF51PmnbY2', 'peater', 'hejs', 'lol'),
(17, 'emsdada', '$2b$10$CCPO9K1/A5qmLPUuS6GCdO0lW8oW8/LTpWmYcwgkO4/CXrmAOwDeO', 'peater', 'hejs', 'lola'),
(18, 'lolol', '$2b$10$VnHFB6/RJrig2ZkLzadH/egfKWlSQPfeCoj6vYkOFRhfZ80aMYr/C', 'peatesdr', 'hejs', '123'),
(19, 'loolol', '$2b$10$jolg1njhTkCUI0EGIU7Q9.NJt95pPRqj9fyk6sb7pxuyUbuaog/Xe', 'anna-lisa', 'anna-lista', 'annalisa'),
(20, 'Johan123', '$2b$10$XF7Qhbnsz6/kDKDo8zOxd.sjF1S/fh4nIFuS7cQdvJkbZGjYAv3qG', 'Johan', 'coder', 'johan'),
(21, 'J3asd1', '$2b$10$Q97KMuR0YNzrvY.b1enh3OxGNwAQQkL8mj/Ww2RLYZn8KD8nouRlu', 'Jo32n', 'coder', 'johan');

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `albums`
--
ALTER TABLE `albums`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT för tabell `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT för tabell `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
