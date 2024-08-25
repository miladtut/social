// src/common/interceptors/response.interceptor.ts
import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    HttpException,
    InternalServerErrorException,
    BadRequestException,
  } from '@nestjs/common';
  import { Observable, throwError } from 'rxjs';
  import { catchError, map } from 'rxjs/operators';
  
  @Injectable()
  export class ResponseInterceptor<T> implements NestInterceptor<T, { message: string; data: T }> {
    intercept(
      context: ExecutionContext,
      next: CallHandler<T>,
    ): Observable<{ message: string; data: T }> {
      return next.handle().pipe(
        map((data) => ({
          message: 'Request was successful',
          data,
        })),
        catchError((error) => {
          let message = 'An unexpected error occurred';
          let status = 500;
  
          if (error instanceof HttpException) {
            const response = error.getResponse();
            message = Array.isArray(response['message']) ? response['message'].join(', ') : response['message'];
            status = error.getStatus();
          }
  
          // Throw an error with a consistent structure
          return throwError(() => ({
            statusCode: status,
            message,
            data: null,
          }));
        }),
      );
    }
  }
  