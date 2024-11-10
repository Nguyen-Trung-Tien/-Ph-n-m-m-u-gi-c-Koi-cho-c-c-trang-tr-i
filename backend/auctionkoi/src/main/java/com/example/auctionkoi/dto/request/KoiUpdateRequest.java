package com.example.auctionkoi.dto.request;
import java.math.BigDecimal;

public record KoiUpdateRequest(String name,
                               Integer age,
                               BigDecimal priceStart,
                               String gender,
                               Integer breederId,
                               Integer size){}
