package com.example.auctionkoi.services;

import com.example.auctionkoi.dto.request.AuctionTransactionRequest;
import com.example.auctionkoi.entities.AuctionTransaction;
import com.example.auctionkoi.entities.Bid;
import com.example.auctionkoi.entities.User;
import com.example.auctionkoi.repositories.AuctionTransactionRepository;
import com.example.auctionkoi.repositories.BidRepository;
import com.example.auctionkoi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuctionTransactionService {
    @Autowired
    private AuctionTransactionRepository auctionTransactionRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BidRepository bidRepository;

    private User ReturnWalletOldUser(Long bidId){
        AuctionTransaction au = auctionTransactionRepository.findByBidIdAndMaxPrice(bidId);

        User user = userRepository.findById(au.getUser().getId()).orElse(null);

        if(user == null){
            return null;
        }

        else{
            user.setWallet((int) (user.getWallet() + au.getPrice()));
        }
        return user;
    }

    public AuctionTransactionService(AuctionTransactionRepository auctionTransactionRepository) {
        this.auctionTransactionRepository = auctionTransactionRepository;
    }

    // Tạo AuctionTransaction và lưu vào database
    public AuctionTransaction AddBidRequest(AuctionTransactionRequest request){
        AuctionTransaction auctionTransaction = new AuctionTransaction();
        auctionTransaction.setPrice(request.price());

        Bid bid = bidRepository.findByBidId(request.bidId());

        Optional<User> user = userRepository.findById(request.userId());

        User userOld = ReturnWalletOldUser(bid.getBidId());

        auctionTransaction.setPrice(request.price());
        auctionTransaction.setUser(user.get());
        auctionTransaction.setBid(bid);

        long currentWallet = user.get().getWallet();
        long price = request.price();
        int updatedWallet = (int) (currentWallet - price);

        user.get().setWallet(updatedWallet);

        userRepository.save(userOld);
        userRepository.save(user.get());

        return auctionTransactionRepository.save(auctionTransaction);
    }

    public List<AuctionTransaction> getHistory(){
        return auctionTransactionRepository.findAll();
    }
}
