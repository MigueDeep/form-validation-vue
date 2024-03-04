<template>
    <div class="container">
        <div class="row">
            <h1 class="title">Validacion de formulario</h1>
        </div>
        <div>
            <div class="card">
                <div class="card-body">
                    <FormulateForm 
                        name="my-form"
                        v-model="formValues"
                        @submit="submitForm" @reset="resetForm">
                        <!-- Nombre -->
                        <div class="mb-3">
                            <label for="name" class="form-label">Nombre copleto</label>
                            <FormulateInput ref="inputName" type="text" id="name" name="name"
                                validation="^required|min:4,length|matches:/^[a-zA-Z\s]*$/"
                                :validation-messages="{
                                    required: 'El nombre es requerido',
                                    min: 'El nombre debe tener al menos 4 caracteres',
                                    matches: 'El nombre solo puede contener letras',
                                }"

                            />
                        </div>

                        <div class="fullname">
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
                            <!-- Fecha de nacimiento -->
                            <div class="mb-3">
                                <label for="birthday" class="form-label">Fecha de nacimiento</label>
                                <FormulateInput type="date" name="date" 
                                validation="^required|date|"
                                :validation-messages="{
                                required: 'La fecha de nacimiento es requerida',
                                date: 'La fecha debe tener el formato MM/DD/YYYY'
                                }" 
                                />
                            </div>
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
                                validation="^required"
                                :validation-messages="{
                                    required: 'La contraseña es requerida'
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

                        {{ formValues }}
                        
                        
                        <button type="submit" class="btn btn-primary mx-2">Enviar</button>
                        <button type="reset" @click="resetForm" class="btn btn-danger">Limpiar campos</button>

                    </FormulateForm>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            formValues: {},
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
    width: 50%;
    margin: 0 auto;
}
</style>