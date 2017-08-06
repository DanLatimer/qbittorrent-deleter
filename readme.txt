QBittorrent Deleter

It shouldn't be this difficult to delete a torrent after it's done downloading

Running the App:
1. Install node 5.x
2. Install this app's dependencies: `npm install` from the root directory of the project
3. Open QBittorrent Tools > Options > Downloads > Check the Run external program on torrent completion option and add the location of this program with the following comamnd line arguments like so 

node <your folder location>/app.js %I
