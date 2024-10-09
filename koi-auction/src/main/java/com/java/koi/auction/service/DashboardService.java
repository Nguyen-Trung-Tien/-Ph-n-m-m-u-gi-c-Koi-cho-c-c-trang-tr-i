package com.java.koi.auction.service;

import com.java.koi.auction.models.DashboardData;
import com.java.koi.auction.repository.AuctionRepository;
import com.java.koi.auction.repository.TransactionRepository;
import com.java.koi.auction.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {

    private final UserRepository userRepository;
    private final AuctionRepository auctionRepository;
    private final TransactionRepository transactionRepository;

    public DashboardService(UserRepository userRepository,
                            AuctionRepository auctionRepository,
                            TransactionRepository transactionRepository) {
        this.userRepository = userRepository;
        this.auctionRepository = auctionRepository;
        this.transactionRepository = transactionRepository;
    }

    public DashboardData getDashboardData() {
        DashboardData data = new DashboardData();
        data.setTotalUsers(userRepository.count());
        data.setTotalAuctions(auctionRepository.count());
        data.setTotalTransactions(transactionRepository.count());
        return data;
    }

}
