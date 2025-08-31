package com.andres.ecommerce.backend.infrastructure.jwt;


import com.andres.ecommerce.backend.infrastructure.service.CustomUserDetailService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import static com.andres.ecommerce.backend.infrastructure.jwt.Constants.*;

public class JWTValidate {

    private final CustomUserDetailService customUserDetailService;

    public JWTValidate(CustomUserDetailService customUserDetailService) {
        this.customUserDetailService = customUserDetailService;
    }


    //Validate that token come in the request
    public static boolean tokenExists(HttpServletRequest request, HttpServletResponse response){
        String header= request.getHeader(HEADER_AUTHORIZATION);
        if(header==null || !header.startsWith(TOKEN_BEARER_PREFIX))
            return false;
        return true;
    }

    //Validate that token is correct
    public static Claims JWTValid(HttpServletRequest request){
        String jwtToken=request.getHeader(HEADER_AUTHORIZATION).replace(TOKEN_BEARER_PREFIX,"");
        return Jwts.parserBuilder().setSigningKey(getSighedKey(SUPER_SECRET_KEY))
                .build()
                .parseClaimsJws(jwtToken).getBody();
    }

    //Authentication User in Spring Boot
    public static void setAuthetication(Claims claims, CustomUserDetailService customUserDetailService){
        UserDetails userDetails=customUserDetailService.loadUserByUsername(claims.getSubject());
        UsernamePasswordAuthenticationToken authentication=
                new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
}
