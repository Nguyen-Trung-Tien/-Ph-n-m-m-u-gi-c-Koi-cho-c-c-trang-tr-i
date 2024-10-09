package com.java.koi.auction.controller;

import com.java.koi.auction.service.AuctionService;
import com.java.koi.auction.service.UserService;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user-admin")
public class AdminController {
    private final AuctionService auctionService;
    private final UserService userService;
    public AdminController(AuctionService auctionService, UserService userService) {
        this.auctionService = auctionService;
        this.userService = userService;
    }
    @GetMapping("/dashboard")
    public String showAdminDashboard(Model model) {
        model.addAttribute("users", userService.getAllUsers());
        return "admin-dashboard";
    }

    @GetMapping("/users")
    public String manageUsers(Model model) {
        model.addAttribute("users", userService.getAllUsers());
        return "admin-users";
    }

    @GetMapping("/auctions")
    public String manageAuctions(Model model) {
        model.addAttribute("auctions", auctionService.getAllAuctions());
        return "admin-auctions";
    }

    @GetMapping("/settings")
    public String settings() {
        return "admin-settings";
    }

}
