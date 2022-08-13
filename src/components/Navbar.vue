<template>
  <nav>
    <div>
      <p>Hey there</p>
      <p class="email">Currently logged in as {{ user }}</p>
    </div>
      <a :href="`/.auth/login/aad`">
        <button class="email">Login</button>
      </a>
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
    return { user }
  }




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