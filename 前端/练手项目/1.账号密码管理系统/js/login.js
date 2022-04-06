$(function() {
    /******************登录框********************/
    let box = $(".box");
    // 点击注册按钮翻转到注册页面
    $(".reg_box span").eq(1).on("click", function() {
        box.toggleClass("rot180");
    });

    // 点击登录按钮进行登录
    $(".login_box button").on("click", function(e) {
        // 阻止表单默认行为
        if (e.preventDefault) {
            e.preventDefault();
        }
        // 两种获取input表单值的方法
        let username = $(".login_box input").eq(0).val();
        let password = $(".login_box input").eq(1).prop("value");
        let myacc = getmyDate();
        if (username !== myacc.use) {
            alert("用户名错误,请重新输入!");
        } else if (password !== myacc.pas) {
            alert("密码错误,请重新输入!");
        } else {
            alert("登录成功,请前往首页");
            setstatus(1);
        }
    });

    // 点击忘记密码重新验证登录并显示原来的密码
    $(".login_box a").on("click", function() {
        let tel = prompt('请输入手机号：');
        let myacc = getmyDate();
        if (tel !== myacc.tel) {
            alert('输入的手机号错误!');
        } else {
            alert('您的密码是：' + myacc.pas);
        }
    });
    /********************************************/

    /******************注册框********************/
    var regtel = /^1[3|4|5|7|8]\d{9}$/; // 手机号码的正则表达式
    // 点击登录翻转回登录页面
    $(".box_reg a").eq(1).on("click", function() {
        box.toggleClass("rot180");
    });

    //点击注册把信息保存到内存中
    $(".box_reg button").on("click", function(e) {
        // 阻止表单默认行为
        if (e.preventDefault) {
            e.preventDefault();
        }
        let use = $(".box_reg input").eq(0).val();
        let tel = $(".box_reg input").eq(1).val();
        let pas1 = $(".box_reg input").eq(2).val();
        let pas2 = $(".box_reg input").eq(3).val();
        if (pas1 !== pas2) {
            alert("输入的密码不一致，请重新输入!");
        } else if (!regtel.test(tel)) {
            alert("手机号码格式错误,请重新输入手机号");
        } else if (use !== "" && tel !== "" && pas1 !== "" && pas2 !== "") {
            let acc = {
                use: use,
                tel: tel,
                pas: pas1
            };
            localStorage.setItem("myacc", JSON.stringify(acc));
            alert("注册成功,请登录!");
        } else {}
    });
    /********************************************/
})