<template>
    <UserLayout>
      <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content max-w-md flex flex-col">
          <div class="text-center">
            <h1 class="text-5xl font-bold">Kanban Board</h1>
          </div>
          <div class="text-justify">
            <p class="py-6">
              A kanban board is an agile project management tool designed to help visualize work, limit work-in-progress, and maximize efficiency (or flow). It can help both agile and DevOps teams establish order in their daily work.
            </p>
            <div class="text-center">
              <RouterLink to="/login" class="btn btn-outline bg-navy text-neutral-100 font-roboto">GET STARTED</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  </template>
  <script setup>
  import UserLayout from '@/layouts/UserLayout.vue';
  
  
  </script>
  
  <style lang="scss" scoped></style>