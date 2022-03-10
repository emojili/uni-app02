<template>
	<scroll-view class="scroll-content" @scrolltolower="handleTolower" scroll-y v-if="imgs.length>0">
        <view class="text1">热门图集</view>
        <view class="top-con">
            <navigator class=imgtop v-for="(item,index) in topImgs" :key="index" :url="`/pages/categoryDetail/index?url=${item.url}`">
                <span style="align-self: flex-end">{{item.title}}</span>
                <img :src="item.src" alt="img"/>
            </navigator>
            
        </view>
        <view class="text2">热门图片</view>
        <view class="content">
                <view class="img" v-for="(value,index) of imgs" :key="index">
                    <goDetail :list="imgs" :index="index">
                        <img class="imgg" :src="value.img" alt="img"/>
                    </goDetail>
                </view> 
        </view>
	</scroll-view>
</template>

<script>
import goDetail from '../../../components/goDetail'
	export default {
        components:{
            goDetail
        },
        data(){
            return {
                imgs:'',
                params:{
                    limit:18,
                    order:"hot",
                    skip:0
                },
                topImgs:[
                    {
                        title:'美女',
                        src:"http://img5.adesk.com/6218865a31f613779577c3e4?imageMogr2/thumbnail/!640x480r/gravity/Center/crop/640x480&sign=4917d8b0eabdf1e4445ebfc566e55539&t=622896a3",
                        url:"http://service.picasso.adesk.com/v1/vertical/category/4e4d610cdf714d2966000000/vertical?limit=30&adult=false&first=1&order=new"
                    },
                    {
                        title:'文字',
                        src:"http://img5.adesk.com/620f5da1e7bce71c2e633ee0?imageMogr2/thumbnail/!640x480r/gravity/Center/crop/640x480&sign=0fd3508d2e3293c74ebe700297159b50&t=622896a3",
                        url:"http://service.picasso.adesk.com/v1/vertical/category/5109e04e48d5b9364ae9ac45/vertical?limit=30&adult=false&first=1&order=new"
                    },
                    {
                        title:'风景',
                        src:"http://img5.adesk.com/620db16ae7bce71c703a6827?imageMogr2/thumbnail/!640x480r/gravity/Center/crop/640x480&sign=a4e5de08807f30b97e79ea9fc77183ce&t=622896a3",
                        url:"http://service.picasso.adesk.com/v1/vertical/category/4ef0a35c0569795756000000/vertical?limit=30&adult=false&first=1&order=new"
                    },
                    {
                        title:'情感',
                        src:"http://img5.adesk.com/620e0152e7bce71c9b045231?imageMogr2/thumbnail/!640x480r/gravity/Center/crop/640x480&sign=c83167b2c255b952e91a83a2a412ccef&t=622896a3",
                        url:"http://service.picasso.adesk.com/v1/vertical/category/4e4d610cdf714d2966000002/vertical?limit=30&adult=false&first=1&order=new"
                    }
                ]
            }
        },
        methods:{
            handleTolower(){
                this.params.skip+=this.params.limit
                this.request1()
                console.log("到底了")
            },
            request1(){
                this.request({
                url:"http://service.picasso.adesk.com/v1/vertical/category/4e4d610cdf714d2966000000/vertical",
                data:this.params
			}).then(res=>{
				//console.log(res.res.vertical)
				this.imgs=[...this.imgs,...res.res.vertical]
			})
            }
        },

        mounted(){
            //console.log("recommend挂在")
            uni.setNavigationBarTitle({title:"推荐"})
			this.request1()
        // beforeDestroy(){
        //     console.log("recommend将要被销毁")
        // }
        }
	}
</script>

<style lang="scss" scoped>
.scroll-content{
    height: calc( 100vh - 43px);
    .text1{
        padding: 20rpx;
        border-left:5rpx solid white;
        font-size: 34rpx;
        font-weight: 600;
    }
    .top-con{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 2rpx;
        justify-content: center;
        .imgtop{
            display: flex;
            img{
            margin: 2rpx;
            width: 49vw;
            height: 25vh;
            }
            span{
                opacity: 1;
                color: white;
                position: absolute;
                z-index: 1;
                margin:1rpx;
            }
        }
    }
    .text2{
        padding: 20rpx;
        border-left:5rpx solid white;
        font-size: 34rpx;
        font-weight: 600;
    }
    .content{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content:center;
        .img{
            .imgg{
            width: 32vw;
            height: 40vh;
            border:5rpx solid white;
            }
        }
    }
}
</style>