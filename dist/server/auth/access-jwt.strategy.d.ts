import { Strategy } from 'passport-jwt';
import { AccessTokenContent } from './types/access-token-content';
import { AccessTokenPayload } from './types/access-token-payload';
declare const AccessJwtStrategy_base: new (...args: any[]) => Strategy;
export declare class AccessJwtStrategy extends AccessJwtStrategy_base {
    constructor();
    validate(payload: AccessTokenPayload): Promise<AccessTokenContent>;
}
export {};
