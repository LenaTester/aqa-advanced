// function with timeout

function showTextWithTimeout(text, timeout) {
    setTimeout(function() {
      console.log(text)}, timeout)
  }
  
  showTextWithTimeout('Hello, Java Script!', 5000);