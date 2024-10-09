package com.java.koi.auction.models;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Data
@Table(name = "Bid")
public class Bid {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bidId;

    private double amount;
    private String bidType;

    @ManyToOne
    @JoinColumn(name = "auction_id", nullable = false)
    private Auction auction;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User bidder;


}