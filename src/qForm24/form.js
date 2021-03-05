(function() {
  function init() {
    var scr = document.createElement('script')
    scr.type = 'text/javascript'
    scr.defer = 'defer'
    scr.src = '//cdn.qform24.com/forms.js?v=' + parseInt(new Date().getTime() / 1000)
    var scrInsert = document.getElementsByTagName('script')[0]
    scrInsert.parentNode.insertBefore(scr, scrInsert)
  }
  var d = document
  var w = window
  if (d.readyState == 'complete') {
    init()
  }
  else {
    if (w.attachEvent) {
      w.attachEvent('onload', init)
    }
    else {
      w.addEventListener('load', init, false)
    }
  }
}
)()