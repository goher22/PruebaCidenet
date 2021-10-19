<template>
    <form class="container" @submit.prevent="saveUser">
        <div class="form-row my-5">
            <h1 class="mx-auto">{{title}}</h1>
        </div>
        <div v-if="alert.open" class="alert alert-danger" role="alert">
            {{alert.msg}}
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
import {mapGetters, mapActions} from 'vuex'
export default {
    props: ['userprops', 'title'],
    data () {
        return {
            user_data: {
                _id: null,
                document_type: '',
                document: '',
                first_name: '',
                second_name: '',
                surname: '',
                second_surname: '',
                country: '',
                area: '',
                date_admission: ''
            },
            alert: {
                open: false,
                msg: ''
            }
        }
    },
    computed: {
        ...mapGetters(['getCountries', 'getDocuments', 'getAreas'])
    },
    methods: {
        ...mapActions(['save_user', 'update_users']),
        saveUser () {
            if(this.user_data._id === null || this.user_data._id === undefined )
                this.save_user(this.user_data).then(resp => {
                    this.alert.open = !resp.ok
                    this.alert.msg = resp.msg
                })
            else
                this.update_users(this.user_data).then(resp => {
                    this.alert.open = !resp.ok
                    this.alert.msg = resp.msg
                    this.$emit('close')
                })
        }
    },
    mounted: function () {
        if(this.userprops){
            //Retirando valores no necesarios
            const {country, state, email, date_created, date_admission,...data} = this.userprops

            //Parceando la fecha
            const dateadmission = new Date(date_admission)
            const day = dateadmission.getDay() < 10 ? '0'+dateadmission.getDay() : dateadmission.getDay()
            const month = (dateadmission.getMonth()+1) < 10 ? '0'+(dateadmission.getMonth()+1) : dateadmission.getMonth()+1
            const year = (dateadmission.getFullYear()) < 10 ? '0'+dateadmission.getFullYear() : dateadmission.getFullYear()

            //Reasignando valores
            this.user_data = {
                country: country._id,
                ...data,
                date_admission: `${year}-${month}-${day}`
            }
        }
    }
}
</script>
