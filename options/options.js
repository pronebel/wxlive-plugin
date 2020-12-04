$(document).ready(function () {
    $("#J_key").val(localStorage.getItem("key"))
    $("#J_restApi").val(localStorage.getItem("restApi"))
    $("#J_save").click(function () {
        localStorage.setItem("key", $("#J_key").val());
        localStorage.setItem("restApi", $("#J_restApi").val());
        $.alert('设置成功')
    })
})
