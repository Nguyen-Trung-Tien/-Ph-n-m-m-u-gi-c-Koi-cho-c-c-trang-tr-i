package com.example.auctionkoi.repositories;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.auctionkoi.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    @Query("SELECT u FROM User u WHERE u.username = :username AND u.password = :password")
    User findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);
    // Dùng để kiểm tra xem username đã tồn tại chưa
    @Query("SELECT u FROM User u WHERE u.username = :username AND u.daySignUp >= :daySignUp")
    User findByUsernameAndDaySignUp(@Param("username") String username, @Param("daySignUp") String daySignUp);

    List<User> findByDaySignUpGreaterThan(LocalDateTime daySignUp);

    User findById(long id);
}

