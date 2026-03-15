package com.rbac.auth.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rbac.auth.dto.LoginRequest;
import com.rbac.auth.dto.RegisterRequest;
import com.rbac.auth.entity.User;
import com.rbac.auth.service.UserService;

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
                 public List<User> getUsers(){
                	 return userService.getAllUsers();
                 }
                 @PostMapping("/register")
                 public User registerUser(@RequestBody RegisterRequest request) {
                	 return userService.registerUser(request);
                 }
                 
                 @PostMapping("/login")
                 public String login(@RequestBody LoginRequest request) {
                     return userService.login(request);
                 }
                 
                 @GetMapping("/user/dashboard")
                 public String userDashboard() {
                	 return "Welcome User";
                 }
                 
                 @GetMapping("/admin/dashboard")
                 public String adminDashboard() {
                	 return "Welcom ADMIN";
                 }
}