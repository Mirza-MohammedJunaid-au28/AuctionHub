create database AuctionHub;
use AuctionHub;
  CREATE TABLE userauction (
    `SrNo` int NOT NULL AUTO_INCREMENT,
    `image` varchar(255) NOT NULL,
    `ProductName` varchar(255) NOT NULL,
    `ProductPrice` int NOT NULL,
    `expiry_time` varchar(255) NOT NULL,
    `Category` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `expiry_date` varchar(255) NOT NULL,
    `AuctionId` varchar(255) NOT NULL,
    PRIMARY KEY (`SrNo`),
    UNIQUE KEY `AuctionId` (`AuctionId`)
  )

CREATE TABLE liveauction (
  `SrNo` int NOT NULL AUTO_INCREMENT,
  `AuctionId` varchar(255) NOT NULL,
  `BiddingPrices` varchar(255) NOT NULL,
  `FAQs` varchar(255) NOT NULL,
  `BidderDetail` varchar(255) NOT NULL,
  PRIMARY KEY (`SrNo`),
  UNIQUE KEY `AuctionId` (`AuctionId`)
)

CREATE TABLE orderHistory (
  `SrNo` int primary key NOT NULL AUTO_INCREMENT,
  `AuctionId` varchar(255) NOT NULL,
  `BiddingPrices` varchar(255) NOT NULL,
  `FAQs` varchar(255) NOT NULL,
  `BidderDetail` varchar(255) NOT NULL,
  `noOfBids` int NOT NULL,
  `Order_Delivered` varchar(255)
);


-- Checking The Expired Date
DELIMITER $$
CREATE EVENT my_event
ON SCHEDULE EVERY 1 SECOND
DO
BEGIN
  INSERT INTO orderhistory(AuctionId, BiddingPrices, FAQs, BidderDetail, noOfBids)
  SELECT la.AuctionId, la.BiddingPrices, la.FAQs, la.BidderDetail, la.noOfBids
  FROM liveauction la
  JOIN userauction ua ON la.AuctionId = ua.AuctionId
  WHERE CONCAT(ua.expiry_date, ' ', ua.expiry_time) < NOW();

  DELETE la
  FROM liveauction la
  JOIN userauction ua ON la.AuctionId = ua.AuctionId
  WHERE CONCAT(ua.expiry_date, ' ', ua.expiry_time) < NOW();
END$$
DELIMITER ;
