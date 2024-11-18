package com.example.auctionkoi.repositories;

import com.example.auctionkoi.entities.Bid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface BidRepository extends JpaRepository<Bid, Long> {
    List<Bid> findAll();

    @Query("SELECT b FROM Bid b ORDER BY b.auctionEndTime DESC, b.auctionStartTime DESC ")
    List<Bid> findAllOrderByAuctionEndTimeDescAndAuctionStartTimeAsc();

    Bid findByBidId(Long bid);

    List<Bid> findAllByKoi_KoiId(Long koiId);

    Optional<Bid> findTopByKoi_KoiIdOrderByCurrentPriceDesc(Long koiId);

    List<Bid> findAllByAuctionStartTimeGreaterThan(LocalDateTime startTime);

    List<Bid> findByUserIdNotNull();

    @Query(value = " select b.bid_id,b.koi_id,b.auction_start_time,b.auction_end_time,k.koi_name,k.starting_price from bid b inner join koi k on b.koi_id = k.koi_id",

                    nativeQuery = true)
    List<Object[]> findAllBidAndStartPrice();
}
