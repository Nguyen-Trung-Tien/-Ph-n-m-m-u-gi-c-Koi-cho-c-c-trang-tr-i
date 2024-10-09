package com.java.koi.auction.service;

import com.java.koi.auction.models.Koi;
import com.java.koi.auction.repository.KoiFishRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class KoiFishService {
    private final KoiFishRepository koiRepository;

    public KoiFishService(KoiFishRepository koiRepository) {
        this.koiRepository = koiRepository;
    }

    public List<Koi> getAllKoi() {
        return koiRepository.findAll();
    }

    public Optional<Koi> getKoiById(Long koi_id) {
        return koiRepository.findById(koi_id);
    }

    public Koi saveKoi(Koi koi) {
        return koiRepository.save(koi);
    }

    public void deleteKoi(Long koi_id) {
        koiRepository.deleteById(koi_id);
    }
}
