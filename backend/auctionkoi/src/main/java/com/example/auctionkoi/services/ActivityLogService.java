package com.example.auctionkoi.services;

import com.example.auctionkoi.entities.Bid;
import com.example.auctionkoi.entities.Koi;
import com.example.auctionkoi.entities.User;
import com.example.auctionkoi.repositories.ActivityLogRepositories;
import com.example.auctionkoi.repositories.BidRepository;
import com.example.auctionkoi.repositories.KoiRepository;
import com.example.auctionkoi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.time.temporal.TemporalAdjusters;
import java.util.Date;
import java.util.List;
import java.util.Calendar;

@Service
public class ActivityLogService {
    private LocalDateTime now = LocalDateTime.now();
    private LocalDateTime dayFirstWeek(){

        LocalDateTime previousMonth = now.minusMonths(1);

        // Tìm ngày thứ 2 gần nhất trước hoặc bằng ngày hiện tại
        LocalDateTime firstDayOfWeek = previousMonth.with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY));

        // Đặt giờ, phút, giây và mili-giây về 0
        firstDayOfWeek = firstDayOfWeek.withHour(0).withMinute(0).withSecond(0).withNano(0);

        return firstDayOfWeek;
    };

    @Autowired
    private ActivityLogRepositories activityLogRepositories;

    @Autowired
    private KoiRepository koiRepository;

    @Autowired
    private BidRepository bidRepository;

    @Autowired
    private UserRepository userRepository;

    public Date getFirstDayOfWeek(){
        // Lấy ngày hiện tại
        Date today = new Date();
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(today);

        // Tìm ngày thứ 2 gần nhất trước hoặc bằng ngày hiện tại
        while (calendar.get(Calendar.DAY_OF_WEEK) != Calendar.MONDAY) {
            // Lùi ngày đi 1 ngày cho đến khi gặp thứ 2
            calendar.add(Calendar.DATE, -1);
        }

        // Đặt giờ, phút, giây và mili-giây về 0
        calendar.set(Calendar.HOUR_OF_DAY, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        calendar.set(Calendar.MILLISECOND, 0);

        // Kết quả là ngày thứ 2 gần nhất trước hoặc bằng ngày hiện tại với thời gian 00:00:00
        today = calendar.getTime();
        return today;

    }

    public List<Object[]> getTime(Date date) {
        Date time = (date == null)? getFirstDayOfWeek():date;
        return activityLogRepositories.findByUpTime(time);
    }

    public List<Bid> productInWeek(){
        return bidRepository.findAllByAuctionStartTimeGreaterThan(dayFirstWeek());
    }

    public int quantityHistory(){

        return koiRepository.findAllByAuctionEndTimeLessThan(now).size();
    }

    public List<Koi> history(){

        return koiRepository.findAllByAuctionEndTimeLessThan(now);
    }

    public List<User> GetNewUser(){
        return userRepository.findByDaySignUpGreaterThan(dayFirstWeek());
    }

}
