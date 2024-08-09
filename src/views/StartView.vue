<template>
    <UserLayout>
      <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Kanban Board</h1>
            <p class="py-6">
              Managing homework can be overwhelming, especially when you have multiple assignments with different deadlines.
            </p>
            <RouterLink to="/login" class="btn btn-primary">Get Started</RouterLink>
          </div>
        </div>
      </div>
    </UserLayout>
  </template>
  <script setup>
  import UserLayout from '@/layouts/UserLayout.vue';
  
  
  </script>
  
  <style lang="scss" scoped></style>