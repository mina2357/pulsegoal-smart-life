
package com.pulsegoal.ml;

import java.util.Random;

// Dummy class to simulate ML/NLP-based functionality
public class MLMock {

    private static final String[] SUGGESTIONS = {
        "Based on your progress, try breaking your larger goals into smaller, daily habits for better consistency!",
        "Your afternoon productivity seems highest. Consider scheduling important tasks during this time.",
        "You've been consistent with your exercise goals! Try adding a new challenge to maintain momentum.",
        "Small wins matter! Celebrate completing 75% of your daily goals this week.",
        "Consider using the 2-minute rule: if a task takes less than 2 minutes, do it immediately.",
        "Your goal completion rate improves on weekdays. Plan lighter goals for weekends to maintain balance."
    };

    // Return varied suggestions to simulate AI behavior
    public static String getSuggestion() {
        Random random = new Random();
        return SUGGESTIONS[random.nextInt(SUGGESTIONS.length)];
    }

    // Dummy progress estimator
    public static int estimateProgress(String goalDescription) {
        // Placeholder logic: If goal contains "daily", progress is higher.
        if (goalDescription != null && goalDescription.toLowerCase().contains("daily")) {
            return 70 + new Random().nextInt(20); // 70-89%
        }
        return 30 + new Random().nextInt(40); // 30-69%
    }

    // Simulate goal difficulty assessment
    public static String assessGoalDifficulty(String goalDescription) {
        if (goalDescription == null || goalDescription.trim().isEmpty()) {
            return "Unable to assess";
        }
        
        String lower = goalDescription.toLowerCase();
        if (lower.contains("daily") || lower.contains("every day")) {
            return "High commitment required";
        } else if (lower.contains("week") || lower.contains("weekly")) {
            return "Moderate commitment";
        } else {
            return "Flexible timeline";
        }
    }

    // TODO: Replace with TensorFlow Lite integration or on-device transformer model client call
    // TODO: Integrate with user activity patterns for personalized suggestions
    // TODO: Add sentiment analysis for goal descriptions
}
