$('#preview').html('12312312.png');
        $.ajax({
            type: "get",
            url: "https://box.saas.huaweicloud.com/user/info",
            data: {},
            success: function(result) {
                var data = JSON.parse(result);
                alert(data);
            }
        });
