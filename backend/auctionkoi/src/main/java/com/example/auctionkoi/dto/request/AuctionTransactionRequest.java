package com.example.auctionkoi.dto.request;

import com.example.auctionkoi.entities.Bid;
import com.example.auctionkoi.entities.User;

import java.util.Date;

public record AuctionTransactionRequest (Long price,
                                         Date transactionTime,
                                         Long userId,
                                         Long bidId){}
