if($(window).width() > 1024) {
	(function(win) {
		var remCalc = {};
		var docEl = win.document.documentElement,
			tid;

		function refreshRem() {
			var width = docEl.getBoundingClientRect().width;
			if(width > 1920) {
				width = 1920
			}
			var rem = width /1920 * 100;  
			docEl.style.fontSize = rem + "px";
			remCalc.rem = rem;
			var actualSize = parseFloat(window.getComputedStyle(document.documentElement)["font-size"]);
			if(actualSize !== rem && actualSize > 0 && Math.abs(actualSize - rem) > 1) {
				var remScaled = rem * rem / actualSize;
				docEl.style.fontSize = remScaled + "px"
			}
		}

		function dbcRefresh() {
			clearTimeout(tid);
			tid = setTimeout(refreshRem, 100)
		}

		win.addEventListener("resize", function() {
			dbcRefresh()
		}, false);

		win.addEventListener("pageshow", function(e) {
			if(e.persisted) {
				dbcRefresh()
			}
		}, false);
		refreshRem();
		remCalc.refreshRem = refreshRem;
		remCalc.rem2px = function(d) {
			var val = parseFloat(d) * this.rem;
			if(typeof d === "string" && d.match(/rem$/)) {
				val += "px"
			}
			return val
		};
		remCalc.px2rem = function(d) {
			var val = parseFloat(d) / this.rem;
			if(typeof d === "string" && d.match(/px$/)) {
				val += "rem"
			}
			return val
		};
		win.remCalc = remCalc
	})(window);
}else {
	(function(win) {
		var remCalc = {};
		var docEl = win.document.documentElement,
			tid;

		function refreshRem() {
			var width = docEl.getBoundingClientRect().width;
			if(width > 750) {
				width = 750
			}
			var rem = width /750 * 100; 
			docEl.style.fontSize = rem + "px";
			remCalc.rem = rem;
			var actualSize = parseFloat(window.getComputedStyle(document.documentElement)["font-size"]);
			if(actualSize !== rem && actualSize > 0 && Math.abs(actualSize - rem) > 1) {
				var remScaled = rem * rem / actualSize;
				docEl.style.fontSize = remScaled + "px"
			}
		}

		function dbcRefresh() {
			clearTimeout(tid);
			tid = setTimeout(refreshRem, 100)
		}

		win.addEventListener("resize", function() {
			dbcRefresh()
		}, false);

		win.addEventListener("pageshow", function(e) {
			if(e.persisted) {
				dbcRefresh()
			}
		}, false);
		refreshRem();
		remCalc.refreshRem = refreshRem;
		remCalc.rem2px = function(d) {
			var val = parseFloat(d) * this.rem;
			if(typeof d === "string" && d.match(/rem$/)) {
				val += "px"
			}
			return val
		};
		remCalc.px2rem = function(d) {
			var val = parseFloat(d) / this.rem;
			if(typeof d === "string" && d.match(/px$/)) {
				val += "rem"
			}
			return val
		};
		win.remCalc = remCalc
	})(window);
}