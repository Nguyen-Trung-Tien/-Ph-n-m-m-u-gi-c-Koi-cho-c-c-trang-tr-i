package com.java.koi.auction.repository;

import com.java.koi.auction.models.Bid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.math.BigDecimal;

@Repository
public interface BidRepository extends JpaRepository<Bid, Long> {
    @Query("SELECT MAX(b.amount) FROM Bid b WHERE b.auction.id = ?1")
    BigDecimal findMaxBidAmountByAuctionId(Long auctionId);
}
