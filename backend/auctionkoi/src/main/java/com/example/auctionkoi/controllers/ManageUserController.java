package com.example.auctionkoi.controllers;

import com.example.auctionkoi.entities.ActivityLog;


import com.example.auctionkoi.entities.Bid;
import com.example.auctionkoi.entities.Koi;
import com.example.auctionkoi.entities.User;
import com.example.auctionkoi.services.ActivityLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Date;
@RestController
@RequestMapping("/manage")
@CrossOrigin(origins = "http://localhost:3000")
public class ManageUserController {

    @Autowired
    private ActivityLogService activityLogService;


    //lấy người dùng mới đăng ký trong 1 tuần
    @GetMapping("/new")
    public List<User> getNewUser(){
        return activityLogService.GetNewUser();
    }

    //Lấy cuộc đấu giá sắp diễn ra
    @GetMapping("/future")
    public List<Bid> getFutureProduct(){
        return activityLogService.productInWeek();
    }

    //lich su giao dich
    @GetMapping("/transaction")
    public List<Koi> getTransaction(){
        return activityLogService.history();
    }


}
