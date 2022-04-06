$(function() {
    let statu = getstatus();

    // 页面重新加载时取消登录状态
    window.onunload = function() {
        setstatus(0);
    }

    if (statu === 0) {
        alert('请登录');
    }
    if (statu === 1) {
        load();

        //点击修改密码
        $('.gai_pass').on('click', function() {
            let wzpass = getmyDate();
            let yuan_pass = prompt('请输入原来的密码进行验证：');
            while (yuan_pass !== wzpass.pas && yuan_pass !== null) {
                yuan_pass = prompt('输入的密码有误，请重新输入：');
            }
            if (yuan_pass === wzpass.pas) {
                let new_pass = prompt('请输入新的密码：');
                wzpass.pas = new_pass;
                localStorage.setItem("myacc", JSON.stringify(wzpass));
            }
        })

        // 点击添加元素
        $('.sub').on('click', function() {
            let urll = prompt('请输入网站名称：');
            let acc = prompt('请输入账号：');
            let pas = prompt('请输入密码：');
            if (urll === '' || urll === null || acc === '' || acc === null || pas === '' || pas === null) {
                alert('请输入您的信息！');
            } else {
                let accs = {
                    url: urll,
                    account: acc,
                    pass: pas
                };
                let data = getDate();
                // push是加在数组后面，unshift是加在数组前面
                data.unshift(accs);
                saveDate(data);
                load();
            }
        });

        //点击修改
        $('.tab_body').on('click', '.modify', function() {
            let accs = getDate();
            let index = $(this).attr('index');
            accs[index].url = prompt('请输入网站：');
            accs[index].account = prompt('请输入用户名：');
            accs[index].pass = prompt('请输入密码：');
            saveDate(accs);
            load();

        });
        //点击删除
        $('.tab_body').on('click', '.del', function() {
            let accs = getDate();
            let index = $(this).attr('index');
            accs.splice(index, 1);
            saveDate(accs);
            load();
        });
    }
})