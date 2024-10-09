CREATE TABLE [dbo].[User] (
    user_id INT IDENTITY(1,1) PRIMARY KEY,
    username NVARCHAR(50) NOT NULL UNIQUE,
    address NVARCHAR(255) NOT NULL,
    age INT NOT NULL,
    phone_number NVARCHAR(20) NOT NULL UNIQUE,
    birth_date DATE NOT NULL,
    password NVARCHAR(255) NOT NULL,
    email NVARCHAR(100) NOT NULL UNIQUE,
    role NVARCHAR(20) CHECK (role IN ('ADMIN', 'FARM_OWNER', 'BUYER')),
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE() ,
    );
CREATE TABLE [dbo].[Farm] (
    farm_id INT IDENTITY(1,1) PRIMARY KEY,
    farm_name NVARCHAR(100) NOT NULL,
    owner_id INT NOT NULL,
    location NVARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE() ,
    FOREIGN KEY (owner_id) REFERENCES [dbo].[User](user_id) ON DELETE CASCADE
    );
CREATE TABLE [dbo].[Koi] (
    koi_id INT IDENTITY(1,1) PRIMARY KEY,
    farm_id INT NOT NULL,
    nameKoi NVARCHAR(100) NOT NULL,
    size NVARCHAR(100) NOT NULL,
    variety NVARCHAR(100) NOT NULL,
    color NVARCHAR(100) NOT NULL,
    age INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    startingPrice DECIMAL(10, 2) NOT NULL,
    description NVARCHAR(MAX),
    image_url NVARCHAR(255),
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (farm_id) REFERENCES [dbo].[Farm](farm_id) ON DELETE CASCADE,
    );
CREATE TABLE [dbo].[Auction] (
    auction_id INT IDENTITY(1,1) PRIMARY KEY,
    koi_id INT NOT NULL,
    start_time DATETIME NOT NULL,
    buyer_id INT,
    seller_id INT,
    user_id INT,
    current_price DECIMAL(10, 2) NOT NULL,
    end_time DATETIME NOT NULL,
    status NVARCHAR(20) CHECK (status IN ('ACTIVE', 'ENDED')),
    starting_price DECIMAL(10, 2) NOT NULL,
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE() ,
    FOREIGN KEY (koi_id) REFERENCES [dbo].[Koi](koi_id) ON DELETE CASCADE
    );
CREATE TABLE [dbo].[Bid] (
    bid_id INT IDENTITY(1,1) PRIMARY KEY,
    auction_id INT NOT NULL,
    user_id INT NOT NULL,
    bid_amount DECIMAL(10, 2) NOT NULL,
    bid_time DATETIME DEFAULT GETDATE(),
    created_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (auction_id) REFERENCES [dbo].[Auction](auction_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES [dbo].[User](user_id) ,
    );
CREATE TABLE [dbo].[Transaction] (
    transaction_id INT IDENTITY(1,1) PRIMARY KEY,
    auction_id INT NOT NULL,
    buyer_id INT NOT NULL,
    seller_id INT NOT NULL,
    farm_id INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    transaction_date DATETIME DEFAULT GETDATE(),
    status NVARCHAR(20) CHECK (status IN ('PENDING', 'COMPLETED', 'CANCELLED')),
    FOREIGN KEY (auction_id) REFERENCES [dbo].[Auction](auction_id) ,
    FOREIGN KEY (buyer_id) REFERENCES [dbo].[User](user_id) ,
    FOREIGN KEY (seller_id) REFERENCES [dbo].[Farm](farm_id) ON DELETE CASCADE
    );

CREATE TABLE [dbo].[Blog] (
    blog_id INT IDENTITY(1,1) PRIMARY KEY,
    title NVARCHAR(200) NOT NULL,
    content NVARCHAR(MAX) NOT NULL,
    image_url NVARCHAR(255),
    author_id INT NOT NULL,
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE() ,
    FOREIGN KEY (author_id) REFERENCES [dbo].[User](user_id) ON DELETE CASCADE
    );
