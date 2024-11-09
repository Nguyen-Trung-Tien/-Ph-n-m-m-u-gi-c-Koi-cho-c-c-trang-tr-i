package com.example.auctionkoi.repositories;

import com.example.auctionkoi.entities.SuccessfulAuctionResult;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SuccessfulAuctionResultRepository extends JpaRepository<SuccessfulAuctionResult, Long> {
    List<SuccessfulAuctionResult> findByWinningBidUserId(Long userId);
}
