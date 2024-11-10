package com.example.auctionkoi.services;

import com.example.auctionkoi.dto.request.AuctionDetailRequest;
import com.example.auctionkoi.dto.request.AuctionRequest;
import com.example.auctionkoi.entities.AuctionTransaction;
import com.example.auctionkoi.entities.Bid;
import com.example.auctionkoi.entities.Koi;
import com.example.auctionkoi.entities.Breeder;
import com.example.auctionkoi.repositories.AuctionTransactionRepository;
import com.example.auctionkoi.repositories.BidRepository;
import com.example.auctionkoi.repositories.KoiRepository;
import com.example.auctionkoi.repositories.BreederRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class AuctionService {

    @Autowired
    private AuctionTransactionRepository auctionTransactionRepository;

    @Autowired
    private BidRepository bidRepository;

    @Autowired
    private KoiRepository koiRepository;

    @Autowired
    private BreederRepository breederRepository;
    // lấy tất cả các phiên đấu giá của koi bằng kết thúc thư viện cuối
    public List<AuctionRequest> getAllAuctions() {
        List<AuctionRequest> auctionRequests = new ArrayList<>();

        try {
            List<Bid> bids = bidRepository.findAllOrderByAuctionEndTimeDescAndAuctionStartTimeAsc();

            for (Bid bid : bids) {
                AuctionTransaction auctionTransaction = auctionTransactionRepository.findByBidIdAndMaxPrice(bid.getBidId());
                Koi koi = bid.getKoi();
    //  Breeder breeder = breederRepository.findById(koi.getBreederId()).orElse(null);

                if (koi != null) {
                    AuctionRequest dto = new AuctionRequest();
                    dto.setBidId(bid.getBidId());
                    dto.setAmount(bid.getAmount());

                    // Set current price based on auctionTransaction or set to zero
                    if (auctionTransaction != null) {
                        dto.setCurrentPrice(auctionTransaction.getPrice());
                    } else {
                        dto.setCurrentPrice(0); // Set to 0 if not found
                    }

                    dto.setKoiId(koi.getKoiId());
                    //  dto.setUserId(bid.getUser().getId());
                    dto.setAuctionStartTime(bid.getAuctionStartTime());
                    dto.setAuctionEndTime(bid.getAuctionEndTime());
                    dto.setStartingPrice(BigDecimal.valueOf(bid.getCurrentPrice().doubleValue()));
                    dto.setAge(koi.getAge());
                    dto.setKoiName(koi.getKoiName());
                    dto.setLength(koi.getLength());
                    dto.setSex(koi.getSex());
//                    dto.setBreederId(breeder.getBreederId());
//                    dto.setBreederName(breeder.getBreederName());
//                    dto.setBreederDescription(breeder.getBreederDescription());

                    auctionRequests.add(dto);
                }
            }
        } catch (Exception e) {
            // Log the exception (you can use a logging framework)
            System.err.println("Error occurred while retrieving auction requests: " + e.getMessage());
            // Optionally, you could rethrow the exception or return an empty list
            // throw new RuntimeException("Failed to retrieve auction requests", e);
        }

        return auctionRequests;
    }

    //  lấy tất cả các phiên đấu giá của koi bằng kết thúc thư viện cuối
    public AuctionRequest getAuctionsByBidId(Long bidId) {
        AuctionRequest dto = new AuctionRequest();
        Bid bid = bidRepository.findByBidId(bidId);
        Koi koi = bid.getKoi();
        AuctionTransaction auctionTransaction = auctionTransactionRepository.findByBidIdAndMaxPrice(bid.getBidId());
        try {
            if (koi != null) {//&& breeder != null
                dto.setBidId(bid.getBidId());
                dto.setAmount(bid.getAmount());

                // Check if auctionTransaction is null and set price accordingly
                if (auctionTransaction != null) {
                    dto.setCurrentPrice(auctionTransaction.getPrice());
                    dto.setUserId(bid.getUser().getId());
                } else {
                    dto.setCurrentPrice(0); // Set to 0 if not found
                    dto.setUserId(null);

                }

                dto.setKoiId(koi.getKoiId());
//                dto.setUserId(bid.getUser().getId());
                dto.setAuctionStartTime(bid.getAuctionStartTime());
                dto.setAuctionEndTime(bid.getAuctionEndTime());
                dto.setStartingPrice(BigDecimal.valueOf(bid.getCurrentPrice().doubleValue()));
                dto.setAge(koi.getAge());
                dto.setKoiName(koi.getKoiName());
                dto.setLength(koi.getLength());
                dto.setSex(koi.getSex());
            }
        } catch (Exception e) {
            // Log the exception (you can use a logging framework)
            System.err.println("Error occurred while retrieving auctions by Koi ID: " + e.getMessage());
            // Optionally, you could rethrow the exception or return an empty list
            // throw new RuntimeException("Failed to retrieve auctions by Koi ID", e);
        }
            System.out.println(dto.toString());
            return dto;
    }


    // Thay thế phương thức getInformationDetail trong lớp AuctionService
    public AuctionDetailRequest getInformationDetail(Long bidId) {
        try {
            List<AuctionTransaction> auctionTransactions = auctionTransactionRepository.findByBidId(bidId);
            Bid bid = bidRepository.findByBidId(bidId);

            AuctionDetailRequest dto = new AuctionDetailRequest(bid,auctionTransactions);
            return dto;
        } catch (Exception e) {
            // Khi có lỗi, in ra thông báo lỗi
            System.err.println("An error occurred while fetching auction details: " + e.getMessage());
            // Trả về một đối tượng rỗng nếu có lỗi
            return new AuctionDetailRequest(null,Collections.emptyList());
        }
    }


//    public List<AuctionRequest> getAuctionsByKoiId(Long koiId) {
//        List<AuctionRequest> auctionRequests = new ArrayList<>();
//
//        try {
//            List<Bid> bids = bidRepository.findAllByKoi_KoiId(koiId);
//
//            for (Bid bid : bids) {
//                Koi koi = bid.getKoi();
//                Breeder breeder = breederRepository.findById(koi.getBreederId()).orElse(null);
//                AuctionTransaction auctionTransaction = auctionTransactionRepository.findByBidIdAndMaxPrice(bid.getBidId());
//
//                if (koi != null && breeder != null) {
//                    AuctionRequest dto = new AuctionRequest();
//                    dto.setBidId(bid.getBidId());
//                    dto.setAmount(bid.getAmount());
//
//                    // Check if auctionTransaction is null and set price accordingly
//                    if (auctionTransaction != null) {
//                        dto.setCurrentPrice(auctionTransaction.getPrice());
//                    } else {
//                        dto.setCurrentPrice(0); // Set to 0 if not found
//                    }
//
//                    dto.setKoiId(koi.getKoiId());
//                    dto.setUserId(bid.getUser().getId());
//                    dto.setAuctionStartTime(bid.getAuctionStartTime());
//                    dto.setAuctionEndTime(bid.getAuctionEndTime());
//                    dto.setStartingPrice(BigDecimal.valueOf(bid.getCurrentPrice().doubleValue()));
//                    dto.setAge(koi.getAge());
//                    dto.setKoiName(koi.getKoiName());
//                    dto.setLength(koi.getLength());
//                    dto.setSex(koi.getSex());
//                    dto.setBreederId(breeder.getBreederId());
//                    dto.setBreederName(breeder.getBreederName());
//                    dto.setBreederDescription(breeder.getBreederDescription());
//                    auctionRequests.add(dto);
//                }
//            }
//        } catch (Exception e) {
//            // Log the exception (you can use a logging framework)
//            System.err.println("Error occurred while retrieving auctions by Koi ID: " + e.getMessage());
//            // Optionally, you could rethrow the exception or return an empty list
//            // throw new RuntimeException("Failed to retrieve auctions by Koi ID", e);
//        }
//
//        return auctionRequests;
//    }

}
