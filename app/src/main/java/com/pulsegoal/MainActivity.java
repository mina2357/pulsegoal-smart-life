
package com.pulsegoal;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.pulsegoal.home.HomeFragment;
import com.pulsegoal.goal.GoalTrackerFragment;
import com.pulsegoal.suggestions.SuggestionsFragment;
import com.pulsegoal.login.LoginFragment;
import android.view.MenuItem;

public class MainActivity extends AppCompatActivity {

    private boolean isLoggedIn = false; // Placeholder – wired for login simulation

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        if (!isLoggedIn) {
            showFragment(new LoginFragment());
        } else {
            showFragment(new HomeFragment());
            setupNavigation();
        }
    }

    // Simulate login by switching screens
    public void onLoginSuccess() {
        isLoggedIn = true;
        showFragment(new HomeFragment());
        setupNavigation();
    }

    private void showFragment(Fragment fragment) {
        getSupportFragmentManager().beginTransaction()
            .replace(R.id.nav_host_fragment, fragment)
            .commit();
    }

    private void setupNavigation() {
        BottomNavigationView navView = new BottomNavigationView(this);
        navView.getMenu().add(0, 1, 0, "Home").setIcon(android.R.drawable.ic_menu_view);
        navView.getMenu().add(0, 2, 1, "Goals").setIcon(android.R.drawable.ic_menu_add);
        navView.getMenu().add(0, 3, 2, "Suggestions").setIcon(android.R.drawable.ic_menu_info_details);

        navView.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(MenuItem item) {
                Fragment fragment;
                switch (item.getItemId()) {
                    case 1:
                        fragment = new HomeFragment();
                        break;
                    case 2:
                        fragment = new GoalTrackerFragment();
                        break;
                    case 3:
                        fragment = new SuggestionsFragment();
                        break;
                    default:
                        fragment = new HomeFragment();
                }
                showFragment(fragment);
                return true;
            }
        });

        // Add bottom nav to the parent layout
        addContentView(navView, new androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams(
                androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams.MATCH_PARENT,
                androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams.WRAP_CONTENT));
    }
}
