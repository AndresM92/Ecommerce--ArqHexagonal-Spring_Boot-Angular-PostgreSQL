package com.andres.ecommerce.backend.infrastructure.config;

import com.andres.ecommerce.backend.application.CategoryService;
import com.andres.ecommerce.backend.application.ProductService;
import com.andres.ecommerce.backend.application.UserService;
import com.andres.ecommerce.backend.domain.port.ICategoryRepository;
import com.andres.ecommerce.backend.domain.port.IProductRepository;
import com.andres.ecommerce.backend.domain.port.IUserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanConfiguration {

    @Bean
    public UserService userService(IUserRepository iUserRepository){
        return new UserService(iUserRepository);
    }

    @Bean
    public CategoryService categoryService(ICategoryRepository iCategoryRepository){
        return new CategoryService(iCategoryRepository);
    }

    @Bean
    public ProductService productService(IProductRepository iProductRepository){
        return new ProductService(iProductRepository);
    }

}
