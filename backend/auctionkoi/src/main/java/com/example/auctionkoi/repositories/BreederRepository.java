package com.example.auctionkoi.repositories;

import com.example.auctionkoi.entities.Breeder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BreederRepository extends JpaRepository<Breeder, Long> {
    List<Breeder> findAll();
}
