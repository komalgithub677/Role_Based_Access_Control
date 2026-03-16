package com.rbac.auth.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.rbac.auth.dto.LoginRequest;
import com.rbac.auth.dto.LoginResponse;
import com.rbac.auth.dto.RegisterRequest;
import com.rbac.auth.entity.User;
import com.rbac.auth.service.UserService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:5173")  
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/save")
    public User saveUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @GetMapping("/all")
    public List<User> getUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/register")
    public User registerUser(@Valid @RequestBody RegisterRequest request) {
        return userService.registerUser(request);
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        return userService.login(request);
    }

    @GetMapping("/profile")
    public User getProfile(HttpServletRequest request) {

        String email = (String) request.getAttribute("email");

        return userService.getUserByEmail(email);
    }

    @GetMapping("/user/dashboard")
    public String userDashboard() {
        return "Welcome User";
    }

    @GetMapping("/admin/dashboard")
    public String adminDashboard() {
        return "Welcome ADMIN";
    }

    @DeleteMapping("/admin/delete/{id}")
    public String deleteUser(@PathVariable Long id) {

        userService.deleteUser(id);

        return "User deleted successfully";
    }

    @GetMapping("/public")
    public String publicContent() {
        return "Public content accessible by anyone";
    }
}