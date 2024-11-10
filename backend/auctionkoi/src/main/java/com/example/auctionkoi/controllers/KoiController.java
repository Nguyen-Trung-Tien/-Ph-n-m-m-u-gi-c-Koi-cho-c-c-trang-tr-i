package com.example.auctionkoi.controllers;

import com.example.auctionkoi.dto.request.ChangeImage;
import com.example.auctionkoi.dto.request.KoiUpdateRequest;
import com.example.auctionkoi.dto.request.UserUpdateRequest;
import com.example.auctionkoi.entities.Koi;
import com.example.auctionkoi.entities.User;
import com.example.auctionkoi.services.KoiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/koi")
@CrossOrigin(origins = "http://localhost:3000")

public class KoiController {

    @Autowired
    private KoiService koiService;

    @PostMapping("/create")
    public Koi createKoi(@ModelAttribute KoiUpdateRequest koiUpdateRequest,  @RequestParam(value = "file", required = false) MultipartFile file) {
        return koiService.createKoi(koiUpdateRequest,file);
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

    @GetMapping("/productManage")
    public List<Object[]> getProductManage() {
        return koiService.getProductManage();
    }

    @PutMapping("/update/{koiId}")
    public Koi updateKoi(@PathVariable Long koiId, @ModelAttribute KoiUpdateRequest request,  @RequestParam(value = "file", required = false) MultipartFile file) {
        return koiService.updateKoi(koiId, request,file);
    }

    @PostMapping("/update")
    public ResponseEntity<String> changeImg(@RequestParam("file") MultipartFile file) {
        return koiService.change(file);
    }

}
