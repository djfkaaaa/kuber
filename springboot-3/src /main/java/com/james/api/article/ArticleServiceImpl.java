package com.james.api.article;

import com.james.api.common.AbstractService;
import com.james.api.enums.Messenger;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ArticleServiceImpl extends AbstractService {


       private final ArticleRepository repository;

    @Override
    public List findAll() throws SQLException {
        return repository.findAll();
    }


    @Override
    public Messenger save(Object o) {
        return null;
    }



    @Override
    public Optional findById(Long id) {
        return Optional.empty();
    }

    @Override
    public String count() {
        return null;
    }

    @Override
    public Optional getOne(String id) {
        return Optional.empty();
    }

    @Override
    public String delete(Object o) {
        return null;
    }

    @Override
    public Boolean existsById(Long id) {
        return null;
    }
}




