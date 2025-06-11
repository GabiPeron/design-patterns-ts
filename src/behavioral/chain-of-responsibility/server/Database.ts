import DatabaseItem from './IDatabaseItem';
import PermissionType from './PermissionType';

const database: DatabaseItem[] = [
  {
    email: 'admin@admin.com',
    password: 'admin123',
    name: 'Admin',
    permission: PermissionType.ADMIN,
  },
  {
    email: 'user@user.com',
    password: '123456',
    name: 'User',
    permission: PermissionType.USER,
  },
];

export default database;
