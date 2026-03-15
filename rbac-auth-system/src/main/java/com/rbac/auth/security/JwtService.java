package com.rbac.auth.security;

import java.util.Date;

import javax.crypto.SecretKey;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

public class JwtService {
             private final SecretKey SECRET_KEY =
            		 Keys.hmacShaKeyFor("mysecretkeymysecretkey123".getBytes());
             
             public String generateToken(String email) {
            	 return Jwts.builder()
            			 .setSubject(email)
            			 .setIssuedAt(new Date())
            			 .setExpiration(new Date(System.currentTimeMillis()+1000*60*60))
            			 .signWith(SECRET_KEY)
            			 .compact();
             }
             
             public String extractEmail(String token) {
            	 return Jwts.parserBuilder()
            			 .setSigningKey(SECRET_KEY)
            			 .build()
            			 .parseClaimsJws(token)
            			 .getBody()
            			 .getSubject();
             }
             
             public boolean validateToken(String token) {
            	 try {
            		 Jwts.parserBuilder()
            		        .setSigningKey(SECRET_KEY)
            		        .build()
            		        .parseClaimsJws(token);
            		 return true;
            	 }
            	 catch(JwtException e) {
            		 return false;
            	 }
             }
             
}
