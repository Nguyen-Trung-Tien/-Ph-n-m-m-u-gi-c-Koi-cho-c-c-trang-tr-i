CREATE TABLE `User` (
  `user_id` int PRIMARY KEY AUTO_INCREMENT,
  `fullname` varchar(50),
  `password` varchar(20),
  `email` varchar(100),
  `address` varchar(150),
  `phone_number` varchar(20),
  `create_at` datetime,
  `updata_at` datetime,
  `deleted` int
);

CREATE TABLE `Koi` (
  `koi_id` int PRIMARY KEY AUTO_INCREMENT,
  `fram_over_id` int,
  `name` varchar(50),
  `age` int,
  `size` decimal,
  `health_status` varchar(50),
  `description` varchar(100),
  `created_at` datetime,
  `updated_at` datetime,
  `deleted` int
);

CREATE TABLE `Auctions` (
  `auction_id` int PRIMARY KEY AUTO_INCREMENT,
  `koi_id` int,
  `start_price` decimal,
  `start_time` datatime,
  `end_time` datetime,
  `winner_id` int,
  `current_price` decimal
);

CREATE TABLE `Bids` (
  `bid_id` int PRIMARY KEY AUTO_INCREMENT,
  `auction_id` int,
  `buyer_id` int,
  `bid_amount` decimal,
  `bid_time` datetime
);

CREATE TABLE `Transactions` (
  `transaction_id` int PRIMARY KEY AUTO_INCREMENT,
  `auction_id` int,
  `buyer_id` int,
  `seller_id` int,
  `transaction_amount` decimal,
  `transaction_fee` decimal,
  `payment_date` datetime
);

CREATE TABLE `Blogs` (
  `blog_id` int PRIMARY KEY AUTO_INCREMENT,
  `author_id` int,
  `title` varchar(255),
  `content` text,
  `created_at` datetime
);

ALTER TABLE `Koi` ADD FOREIGN KEY (`fram_over_id`) REFERENCES `User` (`user_id`);

ALTER TABLE `Koi` ADD FOREIGN KEY (`koi_id`) REFERENCES `Auctions` (`koi_id`);

ALTER TABLE `User` ADD FOREIGN KEY (`user_id`) REFERENCES `Auctions` (`winner_id`);

ALTER TABLE `Auctions` ADD FOREIGN KEY (`auction_id`) REFERENCES `Bids` (`auction_id`);

ALTER TABLE `User` ADD FOREIGN KEY (`user_id`) REFERENCES `Bids` (`buyer_id`);

ALTER TABLE `Auctions` ADD FOREIGN KEY (`auction_id`) REFERENCES `Transactions` (`transaction_id`);

ALTER TABLE `User` ADD FOREIGN KEY (`user_id`) REFERENCES `Transactions` (`buyer_id`);

ALTER TABLE `User` ADD FOREIGN KEY (`user_id`) REFERENCES `Transactions` (`seller_id`);
