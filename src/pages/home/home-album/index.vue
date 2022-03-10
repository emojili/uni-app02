<template>
<scroll-view class="scroll-content" @scrolltolower="handleTol" scroll-y v-if="banner.length>0">
	<view class="content">
        <swiper class="cswiper" autoplay indicator-dots circular>
			<swiper-item class="csitem" v-for="(item,index) in bannerList" :key="index">
				<image mode="aspectFill" class="csimg" :src="item.cover"></image>
			</swiper-item>
		</swiper>

		
		<view class="album-list">
		
				<view class="album-item" v-for="(item,index) in banner" :key="index"
				>
				<view class="img">
					<img :src="item.cover"/>
				</view>
				<view class="album-info">
					<view class="al-title">{{item.name}}</view>
					<view class="al-detail">{{item.desc}}</view>
				</view>
				</view>
		
		</view>
		
	</view>
	</scroll-view>
</template>

<script>
	export default {
		data(){
			return {
				banner:'',
				bannerList:'',
				text:"收藏"
			}
		},
		methods:{
			changel(){
				// console.log(e)
				// this.checked=!this.checked
				
			},
			handleTol(){

				console.log("到底了")
			},
			
		},
		mounted(){
			//修改标题
			uni.setNavigationBarTitle({title:"专辑"})
			this.request({
				url:"http://service.picasso.adesk.com/v1/wallpaper/album",
				}).then(res=>{
					this.bannerList=[res.res.album[7],res.res.album[12],res.res.album[18]]
					this.banner=res.res.album
				
				})
		} 
	}
</script>
<style scoped>
.scroll-content{
	height: calc( 100vh - 36px );
}
.cswiper{
	height: 300rpx;
}
.csimg{
	width: 100%;
	height: 100%;
}
.img img{
	width: 100%;
	height: 100%;
}
.album-item{
	width: 100%;
	height: 250rpx;
	display: flex;
	flex-direction: row;
	margin-bottom: 3px;
}
.album-info{
	position: relative;
	margin-top: 1px;
	padding: 10px;
	text-align: right;
	flex: 1.5;
}
.img{
	flex: 1;
}
button{
	position: absolute;
	right: 5px;
	height: 25px;
	width: 60px;
	font-size: 13px;
	line-height: 25px;
}
.al-btn{
	margin-bottom:1px;
}
.al-detail{
	position: absolute;
	font-size: 10px;
	opacity: 0.5;
	bottom: 2px;
	right: 2px;
}
</style>
