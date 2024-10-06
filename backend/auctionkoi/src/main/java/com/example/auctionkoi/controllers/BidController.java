package com.example.auctionkoi.controllers;

import com.example.auctionkoi.entities.Bid;
import com.example.auctionkoi.services.BidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bids")
public class BidController {

    @Autowired
    private BidService bidService;

    @PostMapping
    public Bid createBid(@RequestBody Bid bid) {
        return bidService.createBid(bid);
    }

    @GetMapping
    public List<Bid> getAllBids() {
        return bidService.getAllBids();
    }

    @GetMapping("/{bidId}")
    public Bid getBid(@PathVariable Long bidId) {
        return bidService.getBid(bidId);
    }

    @DeleteMapping("/{bidId}")
    public String deleteBid(@PathVariable Long bidId) {
        bidService.deleteBid(bidId);
        return "Bid deleted successfully";
    }
}
