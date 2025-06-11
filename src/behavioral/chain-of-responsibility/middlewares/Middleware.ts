export default abstract class Middleware {
  next: Middleware | null = null;

  linkWith(middleware: Middleware): Middleware {
    this.next = middleware;
    return middleware;
  }

  protected checkNext(email: string, password: string): boolean {
    if (this.next === null) {
      return true; // No next middleware, so we can proceed
    }

    return this.next.check(email, password);
  }

  abstract check(email: string, password: string): boolean;
}
