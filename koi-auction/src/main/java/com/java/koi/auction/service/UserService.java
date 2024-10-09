package com.java.koi.auction.service;

import com.java.koi.auction.models.User;
import com.java.koi.auction.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long user_id) {
        return userRepository.findById(user_id);
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }
    public void deleteUser(Long user_id) {
        userRepository.deleteById(user_id);
    }
}
