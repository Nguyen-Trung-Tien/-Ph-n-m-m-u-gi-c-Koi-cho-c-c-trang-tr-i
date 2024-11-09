package com.example.auctionkoi.repositories;

import com.example.auctionkoi.entities.ActivityLog;
import com.example.auctionkoi.entities.AuctionTransaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuctionTransactionRepository extends JpaRepository<AuctionTransaction, Long> {

    @Query(value = "select au.price,au.transaction_time,au.bid_id,au.user_id from auction_transaction au",nativeQuery = true)
    List<Object[]> findByMaxPrice();

    List<AuctionTransaction> findAll();

    @Query("SELECT at FROM AuctionTransaction at WHERE at.bid.bidId = ?1 AND at.price = (SELECT MAX(at2.price) FROM AuctionTransaction at2 WHERE at2.bid.bidId = ?1)")
    AuctionTransaction findByBidIdAndMaxPrice(Long bidId);

    @Query("SELECT at FROM AuctionTransaction at WHERE at.bid.bidId = ?1")
    List<AuctionTransaction> findByBidId(Long bid);


}
