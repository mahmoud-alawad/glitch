import { ExceptionHandler } from './exception.handler';
export declare class JwtExceptionHandler implements ExceptionHandler {
    private jwtErrorNames;
    handle(error: Error): void;
    private isJwtException;
}
