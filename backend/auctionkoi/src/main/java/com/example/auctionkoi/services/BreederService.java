package com.example.auctionkoi.services;

import com.example.auctionkoi.entities.Breeder;
import com.example.auctionkoi.repositories.BreederRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BreederService {

    @Autowired
    private BreederRepository breederRepository;

    // Tạo một Breeder mới và lưu vào database
    public Breeder createBreeder(Breeder breeder) {
        return breederRepository.save(breeder);
    }

    public List<Breeder> getAllBreeders() {
        return breederRepository.findAll();
    }

    public Breeder getBreeder(Long BreederId) {
        return breederRepository.findById(BreederId).orElse(null);
    }

    public void deleteFarm(Long BreederId) {
        Breeder breeder = getBreeder(BreederId);
        breederRepository.delete(breeder);
    }

    public Breeder updateFarm(Breeder breeder) {
        return breederRepository.save(breeder);
    }

}
