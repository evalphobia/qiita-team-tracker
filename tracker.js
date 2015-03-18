var _QTT = _QTT || {title:"", token:""};
(function(f,b){if(!b.__SV){var a,e,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=f.createElement("script");a.type="text/javascript";a.async=!0;a.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";e=f.getElementsByTagName("script")[0];e.parentNode.insertBefore(a,e)}})(document,window.mixpanel||[]);
mixpanel.init(_QTT.token);

(function(w, jQuery){
  var pos, pageSize, flag;
  var getScrollPosition, sendScrollEvent, _log, setSendEvents;

  getScrollPosition = function() {
    return jQuery(w).scrollTop() + jQuery(w).height();
  }

  sendScrollEvent = function(title, num) {
    mixpanel.track(title+" scroll "+num+"%");
    flag[num] = false;
    _log(title+" scroll "+num+"%");
  }

  _log = function(str) {
    if (typeof console !== 'undefined' && typeof console.log === 'function') {
      console.log(str);
    }
  }

  var setSendEvents = function(title) {
    mixpanel.track(title+" view");
    _log("send: "+title+" view");

    flag = {
      "50": true,
      "75": true,
      "100": true,
    };
    pageSize = jQuery(document).height();
    jQuery(w).on("load scroll resize", function(){
      var pos = getScrollPosition();
      var ratio = pos / pageSize;
      if (flag["100"] && ratio > 0.95) {
        sendScrollEvent(title, "100");
      }else if(flag["75"] && ratio > 0.7) {
        sendScrollEvent(title, "75");
      }else if(flag["50"] && ratio > 0.45) {
        sendScrollEvent(title, "50");
      }
    });
  }

  var getTitle = function(){
    return document.title.replace(' - '+Qiita.teamAttrs.name+' | Qiita:Team', '');
  }

  _log('qtt run');
  setSendEvents(getTitle())
}(window, jQuery));
