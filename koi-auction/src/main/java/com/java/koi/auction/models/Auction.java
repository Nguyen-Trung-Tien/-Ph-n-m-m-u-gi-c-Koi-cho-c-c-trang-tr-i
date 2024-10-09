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
@Table(name = "Auction")
public class Auction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long auctionId;

    private String title;
    private double startingPrice;
    private String auctionType;
    private String status;

    @ManyToOne
    @JoinColumn(name = "koi_id", nullable = false)
    private Koi koi;

    @OneToMany(mappedBy = "auction")
    private List<Bid> bids;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

}
