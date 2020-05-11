const { app, BrowserWindow } = require("electron");

let win;
function createWindow() {
  win = new BrowserWindow({ width: 1200, height: 800 });

	// Hide the menu
	win.setMenu(null);  
	win.loadURL('http://localhost:4242');

  // The following is optional and will open the DevTools:
  win.webContents.openDevTools();

  win.webContents.on("did-fail-load", function() {
    console.log("did-fail-load");
    win.loadURL('http://localhost:4242');   
  });

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

// on macOS, closing the window doesn't quit the app
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});