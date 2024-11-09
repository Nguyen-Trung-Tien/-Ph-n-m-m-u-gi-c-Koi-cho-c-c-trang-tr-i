package com.example.auctionkoi.dto.request;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;

public record KoiUpdateRequest(String name,
                               Integer age,
                               BigDecimal priceStart,
                               String gender,
                               Integer breederId,
                               Integer size){}
