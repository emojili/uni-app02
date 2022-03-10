<template>
	<scroll-view class="scroll-content" @scrolltolower="handleTolower" scroll-y v-if="imgs.length>0">
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
import goDetail from '../../components/goDetail'
	export default {
        components:{
            goDetail
        },
        onLoad(options){
            this.url=options.url
            uni.setNavigationBarTitle({title: options.name ? options.name : '热门'})
            this.request1()
        },
        data(){
            return {
                imgs:'',
                params:{
                    limit:18,
                    order:"hot",
                    skip:0
                },
                url:''
                
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
                url:this.url,
                data:this.params
			}).then(res=>{
				//console.log(res.res.vertical)
				this.imgs=[...this.imgs,...res.res.vertical]
			})
            }
        },
	}
</script>

<style lang="scss" scoped>
.scroll-content{
    height: calc( 100vh - 43px);
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
            width: 48vw;
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
    .text{
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