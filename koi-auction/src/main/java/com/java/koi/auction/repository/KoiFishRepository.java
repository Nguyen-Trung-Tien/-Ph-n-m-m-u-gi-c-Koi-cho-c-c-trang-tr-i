package com.java.koi.auction.repository;

import com.java.koi.auction.models.Koi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KoiFishRepository extends JpaRepository<Koi, Long> {
}
