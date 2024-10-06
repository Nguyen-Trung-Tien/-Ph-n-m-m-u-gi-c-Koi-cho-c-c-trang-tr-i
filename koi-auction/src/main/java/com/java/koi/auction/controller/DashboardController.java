package com.java.koi.auction.controller;

import com.java.koi.auction.models.DashboardData;
import com.java.koi.auction.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    @GetMapping("/dashboard")
    public String dashboard(Model model) {
        DashboardData dashboardData = dashboardService.getDashboardData();
        return "dashboard";
    }
}
