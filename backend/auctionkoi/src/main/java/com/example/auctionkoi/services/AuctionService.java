package com.example.auctionkoi.services;

import com.example.auctionkoi.dto.request.AuctionRequest;
import com.example.auctionkoi.entities.Bid;
import com.example.auctionkoi.entities.Koi;
import com.example.auctionkoi.entities.Breeder;
import com.example.auctionkoi.repositories.BidRepository;
import com.example.auctionkoi.repositories.KoiRepository;
import com.example.auctionkoi.repositories.BreederRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class AuctionService {

    @Autowired
    private BidRepository bidRepository;

    @Autowired
    private KoiRepository koiRepository;

    @Autowired
    private BreederRepository breederRepository;

    public List<AuctionRequest> getAllAuctions() {
        List<AuctionRequest> auctionRequests = new ArrayList<>();
        List<Bid> bids = bidRepository.findAll();

        for (Bid bid : bids) {
            Koi koi = bid.getKoi();
            Breeder breeder = breederRepository.findById(koi.getBreederId()).orElse(null);

            if (koi != null && breeder != null) {
                AuctionRequest dto = new AuctionRequest();
                dto.setBidId(bid.getBidId());
                dto.setAmount(bid.getAmount());
                dto.setCurrentPrice(bid.getCurrentPrice());
                dto.setKoiId(koi.getKoiId());
                dto.setUserId(bid.getUser().getId());
                dto.setAuctionStartTime(LocalDateTime.parse(bid.getAuctionStartTime().toString()));
                dto.setAuctionEndTime(LocalDateTime.parse(koi.getAuctionEndTime().toString()));
                dto.setStartingPrice(BigDecimal.valueOf(koi.getStartingPrice().doubleValue()));
                dto.setAge(koi.getAge());
                dto.setKoiName(koi.getKoiName());
                dto.setLength(koi.getLength());
                dto.setSex(koi.getSex());
                dto.setBreederId(breeder.getBreederId());
                dto.setBreederName(breeder.getBreederName());
                dto.setBreederDescription(breeder.getBreederDescription());
                auctionRequests.add(dto);
            }
        }

        return auctionRequests;
    }

    public List<AuctionRequest> getAuctionsByKoiId(Long koiId) {
        List<AuctionRequest> auctionRequests = new ArrayList<>();
        List<Bid> bids = bidRepository.findAllByKoi_KoiId(koiId);

        for (Bid bid : bids) {
            Koi koi = bid.getKoi();
            Breeder breeder = breederRepository.findById(koi.getBreederId()).orElse(null);

            if (koi != null && breeder != null) {
                AuctionRequest dto = new AuctionRequest();
                dto.setBidId(bid.getBidId());
                dto.setAmount(bid.getAmount());
                dto.setCurrentPrice(bid.getCurrentPrice());
                dto.setKoiId(koi.getKoiId());
                dto.setUserId(bid.getUser().getId());
                dto.setAuctionStartTime(bid.getAuctionStartTime());
                dto.setAuctionEndTime(koi.getAuctionEndTime());
                dto.setStartingPrice(koi.getStartingPrice());
                dto.setAge(koi.getAge());
                dto.setKoiName(koi.getKoiName());
                dto.setLength(koi.getLength());
                dto.setSex(koi.getSex());
                dto.setBreederId(breeder.getBreederId());
                dto.setBreederName(breeder.getBreederName());
                dto.setBreederDescription(breeder.getBreederDescription());
                auctionRequests.add(dto);
            }
        }

        return auctionRequests;
    }
}
