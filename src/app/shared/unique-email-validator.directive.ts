import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StudenturlService } from './services/studenturl.service';

@Directive({
  selector: '[UniqueEmail]',
  providers :[{ provide: NG_ASYNC_VALIDATORS , useExisting :UniqueEmailValidatorDirective , multi :true}]
})
export class UniqueEmailValidatorDirective implements AsyncValidator {

  constructor( private studentserve : StudenturlService) { }
  validate(c:AbstractControl):Promise<ValidationErrors | null> | Observable<ValidationErrors | null>{
    return this.studentserve.getUserByEmail(c.value).pipe(
      map((Student:any[]) =>{
        return Student && Student.length > 0 ? {'UniqueEmail' : true} : null;
      })
    )
  }

}
