package com.example.auctionkoi.controllers;

import com.example.auctionkoi.dto.request.SuccessfulAuctionResultRequest;
import com.example.auctionkoi.entities.SuccessfulAuctionResult;
import com.example.auctionkoi.services.SuccessfulAuctionResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/successful-auctions")
@CrossOrigin(origins = "http://localhost:3000")
public class SuccessfulAuctionResultController {

    @Autowired
    private SuccessfulAuctionResultService successfulAuctionResultService;

    @GetMapping("/users/{userId}")
    public List<SuccessfulAuctionResult> getSuccessfulAuctionsByUserId(@PathVariable Long userId) {
        return successfulAuctionResultService.getSuccessfulAuctionsByUserId(userId);
    }

    @PostMapping
    public SuccessfulAuctionResult createSuccessfulAuctionResult(@RequestBody SuccessfulAuctionResultRequest request) {
        return successfulAuctionResultService.createSuccessfulAuctionResult(request);
    }
}
