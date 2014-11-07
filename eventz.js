(function(){
  var events = {}, i, list;
  this.Events = {
    on: function(name, fn) {
      (events[name] = events[name] || []).push(fn)
    },
    off: function(name, fn) {
      list = events[name] || []
      i = list.length
      while(i--) fn == list[i] && list.splice(i, 1)
      if(!fn) delete events[name]
    },
    emit: function(name) {
      list = events[name] || []
      i = list.length
      while(i--) list[i].apply(1, [].slice.call(arguments, 1))
    }
  }
})()
