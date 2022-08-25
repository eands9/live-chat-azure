<template>
  <nav>
    <div>
      <p>Hey there</p>
      <!-- <p class="email">Currently logged in as {{ userInfo.userDetails }}</p> -->
      <p class="email">Currently logged in as {{ user }}</p>
    </div>
        <a
          v-if="user"
          :href="`/.auth/logout?post_logout_redirect_uri=/.auth/login/aad`"
          ><button class="email">Logout</button></a
        >
        <a v-if="!user" :href="`/.auth/login/aad`"
          ><button class="email">Login</button></a
        >
        <!-- <button @click="handleClick">Get User</button> -->
  </nav>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
// import useLogout from '../composables/useLogout'
import useGetUser from '../composables/useGetUser'

export default {
  setup(){
    const { user, getUser } = useGetUser()
    onMounted(async()=>{
      await getUser()
    })

    // const handleClick = async() => {
    //   await getUser()
    // }
    return { user }
  },
  // data(){
  //   return {
  //     name: '',
      // userInfo: {
      //   type: Object,
      //   default() {},
      // },
  //   }
  // },
  // async created() {
  //   this.userInfo = await this.getUserInfo();
  // },
  // methods: {
  //   async getUserInfo() {
  //     try {
  //       const response = await fetch('/.auth/me');
  //       const payload = await response.json();
  //       const { clientPrincipal } = payload;
  //       return clientPrincipal;
  //     } catch (error) {
  //       console.error('No profile could be found');
  //       return undefined;
  //     }
  //   },
  //   getUserName(name) {
  //     console.log(name);
  //     this.name = name;
  //   },
  // }




}
</script>

<style>
  nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>