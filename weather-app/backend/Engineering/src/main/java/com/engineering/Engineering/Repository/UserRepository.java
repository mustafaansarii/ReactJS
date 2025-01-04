package com.engineering.Engineering.Repository;


import com.engineering.Engineering.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
}
