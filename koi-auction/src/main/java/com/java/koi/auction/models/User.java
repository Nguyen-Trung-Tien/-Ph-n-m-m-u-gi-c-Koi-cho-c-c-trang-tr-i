package com.java.koi.auction.models;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
@Data
@Entity
@Table(name = "User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    private String username;
    private String address;
    private String phone;
    private String age;
    private String password;
    private String email;
    private String role;

    @OneToMany(mappedBy = "user")
    private List<Auction> auctions;

}