package com.java.koi.auction.service;

import com.java.koi.auction.models.Auction;
import com.java.koi.auction.repository.AuctionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuctionService {
    private final AuctionRepository auctionRepository;

    public AuctionService(AuctionRepository auctionRepository) {
        this.auctionRepository = auctionRepository;
    }

    public List<Auction> getAllAuctions() {
        return auctionRepository.findAll();
    }

    public Optional<Auction> getAuctionById(Long account_id) {
        return auctionRepository.findById(account_id);
    }

    public Auction saveAuction(Auction auction) {
        return auctionRepository.save(auction);
    }

    public void deleteAuction(Long account_id) {
        auctionRepository.deleteById(account_id);
    }

}
