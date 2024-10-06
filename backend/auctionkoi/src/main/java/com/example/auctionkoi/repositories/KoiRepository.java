package com.example.auctionkoi.repositories;

import com.example.auctionkoi.entities.Koi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KoiRepository extends JpaRepository<Koi, Long> {
}
