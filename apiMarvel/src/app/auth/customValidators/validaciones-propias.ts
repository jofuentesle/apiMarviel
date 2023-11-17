import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class ValidacionesPropias {

    static mustBeEquals( pass1: string, pass2:string ): ValidatorFn {
        return ( group: AbstractControl ): ValidationErrors | null => {
            const pass1value = group.get(pass1)?.toString();
            const pass2value = group.get(pass2)?.toString();

            return pass1value?.valueOf === pass2value?.valueOf ? null :{ mustBeEquals: true }
            
        }
    }
}
