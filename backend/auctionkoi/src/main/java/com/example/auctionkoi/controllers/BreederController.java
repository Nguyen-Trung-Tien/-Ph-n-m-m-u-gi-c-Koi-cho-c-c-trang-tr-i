package com.example.auctionkoi.controllers;

import com.example.auctionkoi.entities.Breeder;
import com.example.auctionkoi.services.BreederService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/breeder")
public class BreederController {
    @Autowired
    private BreederService breederService;

    @GetMapping("/{breederId}")
    public Breeder getBreeder(@PathVariable Long breederId) {
        return breederService.getBreeder(breederId);
    }

    @GetMapping
    public List<Breeder> getAllFarms() {
        return breederService.getAllBreeders();
    }

    @PostMapping
    public Breeder createBreeder(@RequestBody Breeder breeder) {
        return breederService.createBreeder(breeder);
    }

    @DeleteMapping("/{breederId}")
    public void deleteBreeder(@PathVariable Long breederId) {
        breederService.deleteFarm(breederId);
    }

}
