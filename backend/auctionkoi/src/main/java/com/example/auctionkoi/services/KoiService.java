package com.example.auctionkoi.services;

import com.example.auctionkoi.entities.Koi;
import com.example.auctionkoi.repositories.KoiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KoiService {

    @Autowired
    private KoiRepository koiRepository;

    public Koi createKoi(Koi koi) {
        // Kiểm tra và xử lý nếu cần thiết trước khi lưu vào DB
        return koiRepository.save(koi);
    }

    public List<Koi> getAllKoi() {
        return koiRepository.findAll();
    }

    public Koi getKoi(Long koiId) {
        return koiRepository.findById(koiId)
                .orElseThrow(() -> new RuntimeException("Koi not found"));
    }

    public void deleteKoi(Long koiId) {
        Koi koi = getKoi(koiId);
        koiRepository.delete(koi);
    }
}
