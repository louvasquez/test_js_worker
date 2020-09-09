window.addEventListener('DOMContentLoaded', runPage)

function runPage(){
  document.querySelector('#clicky').onclick = function(e) {
    document.querySelector('div').innerHTML += '<button>'+(new Date())+'</button>'
  }
  add_worker('worker.js',{worker:1,busy_secs:1,loops:10})
  add_worker('worker.js',{worker:2,busy_secs:2,loops:6})
  add_worker('worker.js',{worker:3,busy_secs:3,loops:5})
}

function add_worker(js_name,to_data){
  var myWorker = new Worker(js_name);
  myWorker.onmessage = function(e) {
    console.log('main: got message: %o',e.data);
    document.querySelector('#span'+e.data.w).innerHTML = e.data.msg
  }
  myWorker.postMessage(to_data)
}
