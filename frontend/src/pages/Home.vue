<template>
    <div class="memo">
        <ul>
            <li v-for="d in state.data" :key="d.id" class="memo-item">
                <div class="memo-content">
                    <router-link :to="'/' + d.PF_TITLE" class="link">{{ d.PF_CONTENT }}</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {reactive} from 'vue';
    import axios from 'axios';

    export default {
        name: "Memo",
        setup() {
            const state = reactive({data: []})
            const add = () => {
                const content = prompt("내용을 입력해주세요.")
                if (!content) {
                    alert("내용을 입력해주세요");
                    return add();
                }
                axios
                    .post("/api/memos", {content})
                    .then((res) => {
                        state.data = res.data;
                    })
            };

            const edit = (id) => {
                const content = prompt("내용을 입력해주세요", state.data.find(d => d.id === id).content)
                if (!content) {
                    alert("내용을 입력해주세요");
                    return
                } else {
                    axios
                        .put("/api/memos/" + id, {content})
                        .then((res) => {
                            state.data = res.data
                        })
                }
            }

            const del = (id) => {
                axios
                    .delete("/api/memos/" + id)
                    .then((res) => {
                        alert("삭제 되었습니다")
                        state.data = res.data
                    })
            }

            axios
                .get("/api/portfolio")
                .then((res) => {
                    state.data = res.data;
                });

            return {state, add, edit, del};
        }
    }
</script>

<style lang="scss" scoped="scoped">
    .memo {
        .act {
            padding: 10px 10px 5px 5px;
            text-align: right;
        }
        ul {
            list-style: none;
            padding: 15px;
            margin: 0;

            li {
                background-color: #907b7b;
                padding: 15px;
                margin: 10px 0;
                border: 1px solid #eee;
            }
        }
    }

    .memo-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border: 1px solid #ccc;
        margin-bottom: 10px;
    }

    .memo-content {
        flex-grow: 1;
        cursor: pointer;
    }
    .link {
        color: #000000;
        text-decoration: none;
    }
</style>