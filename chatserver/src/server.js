const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// app.use("/css", express.static("./css"));
// app.use("/js", express.static("./js"));
//
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

http.listen(3000, () => {
  console.log('server listening on port : 3000');
});

let userList = new Map();

io.on('connection', (socket) => {
  console.log('connected');

  // 채팅 대기방 입장
  socket.on('wait', (boardId) => {
    socket.emit('wait', userList.get(boardId));
  });

  // 실시간 음성채팅방 입장
  socket.on('enter', (boardId, userData) => {
    socket.join(boardId); // 방 들어감
    // console.log("boardId: " + boardId);
    // console.log(userList.get(boardId) == undefined ? "undefined" : userList);

    if (userList.get(boardId) == undefined) userList.set(boardId, new Array());
    userList.get(boardId).push(userData); // back에서 가지고 있을 userList (나중에 새로 들어온 사용자한테 보여줘야함)

    socket.to(boardId).emit('welcome', userData, userList.get(boardId).length); // 본인 외 다른 참가자한테 전달
    // socket.to(boardId).emit("enter", userData, userList.get(boardId).length);
    socket.emit('user_enter', userList.get(boardId)); // 본인한테만 전달
  });

  socket.on('send', (boardId) => {
    io.to(boardId).emit('send', () => {});
  });

  socket.on('betray', (boardId, userId) => {
    // 해당 user의 vote 변경
    // userList.get(boardId).find(user => user.userId = userId)[""]
    io.to(boardId).emit('betray', () => {});
  });

  // // 유저 입장
  // socket.on("join", (data) => {
  //   userList.push(data);
  //   console.log("join" + data);
  //   socket.name = data;
  //   // 유저 정보 갱신
  //   io.emit("updateUser", userList);
  //   // 유저 입장 알리기(입장은 발신자 제외)
  //   socket.broadcast.emit("joinUser", data);
  // });
  //
  // // 메시지 보내기
  // socket.on("msg", (data) => {
  //   console.log("message: " + data);
  //   io.emit("sm", {
  //     name: socket.name,
  //     msg: data,
  //   }); // 발신자를 포함해서 모두 보내는것
  //   // socket.broadcast.emit("sm", data); //발신자 제외
  // });

  socket.on('disconnecting', () => {
    // const i = userList.indexOf(socket.name);
    // userList.splice(i, 1);
    // socket.broadcast.emit("left", socket.name);
    // socket.broadcast.emit("updateUser", userList);
    let room = socket.rooms;
    room.delete(socket.id);
    socket.to(room.keys().next().value).emit('left', () => {});
  });
});
