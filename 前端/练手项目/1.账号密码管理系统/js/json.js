//得到本地存储里的数据
function getDate() {
    var data = localStorage.getItem("users");
    if (data !== null) {
        // 本地存储里面的数据是字符串格式的 但是我们需要的是对象格式的
        return JSON.parse(data);
    } else {
        return [];
    }
}

// 保存本地存储数据
function saveDate(data) {
    localStorage.setItem("users", JSON.stringify(data));
}

// 渲染加载数据
function load() {
    // 读取本地存储的数据
    var data = getDate();
    // 遍历之前先要清空ol里面的元素内容
    $(".tab ul").eq(1).empty();
    // 遍历这个数据
    $.each(data, function(i, n) {
        if (n) {
            $(".tab_body").append("<li><span>" + n.url + "</span><span>" + n.account + "</span><span>" + n.pass + "</span><span><a href='javascript:;' class='modify' index=" + i + ">修改</a></span><span><a href='javascript:;' class='del' index=" + i + ">删除</a></span></li>");
        }
    });
}

//得到当前网站的数据
function getmyDate() {
    var data = localStorage.getItem("myacc");
    if (data !== null) {
        // 本地存储里面的数据是字符串格式的 但是我们需要的是对象格式的
        return JSON.parse(data);
    } else {
        return {};
    }
}

//status值为0则未登录，status值为1则已登录
function setstatus(statu) {
    localStorage.setItem("status", JSON.stringify(statu));
}

function getstatus() {
    let status = localStorage.getItem("status");
    // parse方法原来数据是什么类型，就还原成什么类型
    return JSON.parse(status);
}