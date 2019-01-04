<template>
  <table class="m-table">
    <thead>
    <tr>
      <td>aaa</td>
      <td>bbb</td>
      <td>ccc</td>
      <td>ddd</td>
      <td>eee</td>
      <td>fff</td>
    </tr>
    </thead>
    <tbody>
    <tr  class="list">
      <td class="id">ID:123456789</td>
      <td class="pos">第三根红色管子阀门的末端位置</td>
      <td class="fixed"></td>
      <td class="open-state">正在开</td>
      <td class="open-amounts"><span>100</span><span class="unit percent">%</span></td>
      <td class="pos-amounts"><span></span><span class="unit percent">%</span></td>
      <td class="online-state">在线<i class="dot"></i></td>
      <td class="AI">123<span class="unit">AI</span></td>
      <td class="Mpa">52<span class="unit">Mpa</span></td>
      <td class="mA">4-20<span class="unit">mA</span></td>
      <td class="warning">报警<i class="dot"></i></td>
      <td class="AO">456<span class="unit">AO</span></td>
      <td class="ATMP">32<span class="unit">℃</span></td>
      <td class="VFW">32<span class="unit">m^3/h</span></td>
      <td class="msg"></td>
    </tr>
    <tr  class="list un-active">
      <td class="id">ID:123456789</td>
      <td class="pos">第三根红色管子阀门的末端位置第三根红色管子阀门的末端位置</td>
      <td class="open-state">半开位</td>
      <td class="open-amounts">50<span class="unit percent">%</span></td>
      <td class="pos-amounts">30<span class="unit percent">%</span></td>
      <td class="online-state">在线<i class="dot"></i></td>
      <td class="AI">123<span class="unit">AI</span></td>
      <td class="Mpa">52<span class="unit">Mpa</span></td>
      <td class="mA">4-20<span class="unit">mA</span></td>
      <td class="warning">报警<i class="dot"></i></td>
      <td class="AO">456<span class="unit">AO</span></td>
      <td class="ATMP">32<span class="unit">℃</span></td>
      <td class="VFW">32323<span class="unit">m^3/h</span></td>
      <td class="msg active">阀位不变</td>
      <td class="open-tooltip"></td>
      <td class="tooltip">
        <button class="open-valve">开阀</button>
        <button class="close-valve">关阀</button>
        <button class="stop-valve">停止</button>
        <button class="mid-pos">中间位置</button>
        <div class="u-close-tooltip"></div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
    export default {
        name: "test"
    }
</script>

<style scoped>
  .m-table{
    width :100%;
    border: 1px solid #ccc;
  }
  .m-table thead{
    display: none;
  }
  .m-table tbody{
    overflow :hidden;
    text-align: center;

  }
  .m-table .list{
    position: relative;
    display: inline-block;
    margin: 20px;
    width: 502px;
    height: 308px;
    background: url("../assets/images/engine_bg.png") no-repeat center;
    background-size: 100% auto;
    border: 1px solid #eee;
    color: #323b56;
  }
  .m-table .list .id,
  .m-table .list .pos{
    position: absolute;
    top: 13px;
    left:0;
    width: 100%;
    font-size: 13px;
  }
  .m-table .list .pos{
    left: 168px;
    top: 36px;
    width: 40%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
  }
  .m-table .list .open-state{
    position: absolute;
    left: 50%;
    top: 106px;
    width: 86px;
    margin-left: -43px;
    height: 29px;
    line-height: 30px;
    background: url("../assets/images/polygon_bg.png") no-repeat;
    background-size: 100% auto;
    color: #542c0c;
    font-size: 15px;
    font-weight: bold;
  }

  .m-table .list .open-amounts,
  .m-table .list  .pos-amounts{
    position: absolute;
    left: 218px;
    top: 154px;
    font-size: 22px;
    font-weight: bold;
  }
  .m-table .list  .pos-amounts{
    left: 246px;
    top: 202px;
    font-size: 18px;
    font-weight: bold;
  }
  .m-table .list  .msg{
    position: absolute;
    bottom: 34px;
    left: 37%;
    width: 26%;
    color: #8895b4;
    font-size: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .m-table .list  .msg.active{
    color: #fe5757;
  }

  .m-table .list .online-state,
  .m-table .list .warning{
    position: absolute;
    left: 60px;
    top: 110px;
    font-size: 14px;
  }
  .m-table .list .warning{
    left: 394px;
  }
  .m-table .list .online-state .dot,
  .m-table .list .warning .dot{
    display: inline-block;
    vertical-align: middle;
    width: 12px;
    height: 12px;
    margin-left: 6px;
    background-color: #00d765;
    border-radius: 100%;
  }
  .m-table .list .warning .dot{
    background-color: #ff5151;
  }


  .m-table .list .AI,
  .m-table .list .Mpa,
  .m-table .list .mA{
    position: absolute;
    left: 70px;
    top: 152px;
    font-size: 12px;
    font-weight: bold;
  }
  .m-table .list .Mpa{
    top: 184px;
  }
  .m-table .list .mA{
    top: 216px;
  }

  .m-table .list .AO,
  .m-table .list .ATMP,
  .m-table .list .VFW{
    position: absolute;
    left: 408px;
    top: 152px;
    font-size: 12px;
    font-weight: bold;
  }

  .m-table .list .ATMP{
    top: 184px;
  }
  .m-table .list .VFW{
    text-align: left;
    max-width: 70px;
    top: 216px;
  }

  .m-table .list .unit{
    display: inline-block;
    font-size: 12px;
    margin-left: 5px;
    color: #727b96;
    transform: scale(0.9);
    -webkit-transform: scale(0.9);
    -moz-transform: scale(0.9);
  }
  .m-table .list .unit.percent{
    margin-left: 1px;
    color: #727b96;
  }

  /*离线状态下*/

  .m-table .list.un-active .online-state .dot,
  .m-table .list.un-active .warning .dot{
    background-color: #c4cdde;
  }
  .m-table .list.un-active .open-state{
    background-position: 0 -31px;
    color: #fff;
  }

  .m-table .list .open-tooltip{
    position: absolute;
    right: 26px;
    top: 80px;
    width: 34px;
    height: 30px;
    cursor: pointer;
  }
  /*漂浮窗操作区*/
  .m-table .list .tooltip{
    display: none;
    position: absolute;
    right:-6px;
    top: -7px;
    width: 338px;
    height: 98px;
    padding: 30px 0 0 28px;
    box-sizing: border-box;
    text-align: left;
    background: url("../assets/images/tooltip_bg.png") no-repeat;
    background-size: 100% auto;
    font-size: 0;
  }
  .m-table .tooltip button{
    margin-right: 8px;
    padding: 6px 12px;
    background: none;
    border:1px solid #8895b4;
    color: #8895b4;
    font-size: 13px;
    border-radius: 100px;
    transition: all ease-out .3s;
    -webkit-transition: all ease-out .3s;
    cursor: pointer;
    outline: none;
  }
  .m-table .tooltip button:hover{
    background: #8895b4;
    color: #fff;
  }
  .m-table .tooltip .u-close-tooltip{
    position: absolute;
    right:10px;
    top:10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

</style>
