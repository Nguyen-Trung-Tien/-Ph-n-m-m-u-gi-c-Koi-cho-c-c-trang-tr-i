package com.example.auctionkoi.repositories;

import com.example.auctionkoi.entities.Bid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BidRepository extends JpaRepository<Bid, Long> {
    List<Bid> findAll();
    List<Bid> findAllByKoi_KoiId(Long koiId);

    Optional<Bid> findTopByKoi_KoiIdOrderByCurrentPriceDesc(Long koiId);
}
