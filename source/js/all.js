// 情緒方格說明

var grid1_count = 1;
function switch_grid1() {
  if (grid1_count % 2 == 1) {
    show(grid1)
  }
  else {
    hide(grid1)
  }
  grid1_count = grid1_count + 1
}

var grid2_count = 1;
function switch_grid2() {
  if (grid2_count % 2 == 1) {
    show(grid2)
  }
  else {
    hide(grid2)
  }
  grid2_count = grid2_count + 1
}



// 計時書寫的時間，時間到執行某個指令 書寫時間 15*60
var c = 5 // 15 * 60
var t

function timedCount() {
  document.getElementById('txt').value = `${parseInt(c / 60)}分鐘 ${c % 60}秒`
  c = c - 1

  if (c < 1 * 60) {
    document.getElementById('txt').style.color = '#FFFFFF'
    document.getElementById('txt').style.backgroundColor = '#EE9999'
  }


  if (c == -2) {
    hide(page3)
    show(page4)
    // document.getElementById("myForm").submit()
    //document.getElementById("subbtn").click();
    //window.opener=null;
    //top.window.close();
  }
  document.getElementById("countbtn").disabled = true;
  t = setTimeout("timedCount()", 1000)
}


// 必須填完選項才能換頁

var emailInput = document.getElementById("email_true")
var emailIdInput = document.getElementById("email")

// 加密
function encode(e) {
  var tempStr = emailInput.value
  var tempArr = tempStr.split("")
  tempArr = tempArr.map((char, index, arr) => {
    // char-> charCode -> charCode+6 -> newChar
    return String.fromCharCode(char.charCodeAt() + 4)
  })
  var newStr = tempArr.join('')
  emailIdInput.value = newStr
  console.log(newStr)
}
emailInput.addEventListener('keyup', encode)
emailIdInput.addEventListener('focus', function(e){
  e.target.blur()
})

function check_page1() {

  var page1_alert = "請填入資料";
  var page1_value = document.getElementById("email_true").value
  //Regular expression Testing 
  var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;


  if (page1_value = null || page1_value == "") {
    page1_alert = "請填入資料";
    alert(page1_alert);
    return false;
  }
  else if (emailInput.value.search(emailRule)== -1) {
    page1_alert = "請輸入正確格式的電子信箱";
    alert(page1_alert);
    return false;
  }
  else {
    hide(page1);
    show(page2);
  }
}

function check_page2() {

  var page2_alert = "請點擊選項";
  var mood1_value = document.getElementById('myForm').mood_1.value
  var arousal1_value = document.getElementById('myForm').arousal_1.value

  if (mood1_value && arousal1_value) {
    hide(page2);
    show(page3_guide);
  }
  else {
    alert(page2_alert);
    return false;
  }
}

function check_page4() {
  var page4_alert = " 請點擊選項 ";
  var mood2_value = document.getElementById('myForm').mood_2.value
  var arousal2_value = document.getElementById('myForm').arousal_2.value
  if (mood2_value && arousal2_value) {
    document.getElementById("myForm").submit()
  }
  else {
    alert(page4_alert);
    return false;
  }
}

function check_page4_4() {

  var page4_alert = "請點擊選項";
  var mood2_value = document.getElementById('myForm').mood_2.value
  var arousal2_value = document.getElementById('myForm').arousal_2.value

  if (mood2_value && arousal2_value) {
    hide(page4);
    show(page5);
  }
  else {
    alert(page4_alert);
    return false;
  }
}


function check_page5() {

  var page5_alert = "請填入 email";
  var page5_value = document.getElementById("input_page5").value

  if (page5_value = null || page5_value == "") {
    page5_alert = "請填入 email";
    alert(page5_alert);
    return false;
  }
  else {
    document.getElementById("myForm").submit()
  }
}

//點擊按鈕後，隱藏上一頁，打開下一頁

var countbtn = "countbtn"
var page1 = "page1"
var page2 = "page2"
var grid1 = "grid1"
var gird2 = "grid2"
var page3 = "page3"
var page3_guide = "page3_guide"
var page3_text = "page3_text"
var page4 = "page4"
var page5 = "page5"

function hide(obj) {
  document.getElementById(obj).style.display = "none";
}
function show(obj) {
  document.getElementById(obj).style.display = "inline";
}
function showb(obj) {
  document.getElementById(obj).style.display = "block";
}