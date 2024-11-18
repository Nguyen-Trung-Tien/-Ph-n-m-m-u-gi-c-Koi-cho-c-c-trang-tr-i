-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 06, 2024 lúc 03:05 AM
-- Phiên bản máy phục vụ: 9.0.1
-- Phiên bản PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `auction_koi`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `activity_log`
--

CREATE TABLE `activity_log` (
  `id` bigint NOT NULL,
  `up_time` datetime(6) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `activity_log`
--

INSERT INTO `activity_log` (`id`, `up_time`, `user_id`) VALUES
(1, '2024-10-22 22:20:52.513000', 11),
(2, '2024-10-22 22:21:01.279000', 22),
(3, '2024-10-22 22:21:09.926000', 23),
(4, '2024-10-23 08:04:17.132000', 22),
(5, '2024-10-23 08:04:24.548000', 22),
(6, '2024-11-04 23:08:57.955000', 13),
(7, '2024-11-05 14:53:20.195000', 12),
(8, '2024-11-05 16:10:34.299000', 12),
(9, '2024-11-05 16:10:48.728000', 12),
(10, '2024-11-05 16:24:52.081000', 21),
(11, '2024-11-05 16:29:48.354000', 21),
(12, '2024-11-05 21:18:53.250000', 11),
(13, '2024-11-05 21:22:26.107000', 11),
(14, '2024-11-05 21:23:36.434000', 11),
(15, '2024-11-05 21:24:24.722000', 11),
(16, '2024-11-05 21:27:01.610000', 11),
(17, '2024-11-05 21:29:55.611000', 11),
(18, '2024-11-05 21:30:34.257000', 11),
(19, '2024-11-05 21:32:45.719000', 11),
(20, '2024-11-05 21:33:41.340000', 11),
(21, '2024-11-05 21:34:41.017000', 11),
(22, '2024-11-05 21:35:16.096000', 11),
(23, '2024-11-05 21:39:47.782000', 11),
(24, '2024-11-05 21:44:02.522000', 11),
(25, '2024-11-05 22:18:34.254000', 11),
(26, '2024-11-05 22:37:04.885000', 11),
(27, '2024-11-05 22:41:24.739000', 11),
(28, '2024-11-05 22:43:28.203000', 11),
(29, '2024-11-05 22:45:17.423000', 11),
(30, '2024-11-05 22:46:05.401000', 11),
(31, '2024-11-05 22:46:37.988000', 11),
(32, '2024-11-05 22:47:16.355000', 11),
(33, '2024-11-05 22:48:07.541000', 11),
(34, '2024-11-05 22:51:41.277000', 11),
(35, '2024-11-05 22:54:06.090000', 11),
(36, '2024-11-05 23:00:19.359000', 11),
(37, '2024-11-05 23:11:53.152000', 11),
(38, '2024-11-05 23:18:46.780000', 11),
(39, '2024-11-05 23:19:09.579000', 11),
(40, '2024-11-05 23:23:01.361000', 11),
(41, '2024-11-05 23:24:55.625000', 11),
(42, '2024-11-05 23:34:27.083000', 11),
(43, '2024-11-05 23:49:47.807000', 11),
(44, '2024-11-05 23:50:37.111000', 11),
(45, '2024-11-05 23:52:34.151000', 11),
(46, '2024-11-05 23:52:42.899000', 11),
(47, '2024-11-05 23:52:51.468000', 11),
(48, '2024-11-05 23:53:32.371000', 11),
(49, '2024-11-05 23:53:46.971000', 11),
(50, '2024-11-05 23:58:29.637000', 11),
(51, '2024-11-05 23:59:28.327000', 11),
(52, '2024-11-05 23:59:48.459000', 11),
(53, '2024-11-06 00:01:49.845000', 11),
(54, '2024-11-06 00:02:34.320000', 13);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `auction_transaction`
--

CREATE TABLE `auction_transaction` (
  `id` bigint NOT NULL,
  `price` bigint DEFAULT NULL,
  `transaction_time` datetime(6) DEFAULT NULL,
  `bid_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `auction_transaction`
--

INSERT INTO `auction_transaction` (`id`, `price`, `transaction_time`, `bid_id`, `user_id`) VALUES
(1, 1001, '2024-10-11 00:00:00.000000', 1, 14),
(2, 1500, '2024-10-11 00:00:00.000000', 2, 14),
(3, 1255, '2024-10-11 00:00:00.000000', 3, 21),
(4, 3000, '2024-10-11 00:00:00.000000', 4, 21),
(5, 1800, '2024-10-11 00:00:00.000000', 5, 16),
(6, 1100, '2024-10-01 09:00:00.000000', 6, 11),
(7, 1550, '2024-10-05 10:00:00.000000', 7, 12),
(8, 1300, '2024-10-10 08:30:00.000000', 8, 13),
(13, 14441, '2024-11-05 15:27:54.414000', 24, 12),
(14, 14442, '2024-11-05 15:31:21.714000', 24, 12),
(15, 14443, '2024-11-05 16:10:02.893000', 24, 12),
(16, 14445, '2024-11-05 16:25:10.317000', 24, 21);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bid`
--

CREATE TABLE `bid` (
  `bid_id` bigint NOT NULL,
  `amount` int NOT NULL,
  `current_price` double DEFAULT NULL,
  `koi_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `auction_start_time` datetime(6) DEFAULT NULL,
  `auction_end_time` datetime(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `bid`
--

INSERT INTO `bid` (`bid_id`, `amount`, `current_price`, `koi_id`, `user_id`, `auction_start_time`, `auction_end_time`) VALUES
(1, 1, 1001, 1, 14, '2024-10-11 00:00:00.000000', '2024-10-13 22:25:00.000000'),
(2, 16, 1500, 2, 14, '2024-10-11 00:00:00.000000', '2024-10-16 15:30:00.000000'),
(3, 24, 1255, 3, 21, '2024-10-11 00:00:00.000000', '2024-10-16 20:19:00.000000'),
(4, 31, 3000, 4, 21, '2024-10-11 00:00:00.000000', '2024-10-16 21:15:40.000000'),
(5, 19, 1800, 5, 16, '2024-10-11 00:00:00.000000', '2024-10-19 09:30:00.000000'),
(6, 11, 1100, 6, 11, '2024-10-01 09:00:00.000000', '2024-10-15 12:00:00.000000'),
(7, 5, 1550, 7, 12, '2024-10-05 10:00:00.000000', '2024-11-01 15:00:00.000000'),
(8, 8, 1300, 8, 13, '2024-10-10 08:30:00.000000', '2024-10-20 10:30:00.000000'),
(24, 2, 1440, 1, 13, '2024-11-16 23:32:00.000000', '2024-11-23 23:32:00.000000'),
(25, 0, 1800004, 9, NULL, '2024-11-01 10:17:00.000000', '2024-11-09 10:17:00.000000');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `breeders`
--

CREATE TABLE `breeders` (
  `breeder_id` bigint NOT NULL,
  `breeder_description` varchar(255) DEFAULT NULL,
  `breeder_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `breeders`
--

INSERT INTO `breeders` (`breeder_id`, `breeder_description`, `breeder_name`) VALUES
(1, 'Breeder specializing in high-quality koi fish', 'Koi Farms Inc.'),
(2, 'Expert in breeding unique koi varieties', 'Koi Breeding Co.'),
(3, 'Renowned for premium koi with vibrant colors', 'Noble Koi Ltd.'),
(4, 'Specialist in rare koi types', 'Rare Koi Enterprises'),
(5, 'Long-standing tradition of koi breeding', 'Heritage Koi Group');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `koi`
--

CREATE TABLE `koi` (
  `koi_id` bigint NOT NULL,
  `age` int NOT NULL,
  `auction_end_time` datetime(6) DEFAULT NULL,
  `breeder_id` bigint DEFAULT NULL,
  `koi_name` varchar(255) DEFAULT NULL,
  `length` int NOT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `starting_price` decimal(38,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `koi`
--

INSERT INTO `koi` (`koi_id`, `age`, `auction_end_time`, `breeder_id`, `koi_name`, `length`, `sex`, `starting_price`) VALUES
(1, 2, '2024-10-13 22:25:00.000000', 1, 'Koi Golden', 30, 'Female', 1900.00),
(2, 3, '2024-10-16 15:30:00.000000', 2, 'Koi Black', 35, 'Female', 1500.00),
(3, 1, '2024-10-16 20:19:00.000000', 3, 'Koi Red', 25, 'Male', 1200.00),
(4, 4, '2024-10-16 21:15:40.000000', 4, 'Koi Blue', 40, 'Female', 2000.00),
(5, 5, '2024-10-19 09:30:00.000000', 5, 'Koi White', 38, 'Male', 1800.00),
(6, 2, '2024-10-15 12:00:00.000000', 1, 'Koi Diamond', 30, 'Male', 1000.00),
(7, 1, '2024-11-01 15:00:00.000000', 2, 'Koi Silver', 25, 'Female', 1500.00),
(8, 3, '2024-10-20 10:30:00.000000', 3, 'Koi Bronze', 35, 'Male', 12039.00),
(9, 2, NULL, 2, 'Koi E', 16, 'Female', 1800.00),
(10, 2, NULL, 3, 'koi c', 2, 'Female', 1899.00),
(11, 3, NULL, 4, 'Koi Wiss', 23, 'Female', 332.00),
(12, 2, NULL, 4, 'Koi God', 3, 'Female', 348.00),
(13, 2, NULL, 3, 'Koi EQ', 2, 'Male', 3333.00);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` bigint NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `wallet` int DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `day_sign_up` datetime(6) DEFAULT NULL,
  `role` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `first_name`, `last_name`, `wallet`, `phone_number`, `day_sign_up`, `role`) VALUES
(10, 'tien', 'tien@example.com', 'tien', 'nguyen', 'nguyen', 2000000, '09374835837893', NULL, 1),
(11, 'Hieuht65555', 'nguyenvana@example.com', 'Hieuaaa', 'Hoàng Vă', 'sdd', 2000, '5555', NULL, 1),
(12, 'Hieuht655555', 'nguyenvana@example.com', 'Hieuaaa', 'Hoà van', 'Hoà', 100000, '1223', NULL, 1),
(13, 'hieuht65', 'hieuht65@gmail.com', 'hieuht65', 'Hoàng Văn  Diện', 'Hoàng', 0, '931111111', NULL, 0),
(14, 'hieuht655', 'hieuht65@gmail.com', 'hieuht65', 'Hoàng Văn ', 'Diện', 0, '931111111', NULL, 0),
(15, 'hieuht6', 'anhdien.profile@gmail.com', 'hieuht6', 'Ngọc Minh', 'An', 10000, '931111111', NULL, 0),
(16, 'hieuht66', 'hieuht6@gmail.com', 'hieuht6', 'Hoàng Văn ', 'Diện', 0, '931111111', NULL, 0),
(17, 'hieuht666', 'hieuht6@gmail.com', 'hieuht6', 'Hoàng Văn ', 'ĐIện', 66666, '931111111', NULL, 0),
(19, 'hieuht22222', 'na@example.com', 'hieuht22222', 'Hoàng Đăn', 'Điện', 0, '931111111', NULL, 0),
(20, 'dienht65', 'hieuht6@gmail.com', 'dienht65', 'Hoàng Minh', 'An', 10000, '0931212111', NULL, 0),
(21, 'ngoc1', 'ngoc@gmail.com', '12345', 'Hoàng Văn', 'Minh', 930796666, '093111111111', NULL, 0),
(22, 'y', 'y@gmail.com', 'y', 'y', 'y', 10000, '5', '2024-10-20 22:17:17.794000', 0),
(23, 'd', 'd@gmail.com', '4', 'b', 'b', 10000, '4', '2024-10-22 20:12:24.507000', 0),
(24, 't@', 'h@gmail.com', '1', 'g', 'h', 10000, '43', '2024-10-22 20:13:16.064000', 0),
(25, 'eeeg', 'h@gmail.com', '3', 'gg', 'h', 10000, '3', '2024-10-22 20:16:10.974000', 0),
(26, 'gd', 'geeks966@gmail.com', '1', 'hd', 'g', 10000, '1', '2024-10-22 20:22:32.739000', 0);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `activity_log`
--
ALTER TABLE `activity_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK634sb3dvk7nyxjcjcem7m282a` (`user_id`);

--
-- Chỉ mục cho bảng `auction_transaction`
--
ALTER TABLE `auction_transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKbus0332q2ed7sw6jrwt2nw5ki` (`bid_id`),
  ADD KEY `FKtg4kko2c5u9l7e0gg2md7973` (`user_id`);

--
-- Chỉ mục cho bảng `bid`
--
ALTER TABLE `bid`
  ADD PRIMARY KEY (`bid_id`),
  ADD KEY `FKivc7ymx0hqx5ua37hqj598lk5` (`koi_id`),
  ADD KEY `FKi1pwg1muxilapowsmifod8jtf` (`user_id`);

--
-- Chỉ mục cho bảng `breeders`
--
ALTER TABLE `breeders`
  ADD PRIMARY KEY (`breeder_id`);

--
-- Chỉ mục cho bảng `koi`
--
ALTER TABLE `koi`
  ADD PRIMARY KEY (`koi_id`),
  ADD KEY `FKhrv6b2t8xaid9t92ccae741qx` (`breeder_id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `activity_log`
--
ALTER TABLE `activity_log`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT cho bảng `auction_transaction`
--
ALTER TABLE `auction_transaction`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `bid`
--
ALTER TABLE `bid`
  MODIFY `bid_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT cho bảng `breeders`
--
ALTER TABLE `breeders`
  MODIFY `breeder_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `koi`
--
ALTER TABLE `koi`
  MODIFY `koi_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `activity_log`
--
ALTER TABLE `activity_log`
  ADD CONSTRAINT `FK634sb3dvk7nyxjcjcem7m282a` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `auction_transaction`
--
ALTER TABLE `auction_transaction`
  ADD CONSTRAINT `FKbus0332q2ed7sw6jrwt2nw5ki` FOREIGN KEY (`bid_id`) REFERENCES `bid` (`bid_id`),
  ADD CONSTRAINT `FKtg4kko2c5u9l7e0gg2md7973` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `bid`
--
ALTER TABLE `bid`
  ADD CONSTRAINT `FKi1pwg1muxilapowsmifod8jtf` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `FKivc7ymx0hqx5ua37hqj598lk5` FOREIGN KEY (`koi_id`) REFERENCES `koi` (`koi_id`);

--
-- Các ràng buộc cho bảng `koi`
--
ALTER TABLE `koi`
  ADD CONSTRAINT `FKhrv6b2t8xaid9t92ccae741qx` FOREIGN KEY (`breeder_id`) REFERENCES `breeders` (`breeder_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
