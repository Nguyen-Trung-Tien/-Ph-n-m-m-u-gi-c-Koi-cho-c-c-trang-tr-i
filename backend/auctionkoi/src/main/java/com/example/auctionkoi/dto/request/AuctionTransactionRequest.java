package com.example.auctionkoi.dto.request;

import java.util.Date;

public record AuctionTransactionRequest (Long price,
                                         Date transactionTime,
                                         Long userId,
                                         Long bidId){}
