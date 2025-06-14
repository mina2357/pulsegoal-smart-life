
package com.pulsegoal.notifications;

import android.content.Context;
import android.util.Log;

// Simulated smart notification manager (real implementation would use AlarmManager/WorkManager)
public class NotificationManager {
    public static void showSmartNotification(Context context, String message) {
        // TODO: Use WorkManager/NotificationCompat for real notifications
        Log.d("PulseGoal", "Smart notification: " + message);
    }
}
