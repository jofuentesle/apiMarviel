/*import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class ValidacionesPropias {

    static mustBeEquals( pass1: string, pass2:string ): ValidatorFn {
        return ( group: AbstractControl ): ValidationErrors | null => {
            const pass1value = group.get(pass1)?.toString();
            const pass2value = group.get(pass2)?.toString();

            return pass1value?.valueOf === pass2value?.valueOf ? null :{ mustBeEquals: true }
            
        }
    }
}
*/

import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const matchPassword: ValidatorFn = (control:AbstractControl):ValidationErrors | null => {
    
    let password = control.get('password');
    let password2 = control.get('password2');

    if (password && password2 && password?.value != password2?.value) {
        return {

            passerrormatch : true
        }
    }
    
    return null;
}