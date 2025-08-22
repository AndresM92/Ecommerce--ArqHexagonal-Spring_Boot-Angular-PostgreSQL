package com.andres.ecommerce.backend.application;

import com.andres.ecommerce.backend.domain.model.Product;
import com.andres.ecommerce.backend.domain.port.IProductRepository;

public class ProductService {
    private final IProductRepository iProductRepository;

    public ProductService(IProductRepository iProductRepository) {
        this.iProductRepository = iProductRepository;
    }

    public Product save (Product product){
        return this.iProductRepository.save(product);
    }

    public Iterable<Product> findById(){
        return this.iProductRepository.findAll();
    }

    public Product findById(Integer id){
        return this.iProductRepository.findById(id);
    }

    public Iterable<Product> findAll(){
        return this.iProductRepository.findAll();
    }

    public void deleteById(Integer id){
        this.iProductRepository.deleteById(id);
    }
}
