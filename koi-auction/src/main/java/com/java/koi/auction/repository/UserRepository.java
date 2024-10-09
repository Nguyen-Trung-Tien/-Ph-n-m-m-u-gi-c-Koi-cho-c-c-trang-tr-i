package com.java.koi.auction.repository;


import com.java.koi.auction.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
