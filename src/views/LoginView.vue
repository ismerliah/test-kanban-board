<template>
    <UserLayout>
        <div class="h-screen bg-base-200 font-roboto">
            <div class="h-full flex flex-col justify-center items-center">
                <div class="bg-white rounded-3xl border-y-indigo-950 shadow-lg mt-10 p-12 md:w-2/5">
                    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 class="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                            LOG IN
                        </h2>
                    </div>

                    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form @submit="handlesubmit" class="space-y-7">
                            <div>
                                <label class="input input-bordered input-secondary flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                        class="h-4 w-4 opacity-70">
                                        <path
                                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                        <path
                                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                    </svg>
                                    <input id="email" type="text" class="grow" placeholder="Email" />
                                </label>
                            </div>

                            <div>
                                <label class="input input-bordered input-secondary flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                        class="h-4 w-4 opacity-70">
                                        <path fill-rule="evenodd"
                                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <input type="password" id="password" class="grow" placeholder="Password" />
                                </label>
                            </div>

                            <div>
                                <button class="btn btn-neutral flex w-full justify-center rounded-md">LOG IN</button>
                            </div>
                        </form>

                        <p class="mt-10 text-center text-sm text-gray-500">
                            Do not have an account?
                            <RouterLink to="/register" class="font-semibold leading-6 text-maroon">Register</RouterLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </UserLayout>
</template>

<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import router from '@/router';
import { ref } from 'vue';

const handlesubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const storedUser = JSON.parse(localStorage.getItem('user')); 

    if (email && password && storedUser && storedUser.email && storedUser.username && storedUser.password) {
        localStorage.setItem('isLoggedIn', true);
        //window.location.href = '/home';
        router.push('/home');
    } else {
        alert('Invalid email or password');
    }
}


</script>

<style lang="scss" scoped></style>