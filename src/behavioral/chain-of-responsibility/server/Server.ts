import Middleware from '../middlewares/Middleware';

export default class Server {
  private middleware: Middleware;

  constructor(middleware: Middleware) {
    this.middleware = middleware;
  }

  public login(email: string, password: string): boolean {
    if (!email || !password) {
      console.error('Email and password must be provided.');
      return false;
    }

    console.log(`Attempting to log in user: ${email}`);
    const result = this.middleware.check(email, password);
    if (result) {
      console.log(`User ${email} logged in successfully.`);
    } else {
      console.error(`Login failed for user: ${email}`);
    }
    return result;
  }
}
