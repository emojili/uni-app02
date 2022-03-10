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
                    order:"new",
                    skip:0
                },
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
                url:"http://service.picasso.adesk.com/v1/vertical/vertical",
                data:this.params
			}).then(res=>{
				//console.log(res.res.vertical)
				this.imgs=[...this.imgs,...res.res.vertical]
			})
            }
        },
		mounted(){
			//修改标题
			uni.setNavigationBarTitle({title:"最新"})
			this.request1()
		} 
	}
</script>

<style lang="scss" scoped>
.scroll-content{
    height: calc( 100vh - 43px);
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
