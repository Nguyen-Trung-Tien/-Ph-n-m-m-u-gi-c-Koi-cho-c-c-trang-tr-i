package com.java.koi.auction.models;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
@Data
@Entity
@Table(name = "Farm")

public class Farm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long farmId;
    @Column(nullable = false)
    private String farmName;
    private String location;

    @ManyToOne
    private User user;

    @OneToMany(mappedBy = "farm")
    private List<Koi> koi;

}