package com.example.auctionkoi.dto.request;

import com.example.auctionkoi.entities.AuctionTransaction;
import com.example.auctionkoi.entities.Bid;
import com.example.auctionkoi.entities.Koi;

import java.util.List;

public record AuctionDetailRequest (Bid bid, List<AuctionTransaction> auctionTransactions){}
