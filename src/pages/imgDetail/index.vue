<template>
    <view class="content">
        <swiperAction @swiperAction="swiperAction">
            <image mode="aspectFill" :src="lists[index].img" alt="img" @click="downLoad"></image>
            <view class="span" @click="downLoad">点击下载</view>
        </swiperAction>
    </view>
</template>

<script>
import swiperAction from '../../components/swiperAction'
	export default { 
	
		data(){
        return {
            lists:'',
            index:''
            }
        },
        components:{
            swiperAction
        },

        onLoad(options){
            const items = JSON.parse(decodeURIComponent(options.lists));
            // console.log(items[0].img)
            // console.log(options)
            this.lists=items
            this.index=options.index
        },
        methods:{
            async downLoad(){
                await uni.showLoading({
                    title:'下载中'
                })
                //console.log("下载图片")
                //将远程文件下载到小程序内存tempFilePath
                const result1 = await uni.downloadFile({ url:this.lists[this.index].img }) 
                const { tempFilePath } = result1[1]
                //将小程序内存中的临时文件下载到本地
                const result2 = await uni.saveImageToPhotosAlbum({ filePath:tempFilePath })
                //下载成功
                uni.hideLoading()
                await uni.showToast({
                    title:'下载成功'
                })

            },
            swiperAction(dir){
                if(dir.direction === 'left' && this.index < this.lists.length-1){
                    this.index++

                }else if(dir.direction === 'right' && this.index > 0){
                    this.index--
                }else{
                    uni.showToast({
                        title:"没有更多数据了",
                        icon: 'none'
                    })
                }
            }
        }
	}
</script>

<style lang="scss" scoped>
.content{
    width: 100vw;
    height: 100vh;
    image{
        width: 100vw;
        height: 100vh;
       
    }
    .span{
        color:white;
        position: absolute;
        bottom: 2%;
        right: 0px;
        margin-right: 20rpx;
        border: 1px solid white;
        border-radius: 5px;
        opacity: 0.5;
        width: 70px;
        height: 50rpx;
        line-height: 50rpx;
        text-align: center;
        font-size: 14px;
    }
}
</style>