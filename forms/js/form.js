var emailInput = document.querySelector('#email')
var emailIdInput = document.querySelector('#emailId')
var copyEmailBtn = document.querySelector('.copyEmailBtn')
var copyIdBtn = document.querySelector('.copyIdBtn')
var copyHint = document.querySelector('.copyHint')

function encode(e) {
  var tempStr = emailInput.value
  var tempArr = tempStr.split("")
  tempArr = tempArr.map( (char, index, arr)=>{ 
    // char-> charCode -> charCode+6 -> newChar
    return String.fromCharCode(char.charCodeAt() + 4)
  })
  var newStr = tempArr.join('')
  emailIdInput.value = newStr
}
function copyId(e) { 
  
  //Regular expression Testing 
  var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

  //validate ok or not
  if(emailInput.value.search(emailRule)!= -1){
    var TextRange = document.createRange();
    var copyText = emailIdInput
    TextRange.selectNode(copyText);
    sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(TextRange);
    // copyText.select();
    document.execCommand("copy");
    copyHint.innerHTML = copyText.value + " 複製成功！<br>稍後請依照問卷提示，將研究代號貼至對應的欄位中"
    setTimeout(()=>{
      copyHint.textContent = ""
    }, 3000)
  } 
  else {
    emailInput.focus()
    copyHint.textContent = " 請輸入符合格式的 email"
    setTimeout(()=>{
      copyHint.textContent = ""
    }, 3000)
  }
  
}
function copyEmail(e) {
  
  //Regular expression Testing
  emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

  //validate ok or not
  if(emailInput.value.search(emailRule)!= -1){
    var TextRange = document.createRange();
    var copyText = emailInput
    TextRange.selectNode(copyText);
    sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(TextRange);
    // copyText.select();
    document.execCommand("copy");
    copyHint.innerHTML = copyText.value + " 複製成功！<br>稍後請依照問卷提示，將研究代號貼至對應的欄位中"
    setTimeout(()=>{
      copyHint.textContent = ""
    }, 3000)
  } 
  else {
    emailInput.focus()
    copyHint.textContent = " 請輸入符合格式的 email"
    setTimeout(()=>{
      copyHint.textContent = ""
    }, 3000)
  }
  
}

emailInput.addEventListener('keyup', encode)
emailIdInput.addEventListener('focus', function(e){
  e.target.blur()
})
copyIdBtn.addEventListener('click', copyId)
copyEmailBtn.addEventListener('click', copyEmail)