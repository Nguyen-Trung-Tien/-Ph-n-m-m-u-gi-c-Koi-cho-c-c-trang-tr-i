package com.java.koi.auction.models;
import jakarta.persistence.*;
import java.util.Set;

@Entity
@Table(name = "farm")
public class Farm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long farmId;

    @Column(nullable = false)
    private String name;

    private String location;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToMany(mappedBy = "farm")
    private Set<Koi> kois;

    public Long getFarmId() {
        return farmId;
    }

    public void setFarmId(Long farmId) {
        this.farmId = farmId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public Set<Koi> getKois() {
        return kois;
    }

    public void setKois(Set<Koi> kois) {
        this.kois = kois;
    }
}


