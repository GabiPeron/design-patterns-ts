import PermissionType from './PermissionType';

export default interface DatabaseItem {
  email: string;
  password: string;
  name: string;
  permission: PermissionType;
}
