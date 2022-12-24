/**
 * Used to extend another exception to make it
 * instanceof UserServiceInputException
 */
export class UserServiceInputException extends Error {
  /**
   * Used to extend another exception to make it
   * instanceof UserServiceInputException
   */
  constructor(message: string) {
    super(message);
  }
   /**
   * invalidPassword
   */
   public invalidPassword() {
    return "Please enter both new password and current password";
  }
}
