package com.example.auctionkoi.controllers;

import com.example.auctionkoi.dto.request.AuctionDetailRequest;
import com.example.auctionkoi.dto.request.AuctionRequest;
import com.example.auctionkoi.services.ActivityLogService;
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
    @Autowired
    private ActivityLogService activityLogService;

    @GetMapping("/koi/{bidId}")
    public AuctionRequest getAllAuctionsByBidId(@PathVariable Long bidId) {
        return auctionService.getAuctionsByBidId(bidId);
    }

    @GetMapping("/list")
    public List<AuctionRequest> getAllAuctions() {
        return auctionService.getAllAuctions();
    }


    @GetMapping("/quantitySell")
    public int getQuantitySell() {
        return activityLogService.quantityHistory();
    }

    //thay thế response /koi/{bidId}
    @GetMapping("/addAuction/{id}")
    public AuctionDetailRequest addAuction(@PathVariable Long id) {
        return auctionService.getInformationDetail(id);
    }

}
