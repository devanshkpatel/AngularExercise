import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wraptext'
})
export class CustomPipe implements PipeTransform {

  transform(text:string): string{
    if(text.length > 7)
    {
      text = text.substr(0, 7) + '.......';
      return text;
    }
    return text;
  }
}
