<template>
    <div class="Article">
        <div class="loading" v-if="isLoading">
            <img src="../assets/loading.gif">
        </div>
        <div v-else>
            <div class="topic_header">
                <div class="topic_title">{{post.title}}</div>
                <ul>
                    <li>•发布于：{{post.create_at | formatDate}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Aricle",
        data(){
            return {
                isLoading: false
            }
        }
    }
</script>

<style scoped>

</style>