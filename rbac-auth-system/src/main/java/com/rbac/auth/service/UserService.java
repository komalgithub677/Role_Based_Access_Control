package com.rbac.auth.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.rbac.auth.dto.RegisterRequest;
import com.rbac.auth.entity.User;
import com.rbac.auth.repository.UserRepository;

@Service
public class UserService {
            @Autowired
            private UserRepository userRepository;
            
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
}
