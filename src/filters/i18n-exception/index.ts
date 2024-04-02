import { Catch } from '@nestjs/common';
import {
  I18nValidationException,
  I18nValidationExceptionFilter
} from 'nestjs-i18n';

@Catch(I18nValidationException)
export class I18nExceptionFilter extends I18nValidationExceptionFilter {
  protected buildResponseBody(_: any, exc: I18nValidationException): Record<string, unknown> {
    return {
      statusCode: exc.getStatus(),
      error: exc.message,
      message: Object.values(exc.errors[0]?.constraints ? Object.values(exc.errors[0].constraints)[0] : '')[0]
    };
  }
}