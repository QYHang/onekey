<template>
  <div class="hello">
    <span v-bind:class="showStyle()">
      <input type="text" name=" " class="input_t" placeholder="请输入内容"  />
    </span>
    <h1></h1>
    <button>{{ msg }}</button>
    <footbar v-if="fShow"></footbar>
  </div>
</template>

<script>
import footbar from '../components/footbar'
export default {
  name: 'onekeyindex',
  data () {
    return {
      msg: '一键查询',
      fShow: ''
    }
  },
  components: {footbar},
  // mounted() {
  //   const wss = document.body.offsetWidth;
  //     console.log('这里')
  //     console.log(wss)
  //       return wss;
  // },
  mounted () {
    this.footbarShow()
  },
  methods: {
    showStyle () {
      let wss = document.body.offsetWidth
      console.log(wss)
      console.log('在哪')
      if (wss >= 500) {
        console.log('showStyle12345')
        return 'input_p'
      } else {
        console.log('showStyle654321')
        return 'input_b'
      }
    },
    footbarShow () {
      let wss = document.body.offsetWidth
      var fShow = ''
      if (wss >= 500) {
        console.log('footbarShow12345')
        this.fShow = false
        return fShow
      } else {
        console.log('footbarShow7777777')
        this.fShow = true
        return fShow
      }
    }
  }
}
</script>
<!-- onfocus="javascript:if(this.value==='请输入内容')this.value='';" -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .input_b{
    border:1px solid #b6b6b6;
    display:inline-block;
    height:32px;
    width: 80%;
    vertical-align:top;
    overflow: hidden;
  }
  .input_b:hover{
    border-color: #87cefa;
  }
  .input_p:hover{
    border-color: #87cefa;
  }
  .input_p{
    border:1px solid #b6b6b6;
    display:inline-block;
    height:32px;
    width: 500px;
    vertical-align:top;
    overflow: hidden;
  }
  .input_t{
    text-align: center;
    border:none;
    height: 22px;
    width: 90%;
    line-height:22px;
    margin:5px 5% 5px;
    padding: 0;
    /*background: transparent;*/
    /*border: 0;*/
    outline: 0;
    -webkit-appearance: none;
  }
</style>
