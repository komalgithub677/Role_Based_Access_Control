package com.rbac.auth.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.rbac.auth.dto.LoginRequest;
import com.rbac.auth.dto.RegisterRequest;
import com.rbac.auth.entity.User;
import com.rbac.auth.repository.UserRepository;
import com.rbac.auth.security.JwtService;

@Service
public class UserService {
            @Autowired
            private UserRepository userRepository;
            
            @Autowired
            private JwtService jwtService;
            @Autowired
            private BCryptPasswordEncoder passwordEncoder;
            
            public User saveUser(User user) {
            	return userRepository.save(user);
            }
            
            public List<User> getAllUsers(){
            	return userRepository.findAll();
            }
            
            public User registerUser(RegisterRequest request) {
            	User user = new User();
            	user.setName(request.getName());
            	user.setEmail(request.getEmail());
            	
            	user.setPassword(passwordEncoder.encode(request.getPassword()));
            	user.setRole(request.getRole());
            	return userRepository.save(user);
            	
            }
            public String login(LoginRequest request) {

                User user = userRepository.findByEmail(request.getEmail());

                if (user == null) {
                    throw new RuntimeException("User not found");
                }

                if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
                    throw new RuntimeException("Invalid password");
                }

                return jwtService.generateToken(user.getEmail());
            }
}
