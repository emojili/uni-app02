<template>
    <view @click="detail">
        <slot></slot>
    </view>
</template>
<script>
export default {
    props:{
        list:Array,
        index:Number
    },
    methods:{
        detail(){
            //console.log("dianle")
            getApp().globalData.imgList=this.list
            getApp().globalData.imgIndex=this.index
            const lists=encodeURIComponent(JSON.stringify(this.list))
            uni.navigateTo({
                url:`/pages/imgDetail/index?lists=${lists}&index=${this.index}`
            })
        } 
    }
}
</script>
<style scoped>

</style>