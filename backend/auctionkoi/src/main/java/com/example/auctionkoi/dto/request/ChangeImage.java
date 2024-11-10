package com.example.auctionkoi.dto.request;
import org.springframework.web.multipart.MultipartFile;

public record ChangeImage(String id, MultipartFile image) {
}
