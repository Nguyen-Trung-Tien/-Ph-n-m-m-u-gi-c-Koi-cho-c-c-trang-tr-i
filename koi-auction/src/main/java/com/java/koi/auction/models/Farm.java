package com.java.koi.auction.models;
import jakarta.persistence.*;

import java.util.List;

@Table(name = "Farm")

public class Farm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long farmId;
    @Column(nullable = false)
    private String farmName;
    private String location;

    @ManyToOne
    private User user;

    @OneToMany(mappedBy = "farm")
    private List<Koi> koi;

    public Long getFarmId() {
        return farmId;
    }

    public void setFarmId(Long farmId) {
        this.farmId = farmId;
    }

    public String getFarmName() {
        return farmName;
    }

    public void setFarmName(String farmName) {
        this.farmName = farmName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Koi> getKoi() {
        return koi;
    }

    public void setKoi(List<Koi> koi) {
        this.koi = koi;
    }
}