package com.java.koi.auction.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.java.koi.auction.models.Auction;

import java.util.List;

public interface AuctionRepository extends JpaRepository<Auction, Long> {
    List<Auction> findByStatus(String status);

}
