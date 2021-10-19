<template>
    <div class="container">

        <div class="row mt-5">
            <div class="col-12 text-center">
                <h1 class="mx-auto">Listado de Usuario</h1>
            </div>
            <div class="input-group my-3 col-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">Button</button>
                </div>
            </div>
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Documento</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Pais</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Accion</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in this.getUsers" :key="index+'users'">
                    <td>{{item.document}}</td>
                    <td>{{item.first_name+' '+item.second_name}}</td>
                    <td>{{item.surname+' '+item.second_surname}}</td>
                    <td>{{item.country.name}}</td>
                    <td>{{item.email}}</td>
                    <td>
                        <button type="button" class="btn btn-primary">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button type="button" class="btn btn-danger">
                            <i class="bi bi-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'Users',
    computed: {
        ...mapGetters(['getUsers'])
    },
    methods:{
        ...mapActions(['load_users'])
    },
    created: function () {
        this.load_users()
    }
}
</script>
