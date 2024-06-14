var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("./serviceAccountKey.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // The database URL depends on the location of the database
  databaseURL: "https://evol-chat-default-rtdb.asia-southeast1.firebasedatabase.app"
});

console.log("Firebase 数据库连接成功！")

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
var ref = db.ref();
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
}, function(error) {
  console.error("读取数据时出错：", error);
});
