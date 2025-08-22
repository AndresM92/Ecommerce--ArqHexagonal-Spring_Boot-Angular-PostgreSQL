package com.andres.ecommerce.backend.infrastructure.entity;

import com.andres.ecommerce.backend.domain.model.OrderState;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.net.Inet4Address;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@Table(name = "orders")
public class OrderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @CreationTimestamp
    private LocalDateTime dateCreated;
    @Enumerated(value = EnumType.STRING)
    private OrderState orderState;
    @ManyToOne
    private UserEntity userEntity;
    @OneToMany(mappedBy = "orderEntity",cascade = CascadeType.PERSIST)
    private List<OrderProductEntity> orderProducts;
}
