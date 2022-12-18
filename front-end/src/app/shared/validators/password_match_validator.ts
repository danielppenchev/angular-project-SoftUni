import { AbstractControl } from "@angular/forms"

export const PasswordsMatchValidators = (passwordControlName: string, confirmPasswordControlName: string) => {
    const validator = (form: AbstractControl) => {
        const passwordControl = form.get(passwordControlName);
        const confirmPasswordControl = form.get(confirmPasswordControlName);

        if (!passwordControl || !confirmPasswordControl) {
            return;
        } else if (passwordControl.value !== confirmPasswordControl.value) {
            confirmPasswordControl.setErrors({
                notMatch: true
            })
        } else {
            const errors = confirmPasswordControl.errors;
            if (!errors) {
                return;
            } else {
                delete errors.notMatch;
                confirmPasswordControl.setErrors(errors);
            }
        }
    }

    return validator;
}