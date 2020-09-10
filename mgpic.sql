-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Värd: localhost
-- Tid vid skapande: 10 sep 2020 kl 21:30
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
  `title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumpning av Data i tabell `albums`
--

INSERT INTO `albums` (`id`, `title`, `user_id`) VALUES
(1, 'albert', 3),
(2, 'hejsve', 3),
(3, 'metallica', 12),
(4, 'kungen', 3),
(5, 'tv', 4),
(6, 'jul', 2),
(7, 'hejhejhejhej', 1),
(8, 'hejsvennebannan', 2),
(9, 'hejsvennebannan', 12),
(10, 'hl3', 2),
(11, 'hl3', 2),
(12, 'hl3', 2),
(13, 'hehehe', 4),
(14, 'hehehe', 29),
(15, 'dayum', 29),
(16, 'imback', 29),
(17, 'imback', 29);

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
(5, 3),
(5, 3),
(5, 3),
(5, 3),
(5, 6),
(5, 6),
(5, 8);

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
(8, 'Mysta', 'mysta.jpg', 'baddie', 3),
(9, 'Mysta', 'mysta.jpg', 'baddie', 3),
(10, 'Mysta', 'mysta.jpg', 'baddie', 3),
(11, 'Mystan', 'mysta.jpg', 'baddie', 3),
(12, 'Mystan', 'mysta.jpg', 'baddie', 3),
(13, 'Mystan', 'mysta.jpg', 'baddie', 3),
(14, 'kalleAnkas', 'www.imgbild', 'badde', 5),
(15, 'kalleAnkas', 'www.imgbild', 'badde', 5),
(16, 'kallee', 'www.imgbild', 'hello', 3),
(17, 'kallee', 'www.imgbild', 'hello', 29),
(18, 'works', 'img', 'doit', 29),
(19, 'works', 'img', 'doit', 29),
(20, 'works', 'img', 'doit', 29),
(21, 'test', 'imga', 'hello', 29),
(22, 'kallesmagasin', 'imgpic', 'kajsa', 29),
(23, 'kajsa', 'imlol', 'henrik', 29),
(24, 'kajsa', 'imlol', 'henrik', 29);

-- --------------------------------------------------------

--
-- Tabellstruktur `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumpning av Data i tabell `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `first_name`, `last_name`) VALUES
(1, 'yallyalla@hotmail.com', '202cb962ac59075b964b07152d234b70', 'emil', 'hest'),
(8, 'goodemailyesds123', '$2b$10$5SYLJrdxGV0f2U8ML/U85e0E93mZEUjxu5GkxePU5.bwR1Xof3h6O', 'kallesve', 'hejsvensson'),
(9, 'myemail', '$2b$10$TQaRCtU270VpaZsZEMwEyumIoX.7.6IqU/2F85ab1DkqPyI4u4DgC', 'peter', 'hejs'),
(10, 'myemail1', '$2b$10$rMb1x4sVq/6YJpEd80Ls6epssayigLzAfynI2YtTVYhRLu/wO80Hu', 'peter', 'hejs'),
(11, 'email123', '$2b$10$z1tZfNANZ3hvMMwkSKJdZuNgdgBrlMaQL/cPI3DhBFP9Q7vKt.LZe', 'peter', 'hejs'),
(12, 'emailmartin', '$2b$10$zCwUZW5VgzO284MbFHTcAuw1WSE4qBjIUE56xk2boPiCnk010ZZSW', 'peter', 'hejs'),
(15, 'emaiin', '$2b$10$wN7CQPGiWzFwJdausoreU.86WYAXcNtL4TGjj7NgSA8dmkO2HJTUu', 'peter', 'hejs'),
(16, 'em4a', '$2b$10$nb.bW7ci1ZPznwe2qrkI/.pye5nURAeYPHfhSlGMuLvrF51PmnbY2', 'peater', 'hejs'),
(17, 'emsdada', '$2b$10$CCPO9K1/A5qmLPUuS6GCdO0lW8oW8/LTpWmYcwgkO4/CXrmAOwDeO', 'peater', 'hejs'),
(18, 'lolol', '$2b$10$VnHFB6/RJrig2ZkLzadH/egfKWlSQPfeCoj6vYkOFRhfZ80aMYr/C', 'peatesdr', 'hejs'),
(19, 'loolol', '$2b$10$jolg1njhTkCUI0EGIU7Q9.NJt95pPRqj9fyk6sb7pxuyUbuaog/Xe', 'anna-lisa', 'anna-lista'),
(20, 'Johan123', '$2b$10$XF7Qhbnsz6/kDKDo8zOxd.sjF1S/fh4nIFuS7cQdvJkbZGjYAv3qG', 'Johan', 'coder'),
(21, 'J3asd1', '$2b$10$Q97KMuR0YNzrvY.b1enh3OxGNwAQQkL8mj/Ww2RLYZn8KD8nouRlu', 'Jo32n', 'coder'),
(22, 'MartinGustavsson', '$2b$10$nQVaCh.YArC861v5gQoyfe8mX.hBNz0rqPq9eA0hl8dwXFKhdyn1u', 'Martin', 'Gustavsson'),
(23, 'MartinGustavssoncool', '$2b$10$uDoeBowjTzwITPrcSfFfl.Gwit8BUGNp7jTN4Sw5seHUXb.uMWKUG', 'Martina', 'Gustaaavsson'),
(24, 'MartinGustavssoncoodsfsdfl', '$2b$10$orHY6SP1StYsn5THrws6weQWqlfDWYT/yawwDr6n7t86QT7Rv0dl.', 'Martina', 'Gustaaavsson'),
(25, 'gustavsson__M@hotmail.com', '$2b$10$BLuBrcLtwTAr6iwKYHF2e.u2FFbX38qNNSJxCPxBiMZ1AtEskgxYu', 'Martina', 'Gustaaavsson'),
(26, 'gustavsson@hotmail.com', '$2b$10$QRFoP/Svio/a9DCoi4SpNeQE8Ewg.SwkikJRHsfq72H0n4P0t2NCu', 'Martina', 'Gustaaavsson'),
(27, 'gustav', '$2b$10$iR2uwTkUjHrs.OSFK3cG7O49pihfQHNlgFdhjxxgJkSk3SnD2b4I.', 'Marti', 'Gusavsson'),
(28, 'marre', '$2b$10$Ya0Z9IrgQJBrOOVFc3bWqOJp1eZVxhN.rHJ.zXqPRZVxD4q8.5uHa', 'Martii', 'Gusavssaon'),
(29, 'marree', '$2b$10$SXIKqU/eI5wOvA8qKqPoPuHNa2dozQzP4rMQzJND35KM1H3FThmEa', 'Martii', 'Gusavssaon'),
(30, 'martins', '$2b$10$2o3ix2SoDWI76VDTZB7oz.XO24n1UKpvkfE7XWFn3O1LHobc6itzy', 'Martii', 'Gusavssaon'),
(31, 'gustavs', '$2b$10$YNdho46cLMQG7YSJtx5VCe.IAXbUziyhf20S4bTGlV5hckJ377MHK', 'Martii', 'Gusavssaon'),
(32, 'gust', '$2b$10$Zx2X/swmbH3kaJ7i89USKOOEprE3QWWpIml0GjYSEc2Eio0GvTxw6', 'Mohoha', 'Gusavssaon');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT för tabell `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT för tabell `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
