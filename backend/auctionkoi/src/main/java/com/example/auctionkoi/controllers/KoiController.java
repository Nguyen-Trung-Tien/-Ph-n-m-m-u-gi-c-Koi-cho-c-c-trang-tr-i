package com.example.auctionkoi.controllers;

import com.example.auctionkoi.entities.Koi;
import com.example.auctionkoi.services.KoiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/koi")
@CrossOrigin(origins = "http://localhost:3000")
public class KoiController {

    @Autowired
    private KoiService koiService;

    @PostMapping("/create")
    public Koi createKoi(@RequestBody Koi koi) {
        return koiService.createKoi(koi);
    }

    @GetMapping("/list")
    public List<Koi> getAllKoi() {
        return koiService.getAllKoi();
    }

    @GetMapping("/{koiId}")
    public Koi getKoi(@PathVariable Long koiId) {
        return koiService.getKoi(koiId);
    }

    @DeleteMapping("/{koiId}")
    public String deleteKoi(@PathVariable Long koiId) {
        koiService.deleteKoi(koiId);
        return "Koi deleted successfully";
    }
}
