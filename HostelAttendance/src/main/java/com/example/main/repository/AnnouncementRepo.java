package com.example.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.main.model.Announcement;

public interface AnnouncementRepo extends JpaRepository<Announcement, Integer>{

}
