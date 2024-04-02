package com.james.api.article;

import com.james.api.enums.Messenger;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
public class ArticleController {
    private final ArticleServiceImpl service;


    @SuppressWarnings("unchecked")
    @GetMapping("/api/all-articles")
    public Map<?,?> findUsers() throws SQLException {
         Map<String, Object> map = new HashMap<>();
         map.put("message",Messenger.SUCCESS);

         List<?> list = new ArrayList<>();
//         list.add(Article.builder()
//                         .id(1L)
//                         .title("자바")
//                         .content("자바라")
//                         .writer("홍성남")
//                         .registerDate("0327")
//                 .build());
         list = service.findAll();
         list.forEach(System.out::println);
         System.out.println("리스트 사이즈 : "+list.size());
         map.put("result",list);
         return map;
    }
}
