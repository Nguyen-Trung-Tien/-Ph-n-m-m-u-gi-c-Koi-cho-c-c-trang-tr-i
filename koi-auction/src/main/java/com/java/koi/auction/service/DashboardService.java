package com.java.koi.auction.service;

import com.java.koi.auction.models.DashboardData;
import com.java.koi.auction.repository.AuctionRepository;
import com.java.koi.auction.repository.TransactionRepository;
import com.java.koi.auction.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuctionRepository auctionRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    // Lấy dữ liệu thống kê cho dashboard
    public DashboardData getDashboardData() {
        DashboardData data = new DashboardData();
        data.setTotalUsers(userRepository.count());
        data.setTotalAuctions(auctionRepository.count());
        data.setTotalTransactions(transactionRepository.count());
        return data;
    }
}

