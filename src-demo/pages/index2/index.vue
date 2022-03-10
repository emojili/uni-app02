<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}index2</text>
            <text class="title2">{{title}}index2</text>
            <index><span>slot</span></index>
		</view>
	</view>
</template>

<script>
import index from '../index'
	export default {
		data() {
			return {
				title: 'Hello2'
			}
        },
        components:{
            index
        },

		onLoad() {
            //console.log(this.baseurl)//访问全局数据方式1
            //getApp()当前小程序所有应用实例
            //console.log(getApp().globalData.baseurl2)访问全局数据方式2
		},
		methods: {

        },
        
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
