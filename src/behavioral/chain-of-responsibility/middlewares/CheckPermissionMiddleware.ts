import database from '../server/Database';
import DatabaseItem from '../server/IDatabaseItem';
import Middleware from './Middleware';

export default class CheckPermissionMiddleware extends Middleware {
  check(email: string, password: string): boolean {
    const user = this.findUser(email);

    if (!user) {
      console.error('User not found.');
      return false;
    }

    this.addPermissions(user);

    return this.checkNext(email, password);
  }

  private addPermissions(user: DatabaseItem): void {
    // Simulate adding permissions to the user
    console.log(
      `Adding ${user.permission} permissions for user: ${user.email}`
    );
  }

  private findUser(email: string): DatabaseItem | undefined {
    // Simulate a database lookup
    return database.find((user) => user.email === email);
  }
}
