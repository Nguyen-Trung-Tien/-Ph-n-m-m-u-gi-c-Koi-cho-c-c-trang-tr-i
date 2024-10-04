package com.java.koi.auction.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("koi")
public class KoiController {

    @GetMapping
    public String getKoiInfo() {
        return "Welcome to Koi Auction!";
    }
}
