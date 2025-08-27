package com.andres.ecommerce.backend.application;

import com.andres.ecommerce.backend.domain.model.Product;
import com.andres.ecommerce.backend.domain.port.IProductRepository;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.ProtectionDomain;

public class ProductService {
    private final IProductRepository iProductRepository;
    private final UploadFile  uploadFile;

    public ProductService(IProductRepository iProductRepository, UploadFile uploadFile) {
        this.iProductRepository = iProductRepository;
        this.uploadFile = uploadFile;
    }

    public Product save (Product product, MultipartFile multipartFile) throws IOException {
        if(product.getId() != null && product.getId() != 0){
            if (multipartFile==null) {
                product.setUrlImage(product.getUrlImage());
            }else{
                String nameFile= product.getUrlImage().substring(29);
                if(!nameFile.equals("default.jpg")){
                    uploadFile.delete(nameFile);
                }
                product.setUrlImage(uploadFile.upload(multipartFile));
            }
        }else{
            product.setUrlImage(uploadFile.upload(multipartFile));
        }

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
        Product product= findById(id);
        String nameFile= product.getUrlImage().substring(29);
        if(!nameFile.equals("default.jpg")){
            uploadFile.delete(nameFile);
        }
        this.iProductRepository.deleteById(id);
    }
}
