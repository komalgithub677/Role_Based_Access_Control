package com.rbac.auth.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.rbac.auth.security.JwtAuthenticationFilter;

@Configuration
public class SecurityConfig {
	         @Autowired
	         private JwtAuthenticationFilter jwtFilter;
             @Bean
             public BCryptPasswordEncoder passwordEncoder() {
            	 return new BCryptPasswordEncoder();
             }
             
             @Bean
             public DefaultSecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

                 http
                 .csrf(csrf -> csrf.disable())
                 .authorizeHttpRequests(auth -> auth

                     .requestMatchers(
                    		    "/api/users/register",
                    		    "/api/users/login",
                    		    "/api/users/all",
                    		    "/swagger-ui/**",
                    		    "/swagger-ui.html",
                    		    "/v3/api-docs/**"
                    		).permitAll()

                     .requestMatchers("/api/users/admin/**").hasRole("ADMIN")

                     .requestMatchers("/api/users/user/**").hasAnyRole("USER","ADMIN")

                     .anyRequest().authenticated()
                 )
                 .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

                 return http.build();
             }
}
