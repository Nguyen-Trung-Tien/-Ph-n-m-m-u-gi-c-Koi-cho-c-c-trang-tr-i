package com.java.koi.auction.service;

import com.java.koi.auction.models.Bid;
import com.java.koi.auction.repository.BidRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BidService {
    private final BidRepository bidRepository;

    public BidService(BidRepository bidRepository) {
        this.bidRepository = bidRepository;
    }

    public List<Bid> getAllBids() {
        return bidRepository.findAll();
    }

    public Optional<Bid> getBidById(Long bid_id) {
        return bidRepository.findById(bid_id);
    }

}
