package com.example.auctionkoi.controllers;


import com.example.auctionkoi.dto.request.AuctionTransactionRequest;
import com.example.auctionkoi.entities.AuctionTransaction;
import com.example.auctionkoi.entities.Bid;
import com.example.auctionkoi.repositories.AuctionTransactionRepository;
import com.example.auctionkoi.services.AuctionTransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transaction")
@CrossOrigin(origins = "http://localhost:3000")

public class AuctionTransactionController {
    @Autowired
    private AuctionTransactionService auctionTransactionService;

    @PostMapping("/add")
    public AuctionTransaction AddBidRequest(@RequestBody AuctionTransactionRequest request) {
        return auctionTransactionService.AddBidRequest(request);
    }

    @GetMapping("/auctionHistory")
    public List<AuctionTransaction> GetAuctionHistory() {
        return auctionTransactionService.getHistory();
    }
}
