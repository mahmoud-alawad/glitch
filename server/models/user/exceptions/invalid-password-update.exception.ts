import { UserServiceInputException } from './user-service-input.exception';

/** Used when the user inputs the wrong
 * current password when trying to create a new password
 */
export class InvalidPasswordUpdateException extends UserServiceInputException {
  /** Throws exception with message 'Invalid current password'.
   *
   * Used when the user inputs the wrong current password when
   * trying to create a new password
   */
  constructor() {
    super('Invalid current password');
  }

  /**
   * invalidPassword
   */
  public invalidPassword() {
    return "Please enter both new password and current password";
  }

  /**
   * null message
   */
  public generalMessage() {
    return "operation went wrong";
  }


  /**
   * null message
   */
  public empltyCredentials(email: string) {
    return `invalid credentials using : ${email}`;
  }
}
