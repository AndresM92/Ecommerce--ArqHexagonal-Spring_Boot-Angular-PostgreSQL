package com.andres.ecommerce.backend.infrastructure.jwt;


import io.jsonwebtoken.security.Keys;

import java.nio.charset.StandardCharsets;
import java.security.Key;

public class Constants {

    public static final String HEADER_AUTHORIZATION="Authorization";
    public static final String TOKEN_BEARER_PREFIX="Bearer ";

    public static final String SUPER_SECRET_KEY="dH2x9@BvZ!8k#sF7QwLp^X3RyE6%aN0jGmUz&T4cHbVe$Y1oJrKnMz^AiSx#WqPf";
    public static final long TOKEN_EXPIRATION_TIME=1500000; //15 MIN

    public static Key getSighedKey(String secretKey){
        byte[] keyBytes = secretKey.getBytes(StandardCharsets.UTF_8);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
