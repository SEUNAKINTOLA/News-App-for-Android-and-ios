import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the HighlightPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(text: string, search): string {
    if (search && text) {
      let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
      pattern = pattern.split(' ').filter((t) => {
        return t.length > 0;
      }).join('|');
      const regex = new RegExp(pattern, 'gi');

      return text.replace(regex, (match) => `<span class="search-highlight">${match}</span>`);
    } else {
      return text;
    }
  }
}



