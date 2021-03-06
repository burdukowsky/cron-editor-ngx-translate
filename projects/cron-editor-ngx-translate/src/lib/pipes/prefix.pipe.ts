import {Pipe, PipeTransform} from '@angular/core';

export const ngxTranslatePrefix = 'cron-editor-ngx-translate';

@Pipe({
  name: 'prefix'
})
export class PrefixPipe implements PipeTransform {

  transform(value: string): string {
    return `${ngxTranslatePrefix}.${value}`;
  }

}
