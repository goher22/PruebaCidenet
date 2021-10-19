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
                        <button type="button" class="btn btn-primary" @click="editUser(item)">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button type="button" class="btn btn-danger" @click="showModal(item)">
                            <i class="bi bi-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-end">
                <li :class="['page-item', {'disabled' : this.page === 1}]">
                    <a @click="nextuser(-1)" class="page-link" href="#" :aria-disabled="this.page == 1">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">{{this.page}}</a></li>
                <li :class="['page-item', {'disabled' : this.next}]">
                    <a @click="nextuser(1)" class="page-link" href="#" :aria-disabled="this.next">Next</a>
                </li>
            </ul>
        </nav>
        <Alert v-if="ishowModal" msg="Está seguro de que desea eliminar el empleado" @ok="even_ok" @close="ishowModal = false"></Alert>
        <EditUser v-if="ishowEditUser" :dataprops="userdata" @close="ishowEditUser = false"></EditUser>
    </div>
</template>

<script>
import Alert from '@/components/alert_modal.vue';
import EditUser from '@/components/user_modal.vue'
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'Users',
    data() {
      return {
        ishowModal: false,
        ishowEditUser: false,
        userdata: {},
        page: 1,
        next: false
      };
    },
    components: {
        Alert,
        EditUser
    },
    computed: {
        ...mapGetters(['getUsers'])
    },
    methods:{
        ...mapActions(['load_users', 'delete_users']),
        nextuser(number){
            this.page = this.page+number
            this.load_users(this.page).then(({ok, nextpage}) =>{
                if(ok) this.next = !nextpage
            })
        },
        showModal(data){
            this.userdata = {
                ...data
            }
            this.ishowModal = true
        },
        editUser(data) {
            this.userdata = {
                ...data
            },
            this.ishowEditUser = true
        },
        even_ok(){
            this.delete_users(this.userdata._id)
            this.ishowModal = false
        }

    },
    created: function () {
        this.load_users().then(({ok, nextpage}) =>{
            console.log(nextpage)
            if(ok) this.next = !nextpage
        })
    }
}
</script>
