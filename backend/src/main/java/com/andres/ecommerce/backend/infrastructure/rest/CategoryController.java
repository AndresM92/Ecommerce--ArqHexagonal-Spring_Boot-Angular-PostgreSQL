package com.andres.ecommerce.backend.infrastructure.rest;

import com.andres.ecommerce.backend.application.CategoryService;
import com.andres.ecommerce.backend.domain.model.Category;
import com.andres.ecommerce.backend.domain.model.Product;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/admin/categories")
@Slf4j
@CrossOrigin("http://localhost:4200")
public class CategoryController {
    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @PostMapping
    public ResponseEntity<Category> save(@RequestBody Category category){
        log.info("id categoria: {} ",category.getId());
        return new ResponseEntity<>( categoryService.save(category), HttpStatus.CREATED);
    }


    @GetMapping
    public ResponseEntity<Iterable<Category>> findAll(){
        return ResponseEntity.ok(categoryService.findAll());
    }

    /*
    @PutMapping("/{id}")
    public ResponseEntity<Category> updateCategory(@PathVariable Integer id, @RequestBody Category category){
        category.setId(id);
        return ResponseEntity.ok(categoryService.save(category));
    }
    */

    @GetMapping("/{id}")
    public ResponseEntity<Category> findByid(@PathVariable Integer id){
        return ResponseEntity.ok(categoryService.findById(id));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteById(@PathVariable Integer id){
        categoryService.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
