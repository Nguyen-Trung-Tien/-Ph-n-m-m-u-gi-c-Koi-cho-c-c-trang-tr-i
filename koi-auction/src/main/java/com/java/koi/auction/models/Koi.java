package com.java.koi.auction.models;
import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "Koi")

public class Koi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long koiId;

    @Column(name = "nameKoi", nullable = false, length = 100)
    private String nameKoi;

    @Column(name = "variety", nullable = false, length = 100)
    private String variety;

    @Column(name = "size", nullable = false, length = 50)
    private String size;

    @Column(name = "color", nullable = false, length = 50)
    private String color;

    @Column(name = "startingPrice", nullable = false)
    private double startingPrice;


    @ManyToOne
    @JoinColumn(name = "farm_id", nullable = false)
    private User user;

    @Override
    public String toString() {
        return "Koi{" +
                "koiId=" + koiId +
                ", name='" + nameKoi + '\'' +
                ", variety='" + variety + '\'' +
                ", size='" + size + '\'' +
                ", color='" + color + '\'' +
                ", startingPrice=" + startingPrice +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Koi koi)) return false;
        return Double.compare(koi.startingPrice, startingPrice) == 0 &&
                koiId.equals(koi.koiId) &&
                nameKoi.equals(koi.nameKoi) &&
                variety.equals(koi.variety) &&
                size.equals(koi.size) &&
                color.equals(koi.color)
              ;
    }

    @Override
    public int hashCode() {
        return Objects.hash(koiId, nameKoi, variety, size, color, startingPrice);
    }

    public Long getKoiId() {
        return koiId;
    }

    public void setKoiId(Long koiId) {
        this.koiId = koiId;
    }

    public String getNameKoi() {
        return nameKoi;
    }

    public void setNameKoi(String nameKoi) {
        this.nameKoi = nameKoi;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}
