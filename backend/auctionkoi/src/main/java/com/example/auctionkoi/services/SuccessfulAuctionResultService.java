package com.example.auctionkoi.services;

import com.example.auctionkoi.dto.request.SuccessfulAuctionResultRequest;
import com.example.auctionkoi.entities.Koi;
import com.example.auctionkoi.entities.SuccessfulAuctionResult;
import com.example.auctionkoi.repositories.SuccessfulAuctionResultRepository;
import com.example.auctionkoi.repositories.BidRepository;
import com.example.auctionkoi.repositories.KoiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SuccessfulAuctionResultService {

    @Autowired
    private SuccessfulAuctionResultRepository successfulAuctionResultRepository;

    @Autowired
    private BidRepository bidRepository;

    @Autowired
    private KoiRepository koiRepository;

    public List<SuccessfulAuctionResult> getSuccessfulAuctionsByUserId(Long userId) {
        List<SuccessfulAuctionResult> results = successfulAuctionResultRepository.findByWinningBidUserId(userId);
        for (SuccessfulAuctionResult result : results) {
            Koi koi = koiRepository.findById(result.getKoiId()).orElse(null);
            if (koi != null) {
                result.setKoiName(koi.getKoiName()); // Assuming you add a set method in the entity
            }
        }
        return successfulAuctionResultRepository.findByWinningBidUserId(userId);
    }

    public SuccessfulAuctionResult createSuccessfulAuctionResult(SuccessfulAuctionResultRequest request) {
        SuccessfulAuctionResult result = new SuccessfulAuctionResult();
        result.setKoiId(request.getKoiId());
        result.setWinningBidUserId(request.getWinningBidUserId());
        result.setFinalPrice(request.getFinalPrice());
        result.setAuctionEndTime(request.getAuctionEndTime());
        result.setBidAmount(request.getBidAmount());

        return successfulAuctionResultRepository.save(result);
    }
}
