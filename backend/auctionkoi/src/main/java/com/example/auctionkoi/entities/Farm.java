package com.example.auctionkoi.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "farms")
public class Farm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "farm_name")
    private String farmName;

    @Column(name = "farm_description")
    private String farmDescription;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFarmName() {
        return farmName;
    }

    public void setFarmName(String farmName) {
        this.farmName = farmName;
    }

    public String getFarmDescription() {
        return farmDescription;
    }

    public void setFarmDescription(String farmDescription) {
        this.farmDescription = farmDescription;
    }
}
