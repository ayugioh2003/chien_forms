# 關於此專案

這是用來開給我朋友用的，所以是自用用途。

這是一份研究得用到的問卷，需要研究參與者們回答問題並交回問卷。主要希望能達到的功能有

- [ ] 傳送問卷的資料到 google spreadsheet 後端
- [ ] 能以換頁區分不同題組
- [ ] 在部份頁面需要計時功能，要時間到才能進行下一題

---

# 記錄遇到困難的排除方式

想讓計時器按鈕不再被重複觸發
* 因為重複點擊按鈕的話，會讓計時變快，而時間是我想要控制的。又因為 display:none 和 visibility:hidden 好像無效，就往禁用按鈕的方式去想
* [如何讓 button 只能點擊一次_慕課問答](http://www.imooc.com/qadetail/85405)
* [讓你的按鈕只能按一次，避免重複送出](https://goo.gl/pmxdX3)
* [用 js 實現只能點擊一次的按鈕的功能 - 逍遙峽谷](https://www.icoa.cn/a/615.html)
* [jQuery 實現按鈕只點擊一次後就取消點擊事件綁定的方法，jquery 綁定_Javascript | 幫客之家](http://www.bkjia.com/Javascript/1022326.html)
* [jquery 如何實現一個按鈕只能點擊一次，再點擊就無效？ - CSDN 博客](http://blog.csdn.net/u013943009/article/details/78113436)
* [簡單的監聽 DOM 事件](http://www.jstips.co/zh_tw/javascript/DOM-event-listening-made-easy/)
* [【JavaScript】Event Listener 監聽事件一覽 – Ian](https://ianchen.thisistap.com/event-listener-list/)
* `document.getElementById("Start").disabled=true;`

---

# TODO

- [ ] 修改成標準的 html 頁面
- [ ] 置中頁面
- [ ] 必填的項目沒勾選，會無法進行下一題
- [ ] 用 bootstrape 美化介面
- [x] 2018.0311 點擊按鈕一次後就禁用按鈕，避免重複輸入指令
- [x] 2018.0311 透過隱藏、顯示 div 區塊，達成換頁效果 
  * [HTML DOM display 屬性](http://www.w3school.com.cn/htmldom/prop_style_display.asp)
  * [DIV 隱藏技巧 - Wibibi](http://www.wibibi.com/info.php?tid=166)
  - 'document.getElementById("p1").style.display="none";'
- [x] 2018.0310 加入九點量表(label)、插入圖片，完成訂一版
  * [問卷](https://codepen.io/ayugioh2003/pen/EQzGYV?editors=1010)
- [x] 2018.0306 倒數計時，在某頁需要限制作答時間
  * [JavaScript 計時](http://www.w3school.com.cn/js/js_timing.asp)
- [x] 2018.0306 抓日期，寫進資料庫方便排序與除去無效資料
  - [How to get the current time in Google spreadsheet using script editor?](https://goo.gl/rfwVHw)
- [x] 2018.0306 建立簡單的 form 範本
- [x] 2018.0306 用 google app scripts 接收 form 資料
  * [用 Google Apps Script 操作試算表 (1) 製作資料庫 + 寫入資料＠WFU BLOG](https://goo.gl/vqhDZe)
- [x] 2018.0306 把資料寫進 google spreadsheet 
- [x] 2018.0306 找能放前端程式碼的地方: ghpage, codepen
  * [[教學] 如何在 GitHub 建立靜態網站 - iT 邦幫忙](https://ithelp.ithome.com.tw/articles/10171911)
  - https://codepen.io/ayugioh2003/pen/mxJVgP?editors=1000
