function busy(ms){
   var end = new Date().getTime() + ms;
   while(new Date().getTime() < end)
   { let i=0; while(i<10**4){i=i+1} }
}

onmessage = function(e) {
  let w = e.data.worker
  let i=0; while(i<e.data.loops) {
    postMessage({w:w, msg:`worker${w} still working: ${i}`})
    busy(e.data.busy_secs*1000)
    i=i+1
  }
  postMessage({w:w, msg:`worker${w} done!`})
}
