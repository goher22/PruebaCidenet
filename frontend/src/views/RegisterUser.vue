<template>
    <form class="container" @submit.prevent="saveUser">
        <div class="form-row my-5">
            <h1 class="mx-auto">Registro de usuario</h1>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label>Tipo de documento</label>
                <select class="form-control" v-model="user_data.document_type">
                    <option v-for="(item, index) in this.getDocuments" :key="index+'typeDocument'" :value="item._id">{{item.name}}</option>
                </select>
            </div>
            <div class="form-group col-md-6">
                <label>Numero de documento</label>
                <input type="text" class="form-control" v-model="user_data.document">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label>Primer nombre</label>
                <input type="text" class="form-control" v-model="user_data.first_name">
            </div>
            <div class="form-group col-md-6">
                <label>Segundo nombre</label>
                <input type="text" class="form-control" v-model="user_data.second_name">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label>Primer apellido</label>
                <input type="text" class="form-control" v-model="user_data.surname">
            </div>
            <div class="form-group col-md-6">
                <label>Segundo apellido</label>
                <input type="text" class="form-control" v-model="user_data.second_surname">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-4">
                <label>Pais</label>
                <select class="form-control" v-model="user_data.country">
                    <option v-for="(item, index) in this.getCountries" :key="index+'country'" :value="item._id">{{item.name}}</option>
                </select>
            </div>
            <div class="form-group col-md-4">
                <label>Area</label>
                <select class="form-control" v-model="user_data.area">
                    <option v-for="(item, index) in this.getAreas" :key="index+'area'" :value="item._id">{{item.name}}</option>
                </select>
            </div>
            <div class="form-group col-md-4">
                <label>Fecha de ingreso</label>
                <input type="date" class="form-control" v-model="user_data.date_admission">
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Guardar</button>
    </form>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data () {
        return {
            user_data: {
                document_type: '',
                document: '',
                first_name: '',
                second_name: '',
                surname: '',
                second_surname: '',
                country: '',
                area: '',
                date_admission: ''
            }
        }
    },
    computed: {
        ...mapGetters(['getCountries', 'getDocuments', 'getAreas'])
    },
    methods: {
        saveUser () {
            console.log(this.user_data)
        }
    }
}
</script>
