package com.java.koi.auction.models;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class DashboardData {
    private long totalUsers;
    private long totalAuctions;
    private long totalTransactions;

}