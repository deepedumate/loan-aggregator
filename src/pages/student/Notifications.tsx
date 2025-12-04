import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, CheckCheck, Trash2 } from 'lucide-react';
import HeaderBar from '../../components/student/HeaderBar';
import { notifications, Notification } from '../../data/applications';

export default function Notifications() {
  const [notifList, setNotifList] = useState<Notification[]>(notifications);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const filteredNotifs = filter === 'all' 
    ? notifList 
    : notifList.filter(n => !n.read);

  const unreadCount = notifList.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifList(notifList.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifList(notifList.map(n => ({ ...n, read: true })));
  };

  const deleteNotif = (id: string) => {
    setNotifList(notifList.filter(n => n.id !== id));
  };

  return (
    <>
      <HeaderBar
        title="Notifications"
        subtitle={`${unreadCount} unread notification${unreadCount !== 1 ? 's' : ''}`}
      />

      <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto">
        {/* Actions Bar */}
        <section className="flex items-center justify-between gap-4">
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-primary to-accent text-white'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
              }`}
            >
              All ({notifList.length})
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                filter === 'unread'
                  ? 'bg-gradient-to-r from-primary to-accent text-white'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
              }`}
            >
              Unread ({unreadCount})
            </button>
          </div>

          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary-light transition-colors"
            >
              <CheckCheck size={16} />
              Mark all as read
            </button>
          )}
        </section>

        {/* Notifications List */}
        <section className="space-y-3">
          {filteredNotifs.length > 0 ? (
            filteredNotifs.map((notif, index) => (
              <motion.div
                key={notif.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`glass-card p-6 rounded-2xl border transition-all ${
                  !notif.read
                    ? 'border-primary/30 bg-gradient-to-r from-blue-50/50 to-white dark:from-blue-900/10 dark:to-slate-800'
                    : 'border-slate-200 dark:border-slate-700'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Type indicator */}
                  <div
                    className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${
                      notif.type === 'success'
                        ? 'bg-green-500'
                        : notif.type === 'warning'
                        ? 'bg-amber-500'
                        : notif.type === 'error'
                        ? 'bg-red-500'
                        : 'bg-blue-500'
                    }`}
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-semibold text-slate-800 dark:text-slate-100">
                        {notif.title}
                      </h3>
                      <span className="text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap">
                        {new Date(notif.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      {notif.message}
                    </p>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      {!notif.read && (
                        <button
                          onClick={() => markAsRead(notif.id)}
                          className="text-xs font-medium text-primary hover:text-primary-light transition-colors"
                        >
                          Mark as read
                        </button>
                      )}
                      {notif.applicationId && (
                        <button className="text-xs font-medium text-accent hover:text-accent-light transition-colors">
                          View Application →
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotif(notif.id)}
                        className="ml-auto text-xs font-medium text-red-500 hover:text-red-600 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            // Empty state
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-12 rounded-2xl border border-slate-200 dark:border-slate-700 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                <Bell size={32} className="text-slate-400 dark:text-slate-500" />
              </div>
              <h3 className="font-display font-semibold text-lg text-slate-700 dark:text-slate-300 mb-2">
                No notifications
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                {filter === 'unread' 
                  ? "You're all caught up! No unread notifications."
                  : "You don't have any notifications yet."}
              </p>
            </motion.div>
          )}
        </section>
      </main>
    </>
  );
}
