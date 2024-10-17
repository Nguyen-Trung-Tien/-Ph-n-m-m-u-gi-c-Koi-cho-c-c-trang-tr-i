package com.example.auctionkoi.controllers;

import com.example.auctionkoi.dto.request.ChangePasswordRequest;
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
// gọi hàm login từ UserService và trả về một ResponseEntity chứa thông tin user đã đăng ký
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserLoginRequest request) {
        User user = userService.loginUser(request);

        return ResponseEntity.ok(Map.of(
                "message", "successful",
                "user", Map.of(
                        "id", user.getId(),
                        "username", user.getUsername(),
                        "firstName", user.getFirstName(),
                        "lastName", user.getLastName(),
                        "email", user.getEmail(),
                        "wallet",user.getWallet(),
                        "phoneNumber",user.getPhoneNumber()
                )
        ));
    }
// gọi hàm getUsers từ UserService và trả về một danh sách các user
    @GetMapping
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @GetMapping("/{userId}")
    public User getUser(@PathVariable Long userId) {
        return userService.getUser(userId);
    }

    @PutMapping("/update/{userId}")
    public User updateUser(@PathVariable Long userId, @RequestBody UserUpdateRequest request) {
        return userService.updateUser(userId, request);
    }

    @DeleteMapping("/{userId}")
    public String deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
        return "User deleted successfully";
    }
// gọi hàm changePassword từ UserService và trả về một ResponseEntity chứa thông tin về việc thay đổi mật khẩu
    @PutMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequest request) {
        String response = userService.changePassword(request);
        if ("successful".equals(response)) {
            return ResponseEntity.ok("{\"message\": \"successful\"}");
        } else if ("failed".equals(response)) {
            return ResponseEntity.ok("{\"message\": \"duplicate\"}");

        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"message\": \"" + response + "\"}");
        }
    }
}
