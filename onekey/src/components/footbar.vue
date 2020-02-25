<template>
    <div class="footerbar">
      <button :class="showStyle()">主页</button>
      <button :class="showStyle()">我的</button>
    </div>
</template>
<script type="text/javascript">
export default {
  name: 'footbar',
  data () {
    return {

    }
  },
  created (wss) {
    alert(wss)
  },
  methods: {
    showStyle () {
      const wss = document.body.offsetWidth
      console.log(wss)
      console.log('在哪')
      if (wss >= 500) {
        console.log('footbar12345')
        return 'none'
      } else {
        console.log('footbar654321')
        return 'barbutton'
      }
    }
  }
}
</script>

<style scoped>
  .barbutton{
    width: 50%;
    float:left;
    height:32px;
    padding:0;
    margin:0;
    border-radius:45px 0;
    outline:none;
  }
  .footerbar{
    height: 32px;
    width:100%;
    line-height: 32px;
    background:white;
    position:absolute;
    bottom: 1px;
    left:0;
    overflow:hidden;
  }
</style>
