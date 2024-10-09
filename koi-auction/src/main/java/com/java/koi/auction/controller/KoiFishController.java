package com.java.koi.auction.controller;

import com.java.koi.auction.models.Koi;
import com.java.koi.auction.service.KoiFishService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/koi")
public class KoiFishController {

    private final KoiFishService koiService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/koi-fish")
    public List<Koi> getAllKoiFish() {
        return koiService.getAllKoi();
    }


    public KoiFishController(KoiFishService koiService) {
        this.koiService = koiService;
    }
    @GetMapping
    public List<Koi> getAllKoi() {
        return koiService.getAllKoi();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Koi> getKoiById(@PathVariable Long id) {
        return koiService.getKoiById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Koi createKoi(@RequestBody Koi koi) {
        return koiService.saveKoi(koi);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteKoi(@PathVariable Long id) {
        koiService.deleteKoi(id);
        return ResponseEntity.noContent().build();
    }

}
