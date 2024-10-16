package com.example.auctionkoi.dto.request;

public class BidUpdateRequest {
    private Double currentPrice;
    private int amount;
    private Long userId; // Add this field

    // Getters and Setters
    public Double getCurrentPrice() {
        return currentPrice;
    }

    public void setCurrentPrice(Double currentPrice) {
        this.currentPrice = currentPrice;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
