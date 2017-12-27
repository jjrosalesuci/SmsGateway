-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-12-2017 a las 01:20:52
-- Versión del servidor: 10.1.16-MariaDB
-- Versión de PHP: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `apirestful`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sms`
--

CREATE TABLE `sms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `phone_no` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL,
  `from_` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `id_user` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sms`
--

INSERT INTO `sms` (`id`, `phone_no`, `message`, `from_`, `status`, `created_at`, `updated_at`, `id_user`) VALUES
(10, '234234234', 'Prueba de descuento de credito', '345345345', 0, '2017-12-05 12:03:47', NULL, 30),
(11, '234234234', 'Prueba de descuento de credito', '345345345', 0, '2017-12-05 12:04:14', NULL, 30),
(12, '234234234', 'Prueba de descuento de credito', '345345345', 0, '2017-12-05 12:12:40', NULL, 30),
(13, '234234234', 'Prueba de descuento de credito', '345345345', -1, '2017-12-05 12:19:15', NULL, 35),
(14, '234234234', 'Prueba de descuento de credito', '345345345', 0, '2017-12-05 12:20:32', NULL, 29),
(15, '234234234', 'Prueba de descuento de credito', '345345345', 0, '2017-12-05 13:16:11', NULL, 29),
(16, '234234234', 'Prueba de descuento de credito', '345345345', 0, '2017-12-05 13:16:20', NULL, 29);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `spended`
--

CREATE TABLE `spended` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `sms_id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `spended` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `spended`
--

INSERT INTO `spended` (`id`, `user_id`, `sms_id`, `date`, `spended`) VALUES
(9, 30, 10, '2017-12-05 12:03:47', 1),
(10, 30, 11, '2017-12-05 12:04:14', 1.5),
(11, 30, 12, '2017-12-05 12:12:40', 1.5),
(12, 29, 14, '2017-12-05 12:20:32', 1.5),
(13, 29, 15, '2017-12-05 13:16:11', 1.5),
(14, 29, 16, '2017-12-05 13:16:20', 1.5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks`
--

CREATE TABLE `tasks` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `workflowstateid` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tasks`
--

INSERT INTO `tasks` (`id`, `name`, `description`, `workflowstateid`) VALUES
(2, 'Una tarea', 'Esta es una tarea de prueba', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `taskstatehistory`
--

CREATE TABLE `taskstatehistory` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `taskid` int(11) UNSIGNED NOT NULL,
  `workflowstateid` int(11) UNSIGNED NOT NULL,
  `createddate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user` varchar(45) NOT NULL,
  `auth_token` varchar(64) NOT NULL,
  `password` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `created_at` datetime NOT NULL,
  `credit` double DEFAULT NULL,
  `active` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `user`, `auth_token`, `password`, `email`, `name`, `created_at`, `credit`, `active`) VALUES
(37, 'alberto', '63c053dc8c1b4663c74148932f67322d', '177dacb14b34103960ec27ba29bd686b', 'a@a.com', 'Alberto Antonio Ferral Sainz', '2017-12-26 18:22:57', 5, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `workflownavigation`
--

CREATE TABLE `workflownavigation` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `workflowstateid` int(10) UNSIGNED NOT NULL,
  `nextworkflowstateid` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `workflows`
--

CREATE TABLE `workflows` (
  `id` int(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `workflows`
--

INSERT INTO `workflows` (`id`, `name`) VALUES
(2, ' Confirmación de asistencia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `workflowstates`
--

CREATE TABLE `workflowstates` (
  `id` int(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `workflowid` int(11) UNSIGNED NOT NULL,
  `isactive` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `workflowstates`
--

INSERT INTO `workflowstates` (`id`, `name`, `workflowid`, `isactive`) VALUES
(2, 'estado de prueba', 2, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `sms`
--
ALTER TABLE `sms`
  ADD UNIQUE KEY `id` (`id`,`id_user`);

--
-- Indices de la tabla `spended`
--
ALTER TABLE `spended`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `workflowstateid` (`workflowstateid`);

--
-- Indices de la tabla `taskstatehistory`
--
ALTER TABLE `taskstatehistory`
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `taskid` (`taskid`),
  ADD KEY `workflowstateid` (`workflowstateid`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `user` (`user`);

--
-- Indices de la tabla `workflownavigation`
--
ALTER TABLE `workflownavigation`
  ADD PRIMARY KEY (`nextworkflowstateid`,`workflowstateid`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `workflowstateid` (`workflowstateid`);

--
-- Indices de la tabla `workflows`
--
ALTER TABLE `workflows`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `workflowstates`
--
ALTER TABLE `workflowstates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `workflowid` (`workflowid`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `sms`
--
ALTER TABLE `sms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT de la tabla `spended`
--
ALTER TABLE `spended`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT de la tabla `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `taskstatehistory`
--
ALTER TABLE `taskstatehistory`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT de la tabla `workflownavigation`
--
ALTER TABLE `workflownavigation`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `workflows`
--
ALTER TABLE `workflows`
  MODIFY `id` int(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `workflowstates`
--
ALTER TABLE `workflowstates`
  MODIFY `id` int(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`workflowstateid`) REFERENCES `workflowstates` (`id`);

--
-- Filtros para la tabla `taskstatehistory`
--
ALTER TABLE `taskstatehistory`
  ADD CONSTRAINT `taskstatehistory_ibfk_1` FOREIGN KEY (`taskid`) REFERENCES `tasks` (`id`),
  ADD CONSTRAINT `taskstatehistory_ibfk_2` FOREIGN KEY (`workflowstateid`) REFERENCES `workflowstates` (`id`);

--
-- Filtros para la tabla `workflownavigation`
--
ALTER TABLE `workflownavigation`
  ADD CONSTRAINT `workflownavigation_ibfk_1` FOREIGN KEY (`workflowstateid`) REFERENCES `workflowstates` (`id`),
  ADD CONSTRAINT `workflownavigation_ibfk_2` FOREIGN KEY (`nextworkflowstateid`) REFERENCES `workflowstates` (`id`);

--
-- Filtros para la tabla `workflowstates`
--
ALTER TABLE `workflowstates`
  ADD CONSTRAINT `workflowstates_ibfk_1` FOREIGN KEY (`workflowid`) REFERENCES `workflows` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
