import { notification } from "antd";

// For capitalizing first letter of each word in string
export function Capitalize(str = "") {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// For opening the notification
type NotifyProp = {
    type: string,
    title: string,
    description: string,
    onClickFun?: () => void,
    duration?: number,
    key?: string
}
export function OpenNotification({ type = 'info', title = 'New Notification !', description = "You have a got new notification checkout !", onClickFun = () => { console.log("Notification Clicked") }, duration = 5, key = Date.now().toString() }: NotifyProp) {

    switch (type) {
        case 'info':
            notification.info({ message: title, description: description, duration: duration, onClick: onClickFun, key });
            break;
        case 'warning':
            notification.warning({ message: title, description: description, duration: duration, onClick: onClickFun, key });
            break;
        case 'success':
            notification.success({ message: title, description: description, duration: duration, onClick: onClickFun, key });
            break;
        case 'error':
            notification.error({ message: title, description: description, duration: duration, onClick: onClickFun, key });
            break;
        default:
            notification.open({ message: title, description: description, duration: duration, onClick: onClickFun, key });
    }
}



type CookieProp ={
    name:string,
    value?:string,
    domain?:string,
    path?:string,
    expires?:string|number|Date,
    httponly?:string,
    secure?:boolean
}

export const docCookies = {
    getItem: function ({name}:CookieProp) {
      return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(name).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },
    setItem: function ({name, value='', expires, path, domain, secure}:CookieProp) {
      if (!name || /^(?:expires|max\-age|path|domain|secure)$/i.test(name)) { return false; }
      var sExpires = "";
      if (expires) {
        switch (expires.constructor) {
          case Number:
            sExpires = expires === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + expires;
            break;
          case String:
            sExpires = "; expires=" + expires;
            break;
          case Date:
            sExpires = "; expires=" + expires.toString();
            break;
        }
      }
      document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + sExpires + (domain ? "; domain=" + domain : "") + (path ? "; path=" + path : "") + (secure ? "; secure" : "");
      return true;
    },
    removeItem: function ({name, path, domain}:CookieProp) {
      if (!name) { return false; }
      document.cookie = encodeURIComponent(name) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ( domain ? "; domain=" + domain : "") + ( path ? "; path=" + path : "");
      return true;
    },
    hasItem: function ({name}:CookieProp) {
      return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(name).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    },
    keys: /* optional method: you can safely remove it! */ function () {
      var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
      for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
      return aKeys;
    }
  };

