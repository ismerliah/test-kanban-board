<template>
  <UserLayout>
    <div class="flex justify-end py-2 px-2">
      <button class="btn btn-secondary btn-sm" @click="showCreateBoardModal">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          class="size-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
        Create Board
      </button>

      <CreateColumnModal/>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <div v-for="column in boardStorage" :key="column.columnId" class="p-4 bg-gray-100 rounded shadow">
        <div class="flex justify-between">
          <h3 class="text-lg font-bold">{{ column.name }}</h3>
          <button @click="DeleteColumn(column.columnId)" class="btn btn-sm btn-ghost">✕</button>
        </div>
        <div class="flex justify-end mt-2">
          <button @click="showCreateTaskModal(column.columnId)" class="btn btn-sm">Add Task</button>
        </div>
        <div class="mt-2">
          <div v-for="task in column.tasks" :key="task.taskId" class="mb-2 p-2 bg-white rounded shadow">
            <div class="flex flex-row justify-between">
              <div class="flex flex-col">
                <h4 class="font-semibold">{{ task.taskName }}</h4>
                <p class="text-base text-gray-600">{{ task.taskDescription }}</p>
              </div>
              <div class="flex items-center">
                <button @click="DeleteTask(column.columnId, task.taskId)" class="btn btn-sm btn-danger">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--create task-->
    <dialog id="create_task" class="modal">
      <div class="modal-box">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            @click="closeCreateTaskModal">✕</button>
        </form>
        <form @submit="CreateTaskSubmit">
          <h3 class="text-lg font-bold">Add New Task</h3>
          <div>
            <p class="pt-5 pb-2">Name</p>
            <input type="text" id="taskName" class="input input-bordered input-sm w-full max-w-xs" />
          </div>
          <div>
            <p class="pt-5 pb-2">Description</p>
            <textarea id="taskDescription" class="textarea textarea-bordered w-full max-w-xs"></textarea>
          </div>
          <div class="flex justify-end mt-4">
            <button type="submit" class="btn btn-sm btn-primary">Create</button>
          </div>
        </form>
      </div>
    </dialog>
    <!--end create task-->
  </UserLayout>
</template>


<script setup>
import CreateColumnModal from '@/components/CreateColumnModal.vue';
import UserLayout from '@/layouts/UserLayout.vue';
import { deleteTask, deleteColumn, addTaskToColumn, BOARD as boardStorage } from '@/stores/kanban-board';

let currentColumnId = null;

const CreateTaskSubmit = (e) => {
  e.preventDefault();
  const taskName = document.getElementById('taskName').value;
  const taskDescription = document.getElementById('taskDescription').value;

  if (currentColumnId) {
    addTaskToColumn(currentColumnId, taskName, taskDescription);
    closeCreateTaskModal();
  }
};

const DeleteTask = (columnId, taskId) => {
  deleteTask(columnId, taskId);
};

const DeleteColumn = (columnId) => {
  deleteColumn(columnId);
};

const showCreateBoardModal = () => {
  document.getElementById('create_column').showModal();
};

const showCreateTaskModal = (columnId) => {
  currentColumnId = columnId;
  document.getElementById('create_task').showModal();
};

const closeCreateTaskModal = () => {
  document.getElementById('create_task').close();
  currentColumnId = null;
  window.location.reload();
};
</script>


<style lang="scss" scoped></style>
