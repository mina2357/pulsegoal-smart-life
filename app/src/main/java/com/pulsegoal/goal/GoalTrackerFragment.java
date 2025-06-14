
package com.pulsegoal.goal;

import android.os.Bundle;
import android.text.TextUtils;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProvider;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import com.pulsegoal.R;
import java.util.ArrayList;

public class GoalTrackerFragment extends Fragment {

    private GoalViewModel viewModel;
    private GoalAdapter adapter;

    public GoalTrackerFragment() {}

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater,
                             @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_goal_tracker, container, false);

        viewModel = new ViewModelProvider(this).get(GoalViewModel.class);

        EditText inputGoal = view.findViewById(R.id.input_goal);
        Button addGoal = view.findViewById(R.id.btn_add_goal);
        RecyclerView goalsRecycler = view.findViewById(R.id.goals_recycler);

        adapter = new GoalAdapter(new ArrayList<>());
        goalsRecycler.setAdapter(adapter);
        goalsRecycler.setLayoutManager(new LinearLayoutManager(getContext()));

        addGoal.setOnClickListener(v -> {
            String desc = inputGoal.getText().toString();
            if (!TextUtils.isEmpty(desc)) {
                viewModel.addGoal(desc);
                inputGoal.setText("");
            }
        });

        viewModel.getGoals().observe(getViewLifecycleOwner(), new Observer<java.util.List<Goal>>() {
            @Override
            public void onChanged(java.util.List<Goal> goals) {
                adapter.setGoals(goals);
            }
        });

        return view;
    }
}
