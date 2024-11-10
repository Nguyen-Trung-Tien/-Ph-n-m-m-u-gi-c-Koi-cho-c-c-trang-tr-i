package com.example.auctionkoi.repositories;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.auctionkoi.entities.ActivityLog;
import com.example.auctionkoi.entities.Koi;
import com.example.auctionkoi.entities.Bid;


@Repository
public interface ActivityLogRepositories extends JpaRepository<ActivityLog, Long> {
    List<ActivityLog> findAll();
    @Query(value = "SELECT a.user_id, MAX(a.up_time) AS upTime FROM activity_log a WHERE a.up_time >= ?1 GROUP BY a.user_id",
                    nativeQuery = true)
    List<Object[]> findByUpTime(Date upTime);

}
