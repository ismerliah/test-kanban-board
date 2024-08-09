<template>
    <div class="container mx-auto">
        <div class="navbar bg-base-100">
            <div class="flex-1">
                <RouterLink to="/" class="btn btn-ghost text-xl">Kanban Board</RouterLink>
            </div>
            <div class="flex-none gap-2">
                <RouterLink to="/login" class="btn btn-sm" v-if="!LoggedIn">Log In</RouterLink>
                <div v-else class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost">
                        <button>
                            <p>{{ username }}</p>
                        </button>
                    </div>
                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a class="justify-between">
                                Profile
                            </a>
                        </li>
                        <li><a @click="logout">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script setup>
import { UserCircleIcon } from "@heroicons/vue/24/outline";
import { onMounted, ref } from "vue";

const LoggedIn = ref(false);
const username = localStorage.getItem("username");

onMounted(() => {
    if (localStorage.getItem("isLoggedIn", true)) {
        LoggedIn.value = true;
    }
})

// const login = () => {
//     // window.location.href = '/login';
//     isLoggedIn.value = true;
// };

const logout = () => {
    LoggedIn.value = false;
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
};
</script>

<style lang="scss" scoped></style>