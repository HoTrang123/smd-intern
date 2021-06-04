package com.example.controller;

import java.util.List;
import java.util.Optional;

import com.example.model.Employee;
import com.example.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/employee")
public class WebController {
    @Autowired
    EmployeeRepository repository;

    @RequestMapping(value="/save",method = RequestMethod.POST)
    public HttpStatus insertEmployee(@RequestBody Employee employee){
        boolean status = repository.save(employee) != null;
        return status? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
    }


    @RequestMapping("/findall")
    public List findAll(){


        return (List) repository.findAll();
    }

    @RequestMapping("/findbyid")
    public Optional findById(@RequestParam("id") long id){
        Optional result = repository.findById(id);
        return result;
    }

    @RequestMapping("/findbylastname")
    public List fetchDataByLastName(@RequestParam("lastname") String lastName){

        return repository.findByLastName(lastName);
    }
    @RequestMapping("/findbyage")
    public List fetchDataByAge(@RequestParam("age") int age){

        return repository.findByAge(age);
    }
}