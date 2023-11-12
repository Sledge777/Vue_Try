<template>
    <div v-if="lists.length <= 0" style="color: red;font-size: 150px;">список постов пуст</div>
    <div v-else>
        <transition-group name="list">
            <post-item 
            v-for="list in lists" 
            :list="list"
            :key="list.id"
            @remove="$emit('remove',list)"
            /> 
        </transition-group>
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
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 0.4s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translatex(130px);
}
.list-move {
    transition: transform 0.4s ease;
}
</style>