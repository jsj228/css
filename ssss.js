/*
 clockTime：锁定提交时间，如无申明，默认1分钟
 返回值
 400：手机号没填写
 401：网站号无效
 402：30天内数据重复
 1：正常
 */
document.write(unescape("%3Cscript src='http://apps.bdimg.com/libs/jquery.cookie/1.4.1/jquery.cookie.min.js' type='text/javascript'%3E%3C/script%3E"));
var reg={
    name:/^[\u4E00-\u9FFF]+$/,
    //phone:/^\+{0,1}[0-9]{0,2}1[3|4|5|8][0-9]\d{8}$/
    phone:/^1[3|4|5|7|8]\d{9}$/
}
$.extend({
    msgSubmit:function(id){
        var msg_webID     = $('#'+id+' input[name="msg_webID"]');
        var msg_remarks   = $('#'+id+' input[name="msg_remarks"]');
        var msg_other     = $("#"+id+" .msg_other");
        var msg_text      = $("#"+id+" .msg_text");
        var msg_username  = $('#'+id+' input[name="msg_username"]');
        var msg_userphone = $('#'+id+' input[name="msg_userphone"]');
//		if($.cookie(msg_webID.val())!=null){
//			alert("您已经提交过信息，我们会尽快联系您，请不要重复提交，谢谢。");
//			return false;
//		}
        if(!reg.name.test(msg_username.val())){
            alert("请填写您的姓名，以便我们及时联系您。");
            msg_username.focus();
            return false;
        }
        if(!reg.phone.test(msg_userphone.val())){
            alert("请正确填写您的手机号，以便我们及时联系您。");
            msg_userphone.focus();
            return false;
        }
        $('#'+id+' input[name="msg_url"]').val(document.location.href);
        msg_other.each(function(){
            //判断其他控件是否属于单选和多选
            if($(this).attr("type")=="radio"||$(this).attr("type")=="checkbox"){
                if($(this).is(':checked')){
                    msg_remarks.val(msg_remarks.val()+"【"+$(this).attr("title")+"："+$(this).val()+"】");
                }
            }else{
                msg_remarks.val(msg_remarks.val()+"【"+$(this).attr("title")+"："+$(this).val()+"】");
            }
        });
        var msgData=msg_text.serialize();
        if(typeof(clockTime)=="undefined"){clockTime=60000;}

        $.getJSON("http://ding1.ohard.cn/api.php?op=add_msg&callback=?",msgData,function(json){
            if(json==401){
                alert("网站号无效，提交信息不成功，请联系我们的客服人员，谢谢。");
                return false;
            }
            if(json==402){
                alert("我们已经记录您提交的信息，请不要重复提交，谢谢。");
                return false;
            }
            if(json==1){
                alert("您已经提交成功。");
            }
            expireDate=new Date();
            expireDate.setTime(expireDate.getTime()+clockTime);
            $.cookie(msg_webID.val(),msg_userphone.val(),{expires:expireDate,path:'/'});
        });
        return false;
    }//end msgSubmit()
});//end $.fn.extend()


