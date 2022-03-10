<template>
	<view class="home-tab">
		<view class="home-tab-title">
			<view class="inner">
				<uni-segmented-control :current="current" :values="items.map(v=>v.title)" @clickItem="onClickItem" styleType="text" activeColor="#d4237a"></uni-segmented-control>
				
			</view>
			<uni-icons class="searchi" type="search" size="20"></uni-icons>
        <view class="content">
            <view v-if="current === 0">
                <homeRecommend></homeRecommend>
            </view>
            <view v-if="current === 1">
                <homeCategory></homeCategory>
            </view>
            <view v-if="current === 2">
                <home-new></home-new>
            </view>
			<view v-if="current === 3">
                <home-album></home-album>
            </view>
        </view>
    	</view>
        
	</view>
</template>

<script>
import homeAlbum from './home-album'
import homeCategory from './home-category'
import homeNew from './home-new'
import homeRecommend from './home-recommend'
	export default { 
// 		onLoad(){
// 			this.request({
// 				url:"http://service.picasso.adesk.com/v1/vertical/category/4e4d610cdf714d2966000000/vertical"
// ,

// 			}).then(res=>{
// 				//console.log(res.res.vertical)
// 				this.imgs=res.res.vertical
// 			})
// 		},
		components:{
			homeAlbum,
			homeCategory,
			homeNew,
			homeRecommend
		},
		data() {
			return {
				items:[
					{ title:"推荐" },
					{ title:"分类" },
					{ title:"最新" },
					{ title:"专辑" },
					
				],
				imgs:'',
				current: 0
			}
		},
  
		methods: {
			onClickItem(e) {
			if (this.current != e.currentIndex) {
				this.current = e.currentIndex;
			}
			}
		}
	}
</script>

<style lang="scss">
.home-tab{
	.home-tab-title{
		position: relative;
		.inner{
			width: 60%;
			margin:0 auto;
			
		}
		.searchi{
				position: absolute;
				top:0%;
				transform: translateY(50%);
				right: 4%;
			}
	}
}
</style>
