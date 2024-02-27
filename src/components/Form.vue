<template>
    <div class="container">
        <div class="row">
            <h1 class="title">Validacion de formulario</h1>
        </div>
        <div>
            <div class="card">
                <div class="card-body">
                    <form @submit="submitForm" @reset="resetForm">

                        <!-- Nombre -->
                        <div class="mb-3">
                            <label for="name" class="form-label">Nombre Completo</label>
                            <FormulateInput type="text" id="name" v-model="name"
                                validation="^required|min:4,length|matches:/^[a-zA-Z\s]*$/" :validation-messages="{
                                    required: 'El nombre es requerido',
                                    min: 'El nombre debe tener al menos 4 caracteres',
                                    matches: 'El nombre solo puede contener letras',
                                }" />
                        </div>



                        <div class="fullname">
                            <!-- Telefono -->
                            <div class="mb-3">
                                <label for="phone" class="form-label">Telefono</label>
                                <FormulateInput type="number" class="form-control" id="phone" v-model="phone"
                                    validation="^required|min:10,length|max:10,length" :validation-messages="{
                                        required: 'El telefono es requerido',
                                        min: 'El telefono debe tener al menos 10 caracteres',
                                        max: 'El telefono debe tener maximo 10 caracteres',
                                    }" />

                            </div>
                            <!-- Fecha de nacimiento -->
                            <div class="mb-3">  
                                <label for="birthday" class="form-label">Fecha de nacimiento</label>
                                <FormulateInput type="date" name="date" 
                                    validation="^required|date:DD/MM/YYYY|before:today"
                                    :validation-messages="{
                                        required: 'La fecha de nacimiento es requerida',
                                        date: 'La fecha debe tener el formato MM/DD/YYYY',
                                        before: 'La fecha de nacimiento no puede ser mayor a la fecha actual'
                                    }" />
                            </div>
                        </div>

                        <div class="direction">
                            <!-- Estado -->
                            <div class="mb-3">
                                <label for="state" class="form-label">Estado</label>
                                <input type="text" class="form-control" id="state" v-model="state">
                            </div>

                            <!-- Ciudad -->
                            <div class="mb-3">
                                <label for="city" class="form-label">Ciudad/Municipio</label>
                                <input type="text" class="form-control" id="city" v-model="city">
                            </div>
                        </div>

                        <div class="direction-two">
                            <!-- Codigo Postal -->
                            <div class="mb-3">
                                <label for="zip" class="form-label">Codigo Postal</label>
                                <input type="number" class="form-control" id="zip" v-model="zip">
                            </div>

                            <!-- Calle -->
                            <div class="mb-3">
                                <label for="street" class="form-label">Calle</label>
                                <input type="text" class="form-control" id="street" v-model="street">
                            </div>

                            <!-- Numero -->
                            <div class="mb-3">
                                <label for="number" class="form-label">Numero</label>
                                <input type="number" class="form-control" id="number" v-model="number">
                            </div>
                        </div>

                        <!-- Email -->
                        <div class="mb-3">
                            <label for="email" class="form-label">Correo Electronico</label>
                            <input type="email" class="form-control" id="email" v-model="email">
                        </div>

                        <!-- Contraseña -->
                        <div class="mb-3">
                            <label for="password" class="form-label">Contra</label>
                            <FormulateInput type="password" name="password" validation="required" class="mb-3"
                            :validation-messages="{ required: 'La contra es requerida' }"
                            />

                            <label for="confirm">Confirmar contra</label>
                            <FormulateInput  type="password" name="password_confirm"
                                validation="required|confirm" validation-name="Password confirmation"
                                :validation-messages="{ required: 'La confirmacion de la contra es requerida', confirm: 'Las contras no coinciden' }"
                                />
                        </div>

                        <FormulateInput type="checkbox" label="Acepto los terminos y condiciones" name="terms"
                            validation="accepted"
                            :validation-messages="{ accepted: 'Debes de aceptar los terminos y condiciones' }"
                            />

                        <button type="submit" class="btn btn-primary mx-2">Enviar</button>
                        <button type="reset" class="btn btn-danger">Limpiar campos</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import * as Yup from 'yup';

export default {
    data() {
        return {
            name: '',
            phone: '',
            birthday: '',
            state: '',
            city: '',
            zip: '',
            street: '',
            number: '',
            email: '',
            password: ''
        }
    },
    methods: {
        submitForm(e) {
            alert('Formulario enviado');

        },
        resetForm() {
            Object.entries(this.$data).forEach(([key]) => {
                this.$data[key] = '';
            });
        }
    },
    validations: {
        name: Yup.string().required("El nombre es requerido").matches(/^[a-zA-Z\s]*$/, "El nombre solo puede contener letras"),

    }
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
    width: 50%;
    margin: 0 auto;
}

.fullname,
.direction {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}

.direction-two {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}
</style>