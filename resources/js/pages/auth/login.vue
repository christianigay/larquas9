<template>
    <div class="row justify-center">
      <q-card class="col-xs-12 col-md-4 q-ma-xl q-pa-lg">
        <div>Login</div>
        <FormInput v-model:modelValue="form.email" :label="`Email`"/>
        <FormPassword v-model:modelValue="form.password" :label="`Password`"/>
      </q-card>
    </div>
</template>
<script>
import { apiLogin } from '@/apis/auth.js'
export default {
    data: () => ({
        showPassword: false,
        form: {
          email: 'test',
          password: '',
        },
        dense: true
    }),
    methods: {
      handleLogin() {
        if(! this.data.password) return;
        if(! this.data.email) return;
        apiLogin(this.data)
        .then(({data}) => {
          if(data && data.user) {
            this.$router.push({name: 'dashboard'})
            console.log(data, 'data')

          }
        })
      }
    }
}
</script>