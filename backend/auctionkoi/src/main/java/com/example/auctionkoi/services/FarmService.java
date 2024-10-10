package com.example.auctionkoi.services;

import com.example.auctionkoi.entities.Farm;
import com.example.auctionkoi.repositories.FarmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FarmService {

    @Autowired
    private FarmRepository farmRepository;

    public Farm createFarm(Farm farm) {
        // Kiểm tra và xử lý nếu cần thiết trước khi lưu vào DB
        return farmRepository.save(farm);
    }

    public List<Farm> getAllFarms() {
        return farmRepository.findAll();
    }

    public Farm getFarm(Long farmId) {
        return farmRepository.findById(farmId).orElse(null);
    }

    public void deleteFarm(Long farmId) {
        Farm farm = getFarm(farmId);
        farmRepository.delete(farm);
    }

    public Farm updateFarm(Farm farm) {
        return farmRepository.save(farm);
    }

}
