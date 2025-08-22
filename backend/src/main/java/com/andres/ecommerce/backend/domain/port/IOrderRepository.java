package com.andres.ecommerce.backend.domain.port;

import com.andres.ecommerce.backend.domain.model.Order;

public interface IOrderRepository {
    Order save(Order order);
    Order finById(Integer id);
    Iterable<Order> findAll();
    Iterable<Order> findByUserId(Integer userId);
    void updateStateById(Integer id, String state);
}
