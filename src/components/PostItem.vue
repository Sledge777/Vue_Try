<template>
    <div class="list">
        <div>
            <h1>Пост</h1>
            <div>id: {{ list.id }}</div>
            <div>Заголовок: {{ list.title }}</div>
            <div>Описание: {{ list.body }}</div>
        </div>
        <div>
            <first-Button
            @click="$emit('remove',list)"
            >Удалить</first-Button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Object,
            required: true,
        }
    }
} 
</script>

<style>
.list {
    border: 2px solid green;
    margin-top:20px;
    padding:10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>