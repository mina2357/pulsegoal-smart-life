
package com.pulsegoal.suggestions;

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

public class SuggestionsFragment extends Fragment {
    public SuggestionsFragment() {}
    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater,
                             @Nullable ViewGroup container,
                             @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_suggestions, container, false);
        TextView suggestionTitle = view.findViewById(R.id.suggestion_title);
        TextView suggestionDetail = view.findViewById(R.id.suggestion_detail);

        suggestionTitle.setText("Smart Suggestions");
        suggestionDetail.setText(MLMock.getSuggestion());
        return view;
    }
}
