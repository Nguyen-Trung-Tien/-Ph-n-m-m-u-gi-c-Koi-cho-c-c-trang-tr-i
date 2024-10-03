package com.java.koi.auction.models;

public class Koi {
    private Long koiId;
    private String koiName;
    private String color;
    private Double price;

    public Long getKoiId() {
        return koiId;
    }

    public void setKoiId(Long koiId) {
        this.koiId = koiId;
    }

    public String getKoiName() {
        return koiName;
    }

    public void setKoiName(String koiName) {
        this.koiName = koiName;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
