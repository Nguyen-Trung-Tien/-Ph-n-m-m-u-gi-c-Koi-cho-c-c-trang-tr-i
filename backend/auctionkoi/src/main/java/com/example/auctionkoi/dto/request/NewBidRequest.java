package com.example.auctionkoi.dto.request;

import java.time.LocalDateTime;

public record NewBidRequest(Long id,
                            double priceStart,
                            LocalDateTime startTime,
                            LocalDateTime endTime) {
}
