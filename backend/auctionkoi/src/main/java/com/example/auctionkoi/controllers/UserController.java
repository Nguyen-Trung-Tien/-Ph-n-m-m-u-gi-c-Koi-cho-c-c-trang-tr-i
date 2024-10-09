package com.example.auctionkoi.controllers;

import com.example.auctionkoi.dto.request.UserCreationRequest;
import com.example.auctionkoi.dto.request.UserLoginRequest;
import com.example.auctionkoi.dto.request.UserUpdateRequest;
import com.example.auctionkoi.entities.User;
import com.example.auctionkoi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User createUser(@RequestBody UserCreationRequest request) {
        return userService.createUser(request);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserLoginRequest request) {
        User user = userService.loginUser(request);

        return ResponseEntity.ok(Map.of(
                "message", "successful",
                "user", Map.of(
                        "username", user.getUsername(),
                        "firstName", user.getFirstName(),
                        "lastName", user.getLastName()
                )
        ));
    }


    @GetMapping
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @GetMapping("/{userId}")
    public User getUser(@PathVariable Long userId) {
        return userService.getUser(userId);
    }

    @PutMapping("/{userId}")
    public User updateUser(@PathVariable Long userId, @RequestBody UserUpdateRequest request) {
        return userService.updateUser(userId, request);
    }

    @DeleteMapping("/{userId}")
    public String deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
        return "User deleted successfully";
    }
}
