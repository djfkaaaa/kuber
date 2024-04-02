package com.james.api.account;

import com.james.api.common.AbstractService;
import com.james.api.enums.Messenger;
import com.james.api.user.User;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public class AccountServiceImpl  extends AbstractService<Account> implements AccountService {

    private static AccountServiceImpl instance = new AccountServiceImpl();
    List<Account> accounts;
    Map<String, User> users;
    private AccountServiceImpl(){
        this.accounts = new ArrayList<>();
    }
    public static AccountServiceImpl getInstance(){return instance;}

    @Override
    public String deposit(Account account) {
        return null;
    }

    @Override
    public String withdraw(Account account) {
        return null;
    }

    @Override
    public String getBalance(String accountNumber) {
        return null;
    }

    @Override
    public Messenger save(Account account) {
        return null;
    }

    @Override
    public List<Account> findAll() {
        return null;
    }

    @Override
    public Optional<Account> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public String count() {
        return null;
    }

    @Override
    public Optional<Account> getOne(String id) {
        return Optional.empty();
    }

    @Override
    public String delete(Account account) {
        return null;
    }

    @Override
    public Boolean existsById(Long id) {
        return null;
    }
}
