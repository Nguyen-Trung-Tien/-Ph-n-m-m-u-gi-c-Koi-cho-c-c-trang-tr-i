package com.java.koi.auction.service;


import com.java.koi.auction.models.Koi;
import com.java.koi.auction.repository.KoiFishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class KoiFishService {
    @Autowired
    private KoiFishRepository koiRepository;

    public List<Koi> getAllKoi() {
        return koiRepository.findAll();
    }

    public Optional<Koi> getKoiById(Long id) {
        return koiRepository.findById(id);
    }

    public Koi saveKoi(Koi koi) {
        return koiRepository.save(koi);
    }

    public void deleteKoi(Long id) {
        koiRepository.deleteById(id);
    }
}
