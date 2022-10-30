<template>
    <header>
        <div class="img-wrpper w-screen">
            <figure class="w-screen">
                <img class="w-screen" src="@/assets/bg-desktop-dark.jpg" alt="" />
                <img class="w-screen" src="" alt="" />
            </figure>
        </div>
        <div class="header-content-wrap absolute top-[70px] left-[485px]">
            <main class="width">
                <!-- HEADER - TOGGOLE -->
                <div class="flex items-center justify-between">
                    <h1 class="tracking-[.80em] font-[800] text-gray-50">TODO</h1>
                    <figure>
                        <img src="@/assets/icon-moon.svg" alt="" />
                    </figure>
                </div>
                <!-- INPUT FIELD-->
                <form v-on:submit="addNewTask()">
                    <div class="mt-5 w-full h-16 rounded-md outline-none bg-slate-50 p-5">
                        <button disabled
                            class="w-6 h-6 mr-5 align-middle bg-slate-50 border-solid border rounded-sm border-slate-300"></button>
                        <input v-model.{lazy,trim}="todoTask" class="outline-none bg-slate-50" type="text"
                            placeholder="Create your new todo..." @keyup.enter="addNewTask" />
                    </div>
                </form>
            </main>
        </div>
        <div class="todo-list-wrapper absolute top-72 left-[485px]">
            <ul class="width rounded-md">
                <div>
                    <li v-for="task in todoTaskArray" :key="task" class="flex bg-slate-50 h-16 p-5">
                        <span>
                            <input type="checkbox" class="checkbox-round w-6 h-6 mr-5 align-middle bg-slate-50 border-solid border rounded-full border-slate-600">
                        </span>
                        <p class="flex-auto">{{task}}</p>
                        <figure class="cursor-pointer mt-2" @click="clearTodo(task)">
                            <img src="@/assets/icon-cross.svg" alt="">
                        </figure>
                    </li>
                </div>
                <li v-if="todoTaskArray.length > 0" class="flex justify-between bg-slate-50 h-16 p-5 border-t-2 shadow-lg">
                    <div>{{todoTaskArray.length}}</div>
                    <div>all</div>
                    <div>active</div>
                    <div>Completed</div>
                    <div>clear complted</div>
                </li>
            </ul>
        </div>
    </header>
</template>
<script>
export default {
    name: "Header",
    data() {
        return {
            todoTask: null,
            todoTaskArray: [],
            todoCheckedArray: [],
            todoAlltask: [],

        }
    },
    methods: {
        addNewTask() {
            this.todoTaskArray.push(this.todoTask)
            this.todoAlltask.push(this.todoTask)
            this.todoTask = '';
        },
        clearTodo(task) {
            const removedTask = this.todoTaskArray.filter((taskArray)=> {
                return taskArray !== task
            })
            this.todoTaskArray.push(removedTask)
        }
    }
};
</script>
<style scoped>
.header-content-wrap div h1 {
    font-size: 3rem;
}

.header-content-wrap .width {
    width: 50rem;
}
.todo-list-wrapper .width {
    width: 50rem;
}

</style>
