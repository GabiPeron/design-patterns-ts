import database from '../server/Database';
import Middleware from './Middleware';

export default class CheckUserMiddleware extends Middleware {
  check(email: string, password: string): boolean {
    if (!this.validateEmail(email)) {
      console.error('Invalid email format.');
      return false;
    }

    if (!this.userExists(email, password)) {
      console.error('User does not exist or password is incorrect.');
      return false;
    }

    return this.checkNext(email, password);
  }

  private validateEmail(email: string): boolean {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private userExists(email: string, password: string): boolean {
    if (
      !database.some(
        (user) => user.email === email && user.password === password
      )
    ) {
      return false;
    }

    return true;
  }
}
