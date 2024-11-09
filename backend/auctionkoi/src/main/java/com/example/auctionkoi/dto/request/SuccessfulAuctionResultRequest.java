package com.example.auctionkoi.dto.request;

import java.time.LocalDateTime;

public class SuccessfulAuctionResultRequest {
    private Long koiId;
    private Long winningBidUserId;
    private Double finalPrice;
    private LocalDateTime auctionEndTime;
    private Integer bidAmount;

    // Getters and Setters
    public Long getKoiId() {
        return koiId;
    }

    public void setKoiId(Long koiId) {
        this.koiId = koiId;
    }

    public Long getWinningBidUserId() {
        return winningBidUserId;
    }

    public void setWinningBidUserId(Long winningBidUserId) {
        this.winningBidUserId = winningBidUserId;
    }

    public Double getFinalPrice() {
        return finalPrice;
    }

    public void setFinalPrice(Double finalPrice) {
        this.finalPrice = finalPrice;
    }

    public LocalDateTime getAuctionEndTime() {
        return auctionEndTime;
    }

    public void setAuctionEndTime(LocalDateTime auctionEndTime) {
        this.auctionEndTime = auctionEndTime;
    }

    public Integer getBidAmount() {
        return bidAmount;
    }

    public void setBidAmount(Integer bidAmount) {
        this.bidAmount = bidAmount;
    }
}
