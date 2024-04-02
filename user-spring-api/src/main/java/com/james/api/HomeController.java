package com.james.api;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
public class HomeController {
     private final HomeService service;
    @GetMapping("/")
    public String hello(){
        String s = service.test();
        return "Welcome to Spring Boot!";
    }



    @PostMapping("/name")
    public Map<String,?> name(@RequestBody Map<String,?> map){
        String name = (String)map.get("list");
        System.out.println("리퀘스트가 가져온 이름 = " + name);
        Map<String,String> resMap = new HashMap<>();
        resMap.put("name","환영합니다"+name);
        return resMap;
    }



}
