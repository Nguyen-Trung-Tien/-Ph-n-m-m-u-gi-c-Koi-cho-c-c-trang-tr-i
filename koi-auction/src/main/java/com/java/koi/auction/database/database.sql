CREATE TABLE User (
                      user_id BIGINT AUTO_INCREMENT PRIMARY KEY,
                      username VARCHAR(50) NOT NULL UNIQUE,
                      password VARCHAR(100) NOT NULL,
                      role VARCHAR(20),
                      contact_info VARCHAR(100)
);

CREATE TABLE Farm (
                      farm_id BIGINT AUTO_INCREMENT PRIMARY KEY,
                      name VARCHAR(100),
                      location VARCHAR(100),
                      user_id BIGINT,
                      FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Koi (
                     koi_id BIGINT AUTO_INCREMENT PRIMARY KEY,
                     size VARCHAR(20),
                     color VARCHAR(20),
                     health VARCHAR(50),
                     price DECIMAL(10, 2),
                     farm_id BIGINT,
                     FOREIGN KEY (farm_id) REFERENCES Farm(farm_id)
);

CREATE TABLE Auction (
                         auction_id BIGINT AUTO_INCREMENT PRIMARY KEY,
                         koi_id BIGINT,
                         start_price DECIMAL(10, 2),
                         auction_type VARCHAR(20),
                         start_time TIMESTAMP,
                         end_time TIMESTAMP,
                         status VARCHAR(20),
                         FOREIGN KEY (koi_id) REFERENCES Koi(koi_id)
);

CREATE TABLE Bid (
                     bid_id BIGINT AUTO_INCREMENT PRIMARY KEY,
                     auction_id BIGINT,
                     user_id BIGINT,
                     bid_amount DECIMAL(10, 2),
                     bid_time TIMESTAMP,
                     FOREIGN KEY (auction_id) REFERENCES Auction(auction_id),
                     FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Transaction (
                             transaction_id BIGINT AUTO_INCREMENT PRIMARY KEY,
                             auction_id BIGINT,
                             buyer_id BIGINT,
                             seller_id BIGINT,
                             amount DECIMAL(10, 2),
                             status VARCHAR(20),
                             FOREIGN KEY (auction_id) REFERENCES Auction(auction_id),
                             FOREIGN KEY (buyer_id) REFERENCES User(user_id),
                             FOREIGN KEY (seller_id) REFERENCES User(user_id)
);

CREATE TABLE Blog (
                      blog_id BIGINT AUTO_INCREMENT PRIMARY KEY,
                      title VARCHAR(200),
                      content TEXT,
                      date TIMESTAMP,
                      author VARCHAR(100)
);
