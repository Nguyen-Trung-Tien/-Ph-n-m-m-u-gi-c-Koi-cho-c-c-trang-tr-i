package com.example.auctionkoi.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "breeders")
public class Breeder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "breeder_id")
    private Long breederId;

    @Column(name = "breeder_name")
    private String breederName;

    @Column(name = "breeder_description")
    private String breederDescription;

    public Long getBreederId() {
        return breederId;
    }

    public void setBreederId(Long breederId) {
        this.breederId = breederId;
    }

    public String getBreederName() {
        return breederName;
    }

    public void setBreederName(String breederName) {
        this.breederName = breederName;
    }

    public String getBreederDescription() {
        return breederDescription;
    }

    public void setBreederDescription(String breederDescription) {
        this.breederDescription = breederDescription;
    }
}
