package com.example.auctionkoi.entities;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "koi")
public class Koi {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "koi_id")
    private Long koiId;

    private String koiName;
    private BigDecimal startingPrice;
    private int length;
    private int age;
    private String sex;

    @Column(name = "auction_end_time")
    private LocalDateTime auctionEndTime;

    @Column(name = "breeder_id")
    private Long breederId;

    // Getters and Setters


    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public Long getBreederId() {
        return breederId;
    }

    public void setBreederId(Long breederId) {
        this.breederId = breederId;
    }

    public Long getKoiId() {
        return koiId;
    }

    public void setKoiId(Long koiId) {
        this.koiId = koiId;
    }

    public String getKoiName() {
        return koiName;
    }

    public void setKoiName(String name) {
        this.koiName = name;
    }

    public BigDecimal getStartingPrice() {
        return startingPrice;
    }

    public void setStartingPrice(BigDecimal startingPrice) {
        this.startingPrice = startingPrice;
    }

    public LocalDateTime getAuctionEndTime() {
        return auctionEndTime;
    }

    public void setAuctionEndTime(LocalDateTime auctionEndTime) {
        this.auctionEndTime = auctionEndTime;
    }
}
