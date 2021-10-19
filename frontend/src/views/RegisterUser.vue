<template>
    <form class="container">
        <div class="form-row my-5">
            <h1 class="mx-auto">Registro de usuario</h1>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label>Tipo de documento</label>
                <select class="form-control" v-model="user.document_type">
                    <option v-for="(item, index) in this.getDocuments" :key="index">2</option>
                </select>
            </div>
            <div class="form-group col-md-6">
                <label>Numero de documento</label>
                <input type="text" class="form-control" v-model="user.document">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label>Primer nombre</label>
                <input type="text" class="form-control" v-model="user.first_name">
            </div>
            <div class="form-group col-md-6">
                <label>Segundo nombre</label>
                <input type="text" class="form-control" v-model="user.second_name">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label>Primer apellido</label>
                <input type="text" class="form-control" v-model="user.surname">
            </div>
            <div class="form-group col-md-6">
                <label>Segundo apellido</label>
                <input type="text" class="form-control" v-model="user.second_surname">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-4">
                <label>Pais</label>
                <select class="form-control" v-model="user.country">
                    <option v-for="(item, index) in this.getCountries" :key="index+'country'">2</option>
                </select>
            </div>
            <div class="form-group col-md-4">
                <label>Area</label>
                <select class="form-control" v-model="user.area">
                    <option v-for="(item, index) in this.getAreas" :key="index+'area'">2</option>
                </select>
            </div>
            <div class="form-group col-md-4">
                <label>Fecha de ingreso</label>
                <input type="date" class="form-control" v-model="user.date_admission">
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
            user:{
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
    }    
}
</script>
