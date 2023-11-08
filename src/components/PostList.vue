<template>
    <div v-if="lists.length <= 0" style="color: red;font-size: 200px;">pizda</div>
    <div v-else>
        <post-item 
        v-for="list in lists" 
        :list="list"
        :key="list.id"
        @remove="$emit('remove',list)"
        />   
    </div>
    

</template>

<script>
import PostItem from '@/components/PostItem.vue';
export default {
    components: {PostItem},
    props: {
        lists: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped>

</style>