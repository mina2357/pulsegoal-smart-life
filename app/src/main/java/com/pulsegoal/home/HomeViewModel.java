
package com.pulsegoal.home;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;
import java.util.ArrayList;
import java.util.List;

public class HomeViewModel extends ViewModel {

    public static class GoalItem {
        public String description;
        public int progress; // out of 100
        public int colorResId;
        public GoalItem(String description, int progress, int colorResId) {
            this.description = description;
            this.progress = progress;
            this.colorResId = colorResId;
        }
    }

    private final MutableLiveData<List<GoalItem>> todayGoals = new MutableLiveData<>();
    private final MutableLiveData<String> aiTip = new MutableLiveData<>();
    private final MutableLiveData<List<Integer>> weeklyProgress = new MutableLiveData<>();

    public HomeViewModel() {
        // Dummy dynamic data -- in the future, fetch from repository or ML logic
        List<GoalItem> goals = new ArrayList<>();
        goals.add(new GoalItem("Exercise for 30 minutes", 75, com.pulsegoal.R.color.goal_progress));
        goals.add(new GoalItem("Read 20 pages", 40, com.pulsegoal.R.color.accent));
        goals.add(new GoalItem("Meditate for 10 minutes", 90, com.pulsegoal.R.color.primary));
        todayGoals.setValue(goals);

        aiTip.setValue("Small wins matter! Celebrate completing 75% of your daily goals this week.");

        List<Integer> week = new ArrayList<>();
        week.add(60); week.add(80); week.add(45); week.add(95); week.add(70); week.add(85); week.add(100);
        weeklyProgress.setValue(week);
    }

    public LiveData<List<GoalItem>> getTodayGoals() { return todayGoals; }
    public LiveData<String> getAiTip() { return aiTip; }
    public LiveData<List<Integer>> getWeeklyProgress() { return weeklyProgress; }
}
