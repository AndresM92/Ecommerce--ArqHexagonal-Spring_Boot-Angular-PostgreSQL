package com.andres.ecommerce.backend.infrastructure.adapter;

import com.andres.ecommerce.backend.infrastructure.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface IUserCrudRepository extends CrudRepository<UserEntity,Integer> {

    Optional<UserEntity> findByEmail(String email);
}
