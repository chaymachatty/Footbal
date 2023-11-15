import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch:string): unknown {
let s="";
for (let i = 0; i < ch.length; i++) {
  s=ch[i]+s
}
return s;
}
}