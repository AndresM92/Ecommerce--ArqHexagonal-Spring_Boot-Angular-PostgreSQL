package com.andres.ecommerce.backend.infrastructure.rest;

import com.andres.ecommerce.backend.application.ProductService;
import com.andres.ecommerce.backend.domain.model.Product;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;

@RestController
@RequestMapping("api/v1/admin/products")
@Slf4j
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
    private final ProductService productService;

   /* @PostMapping
    public ResponseEntity<Product>save(@RequestParam ("id")Integer id,
                                       @RequestParam ("name")String name,
                                       @RequestParam ("code") String code,
                                       @RequestParam ("description")String description,
                                       @RequestParam ("price") BigDecimal price,
                                       @RequestParam ("urlImage")String urlImage,
                                       @RequestParam ("userId")Integer userId,
                                       @RequestParam ("categoryId")Integer categoryId
                                       ){
        Product product =new Product();
        product.setId(id);
        product.setName(name);
        product.setCode(code);
        product.setDescription(description);
        product.setPrice(price);
        product.setCategoryId(categoryId);
        product.setUserId(userId);
        product.setUrlImage(urlImage);

        log.info("Nombre producto: {} ",product.getName());
        return new ResponseEntity<>(productService.save(product), HttpStatus.CREATED);
    }*/

    /*@PostMapping
    public ResponseEntity<Product>save(@RequestBody Product product,MultipartFile image) throws IOException {
        return  new ResponseEntity<>(productService.save(product,image), HttpStatus.CREATED);
    }*/

    @PostMapping
    public ResponseEntity<Product>save(@RequestParam ("product") String productJ,
                                       @RequestParam (value = "img",required = false) MultipartFile img ) throws IOException
    {
        ObjectMapper objectMapper= new ObjectMapper();
        Product product = objectMapper.readValue(productJ,Product.class);
        return  new ResponseEntity<>(productService.save(product,img), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Integer id, @RequestBody Product product, MultipartFile img) throws IOException {
        product.setId(id);
        return ResponseEntity.ok(productService.save(product,img));
    }

    @GetMapping
    public ResponseEntity<Iterable<Product>> findAll(){
        return ResponseEntity.ok(productService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> findById(@PathVariable Integer id){
        return ResponseEntity.ok(productService.findById(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteById(@PathVariable Integer id){
        productService.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
