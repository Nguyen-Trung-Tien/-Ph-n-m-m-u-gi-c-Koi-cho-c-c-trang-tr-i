package com.java.koi.auction.models;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "koi")
public class Koi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long koiId;

    private String size;
    private String color;
    private String health;
    private BigDecimal price;

    @ManyToOne
    @JoinColumn(name = "farm_id", nullable = false)
    private Farm farm;

    @OneToOne(mappedBy = "koi")
    private Auction auction;

    public Long getKoiId() {
        return koiId;
    }

    public void setKoiId(Long koiId) {
        this.koiId = koiId;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getHealth() {
        return health;
    }

    public void setHealth(String health) {
        this.health = health;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Farm getFarm() {
        return farm;
    }

    public void setFarm(Farm farm) {
        this.farm = farm;
    }

    public Auction getAuction() {
        return auction;
    }

    public void setAuction(Auction auction) {
        this.auction = auction;
    }
}
