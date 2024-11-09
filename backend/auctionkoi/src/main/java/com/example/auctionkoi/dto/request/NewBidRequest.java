package com.example.auctionkoi.dto.request;

import com.example.auctionkoi.entities.Koi;

import java.time.LocalDateTime;
import java.util.Date;

public record NewBidRequest(Long id,
                            double priceStart,
                            LocalDateTime startTime,
                            LocalDateTime endTime) {
}
