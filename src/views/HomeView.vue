<template>
  <UserLayout>
    <div class="h-screen bg-base-200 font-roboto">
      <div class="flex justify-end py-2 px-2 ">
        <button class="btn btn-neutral btn-md text-neutral-100 text-md" @click="showCreateBoardModal">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" class="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
          Create Board
        </button>

        <CreateColumnModal />
      </div>

      <div class="mx-auto space-y-3 max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div v-for="column in boardStorage" :key="column.columnId" class="p-4 bg-neutral-50 rounded shadow">
            <div class="flex justify-between">
              <h3 class="text-lg font-bold font-roboto">{{ column.name }}</h3>
              <button @click="DeleteColumn(column.columnId)" class="btn btn-sm btn-ghost">✕</button>
            </div>
            <div class="flex justify-end mt-2">
              <button @click="showCreateTaskModal(column.columnId)"
                class="btn btn-sm font-roboto bg-orange  text-neutral-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                    clip-rule="evenodd" />
                </svg>
                Add Task
              </button>
            </div>
            <div class="mt-2">
              <div v-for="task in column.tasks" :key="task.taskId" class="mb-2 p-2 bg-base-200 rounded shadow">
                <div class="flex flex-row justify-between">
                  <div class="flex flex-col">
                    <h4 class="font-bold">{{ task.taskName }}</h4>
                    <p class="text-base text-gray-600">{{ task.taskDescription }}</p>
                  </div>
                  <div class="flex items-center">
                    <button @click="DeleteTask(column.columnId, task.taskId)" class="btn btn-sm bg-maroon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#FFFFFF" class="size-5">
                        <path fill-rule="evenodd"
                          d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                          clip-rule="evenodd" />
                      </svg>

                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--create task-->
      <dialog id="create_task" class="modal font-roboto">
        <div class="modal-box">
          <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              @click="closeCreateTaskModal">✕</button>
          </form>
          <form @submit="CreateTaskSubmit">
            <h3 class="text-lg font-bold">Add New Task</h3>
            <div>
              <p class="pt-5 pb-2">Name</p>
              <input type="text" id="taskName" class="input input-bordered input-sm w-full max-w-md" />
            </div>
            <div>
              <p class="pt-5 pb-2">Description</p>
              <textarea id="taskDescription" class="textarea textarea-bordered w-full max-w-md"></textarea>
            </div>
            <div class="flex justify-end mt-4">
              <button type="submit" class="btn btn-sm btn-neutral">Create</button>
            </div>
          </form>
        </div>
      </dialog>
      <!--end create task-->
    </div>
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
