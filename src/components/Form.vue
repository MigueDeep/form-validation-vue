<template>
    <div class="container">
        <div class="row">
            <h1 class="title">Validacion de formulario</h1>
        </div>
        <div>
            <div class="card" style="width: 28rem;">
                <div class="card-body">
                    <FormulateForm 
                        #default="{ hasErrors }"
                        name="my-form"
                        v-model="formValues"
                        @submit="submitForm" 
                        @reset="resetForm">

                        <!-- Nombre -->
                        <div class="mb-3">  
                            <label for="name" class="form-label">Nombre copleto</label>
                            <FormulateInput ref="inputName" type="text" id="name" name="name" class="my-input"
                                validation="^required|min:4,length|matches:/^[a-zA-Z\s]*$/"
                                :validation-messages="{
                                    required: 'El nombre es requerido',
                                    min: 'El nombre debe tener al menos 4 caracteres',
                                    matches: 'El nombre solo puede contener letras',
                                }"
                            />
                        </div>

                       <div class="two-fields">
                            <!-- Edad -->
                            <div class="mb-3">
                                <label for="age" class="form-label">Edad</label>
                                <FormulateInput type="number" id="age" name="age"
                                    validation="^required|min:1,length|max:2,length|between:17,61"
                                    :validation-messages="{
                                        required: 'La edad es requerida',
                                        min: 'La edad debe tener al menos 1 digito',
                                        max: 'La edad debe tener maximo 2 digitos',
                                        between: 'La edad debe estar entre 18 y 60 a�os',
                                    }"
                                />
                            </div>

                            <!-- Telefono -->
                            <div class="mb-3">
                                <label for="phone" class="form-label">Telefono</label>
                                <FormulateInput type="number" id="phone" name="phone"
                                    validation="^required|min:10,length|max:10,length" 
                                    :validation-messages="{
                                    required: 'El telefono es requerido',
                                    min: 'El telefono debe tener al menos 10 caracteres',
                                    max: 'El telefono debe tener maximo 10 caracteres',
                                }" 
                                />
                            </div>
                       </div>

                        <!-- Fecha de nacimiento -->
                        <div class="mb-3">
                            <label for="birthday" class="form-label">Fecha de nacimiento</label>
                            <FormulateInput type="date" name="birthday" 
                                validation="^required|date|before:"
                                :validation-messages="{
                                    required: 'La fecha de nacimiento es requerida',
                                    before: 'La fecha no puede ser mayor a la fecha actual'
                                }" 
                            />
                        </div>
                    
                        <!-- CURP -->
                        <div class="mb-3">
                            <label for="curp" class="form-label">CURP</label>
                            <FormulateInput type="text" name="curp" 
                                aria-placeholder=""
                                validation="^required|min:18,length|max:18,length|matches:/^[A-Z]{4}\d{6}[HM][A-Z]{2}[A-Z0-9]{2}[0-9A-Z]{1}[0-9A-Z]{1}[0-9]{1}$/"
                                :validation-messages="{
                                    required: 'El CURP es requerido',
                                    min: 'El CURP debe tener al menos 18 caracteres',
                                    max: 'El CURP debe tener maximo 18 caracteres',
                                    matches: 'El CURP no es valido'
                                }" 
                            />
                        </div>

                        <!-- Email -->
                        <div class="mb-3">
                            <label for="email" class="form-label">Correo Electronico</label>
                            <FormulateInput type="email" name="email" class="mb-3"
                                validation="^required|email" 
                                :validation-messages="{
                                required: 'El correo electronico es requerido',
                                email: 'El correo no es valido'
                            }" 
                            />
                        </div>

                        <!-- Contrase�a -->
                        <div class="mb-3">
                            <label for="password" class="form-label">Contraseña</label>
                            <FormulateInput type="password" name="password" 
                                validation="^required|min:6,length|max:20,length"
                                :validation-messages="{
                                    required: 'La contraseña es requerida',
                                    min: 'La contraseña debe tener al menos 6 caracteres',
                                    max: 'La contraseña debe tener maximo 20 caracteres',
                                }" 
                                label-is-valid-class="my-valid-class" 
                            />

                            <label for="password_confirm" class="form-label">Confirmar Contraseña</label>
                            <FormulateInput type="password" name="password_confirm" 
                                validation="^required|confirm"
                                :validation-messages="{
                                    required: 'La confirmacion de la contraseña es requerida',
                                    confirm: 'Las contraseñas no coinciden'
                                }"
                                validation-name="Password confirmation" 
                                label-is-valid-class="my-valid-class" />
                        </div>

                        <!-- {{ formValues }} -->

                        <button
                            type="submit"
                            :disabled="hasErrors"
                            class="btn btn-primary me-2 send-button"
                            value="Enviar"
                        > 
                            Enviar
                        </button>

                        <button 
                        type="reset" 
                        @click="resetForm" 
                        class="btn btn-outline-danger">
                            Limpiar campos
                        </button>

                        <pre
                        class="code"
                        v-text="formValues"
                        />

                    </FormulateForm>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import formService from '../services/Form.js';

export default {
    data() {
        return {
            formValues: {},
            matchesAges: true
        }
    },
    methods: {
        submitForm: function(e) {
            alert('Formulario enviado');
            console.log(this.formValues);
        },
        resetForm: function() {
            this.formValues = {};
            this.$formulate.reset('my-form');
        },
        async saveData() {
            await this.$formulate.submit('my-form');
        }
    },
};  
</script>

<style scoped>
.title {
    text-align: center;
    margin-top: 40px;
    font-size: 2.5em;
    font-weight: 300;
    margin-bottom: 40px;
}

.card {
    margin-top: 40px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
}

.card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
}



.send-button{
    width: 11rem;
}

.two-fields{
    gap: 0.5rem;
    display: flex;
    justify-content: space-between;

}

</style>