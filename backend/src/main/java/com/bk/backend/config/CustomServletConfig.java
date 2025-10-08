package com.bk.backend.config;

import org.springframework.context.annotation.Configuration;;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//서버가 실행되면서 자동으로 실행됨
@Configuration
public class CustomServletConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins("*")
                .allowedMethods("HEAD","GET","POST","PUT","DELETE","OPTIONS")
                .maxAge(300)
                .allowedHeaders("Authorization","Cache-Control","Content-Type");
        //이런 header는 허용하겠다.
    }
}