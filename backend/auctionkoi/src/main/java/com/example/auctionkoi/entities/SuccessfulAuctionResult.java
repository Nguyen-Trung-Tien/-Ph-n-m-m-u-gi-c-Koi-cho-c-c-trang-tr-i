package com.example.auctionkoi.entities;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "successful_auction_results")
public class SuccessfulAuctionResult {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "koi_id", nullable = false)
    private Long koiId;

    @Column(name = "winning_bid_user_id", nullable = false)
    private Long winningBidUserId;

    @Column(name = "final_price", nullable = false)
    private Double finalPrice;

    @Column(name = "auction_end_time", nullable = false)
    private LocalDateTime auctionEndTime;

    @Column(name = "bid_amount", nullable = false)
    private Integer bidAmount;

    @Transient
    private String koiName;



    // Constructors
    public SuccessfulAuctionResult() {}

    public SuccessfulAuctionResult(Long koiId, Long winningBidUserId, Double finalPrice, LocalDateTime auctionEndTime, Integer bidAmount) {
        this.koiId = koiId;
        this.winningBidUserId = winningBidUserId;
        this.finalPrice = finalPrice;
        this.auctionEndTime = auctionEndTime;
        this.bidAmount = bidAmount;
    }

    // Getters and Setters
    public String getKoiName() {
        return koiName;
    }

    public void setKoiName(String koiName) {
        this.koiName = koiName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    @Override
    public String toString() {
        return "SuccessfulAuctionResult{" +
                "id=" + id +
                ", koiId=" + koiId +
                ", winningBidUserId=" + winningBidUserId +
                ", finalPrice=" + finalPrice +
                ", auctionEndTime=" + auctionEndTime +
                ", bidAmount=" + bidAmount +
                '}';
    }
}
