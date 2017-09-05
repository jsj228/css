/**
 * Created by Administrator on 2017/8/26.
 */
$(document).ready(function(){
    screen.width<768?window.location.href="http://www.baihuitong.com.cn/phoneEdu.html":
(function(){
        vm=new Vue({
            el:'#vm',
            data:{
                logo:'../images/logo.png',
                tell:'0755-8860-1039',
                blank:true,
                fromTime:'8月31日',
                toTime:'9月10日',
                optList:['请选择提升级别','高升专','专升本','高升本'],
                mainSrc:['../images/policy.png','../images/xia.png','../images/destiny.png',
                    '../images/dreame.png','../images/major.jpg','../images/Honor.jpg',
                    '../images/Geography.png','../images/footerLogo.png'
                ],
                level:['无学历升大专','无学历升本科','初中升专科','初中升本科','高中升大专','高中升本科','大专升本科'],
                major:['热门专业','法学','信息安全','会计学','学前教育','室内设计','物业管理','物流管理','学前教育','动漫设计','建设工程管理'],
                footerAside:['考试报名时间','报名条件是什么','考试怎样才能过','多久取证?','学费是多少','在哪上课'],
                selectWe:[
                    {'ico':'../images/title01.png','title':'网络课程','text':'采用直播互动课堂的方式，学员可以看到老师、听到声音、看到PPT和板书...','more':'了解更多'},
                    {'ico':'../images/title02.png','title':'全职教师','text':'有丰富教学经验的全职教师，学员不用担心报名之后就没人管，服务学员...','more':'了解更多'},
                    {'ico':'../images/title03.png','title':'院校授权','text':'深圳学历报考中心是暨南大学等国内多所高校的直属招生培训学校，通过率高...','more':'了解更多'},
                    {'ico':'../images/title04.png','title':'官方保证','text':'全深圳教育机构众多，深圳学历报考中心是仅有十几家具备市教育局培训资质之一...','more':'了解更多'},
                ]
            },
            methods:{
                serverClick:function(e){
                    doyoo.util.openChat('g=10070598');
                    e.preventDefault();
                }
            }
        });

    var height=document.body.clientHeight*0.7;
    //console.log(height);
    $('.banner').css({
        backgroundSize:'100% 100%',
        height:height +'px'
    });
    console.log(
        $('.major li a:first').css({color:'#fff'})
    );
})();

})

