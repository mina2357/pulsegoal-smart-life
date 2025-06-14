
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
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class HomeFragment extends Fragment {

    public HomeFragment() {}

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_home, container, false);

        TextView helloUser = view.findViewById(R.id.hello_user);
        TextView goalBrief = view.findViewById(R.id.goal_brief);
        TextView mlSuggestion = view.findViewById(R.id.ml_suggestion);

        // Dynamic welcome message based on time of day
        String timeOfDay = getTimeOfDay();
        helloUser.setText("Good " + timeOfDay + "!");
        
        // Dynamic goal brief - could be connected to actual data later
        int activeGoals = 3; // This would come from ViewModel/Repository in real app
        goalBrief.setText("You have " + activeGoals + " active goals");
        
        // Get AI suggestion from mock ML service
        mlSuggestion.setText(MLMock.getSuggestion());

        return view;
    }

    private String getTimeOfDay() {
        int hour = Integer.parseInt(new SimpleDateFormat("HH", Locale.getDefault()).format(new Date()));
        if (hour < 12) {
            return "morning";
        } else if (hour < 17) {
            return "afternoon";
        } else {
            return "evening";
        }
    }
}
