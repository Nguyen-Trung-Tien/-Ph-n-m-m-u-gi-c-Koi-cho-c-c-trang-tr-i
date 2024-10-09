package com.java.koi.auction.models;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Data
@Entity
@Table(name = "Blog")

public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long blogId;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    private LocalDateTime date;
    private String author;


}
