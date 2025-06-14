
package com.pulsegoal.home;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.ViewModelProvider;
import com.pulsegoal.R;
import java.util.List;

public class HomeFragment extends Fragment {

    private HomeViewModel viewModel;

    public HomeFragment() {}

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_home, container, false);

        viewModel = new ViewModelProvider(this).get(HomeViewModel.class);

        // Welcome
        TextView helloUser = view.findViewById(R.id.hello_user);
        helloUser.setText("Good " + getTimeOfDay() + "!");

        // Goal summary
        TextView goalBrief = view.findViewById(R.id.goal_brief);

        // Today's Goals
        LinearLayout goalsContainer = view.findViewById(R.id.goals_container);

        // Progress Chart (placeholder, dynamic heights)
        LinearLayout progressChart = view.findViewById(R.id.weekly_progress_chart);

        // AI Tip
        TextView aiTip = view.findViewById(R.id.ml_suggestion);

        // Dynamic data
        viewModel.getTodayGoals().observe(getViewLifecycleOwner(), goals -> {
            // Update goal brief
            goalBrief.setText("You have " + goals.size() + " active goals");
            goalsContainer.removeAllViews();
            LayoutInflater layoutInflater = LayoutInflater.from(getContext());
            for (HomeViewModel.GoalItem goal : goals) {
                View item = layoutInflater.inflate(R.layout.item_goal, goalsContainer, false);
                TextView tvGoal = item.findViewById(R.id.tv_goal);
                TextView tvProgress = item.findViewById(R.id.tv_progress);
                ProgressBar pb = new ProgressBar(getContext(), null, android.R.attr.progressBarStyleHorizontal);
                pb.setMax(100);
                pb.setProgress(goal.progress);
                pb.setProgressDrawable(getResources().getDrawable(goal.colorResId, null));
                pb.setLayoutParams(new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, 16));
                ((LinearLayout) item).addView(pb, 1); // Insert after the description
                tvGoal.setText(goal.description);
                tvProgress.setText(goal.progress + "%");
                goalsContainer.addView(item);
            }
        });

        viewModel.getAiTip().observe(getViewLifecycleOwner(), tip -> aiTip.setText(tip));

        viewModel.getWeeklyProgress().observe(getViewLifecycleOwner(), week -> {
            // Placeholder bars
            progressChart.removeAllViews();
            for (Integer value : week) {
                View bar = new View(getContext());
                int height = (int) (value * 1.2); // scale for visual
                LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(0, height, 1);
                params.setMarginEnd(4);
                bar.setLayoutParams(params);
                bar.setBackgroundColor(getResources().getColor(R.color.goal_progress, null));
                progressChart.addView(bar);
            }
        });

        return view;
    }

    private String getTimeOfDay() {
        java.util.Calendar cal = java.util.Calendar.getInstance();
        int hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
        if (hour < 12) return "morning";
        else if (hour < 17) return "afternoon";
        else return "evening";
    }
}
