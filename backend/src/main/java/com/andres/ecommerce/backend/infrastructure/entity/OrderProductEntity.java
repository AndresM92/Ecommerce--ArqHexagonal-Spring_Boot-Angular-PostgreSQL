package com.andres.ecommerce.backend.infrastructure.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

import java.math.BigDecimal;

@Data
@Entity
@Table(name = "order_products")
public class OrderProductEntity {

    private Integer id;
    private BigDecimal quantity;
    private BigDecimal price;
    private Integer productId;
    @ManyToOne
    private OrderEntity orderEntity;
}
