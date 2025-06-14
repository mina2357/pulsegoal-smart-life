
package com.pulsegoal.home;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import com.pulsegoal.R;
import com.pulsegoal.ml.MLMock;

public class HomeFragment extends Fragment {

    public HomeFragment() {}

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_home, container, false);

        TextView helloUser = view.findViewById(R.id.hello_user);
        TextView goalBrief = view.findViewById(R.id.goal_brief);
        TextView mlSuggestion = view.findViewById(R.id.ml_suggestion);

        helloUser.setText("Welcome to PulseGoal!");
        goalBrief.setText("You have 3 goals in progress."); // This could be LiveData later
        mlSuggestion.setText(MLMock.getSuggestion());

        return view;
    }
}
