
var app = {
     
    initialize: function() {
        document.addEventListener("deviceready", this.onDeviceReady.bind(this), false);
    },

	onDeviceReady: function() {
     
		// cordova plugin add cordova-plugin-inappbrowser --save 
		document.onclick = function (e){
			e = e ||  window.event;
			var element = e.target || e.srcElement;
			
			// appbrowser
			if (element.target == "_blank") {
				window.open(element.href, "_blank", "location=yes");
				return false;
			}
			
			// link download
			if (element.target == "_system") {
				window.open(element.href, "_system", "location=yes");
				return false;
			}
			
			// webview
			if (element.target == "_self") {
				window.open(element.href, "_self");
				return false;
			}
			
		};
		
         
        
		
    },
};

app.initialize();            
            
            
            