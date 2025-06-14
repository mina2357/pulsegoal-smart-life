
package com.pulsegoal.goal;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;
import com.pulsegoal.ml.MLMock;
import java.util.ArrayList;
import java.util.List;

public class GoalViewModel extends ViewModel {

    private final MutableLiveData<List<Goal>> goals = new MutableLiveData<>(new ArrayList<>());

    public LiveData<List<Goal>> getGoals() {
        return goals;
    }

    public void addGoal(String description) {
        List<Goal> current = goals.getValue() != null ? new ArrayList<>(goals.getValue()) : new ArrayList<>();
        int progress = MLMock.estimateProgress(description);
        current.add(new Goal(description, progress));
        goals.setValue(current);
    }
}
