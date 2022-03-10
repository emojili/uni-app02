<template>

	<scroll-view class="content" enable-flex="true" @scrolltolower="handleTolower" scroll-y v-if="lists.length>0">
      <navigator class="items" v-for="item in lists" :key="item.id" 
      :url="`/pages/categoryDetail/index?name=${item.name}&url=http://service.picasso.adesk.com/v1/vertical/category/${item.id}/vertical`">
        <view class="i-name">{{item.name}}</view>
        <image mode="aspectFill" :src="item.cover"></image>
      </navigator>
	</scroll-view>
</template>

<script>
	export default { 
		mounted(){
			//修改标题
			uni.setNavigationBarTitle({title:"分类"})
			this.request({
                url:"http://service.picasso.adesk.com/v1/vertical/category?adult=false&first=1",
			}).then(res=>{
				//console.log(res.res)
				this.lists=res.res.category
			})
		},
		data(){
        return {
            lists:'',
        }
    },
    methods:{
       handleTolower(){
                //console.log("到底了")
            },
    }
    // onLoad(options){
    //     const items = JSON.parse(decodeURIComponent(options.lists));
    //     console.log(items[0].img)
    //     console.log(options)
    //     this.lists=items
    //     this.index=options.index
    // }
	}
</script>

<style scoped>
.content{
  width: 100vw;
  height: calc( 100vh - 43px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}
.items{
  border: 2px solid rgb(248, 243, 247);
  border-radius: 5px;
  width: 200rpx;
  height: 200rpx;
  margin: 5px;
  position: relative;
}
.i-name{
  position: absolute;
  bottom: 5px;
  left: 5px;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  opacity: 0.6;
  padding: 2px;
}
image{
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
</style>

