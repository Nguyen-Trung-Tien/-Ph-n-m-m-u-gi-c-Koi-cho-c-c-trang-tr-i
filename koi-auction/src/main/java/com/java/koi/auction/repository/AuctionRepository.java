package com.java.koi.auction.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.java.koi.auction.models.Auction;

public interface AuctionRepository extends JpaRepository<Auction, Long> {

}
