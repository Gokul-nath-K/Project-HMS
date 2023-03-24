package com.example.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.main.model.SOSTable;

public interface SOSRepo extends JpaRepository<SOSTable, Integer>{

}
