package com.example.auctionkoi.controllers;

import com.example.auctionkoi.entities.Farm;
import com.example.auctionkoi.services.FarmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/farm")

public class FarmController {
    @Autowired
    private FarmService farmService;

    public FarmController(FarmService farmService) {
        this.farmService = farmService;
    }

    @RequestMapping("/create")
    public Farm create(Farm farm) {
        return farmService.createFarm(farm);
    }

    @RequestMapping("/update")
    public Farm update(Farm farm) {
        return farmService.updateFarm(farm);
    }

    @RequestMapping("/delete")
    public void delete(Long farmId) {
        farmService.deleteFarm(farmId);
    }

    @RequestMapping("/get")
    public Farm get(Long farmId) {
        return farmService.getFarm(farmId);
    }

    @RequestMapping("/getAll")
    public List<Farm> getAll() {
        return farmService.getAllFarms();
    }
}
