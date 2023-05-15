package com.paf_assignment.flavorfeed;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class FlavorfeedApplication {

	public static void main(String[] args) {
		SpringApplication.run(FlavorfeedApplication.class, args);
	}

	@Bean
 	public WebMvcConfigurer configure() {
  		return new WebMvcConfigurer() {
   			@Override
   			public void addCorsMappings(CorsRegistry registry) {
    			registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000")
                .allowCredentials(true);
   			}
  		};  
 	}

}
