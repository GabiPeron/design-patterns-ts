import Middleware from './Middleware';

export default class CheckWeakPasswordMiddleware extends Middleware {
  check(email: string, password: string): boolean {
    console.log(`Checking if the password for ${email} is weak...`);
    
    if (this.isWeakPassword(password)) {
      console.log('Weak password detected. Please choose a stronger password.');
    }

    return this.checkNext(email, password);
  }

  private isWeakPassword(password: string): boolean {
    // A simple check for weak passwords
    const weakPasswords = [
      '123456',
      'password',
      '12345678',
      'qwerty',
      'abc123',
    ];
    return weakPasswords.includes(password);
  }
}
