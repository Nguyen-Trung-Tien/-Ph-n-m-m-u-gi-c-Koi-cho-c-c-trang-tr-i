package com.java.koi.auction.controller;

import com.java.koi.auction.models.Auction;
import com.java.koi.auction.models.Bid;
import com.java.koi.auction.service.AuctionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/auctions")
public class AuctionController {
    @Autowired
    private AuctionService auctionService;

    @GetMapping
    public List<Auction> getAllAuctions() {
        return auctionService.getAllAuctions();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Auction> getAuctionById(@PathVariable Long id) {
        return auctionService.getAuctionById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Auction saveAuction(@RequestBody Auction auction) {
        return auctionService.saveAuction(auction);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAuction(@PathVariable Long id) {
        auctionService.deleteAuction(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{auctionId}/bids")
    public ResponseEntity<Void> placeBid(@PathVariable Long auctionId, @RequestBody Bid bid) {
        auctionService.placeBid(auctionId, bid);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/{id}/complete")
    public ResponseEntity<Void> completeAuction(@PathVariable Long id) {
        auctionService.completeAuction(id);
        return ResponseEntity.ok().build();
    }
}
