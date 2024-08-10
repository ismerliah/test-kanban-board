<template>
    <div class="container mx-auto font-roboto">
        <div class="navbar bg-blue">
            <div class="flex-1">
                <RouterLink :to="LoggedIn ? '/home' : '/'" class="btn btn-ghost text-2xl text-neutral-100 font-bold">KANBAN BOARD</RouterLink>
            </div>
            <div class="flex-none gap-2">
                <RouterLink to="/login" class="btn btn-ghost text-neutral-100" v-if="!LoggedIn">LOG IN</RouterLink>
                <div v-else class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-sm bg-pink text-neutral-100 ">
                        <button>
                            <p>{{ storedUser.username }}</p>
                        </button>
                    </div>
                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a @click="logout">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const LoggedIn = ref(false);
const username = localStorage.getItem("username");
const storedUser = JSON.parse(localStorage.getItem('user'));

onMounted(() => {
    if (localStorage.getItem("isLoggedIn", true)) {
        LoggedIn.value = true;
    }
})

const logout = () => {
    LoggedIn.value = false;
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    //window.location.href = "/";
    router.push('/');
};
</script>

<style lang="scss" scoped></style>