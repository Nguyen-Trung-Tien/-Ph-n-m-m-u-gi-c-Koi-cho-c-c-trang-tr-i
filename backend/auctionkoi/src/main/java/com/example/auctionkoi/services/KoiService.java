package com.example.auctionkoi.services;

import com.example.auctionkoi.dto.request.KoiUpdateRequest;
import com.example.auctionkoi.entities.Breeder;
import com.example.auctionkoi.entities.Koi;
import com.example.auctionkoi.repositories.BreederRepository;
import com.example.auctionkoi.repositories.KoiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.nio.file.Files;
import java.util.Optional;

@Service
public class KoiService {

    @Autowired
    private KoiRepository koiRepository;
    // Đọc đường dẫn lưu trữ file từ application.properties
    @Value("${file.base-dir}")
    private String uploadDir;
    @Autowired
    private BreederRepository breederRepository;

    public ResponseEntity<String> uploadFile(String namePicture, MultipartFile file) {
        try {
            // Tạo thư mục lưu trữ nếu chưa tồn tại
            Path uploadPath = Paths.get(uploadDir);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }
            System.out.println(file.getOriginalFilename());

            // Đường dẫn file đầy đủ, bao gồm tên file
            Path filePath = uploadPath.resolve(namePicture);

            // Lưu file vào đường dẫn
            file.transferTo(filePath.toFile());

            return ResponseEntity.status(HttpStatus.OK)
                    .body("File uploaded successfully: " + namePicture);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Could not upload the file: " + namePicture);
        }
    }

    public Koi createKoi(KoiUpdateRequest koiUpdateRequest,MultipartFile file) {
        Koi koi = new Koi();
        koi.setLength(koiUpdateRequest.size());
        koi.setSex(koiUpdateRequest.gender());
        koi.setStartingPrice(koiUpdateRequest.priceStart());
        koi.setKoiName(koiUpdateRequest.name());
        koi.setAge(koiUpdateRequest.age());
        koi.setBreeder(breederRepository.findById(Long.valueOf(koiUpdateRequest.breederId())).get());
        Koi newKoi = koiRepository.save(koi);
        System.out.println(newKoi);
        String name = "h"+newKoi.getKoiId()+".jpg";
        uploadFile(name, file);
        return koi;
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
//  Cập nhật thông tin của koi
    public Koi updateKoi(Long koiId,KoiUpdateRequest request, MultipartFile file) {
        Koi koi = getKoi(koiId);

        if (request.name() != null && !request.name().isEmpty()) {
            koi.setKoiName(request.name());
        }
        if (request.age() != null) {
            koi.setAge(request.age());
        }
        if(request.priceStart() != null) {
            koi.setStartingPrice(request.priceStart());
        }
        if(request.gender() != null && !request.gender().isEmpty()) {
            koi.setSex(request.gender());
        }
        if(request.size()!=null){
            koi.setLength(request.size());
        }
        if(request.breederId() != null) {
            Optional<Breeder> breeder = breederRepository.findById(Long.valueOf(request.breederId()));
            koi.setBreeder(breeder.get());
        }
        if (file != null && !file.isEmpty()) {
            String nameKoi = "h"+ koiId +".jpg";
            uploadFile(nameKoi, file);
        }
        return koiRepository.save(koi);
    }

    public ResponseEntity<String> change(MultipartFile file){
        String fileName = "h"+ ".jpg";
        System.out.println(fileName);
        System.out.println(file.getOriginalFilename());
        return uploadFile(fileName,file);
    }

    public List<Object[]> getProductManage(){
        return koiRepository.findAllKoi();
    }
}
