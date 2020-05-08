$('#preview').html('12312312.png');
        $.ajax({
            type: "get",
            url: "https://box.saas.huaweicloud.com/user/info",
            data: {},
            success: function(result) {
                
                alert(result);
            }
        });
