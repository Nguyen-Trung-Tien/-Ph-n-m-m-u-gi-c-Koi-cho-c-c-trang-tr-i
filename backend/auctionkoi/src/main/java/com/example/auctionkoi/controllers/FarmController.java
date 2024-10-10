package com.example.auctionkoi.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/farm")

public class FarmController {

    @RequestMapping("/create")
    public String create() {
        return "create";
    }

    @RequestMapping("/update")
    public String update() {
        return "update";
    }

    @RequestMapping("/delete")
    public String delete() {
        return "delete";
    }

    @RequestMapping("/get")
    public String get() {
        return "get";
    }

    @RequestMapping("/getAll")
    public String getAll() {
        return "getAll";
    }

    @RequestMapping("/search")
    public String search() {
        return "search";
    }
}
