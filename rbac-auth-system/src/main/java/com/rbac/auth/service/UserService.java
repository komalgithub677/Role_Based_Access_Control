package com.rbac.auth.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rbac.auth.entity.User;
import com.rbac.auth.repository.UserRepository;

@Service
public class UserService {
            @Autowired
            private UserRepository userRepository;
            
            public User saveUser(User user) {
            	return userRepository.save(user);
            }
            
            public List<User> getAllUsers(){
            	return userRepository.findAll();
            }
}
