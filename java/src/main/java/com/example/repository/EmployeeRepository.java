package com.example.repository;

import java.util.List;

import com.example.model.Employee;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;



@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long>{
    List findByLastName(String lastName);

    @Query("SELECT e FROM Employee e WHERE e.age = :age")
    public List findByAge(@Param("age") int age);
}