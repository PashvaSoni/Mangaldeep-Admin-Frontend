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
    type?: string,
    title?: string,
    description?: string,
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