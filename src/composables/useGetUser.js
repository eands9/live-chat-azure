import { ref } from "vue"

const user = ref(null)

const getUser =  async () => {
  try {
    const response = await fetch('/.auth/me');
    const payload = await response.json();
    const { clientPrincipal } = payload;
    user.value = clientPrincipal.userDetails
    // console.log("user is ", clientPrincipal)
    // return user.value
  } catch (error) {
    console.error('No profile could be found');
    // return undefined;
  }
}

const useGetUser = () => {
  return { user, getUser }
}

export default useGetUser
