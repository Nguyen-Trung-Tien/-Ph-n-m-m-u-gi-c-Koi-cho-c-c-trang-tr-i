package com.example.auctionkoi.repositories;

import com.example.auctionkoi.entities.SuccessfulAuctionResult;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SuccessfulAuctionResultRepository extends JpaRepository<SuccessfulAuctionResult, Long> {
    // Tìm kiếm tất cả các kết quả đấu giá thành công theo userId
    List<SuccessfulAuctionResult> findByWinningBidUserId(Long userId);
}
