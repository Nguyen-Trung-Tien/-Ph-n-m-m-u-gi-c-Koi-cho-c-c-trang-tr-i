package com.example.auctionkoi.controllers;

import com.example.auctionkoi.dto.request.BidUpdateRequest;
import com.example.auctionkoi.entities.Bid;
import com.example.auctionkoi.entities.Koi;
import com.example.auctionkoi.entities.User;
import com.example.auctionkoi.services.BidService;
import com.example.auctionkoi.services.KoiService;
import com.example.auctionkoi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bids")
@CrossOrigin(origins = "http://localhost:3000")
public class BidController {

    @Autowired
    private BidService bidService;

    @Autowired
    private UserService userService;

    @Autowired
    private KoiService koiService;

    @PostMapping
    public Bid createBid(@RequestBody Bid bid) {
        Koi koi = koiService.getKoi(bid.getKoi().getKoiId());
        if (koi == null) {
            throw new RuntimeException("Cá koi không tồn tại");
        }

        User user = userService.getUser(bid.getUser().getId());
        if (user == null) {
            throw new RuntimeException("Người dùng không tồn tại");
        }

        Double currentBidPrice = bidService.getCurrentBidPrice(koi.getKoiId());

        if (bid.getCurrentPrice() <= currentBidPrice) {
            throw new RuntimeException("Giá đấu mới phải lớn hơn giá hiện tại");
        }

        if (bid.getCurrentPrice() <= koi.getStartingPrice().doubleValue()) {
            throw new RuntimeException("Giá đấu phải lớn hơn giá khởi điểm");
        }

        if (bid.getCurrentPrice() > user.getWallet()) {
            throw new RuntimeException("Giá đấu không được vượt quá số tiền trong ví");
        }

        bid.setAmount(bid.getAmount() + 1);

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

    @GetMapping("/koi/{koiId}")
    public List<Bid> getBidsByKoiId(@PathVariable Long koiId) {
        return bidService.getBidsByKoiId(koiId);
    }

    @PutMapping("/{bidId}")
    public Bid updateBid(@PathVariable Long bidId, @RequestBody BidUpdateRequest bidDetails) {
        Bid existingBid = bidService.getBid(bidId);

        existingBid.setCurrentPrice(bidDetails.getCurrentPrice());
        existingBid.setAmount(bidDetails.getAmount());

        User user = userService.getUser(bidDetails.getUserId());
        if (user != null) {
            existingBid.setUser(user);
        } else {
            throw new RuntimeException("Người dùng không tồn tại");
        }

        return bidService.createBid(existingBid);
    }

}
