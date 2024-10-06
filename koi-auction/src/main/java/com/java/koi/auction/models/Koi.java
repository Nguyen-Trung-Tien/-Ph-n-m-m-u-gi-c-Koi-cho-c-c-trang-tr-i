package com.java.koi.auction.models;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "koi")
public class Koi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long koiId;

    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @Column(name = "variety", nullable = false, length = 100)
    private String variety;

    @Column(name = "size", nullable = false, length = 50)
    private String size;

    @Column(name = "color", nullable = false, length = 50)
    private String color;

    @Column(name = "starting_price", nullable = false)
    private double startingPrice;

    @ManyToOne
    @JoinColumn(name = "farm_id", nullable = false)
    private Farm farm;


    public Long getKoiId() {
        return koiId;
    }

    public void setKoiId(Long koiId) {
        this.koiId = koiId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getVariety() {
        return variety;
    }

    public void setVariety(String variety) {
        this.variety = variety;
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

    public double getStartingPrice() {
        return startingPrice;
    }

    public void setStartingPrice(double startingPrice) {
        this.startingPrice = startingPrice;
    }

    public Farm getFarm() {
        return farm;
    }

    public void setFarm(Farm farm) {
        this.farm = farm;
    }

    @Override
    public String toString() {
        return "Koi{" +
                "koiId=" + koiId +
                ", name='" + name + '\'' +
                ", variety='" + variety + '\'' +
                ", size='" + size + '\'' +
                ", color='" + color + '\'' +
                ", startingPrice=" + startingPrice +
                ", farm=" + (farm != null ? farm.getFarmId() : null) + '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Koi)) return false;
        Koi koi = (Koi) o;
        return Double.compare(koi.startingPrice, startingPrice) == 0 &&
                koiId.equals(koi.koiId) &&
                name.equals(koi.name) &&
                variety.equals(koi.variety) &&
                size.equals(koi.size) &&
                color.equals(koi.color) &&
                farm.equals(koi.farm);
    }

    @Override
    public int hashCode() {
        return Objects.hash(koiId, name, variety, size, color, startingPrice, farm);
    }
}
