<?php

//1.获取前端传来的数据
$uname = $_POST['username'];
$upass = $_POST['password'];

//2.匹配数据库
//2-1.连接数据库
$link mysqli_connect('localhost', 'root', 'root', 'test-nz-1906');

//2-2.执行 sql 语句
$sql = "SELECT * FROM `login` WHERE `username` = '$uname' AND `password` = '$upass'" ;
$res = mysqli_query($link, $sql);

//2-3.解析结果
$row = mysqli_fetch_assoc($res);


//2-4.断开数据库连接
mysqli_close($link);


if($row) {
    //成功就跳转页面
    header('location:./index.html');
}else{
    echo '用户名或密码错误';
}


















?>