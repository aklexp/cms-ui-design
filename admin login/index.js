
function login1()
{
    
   
 document.getElementById("loginid").value="";
 document.getElementById("pass").value="";
 document.getElementById("loginid").focus();
 window.history.forward(1);
}

function forgotPassword(){
oFormObject = document.forms['frmpassword'];
oFormObject.submit();
}

function submit3(a)
{
 if(event.keyCode==13)
 {
  validatefrm();
 }
}

function validatefrm()
{
      var y=document.getElementById("loginid1").value;
     if(y=="")
     {
         alert("Please Enter Admin Id");
         document.getElementById("loginid1").focus();
         document.getElementById("loginid1").style.backgroundColor = "rgb(250, 255, 189)";
         return false;
      } 
      var z=document.getElementById("pass1").value;
     if(z=="")
     {
         alert("Please Enter Password");
         document.getElementById("pass1").focus();
         document.getElementById("pass1").style.backgroundColor = "rgb(250, 255, 189)";
         return false;
      }
  
        var b=passwordSql("pass1");
        var d=handleSql("loginid1");
        if(d==false){
          return false;
        }
        if(b==false){
          return false;
        }
                var xmlHttp=null;
                if (typeof XMLHttpRequest != "undefined")
                {
                xmlHttp= new XMLHttpRequest();
                }
                else if (window.ActiveXObject)
                {
                xmlHttp= new ActiveXObject("Microsoft.XMLHTTP");
                }
                if (xmlHttp==null)
                {
                alert("Browser does not support XMLHTTP Request")
                return;
                }
    

if(ab>0){
    
                 var a1=document.getElementById("pass1").value;  
                 var hash = hash2(a1);
                 var sha=SHA512(hash);
                 var shapwdm =SHA512(sha+"81a9faa49d950dg3")  ;   
                 var client = new ClientJS(); 

                 document.getElementById("pass1").value=shapwdm;
                 document.getElementById("pass").value=shapwdm;
                 document.getElementById("loginid").value=document.getElementById("loginid1").value;

                 document.getElementById("device_id1").value = fingerprint;
                 document.getElementById("frm1").submit();
}

}


    function GetXmlHttpObject()
    {
    var xmlHttp=null;
    try
    {
    xmlHttp=new XMLHttpRequest();
    }
    catch (e)
    {
    try
    {
    xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch (e)
    {
    xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    }
    return xmlHttp;
    }




    $(document).ready(function(){
        var notification=$(".notification");
        if(notification.length>0 && notification.hasClass("error")){
            notification.find("i.fa-close").click(function(){
                notification.hide();
            });
        }
    });

    
var _paq = window._paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
var u="//nsp.gov.in/esupport/";
_paq.push(['setTrackerUrl', u+'matomo.php']);
_paq.push(['setSiteId', '2']);
var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
g.type='text/javascript'; 
g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();

