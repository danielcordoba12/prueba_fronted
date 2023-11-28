-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-11-2023 a las 01:11:53
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `coffee_sensory`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `analisis`
--

CREATE TABLE `analisis` (
  `id` int(11) NOT NULL,
  `fecha_analisis` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `calidad` enum('bueno','muy bueno','excelente','extraordinario') NOT NULL,
  `estado` tinyint(4) NOT NULL,
  `tipo_analisis_id` int(11) NOT NULL,
  `muestras_id` int(11) NOT NULL,
  `usuarios_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `analisis`
--

INSERT INTO `analisis` (`id`, `fecha_analisis`, `calidad`, `estado`, `tipo_analisis_id`, `muestras_id`, `usuarios_id`) VALUES
(1, '2023-11-14 22:18:30', 'bueno', 1, 1, 1, 1),
(2, '2023-02-02 05:00:00', 'bueno', 1, 1, 1, 1),
(3, '2023-02-02 05:00:00', 'bueno', 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cafes`
--

CREATE TABLE `cafes` (
  `id` int(11) NOT NULL,
  `estado` tinyint(4) NOT NULL DEFAULT 1,
  `lotes_id` int(11) NOT NULL,
  `variedades_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cafes`
--

INSERT INTO `cafes` (`id`, `estado`, `lotes_id`, `variedades_id`) VALUES
(1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

CREATE TABLE `departamentos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `departamentos`
--

INSERT INTO `departamentos` (`id`, `nombre`) VALUES
(1, 'Huila');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fincas`
--

CREATE TABLE `fincas` (
  `id` int(11) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `nombre` varchar(50) NOT NULL,
  `longitud` varchar(50) NOT NULL,
  `latitud` float NOT NULL,
  `usuarios_id` int(11) NOT NULL,
  `municipios_id` int(11) NOT NULL,
  `estado` tinyint(4) NOT NULL DEFAULT 1,
  `noombre_vereda` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `fincas`
--

INSERT INTO `fincas` (`id`, `fecha_creacion`, `nombre`, `longitud`, `latitud`, `usuarios_id`, `municipios_id`, `estado`, `noombre_vereda`) VALUES
(1, '2023-11-13 20:28:18', 'Los pinos', '12', 12, 1, 1, 1, '1234');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lotes`
--

CREATE TABLE `lotes` (
  `id` int(11) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `nombre` varchar(50) NOT NULL,
  `latitud` varchar(20) NOT NULL,
  `longitud` varchar(20) NOT NULL,
  `fincas_id` int(11) NOT NULL,
  `estado` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lotes`
--

INSERT INTO `lotes` (`id`, `fecha_creacion`, `nombre`, `latitud`, `longitud`, `fincas_id`, `estado`) VALUES
(1, '2023-11-13 20:28:51', 'Los pinitos', '12', '12', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `muestras`
--

CREATE TABLE `muestras` (
  `id` int(11) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `codigo_externo` varchar(45) NOT NULL,
  `consecutivo_informe` varchar(45) NOT NULL,
  `muestreo` varchar(45) NOT NULL,
  `preparacion_muestra` varchar(45) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `tipo_molienda` varchar(45) NOT NULL,
  `tipo_fermentacion` varchar(45) DEFAULT 'No especifica',
  `densidad_cafe_verde` varchar(45) DEFAULT 'No reporta',
  `fecha_procesamiento` timestamp NULL DEFAULT NULL,
  `tipo_tostion` varchar(45) NOT NULL,
  `tiempo_fermentacion` varchar(45) DEFAULT 'No especifica',
  `codigo_muestra` varchar(45) NOT NULL,
  `actividad_agua` varchar(45) DEFAULT 'No reporta',
  `tiempo_secado` varchar(45) DEFAULT 'No especifica',
  `presentacion` varchar(45) NOT NULL,
  `estado` tinyint(4) NOT NULL DEFAULT 1,
  `cafes_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `muestras`
--

INSERT INTO `muestras` (`id`, `fecha_creacion`, `codigo_externo`, `consecutivo_informe`, `muestreo`, `preparacion_muestra`, `cantidad`, `tipo_molienda`, `tipo_fermentacion`, `densidad_cafe_verde`, `fecha_procesamiento`, `tipo_tostion`, `tiempo_fermentacion`, `codigo_muestra`, `actividad_agua`, `tiempo_secado`, `presentacion`, `estado`, `cafes_id`) VALUES
(1, '2023-11-14 21:20:39', 'INF-2D', '2D', 'Manual', 'normalito', 150, 'No especifica', 'en agua', 'No reporta', '2023-03-03 05:00:00', 'No especifica', '2 dias', '1D', 'No reporta', '3 dias', 'S.C.P', 1, 1),
(2, '2023-02-02 10:00:00', 'INF-1D', '1D', 'Manual', 'No especifica', 1280, 'No especifica', 'No especifica', 'No reporta', '2023-03-03 10:00:00', 'No especifica', '145dias', '1D', 'No reporta', '3 dias', 'No especifica', 1, 1),
(4, '2023-02-02 15:00:00', 'INF-1D', '1D', 'Manual', 'normalito', 150, 'No especifica', 'en agua', 'No reporta', '2023-03-03 15:00:00', 'No especifica', '2 dias', '1D', 'No reporta', '3 dias', 'S.C.P', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `municipios`
--

CREATE TABLE `municipios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `departamentos_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `municipios`
--

INSERT INTO `municipios` (`id`, `nombre`, `fecha_creacion`, `departamentos_id`) VALUES
(1, 'Palestina', '2023-11-13 20:26:10', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resultados`
--

CREATE TABLE `resultados` (
  `id` int(11) NOT NULL,
  `valor` float NOT NULL,
  `analisis_id` int(11) NOT NULL,
  `variables_id` int(11) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_analisis`
--

CREATE TABLE `tipos_analisis` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipos_analisis`
--

INSERT INTO `tipos_analisis` (`id`, `nombre`) VALUES
(1, 'Fisico');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `token_usuarios`
--

CREATE TABLE `token_usuarios` (
  `id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `usuarios_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `numero_documentos` varchar(50) NOT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `correo_electronico` varchar(50) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `tipo_documento` enum('tarjeta de identidad','cedula de ciudadania') NOT NULL,
  `rol` enum('catador','cafetero','administrador') NOT NULL,
  `cargo` enum('instructor','aprendiz','cliente','administrador') NOT NULL,
  `estado` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `fecha_creacion`, `nombre`, `apellido`, `numero_documentos`, `telefono`, `correo_electronico`, `user_password`, `tipo_documento`, `rol`, `cargo`, `estado`) VALUES
(1, '2023-11-13 20:27:42', 'Daniel', 'Cordoba Ruiz', '1081445', '342223', 'dcordobaruizv@gmail.com', '1234', 'cedula de ciudadania', 'catador', 'administrador', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `variables`
--

CREATE TABLE `variables` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `tipos_analisis_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `variedades`
--

CREATE TABLE `variedades` (
  `id` int(11) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `nombre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `variedades`
--

INSERT INTO `variedades` (`id`, `fecha_creacion`, `nombre`) VALUES
(1, '2023-11-13 20:29:21', 'Caturra');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `analisis`
--
ALTER TABLE `analisis`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_analisis_muestras1_idx` (`muestras_id`),
  ADD KEY `fk_analisis_usuarios1_idx` (`usuarios_id`),
  ADD KEY `fk_analisis_tipos_analisis1_idx` (`tipo_analisis_id`);

--
-- Indices de la tabla `cafes`
--
ALTER TABLE `cafes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_cafes_lotes1_idx` (`lotes_id`),
  ADD KEY `fk_cafes_variedades1_idx` (`variedades_id`);

--
-- Indices de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `fincas`
--
ALTER TABLE `fincas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_fincas_usuarios1_idx` (`usuarios_id`),
  ADD KEY `fk_fincas_municipios1_idx` (`municipios_id`);

--
-- Indices de la tabla `lotes`
--
ALTER TABLE `lotes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_lotes_fincas1_idx` (`fincas_id`);

--
-- Indices de la tabla `muestras`
--
ALTER TABLE `muestras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_muestras_cafes1_idx` (`cafes_id`);

--
-- Indices de la tabla `municipios`
--
ALTER TABLE `municipios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_municipios_departamentos1_idx` (`departamentos_id`);

--
-- Indices de la tabla `resultados`
--
ALTER TABLE `resultados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_resultados_analisis1_idx` (`analisis_id`),
  ADD KEY `fk_resultados_variables1_idx` (`variables_id`);

--
-- Indices de la tabla `tipos_analisis`
--
ALTER TABLE `tipos_analisis`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `token_usuarios`
--
ALTER TABLE `token_usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_token_usuarios_usuarios1_idx` (`usuarios_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `variables`
--
ALTER TABLE `variables`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_variables_tipos_analisis1_idx` (`tipos_analisis_id`);

--
-- Indices de la tabla `variedades`
--
ALTER TABLE `variedades`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `analisis`
--
ALTER TABLE `analisis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `cafes`
--
ALTER TABLE `cafes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `fincas`
--
ALTER TABLE `fincas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `lotes`
--
ALTER TABLE `lotes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `muestras`
--
ALTER TABLE `muestras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `municipios`
--
ALTER TABLE `municipios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `resultados`
--
ALTER TABLE `resultados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipos_analisis`
--
ALTER TABLE `tipos_analisis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `token_usuarios`
--
ALTER TABLE `token_usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `variables`
--
ALTER TABLE `variables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `variedades`
--
ALTER TABLE `variedades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `analisis`
--
ALTER TABLE `analisis`
  ADD CONSTRAINT `fk_analisis_muestras1` FOREIGN KEY (`muestras_id`) REFERENCES `muestras` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_analisis_tipos_analisis1` FOREIGN KEY (`tipo_analisis_id`) REFERENCES `tipos_analisis` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_analisis_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `cafes`
--
ALTER TABLE `cafes`
  ADD CONSTRAINT `fk_cafes_lotes1` FOREIGN KEY (`lotes_id`) REFERENCES `lotes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_cafes_variedades1` FOREIGN KEY (`variedades_id`) REFERENCES `variedades` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `fincas`
--
ALTER TABLE `fincas`
  ADD CONSTRAINT `fk_fincas_municipios1` FOREIGN KEY (`municipios_id`) REFERENCES `municipios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_fincas_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `lotes`
--
ALTER TABLE `lotes`
  ADD CONSTRAINT `fk_lotes_fincas1` FOREIGN KEY (`fincas_id`) REFERENCES `fincas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `muestras`
--
ALTER TABLE `muestras`
  ADD CONSTRAINT `fk_muestras_cafes1` FOREIGN KEY (`cafes_id`) REFERENCES `cafes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `municipios`
--
ALTER TABLE `municipios`
  ADD CONSTRAINT `fk_municipios_departamentos1` FOREIGN KEY (`departamentos_id`) REFERENCES `departamentos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `resultados`
--
ALTER TABLE `resultados`
  ADD CONSTRAINT `fk_resultados_analisis1` FOREIGN KEY (`analisis_id`) REFERENCES `analisis` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_resultados_variables1` FOREIGN KEY (`variables_id`) REFERENCES `variables` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `token_usuarios`
--
ALTER TABLE `token_usuarios`
  ADD CONSTRAINT `fk_token_usuarios_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `variables`
--
ALTER TABLE `variables`
  ADD CONSTRAINT `fk_variables_tipos_analisis1` FOREIGN KEY (`tipos_analisis_id`) REFERENCES `tipos_analisis` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
