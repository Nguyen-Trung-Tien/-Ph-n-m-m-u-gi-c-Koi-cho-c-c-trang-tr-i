package com.java.koi.auction.models;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Objects;

@Getter
@Setter
@Data
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
    private Farm farm;

    @Override
    public String toString() {
        return "Koi{" +
                "koiId=" + koiId +
                ", name='" + nameKoi + '\'' +
                ", variety='" + variety + '\'' +
                ", size='" + size + '\'' +
                ", color='" + color + '\'' +
                ", startingPrice=" + startingPrice +
                ", farm=" + (farm != null ? farm.getFarmId() : null) + '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Koi koi)) return false; // Using pattern variable
        return Double.compare(koi.startingPrice, startingPrice) == 0 &&
                koiId.equals(koi.koiId) &&
                nameKoi.equals(koi.nameKoi) &&
                variety.equals(koi.variety) &&
                size.equals(koi.size) &&
                color.equals(koi.color) &&
                farm.equals(koi.farm);
    }

    @Override
    public int hashCode() {
        return Objects.hash(koiId, nameKoi, variety, size, color, startingPrice, farm);
    }

}
