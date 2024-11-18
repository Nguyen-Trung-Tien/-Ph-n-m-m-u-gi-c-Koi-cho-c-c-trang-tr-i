package com.example.auctionkoi.repositories;

import com.example.auctionkoi.entities.Koi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Repository
public interface KoiRepository extends JpaRepository<Koi, Long> {
    List<Koi> findAll();
    List<Koi> findAllByAuctionEndTimeLessThan(LocalDateTime endTime);
    @Query(value = "SELECT k.*,b.auction_start_time from koi k left join Bid b on k.koi_id = b.koi_id  ",
                    nativeQuery = true)
    List<Object[]> findAllKoi();
}
