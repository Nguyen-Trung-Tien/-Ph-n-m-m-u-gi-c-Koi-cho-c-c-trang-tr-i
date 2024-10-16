package com.example.auctionkoi.controllers;

import com.example.auctionkoi.dto.request.AuctionRequest;
import com.example.auctionkoi.services.AuctionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/info")
@CrossOrigin(origins = "http://localhost:3000")
public class AuctionController {



    @Autowired
    private AuctionService auctionService;

    @GetMapping("/koi/{koiId}")
    public List<AuctionRequest> getAllAuctionsByKoiId(@PathVariable Long koiId) {
        return auctionService.getAuctionsByKoiId(koiId);
    }

    @GetMapping("/list")
    public List<AuctionRequest> getAllAuctions() {
        return auctionService.getAllAuctions();
    }

}
