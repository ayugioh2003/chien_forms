# 關於此專案

這是用來開給我朋友用的，所以是自用用途。它是一份心理學相關的研究問卷，想探討情緒與書寫之間的關聯。因為研究需要對控制某些頁面的書寫時間，而 Google 表單和市面上常見的表單沒辦法做到，因此就有了這個專案。目前這個專案主要希望能達到的功能有

- [x] 傳送在問卷的資料，透過 google app scripts，將資料儲存在 google spreadsheet
- [x] 問卷能換頁作答，submit 後的個頁資料會是同一筆資料
- [x] 在部份頁面需要計時功能，要時間到才能進行下一題
- [x] 表單驗證功能

附上方便自己即時修改的 CodePen 連結

* [能換頁的問卷 | CodePen](https://codepen.io/ayugioh2003/pen/mxJVgP?editors=1000)

該專案網頁網址

* [某某研究 | Github Page](https://ayugioh2003.github.io/chien_forms/)

Google app script 內容和資料庫連結，等日後有機會再附上

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


防止觸發 Enter
* 因為誤觸 Enter 的話，表單直接送出，後面的題目就填不到了
* [HTML 防止 input 回車提交表單 - CSDN 博客](http://blog.csdn.net/ligang2585116/article/details/44699567)
* 在 form 表單或 input 中加入：`onkeydown="if(event.keyCode==13){return false;}"`
* [【茶包射手日記】網頁 Enter 鍵誤擊刪除鈕疑雲 - 黑暗執行緒](http://blog.darkthread.net/post-2017-06-28-enter-on-form.aspx)
* [[JavaScript] 解決使用新注音輸入時選字按 Enter 會送出的問題 @ 長島冰茶的工程師筆記 :: 痞客邦 ::](http://wbkuo.pixnet.net/blog/post/191525544-%5Bjavascript%5D-%E8%A7%A3%E6%B1%BA%E4%BD%BF%E7%94%A8%E6%96%B0%E6%B3%A8%E9%9F%B3%E8%BC%B8%E5%85%A5%E6%99%82%E9%81%B8%E5%AD%97%E6%8C%89-enter-)
* [Press Enter to Submit 背後的那些事 « David Chen's Blog](http://david-chen-blog.logdown.com/posts/177766-how-forms-submit-when-pressing-enter)
* [Re: [請益] 表單按 Enter 會送出的問題~ - 看板 PHP - 批踢踢實業坊](https://www.ptt.cc/bbs/PHP/M.1225543562.A.2A8.html)
* [網頁按 enter 觸發 submit 事件 - stbird 的創作 - 巴哈姆特](https://home.gamer.com.tw/creationDetail.php?sn=1464676)
* [表單提交 (submit) 時使用 preventDefault 可能產生的問題](http://www.mrmu.com.tw/2011/04/12/preventdefault-submit-problems/)
* [jQuery 阻止 input 按 Enter 就送出表單 (form) | Web Development Notes](https://yichen0831.wordpress.com/2013/05/19/jquery%E9%98%BB%E6%AD%A2input%E6%8C%89enter%E5%B0%B1%E9%80%81%E5%87%BA%E8%A1%A8%E5%96%AEform/)
* [MooGoo's Blog: HTML 的 input 直接按 Enter 就送出表單](http://moogoo78.blogspot.tw/2009/09/htmlinputenter.html)
* [XYZ 的筆記本: HTML form 只有一個 text input 時，在 input 上按 enter 會自動送出表單](http://xyz.cinc.biz/2016/07/form-input-enter-auto-submit.html)
* [關於 JavaScript 的那些事: JavaScript 裡 which、keyCode、charCode 的差別](https://lucrelin.blogspot.tw/2016/11/javascriptwhichkeycodecharcode.html)
* [charCode 事件屬性 | 菜鳥教程](http://www.runoob.com/jsref/event-key-charcode.html)
* [DOM 原生的 event.keyCode 和 event.charCode - 簡書](https://www.jianshu.com/p/607cad2305bd)


必選題，表單驗證
* [請問 form 的 html 語法問題 | Yahoo 奇摩知識 +](https://tw.answers.yahoo.com/question/index?qid=20060606000012KK14774)
* [JavaScript 表單驗證](http://www.w3school.com.cn/js/js_form_validation.asp)
* [javascript 取得 radio 的值 | [lifeIs: tooShort to: waste]](https://blog.hsin.tw/2008/javascript-form-radio/)
* [表單選項按鈕 radio buttons - 網頁設計教學站](http://www.webtech.tw/info.php?tid=93)
* [[筆記] 用 javascript 來取得表單元素內容的值 (javascript 取值) ~ PJCHENder<br> 那些沒告訴你的小細節](https://pjchender.blogspot.tw/2015/11/javascript.html)
* [Java 程式教學甘仔店: [JavaScript] 取得 input 的 value](http://pclevin.blogspot.tw/2013/10/javascriptinputvalue.html)
* IE 和 Edge 沒辦法直接讀 form 的 value ... orz
* [jquery - Javascript document.forms value does not work for Internet Explorer - Stack Overflow](https://stackoverflow.com/questions/43216707/javascript-document-forms-value-does-not-work-for-internet-explorer/43217183)

```javascript
  function check_page1(){
    
    var page1_alert = "請填入資料";
    var page1_value = document.getElementById("input_page1").value
    
    if(page1_value=null || page1_value==""){
       alert(page1_alert);
       return false;
    }
    else{
       hide(page1);
       show(page2);
     }
  }
  
  function check_page2(){
  
    var page2_alert = "請點擊選項";
    var mood1_value = document.getElementById('myForm').mood_1.value
    var arousal1_value = document.getElementById('myForm').arousal_1.value
    
    if( mood1_value && arousal1_value ){
      hide(page2);
      show(page3_guide);
    }
    else{
       alert(page2_alert);
       return false;
    }
  }
  
  function check_page4(){
  
    var page4_alert = "請點擊選項";
    var mood2_value = document.getElementById('myForm').mood_2.value
    var arousal2_value = document.getElementById('myForm').arousal_2.value
    
    if( mood2_value && arousal2_value ){
      document.getElementById("myForm").submit()
    }
    else{
       alert(page4_alert);
       return false;
    }
  }
```

---

# TODO

- [ ] 用 bootstrape 美化介面

## 2019.0418 

- [x] HTML 模板
    * [Gulp 學習 5 - 建立 HTML 模板 - OXXO.STUDIO](https://www.oxxostudio.tw/articles/201503/gulp-5-html-extend.html)
    * [gulp-html-extend - npm](https://www.npmjs.com/package/gulp-html-extend)
    * [使用 gulp 實現項目模板化 | HcySunYang](http://hcysun.me/2016/01/06/%E4%BD%BF%E7%94%A8gulp%E5%AE%9E%E7%8E%B0%E9%A1%B9%E7%9B%AE%E6%A8%A1%E6%9D%BF%E5%8C%96/)
    * [使用 gulp-file-include 構建前端靜態頁面 - 叙帝利 - 博客園](https://www.cnblogs.com/nzbin/p/7467546.html)

- 參考 gulp ejs
    * [使用 gulp+ejs 模塊化 html | Yusen's Blog | 學習彎道超車的技巧！](https://imys.net/20150908/gulp-ejs-module.html)
    * [前端樣板結合 Gulp 處理流程｜SoarLin's blog](https://soarlin.github.io/2016/12/26/frontend-templates-with-gulp/)
    * [SoarLin/f2e-template](https://github.com/SoarLin/f2e-template)

    
## 2019.0417

- [x] 正則表達式驗證 email
    * [[Javascript] Regular Expression – Email 表單驗證 - iT 邦幫忙：：一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10094951)
    * [筆記｜Javascript 正規表達式 #1 - Email 驗證 - Dez.tw](https://dezchuang.github.io/2017/07/05/022_regexp_1/)
    * [web 前端之如何書寫正則表示式](https://question.itread01.com/exyyip.html)
    * [郵箱 / 郵件地址的正則表達式及分析 (JavaScript，email，regex) - 掘金](https://juejin.im/post/5aa637146fb9a028d663d09d)
    * [regex - How to validate an email address in JavaScript? - Stack Overflow](https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript)
    * [Regulex：JavaScript Regular Expression Visualizer](https://jex.im/regulex/#!flags=&re=%5E%5Cw%2B((-%5Cw%2B)%7C(%5C.%5Cw%2B))*%5C%40%5BA-Za-z0-9%5D%2B((%5C.%7C-)%5BA-Za-z0-9%5D%2B)*%5C.%5BA-Za-z%5D%2B%24)
    * [uneditable input demo](https://codepen.io/ayugioh2003/pen/QPLjrb?editors=1111)


## 2018.0328

- [x] Google 中文字體
  * [[技術分享] 如何引用 google 雲端字體到網頁設計中 ~ PJCHENder<br> 那些沒告訴你的小細節](https://pjchender.blogspot.tw/2016/09/google.html)
  * [【設計資源】 - Google Fonts 免費雲端字庫 - 實作篇 - 【飛肯設計學苑】教學](http://www.flycan.com/article/css/google-fonts-exercise-2352.html)
  * [Day6 [CSS 介紹 - 1] - iT 邦幫忙:: 一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10185250)


## 2018.0324

- [x] 置中頁面
  * 感謝 taker 的切版祕笈，剛看完就派上用場了
- [x] 修改成標準的 html 頁面
  * [檢查網站是否通過 HTML5 驗證？ - 香腸炒魷魚](https://sofree.cc/html5-validator/)
  * 第一次檢查有 86 個 error + warning，嚇死人了 XD
  * https://i.imgur.com/xapy4OR.png
  * https://i.imgur.com/1tqbrUk.png


## 2018.0319

 - [x] 修改指導語

## 2018.0317

- [x] 新增展開說明 (與換頁功能手法相似)
- [x] 倒數計時後自動跳轉下一頁
- [x] 隱藏 input，把被隱藏的某個 name 的 input 的 value 傳出去
  * [HTML 表單隱藏欄位 input type=hidden - 網頁設計教學站](http://www.webtech.tw/info.php?tid=96)
  * [HTML Form input hidden - Wibibi](http://www.wibibi.com/info.php?tid=195)
  - `input type=hidden`
 
## 2018.0312
- [x] 用 JS submit form
   * [HTML DOM submit() 方法](http://www.w3school.com.cn/htmldom/met_form_submit.asp)
   * `document.getElementById("myForm").submit()`
- [x] 必填的項目沒勾選，會無法進行下一題
   * [javascript 取得 radio 的值 | [lifeIs: tooShort to: waste]](https://blog.hsin.tw/2008/javascript-form-radio/)
   * [[筆記] 用 javascript 來取得表單元素內容的值 (javascript 取值) ~ PJCHENder<br> 那些沒告訴你的小細節](https://pjchender.blogspot.tw/2015/11/javascript.html)
- [x] 禁用 Enter 送出表單
   * [HTML 防止 input 回車提交表單 - CSDN 博客](http://blog.csdn.net/ligang2585116/article/details/44699567)
   * 在 form 表單或 input 中加入：`onkeydown="if(event.keyCode==13){return false;}"`
 
## 2018.0311 
- [x] 點擊按鈕一次後就禁用按鈕，避免重複輸入指令
- [x] 透過隱藏、顯示 div 區塊，達成換頁效果 
  * [HTML DOM display 屬性](http://www.w3school.com.cn/htmldom/prop_style_display.asp)
  * [DIV 隱藏技巧 - Wibibi](http://www.wibibi.com/info.php?tid=166)
  - `document.getElementById("p1").style.display="none";`
  
## 2018.0310
- [x] 加入九點量表(label)、插入圖片，完成訂一版
  * [問卷](https://codepen.io/ayugioh2003/pen/EQzGYV?editors=1010)
  
## 2018.0306  
- [x] 倒數計時，在某頁需要限制作答時間
  * [JavaScript 計時](http://www.w3school.com.cn/js/js_timing.asp)
- [x] 抓日期，寫進資料庫方便排序與除去無效資料
  - [How to get the current time in Google spreadsheet using script editor?](https://goo.gl/rfwVHw)
- [x] 建立簡單的 form 範本
- [x] 用 google app scripts 接收 form 資料
  * [用 Google Apps Script 操作試算表 (1) 製作資料庫 + 寫入資料＠WFU BLOG](https://goo.gl/vqhDZe)
- [x] 把資料寫進 google spreadsheet 
- [x] 找能放前端程式碼的地方: ghpage, codepen
  * [[教學] 如何在 GitHub 建立靜態網站 - iT 邦幫忙](https://ithelp.ithome.com.tw/articles/10171911)
  - https://codepen.io/ayugioh2003/pen/mxJVgP?editors=1000

## 2018.1203
- [x] 字體
  * [重置 (Reboot) · Bootstrap 4 繁體中文手冊 [六角學院譯]](https://bootstrap.hexschool.com/docs/4.1/content/reboot/)
- [x] 時鐘倒數
  * [JavaScript 的除法 - 網頁設計教學站](http://www.webtech.tw/info.php?tid=JavaScript_%E7%9A%84%E9%99%A4%E6%B3%95)
  * [js 除法 取整 - xinyuan的专栏 - CSDN博客](https://blog.csdn.net/xinyuan_java/article/details/40300873)
