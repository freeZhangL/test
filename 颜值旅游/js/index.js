paizhao = {
    init: function(){
        $(function(){
            document.getElementById('audio').play();
            document.addEventListener('WeixinJSBridgeReady',function(){
                document.getElementById('audio').play();
            },false);
        });
        loading.init(wrap,{         //加载loading插件
            type:"ball-spin-fade-loader"
        },function (){

        });

        $(".buttonTop").click(function(){
            $(".background").css("opacity","0");
            $(".photograph").css("opacity","1");
        });

        $("#picture").on("click",function(){
            $('#pic').click();
        });

        $(".buttonBottom").on("click",function(){
            if($("#picture").find("img").length){
                $("#picture").css("display","none");
                $(".photograph").css("background","url(./img/ce.jpg) no-repeat");
                // setTimeout("paizhao.calculatePic()",3000);       //有照片
            } else {
                alert("请先上传照片")   //无照片
            }
        });
        $(".buttonTop2").on("click",function(){
            $("#wrap").css("display","block");
            setTimeout("paizhao.calculatePic()",1000);
        })
    },

    calculatePic: function(){
        $('#wrap').css("display","none");
        var math = Math.floor(Math.random()*14) + 1;
        console.log(math);
        $(".card").css("display","block");
        $(".card").attr("src","img/" + math + ".png");          //随机替换图片
    },

    selectFile :function(){
        var files = document.getElementById('pic').files;
        //console.log(files[0]);
        if(files.length == 0){
            return;
        }
        var file = files[0];
        //把上传的图片显示出来
        var reader = new FileReader();
        // 将文件以Data URL形式进行读入页面
        //console.log(reader);
        reader.readAsBinaryString(file);
        reader.onload = function(){
            var result = document.getElementById("picture");
            var src = "data:" + file.type + ";base64," + window.btoa(this.result);
            result.innerHTML = '<img src ="'+src+'"/>';
        }
        //console.log('file',file);
    }
}
$( document).ready(paizhao.init);