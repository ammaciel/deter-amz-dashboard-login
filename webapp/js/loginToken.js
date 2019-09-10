var Login={
  logintoken:undefined,
  init:function() {
		this.logintoken=this.getFromLocalStorage();
		if(!this.logintoken) {
			  this.logintoken='myLoginToken';
		}
  },
  
  change:function(newtoken) {
		if(newtoken!==undefined) {
			this.logintoken=newtoken;
		}
		this.apply();
	},

	setInLocalStorage:function() {
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("logintoken", this.logintoken);
    } else {
        console.log("Sorry! No Web Storage support..");
    }
  },

  getFromLocalStorage:function() {
    if (typeof(Storage) !== "undefined") {
      var logintk=localStorage.getItem("logintk");
      console.log(logintk);
      if(!logintk) {
        logintk = this.logintoken;
      }
    }else {
        console.log("Sorry! No Web Storage support..");
    }
    return logintk;
  },

  apply:function() {
    this.setInLocalStorage();
  },

}
