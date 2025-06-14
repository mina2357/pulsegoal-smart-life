
package com.pulsegoal.login;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import com.pulsegoal.MainActivity;
import com.pulsegoal.R;

public class LoginFragment extends Fragment {
    public LoginFragment() {}

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater,
                             @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_login, container, false);
        Button btn = view.findViewById(R.id.btn_login);
        btn.setOnClickListener(v -> {
            // Simulate login, normally would use FirebaseAuth here.
            if (getActivity() instanceof MainActivity) {
                ((MainActivity) getActivity()).onLoginSuccess();
            }
        });
        return view;
    }
}
