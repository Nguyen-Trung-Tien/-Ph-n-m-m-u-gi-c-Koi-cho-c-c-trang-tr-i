package com.example.auctionkoi.controllers;

import com.example.auctionkoi.entities.Farm;
import com.example.auctionkoi.services.FarmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/farm")
public class FarmController {
    @Autowired
    private FarmService farmService;

    @GetMapping("/{farmId}")
    public Farm getFarm(@PathVariable Long farmId) {
        return farmService.getFarm(farmId);
    }

    @GetMapping
    public List<Farm> getAllFarms() {
        return farmService.getAllFarms();
    }

    @PostMapping
    public Farm createFarm(@RequestBody Farm farm) {
        return farmService.createFarm(farm);
    }

    @DeleteMapping("/{farmId}")
    public void deleteFarm(@PathVariable Long farmId) {
        farmService.deleteFarm(farmId);
    }

}
