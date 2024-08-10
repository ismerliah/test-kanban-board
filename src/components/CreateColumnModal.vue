<template>
    <div>
        <dialog id="create_column" class="modal font-roboto">
            <div class="modal-box">
                <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        @click="closeCreateBoardModal">✕</button>
                </form>
                <form @submit="CreateColumnSubmit">
                    <h3 class="text-lg font-bold">Add New Board</h3>
                    <p class="pt-5 pb-2">Name</p>
                    <input type="text" id="columnName" class="input input-bordered input-sm w-full max-w-md" />
                    <div class="flex justify-end mt-4">
                        <button class="btn btn-neutral btn-sm">Create</button>
                    </div>
                </form>
            </div>
        </dialog>
    </div>
</template>

<script setup>
import { addColumn } from '@/stores/kanban-board';

const CreateColumnSubmit = (e) => {
  e.preventDefault();
  const columnName = document.getElementById('columnName').value;
  addColumn(columnName);
  closeCreateBoardModal();
};

const closeCreateBoardModal = () => {
  document.getElementById('create_column').close();
  window.location.reload();
};

</script>

<style lang="scss" scoped></style>