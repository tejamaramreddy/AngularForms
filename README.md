# AngularForms
Reactive forms in angular

FormControl, FormGroup, FormGroupName, FormControlName, ngSubmit


                <div *ngIf=" reactiveForm && reactiveForm.controls && reactiveForm.controls['Name'].invalid && reactiveForm.controls['Name'].touched"
                class="alert alert-danger">
                Enter Name
                </div>
