import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passrecoveryService } from '../../services/pass-recovery.service';

@Component({
    templateUrl: './pass-recovery.html',
    providers: [passrecoveryService]
})
export class PassRecoveryComponent implements OnInit {
    form: FormGroup;

    email = {email: '', subject: '', text: ''};

    constructor(
        private _router: Router,
        private formBuilder: FormBuilder,
        private recoveryService: passrecoveryService

    ) {
        this.createForm();
    }

    ngOnInit() { }

    createForm() {
        this.form = this.formBuilder.group({
            email: ['', [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(32),
                Validators.email
            ]]
        });
    }

    recoveryPass(){
        this.email = this.form.get('email').value; 

        this.recoveryService.recovery(this.email).then((res) => {
            if (res == true) {
                this._router.navigate(['/login']);
            }else {
                //this._router.navigate(['Login']);
            }
        })

    }
    
}