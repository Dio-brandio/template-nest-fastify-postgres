export const MODULE_NAMES = {
  dashboard: 'dashboard',
  userManagement: 'userManagement',
  userList: 'userList',
  roleManagement: 'roleManagement',
  contentManagement: 'contentManagement',
  notificationSetup: 'notificationSetup',
  dataSource: 'dataSource',
  activityLogs: 'activityLogs',
} as const;

export type ModuleNames = keyof typeof MODULE_NAMES;
export const MODULE_DISPLAY_NAMES: Record<keyof typeof MODULE_NAMES, string> = {
  dashboard: 'Dashboard',
  userManagement: 'User Management',
  userList: 'User List',
  roleManagement: 'Role Management',
  contentManagement: 'Content Management',
  notificationSetup: 'Notification Setup',
  dataSource: 'Data Source',
  activityLogs: 'Activity Logs',
};
