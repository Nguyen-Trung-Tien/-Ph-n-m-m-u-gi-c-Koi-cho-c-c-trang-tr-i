package com.example.auctionkoi.entities;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "bid")
public class Bid {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bid_id")
    private Long bidId;

    @Column(name = "current_price")
    private Double currentPrice;

    @Column(name = "auction_start_time")
    private LocalDateTime auctionStartTime;

    @Column(name = "auction_end_time")
    private LocalDateTime auctionEndTime;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "koi_id")
    private Koi koi;

    @OneToMany(mappedBy = "bid")
    private Set<AuctionTransaction> auctionTransactions = new HashSet<>();

    private int amount;


    // Getters and Setters
    public LocalDateTime getAuctionEndTime() {
        return auctionEndTime;
    }

    public void setAuctionEndTime(LocalDateTime auctionEndTime) {
        this.auctionEndTime = auctionEndTime;
    }
    public LocalDateTime getAuctionStartTime() {
        return auctionStartTime;
    }

    public void setAuctionStartTime(LocalDateTime auctionStartTime) {
        this.auctionStartTime = auctionStartTime;
    }

    public Double getCurrentPrice() {
        return currentPrice;
    }

    public void setCurrentPrice(Double currentPrice) {
        this.currentPrice = currentPrice;
    }

    public Long getBidId() {
        return bidId;
    }

    public void setBidId(Long bidId) {
        this.bidId = bidId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Koi getKoi() {
        return koi;
    }

    public void setKoi(Koi koi) {
        this.koi = koi;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

}
