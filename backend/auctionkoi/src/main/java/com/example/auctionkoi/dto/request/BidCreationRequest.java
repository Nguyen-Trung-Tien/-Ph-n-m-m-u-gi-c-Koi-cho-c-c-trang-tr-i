package com.example.auctionkoi.dto.request;

import java.math.BigDecimal;

public class BidCreationRequest {
    private Long koiId;
    private BigDecimal bidAmount;

    // Getters and Setters
    public Long getKoiId() {
        return koiId;
    }

    public void setKoiId(Long koiId) {
        this.koiId = koiId;
    }

    public BigDecimal getBidAmount() {
        return bidAmount;
    }

    public void setBidAmount(BigDecimal bidAmount) {
        this.bidAmount = bidAmount;
    }
}
