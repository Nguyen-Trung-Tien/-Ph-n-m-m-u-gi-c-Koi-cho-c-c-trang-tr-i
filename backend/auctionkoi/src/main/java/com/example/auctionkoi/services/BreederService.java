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

    // lấy tất cả các Breeder trong database
    public List<Breeder> getAllBreeders() {
        return breederRepository.findAll();
    }

    // lấy một Breeder dựa trên id
    public Breeder getBreeder(Long BreederId) {
        return breederRepository.findById(BreederId).orElse(null);
    }

    // xóa môn Breeder dựa trên id
    public void deleteFarm(Long BreederId) {
        Breeder breeder = getBreeder(BreederId);
        breederRepository.delete(breeder);
    }

    // cập nhật một Breeder dựa trên id
    public Breeder updateFarm(Breeder breeder) {
        return breederRepository.save(breeder);
    }

}
