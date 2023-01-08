function riseAnimate(obj, target, callBack) {
   // 先清除定时器 不然点击的时候多个定时器叠加
   clearInterval(obj.timer);
   // 给不同元素指定不同定时器 给obj对象添加属性
   obj.timer = setInterval(function() {
      if (obj.offsetTop == target) {
         clearInterval(obj.timer);
         // 定时器结束调用回调函数
         callBack && callBack();
      } else {
         // 另一种情况执行的代码放入else语句，以免bug
         // 不放入else 最后停下来以后再点击仍然会移动1px
         // 把1换成步长公式;
         var step = (obj.offsetTop - target) / 40;
         // 取整 涉及小数运算就会偏差 正数往大取，负数往小取
         step = step > 0 ? Math.ceil(step) : Math.floor(step);
         obj.style.top = obj.offsetTop - step + 'px';
      }
   }, 15);
}