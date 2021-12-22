const { Notification } = require('electron')

function showNotification() {
    const notification = {
        title: 'Basic Notification',
        body: 'Notification from the Main process'
    }
    console.log("not");
    new Notification(notification).show()
}

app.whenReady().then(createWindow).then(showNotification)