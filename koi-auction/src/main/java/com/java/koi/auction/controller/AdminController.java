package com.java.koi.auction.controller;

import com.java.koi.auction.service.AuctionService;
import com.java.koi.auction.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AuctionService auctionService;
    @Autowired
    private UserService userService;

    @GetMapping("/dashboard")
    public String showAdminDashboard(Model model) {
        model.addAttribute("users", userService.getAllUsers());
        return "admin-dashboard";
    }

    @GetMapping("/users")
    public String manageUsers(Model model) {
        model.addAttribute("users", userService.getAllUsers());
        return "admin-users"; // Trả về trang admin-users.html
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
