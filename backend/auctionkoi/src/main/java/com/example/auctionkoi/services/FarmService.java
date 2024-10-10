package com.example.auctionkoi.services;

import com.example.auctionkoi.repositories.FarmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FarmService {

    @Autowired
    private FarmRepository farmRepository;
        public String create() {
            return "create";
        }

        public String update() {
            return "update";
        }

        public String delete() {
            return "delete";
        }

        public String get() {
            return "get";
        }

        public String getAll() {
            return "getAll";
        }

        public String search() {
            return "search";
        }
}
