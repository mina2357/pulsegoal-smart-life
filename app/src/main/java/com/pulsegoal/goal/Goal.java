
package com.pulsegoal.goal;

public class Goal {
    private String description;
    private int progress; // 0-100

    public Goal(String description, int progress) {
        this.description = description;
        this.progress = progress;
    }

    public String getDescription() {
        return description;
    }

    public int getProgress() {
        return progress;
    }
}
