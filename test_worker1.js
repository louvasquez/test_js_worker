function busy(ms){
   var end = new Date().getTime() + ms;
   while(new Date().getTime() < end)
   { let i=0; while(i<10**4){i=i+1} }
}

onmessage = function(e) {
  let i=0; while(i<e.data.loops) {
    postMessage({w:e.data.worker, msg:"hi from worker"+e.data.worker+":"+i})
    busy(e.data.busy_secs*1000)
    i=i+1
  }
}
