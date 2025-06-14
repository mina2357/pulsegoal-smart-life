
package com.pulsegoal;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.pulsegoal.home.HomeFragment;
import com.pulsegoal.goal.GoalTrackerFragment;
import com.pulsegoal.suggestions.SuggestionsFragment;
import android.view.MenuItem;

public class MainActivity extends AppCompatActivity {

    private BottomNavigationView bottomNavigationView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Show home fragment by default
        showFragment(new HomeFragment());
        setupBottomNavigation();
    }

    private void showFragment(Fragment fragment) {
        getSupportFragmentManager().beginTransaction()
            .replace(R.id.fragment_container, fragment)
            .commit();
    }

    private void setupBottomNavigation() {
        bottomNavigationView = findViewById(R.id.bottom_navigation);
        
        bottomNavigationView.setOnItemSelectedListener(item -> {
            Fragment selectedFragment = null;
            int itemId = item.getItemId();
            
            if (itemId == R.id.nav_home) {
                selectedFragment = new HomeFragment();
            } else if (itemId == R.id.nav_goals) {
                selectedFragment = new GoalTrackerFragment();
            } else if (itemId == R.id.nav_suggestions) {
                selectedFragment = new SuggestionsFragment();
            }
            
            if (selectedFragment != null) {
                showFragment(selectedFragment);
                return true;
            }
            return false;
        });
    }
}
