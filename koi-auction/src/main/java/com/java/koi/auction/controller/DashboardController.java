package com.java.koi.auction.controller;

import com.java.koi.auction.models.DashboardData;
import com.java.koi.auction.service.DashboardService;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DashboardController {
    private final DashboardService dashboardService;
    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping("/dashboard")
    public String dashboard(Model model) {
        DashboardData dashboardData = dashboardService.getDashboardData();

        model.addAttribute("dashboardData", dashboardData);

        return "dashboard";
    }
}
