package com.example.auctionkoi.entities;

import java.util.Date;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table( name ="activity_log")
public class ActivityLog{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date upTime;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
