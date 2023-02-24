$(document).ready(function(){

    $(".form:first").show();
    $(".medium span:first").addClass('active');
    $(".medium span").click(function(event){
        index = $(this).index();
        $(".medium span").removeClass('active');
        $(this).addClass('active');
        $('.form').hide();
        $('.form').eq(index).show();
    });    
    // 75 WORDS = 1 MINUTE = $1

    // --------------2D Explainer Variables-----------------
    let exptotal = $('#exptotal');
    let exptotal1 = $('#exptotal1');
    
    let expone = 0;
    let exptwo = 0;
    let expthree = 0;

    let expfourstory = 0;
    let expfourvoice = 0;
    let expfoursound = 0;
    let expfourmusic = 0;

    let expsec = $('#expsec');
    let expwordCount = $('#expwrdcnt');
    let expapproxMinute = $('#expaprxmnt');
    let expdurationRange = $('#expduration_range');
    let expdurationRangeSpan = $('.expduration_range_span');
    let expdurationVoiceover = $('#expduration_voiceover');
    let expdurationScript = $('#expscriptspan');
    
    let s1 = $('#s1');
    let s2 = $('#s2');
    let s3 = $('#s3');
    

    let explowQualityAnimationPrice = 1000; 
    let expmediumQualityAnimationPrice = 5000;
    let exphighQualityAnimationPrice = 10000;

    let explowQualityCharacterPrice = 2000; 
    let expmediumQualityCharacterPrice = 6000; 
    let exphighQualityCharacterPrice = 11000;

    let expStoryboardPrice = 2000; 
    let expVoiceoverPrice = 3000; 
    let expSoundeffectsPrice = 4000;    
    let expMusictrackPrice = 5000;    

    expdurationRangeSpan.hide();
    expdurationVoiceover.hide();
    expdurationScript.hide();

    function exprecal(){
        let exptotalValue = (Number(expone) + Number(exptwo) + Number(expthree) + Number(expfourstory) + Number(expfourvoice) + Number(expfoursound) + Number(expfourmusic)).toFixed(2);
        let exptotalValue1 = (Number(expone) + Number(exptwo) + Number(expthree) + Number(expfourstory) + Number(expfourvoice) + Number(expfoursound) + Number(expfourmusic)).toFixed(2);
        $('#exptotal').val("$ "+exptotalValue);
        $('#exptotal1').val("$ "+exptotalValue1);
        return exptotalValue , exptotalValue1;
    }
    function expchecked(){
        let exptotalValue = ( Number(expfourstory) + Number(expfourvoice) + Number(expfoursound) + Number(expfourmusic)).toFixed(2);
        $('#expadditionalfeatures').val("$ "+exptotalValue);      
        return exptotalValue ;
    }
   
   
    
    function secondsToHMS(s) {
        var h = Math.floor(s/3600); // Hours
        s -= h*3600;
        var m = Math.floor(s/60); // Minutes
        s -= m*60;
        return h+":"+(m < 10 ? '0'+m : m)+":"+(s < 10 ? '0'+s : s);       
        //zero padding on minutes and seconds
        // console.log(h+":"+(m < 10 ? '0'+m : m)+":"+(s < 10 ? '0'+s : s)); //zero padding on minutes and seconds
    }
    
    


    $('input[type=radio][name=expdurationcount]').change(function() {
        if(this.value == "expalpha"){
            expdurationVoiceover.hide();
            expdurationScript.hide();
            expdurationRangeSpan.show();
            $('#expduration').val(0);
            $(document).on('input', '#expduration_range', function() {
                expone = 0;
                exprecal();
                let exprangeInSeconds = Number($(this).val());
                console.log(exprangeInSeconds , 'secconds');
                s1.html("");
                s1.html(secondsToHMS(exprangeInSeconds));
                expsec.html(exprangeInSeconds);
                x = exprangeInSeconds * 0.016666667;
                expone = x.toFixed(1);
                 $('#expduration').val(null);
                 $('#expduration').val("Time: "+expone);
                exprecal();
            });
        }
    
        else if(this.value == "expbeta"){
            expdurationRangeSpan.hide();
            expdurationScript.hide();
            expdurationVoiceover.show();
            $('#expduration').val(0);
            $(document).on('input', '#expduration_voiceover', function(){
                expone = 0;
                exprecal();                
                let expnum = Number(this.value);
                expone = ((expnum * 0.8)*0.016666667).toFixed(2);
                $('#expduration').val(null);
                $('#expduration').val("Time: "+expone);
                exprecal();
            });
        }
        else if(this.value == "expgamma"){
            expdurationRangeSpan.hide();
            expdurationVoiceover.hide();
            expdurationScript.show();
            $('#expduration').val(0);
            $(document).on('input', '#expduration_script', function() {
                expone = 0;
                exprecal();                
                let exptext = this.value,
                expcount = exptext.trim().replace(/\s+/g, ' ').split(' ').length;
                expwordCount.html(expcount)
                a = expcount * 0.8;
                b = a.toFixed(2);
                c = (b / 60).toFixed(2);
                expapproxMinute.html(c);
                expone = (b * 0.016666667).toFixed(2);
                $('#expduration').val(null);
                $('#expduration').val("Time: "+expone);
                exprecal();
            });
        }
        let x = $("input[type='radio'][name='expdurationcount']:checked").attr('alt');  
        document.getElementById("showduration").innerHTML = x;
        
    });

    


    $('input[type=radio][name=expanimationquality]').change(function() {
        let expquality = this.value;
        switch (expquality) {
            case 'explowan':
                exptwo = explowQualityAnimationPrice;
                $('#expanimationstyle').val("$ "+exptwo);
                exprecal();
                break;
            case 'expmediuman':
                exptwo = expmediumQualityAnimationPrice;
                $('#expanimationstyle').val("$ "+exptwo);
                exprecal();
                break;
            case 'exphighan':
                exptwo = exphighQualityAnimationPrice;
                $('#expanimationstyle').val("$ "+exptwo);
                exprecal();
                break;                                
        }
        let x = $("input[type='radio'][name='expanimationquality']:checked").attr('alt');  
        document.getElementById("showanimestyle").innerHTML = x;
    });
    $('input[type=radio][name=expcharacterquality]').change(function() {
        let expquality = this.value;
        switch (expquality) {
            case 'explowch':
                expthree = explowQualityCharacterPrice;
                $('#expdrawingdetails').val("$ "+expthree);
                exprecal();
                break;
            case 'expmediumch':
                expthree = expmediumQualityCharacterPrice;
                $('#expdrawingdetails').val("$ "+expthree);
                exprecal();
                break;
            case 'exphighch':
                expthree = exphighQualityCharacterPrice;
                $('#expdrawingdetails').val("$ "+expthree);
                exprecal();
                break;                                
        }
        let x = $("input[type='radio'][name='expcharacterquality']:checked").attr('alt');  
        document.getElementById("showdrawingquality").innerHTML = x;
    });

    // let expStoryboardPrice = 2000; 
    // let expVoiceoverPrice = 3000; 
    // let expSoundeffectsPrice = 4000;    
    // let expMusictrackPrice = 5000;
    // let selected = [];
    //     $('#checkboxes input:checked').each(function() {
    //     selected.push($(this).attr('name'));
    //     console.log(selected);
    // });

    $("#expstoryboard").click(function () {
        if ($(this).is(":checked")) {
            expfourstory = expStoryboardPrice;
            $('#expadditionalfeatures').val(expfourstory);
            expchecked();
            exprecal();  
            $('#showfeaturesone').html($("input[type='checkbox'][name='expstoryboard']:checked").val());
            
        } else {
            expfourstory = 0;
            expchecked();
            exprecal();
            $('#showfeaturesone').html(null);
           
        }
    });
    $("#expvoiceover").click(function () {
        if ($(this).is(":checked")) {
            expfourvoice = expVoiceoverPrice;
            $('#expadditionalfeatures').val(expfourvoice);
            expchecked();
            exprecal();
            $('#showfeaturestwo').html($("input[type='checkbox'][name='expvoiceover']:checked").val());
        } else {
            expfourvoice = 0;
            expchecked();
            exprecal();
            $('#showfeaturestwo').html(null);
        }
    });
    $("#expsoundeffects").click(function () {
        if ($(this).is(":checked")) {
            expfoursound = expSoundeffectsPrice;
            $('#expadditionalfeatures').val(expfoursound);
            expchecked();
            exprecal();       
            $('#showfeaturesthree').html($("input[type='checkbox'][name='expsoundeffects']:checked").val());     
        } else {
            expfoursound = 0;
            expchecked();
            exprecal();
            $('#showfeaturesthree').html(null);
        }
    });
    $("#expmusictrack").click(function () {
        if ($(this).is(":checked")) {
            expfourmusic = expMusictrackPrice;
            $('#expadditionalfeatures').val(expfourmusic);
            expchecked();
            exprecal();   
            $('#showfeaturesfour').html($("input[type='checkbox'][name='expmusictrack']:checked").val());         
        } else {
            expfourmusic = 0;
            expchecked();
            exprecal();
            $('#showfeaturesfour').html(null);
        }
    });        
    
    // --------------Whiteboard Variables-----------------
    let whitetotal = $('#whitetotal');
    let whitetotal1 = $('#whitetotal1');
    
    let whiteone = 0;
    let whitetwo = 0;
    let whitethree = 0;

    let whitefourstory = 0;
    let whitefourvoice = 0;
    let whitefoursound = 0;
    let whitefourmusic = 0;
    
    let whitesec = $('#whitesec');
    let whitewordCount = $('#whitewrdcnt');
    let whiteapproxMinute = $('#whiteaprxmnt');
    let whitedurationRange = $('#whiteduration_range');
    let whitedurationRangeSpan = $('.whiteduration_range_span');
    let whitedurationVoiceover = $('#whiteduration_voiceover');
    let whitedurationScript = $('#whitescriptspan');
    
    let whitelowQualityAnimationPrice = 1000; 
    let whitemediumQualityAnimationPrice = 5000;
    let whitehighQualityAnimationPrice = 10000;
    
    let whitelowQualityCharacterPrice = 2000; 
    let whitemediumQualityCharacterPrice = 6000; 
    let whitehighQualityCharacterPrice = 11000;
    let whitescreenQualityCharacterPrice = 12000;
    let whiteactionQualityCharacterPrice = 13000;

    let whiteStoryboardPrice = 2000; 
    let whiteVoiceoverPrice = 3000; 
    let whiteSoundeffectsPrice = 4000;    
    let whiteMusictrackPrice = 5000; 
    
    whitedurationRangeSpan.hide();
    whitedurationVoiceover.hide();
    whitedurationScript.hide();
    
    function whiterecal(){
        let whitetotalValue = (Number(whiteone) + Number(whitetwo) + Number(whitethree) + Number(whitefourstory) + Number(whitefourvoice) + Number(whitefoursound) + Number(whitefourmusic)).toFixed(2);
        let whitetotalValue1 = (Number(whiteone) + Number(whitetwo) + Number(whitethree) + Number(whitefourstory) + Number(whitefourvoice) + Number(whitefoursound) + Number(whitefourmusic)).toFixed(2);
        $('#whitetotal').val("$ "+whitetotalValue);
        $('#whitetotal1').val("$ "+whitetotalValue1);
        return whitetotalValue , whitetotalValue1;
    }

    function whitechecked(){
        let whitetotalValue = ( Number(whitefourstory) + Number(whitefourvoice) + Number(whitefoursound) + Number(whitefourmusic)).toFixed(2);
        $('#whiteadditionalfeatures').val("$ "+whitetotalValue);      
        return whitetotalValue ;
    }
    
        
    //-----------------
    
    $('input[type=radio][name=whitedurationcount]').change(function() {
        if(this.value == "whitealpha"){
            whitedurationVoiceover.hide();
            whitedurationScript.hide();
            whitedurationRangeSpan.show();
            $('#whiteduration').val(0);
            $(document).on('input', '#whiteduration_range', function() {
                whiteone = 0;
                whiterecal();
                let whiterangeInSeconds = Number($(this).val());
                s2.html("");
                s2.html(secondsToHMS(whiterangeInSeconds));
                whitesec.html(whiterangeInSeconds);
                x = whiterangeInSeconds * 0.016666667;
                whiteone = x.toFixed(1);
                $('#whiteduration').val(null);
                $('#whiteduration').val("Time: "+whiteone);
                whiterecal();
            });
        }
        else if(this.value == "whitebeta"){
            whitedurationRangeSpan.hide();
            whitedurationScript.hide();
            whitedurationVoiceover.show();
            $('#whiteduration').val(0);
            $(document).on('input', '#whiteduration_voiceover', function(){
                whiteone = 0;
                whiterecal();                
                let whitenum = Number(this.value);
                whiteone = ((whitenum * 0.8)*0.016666667).toFixed(2);
                $('#whiteduration').val(null);
                $('#whiteduration').val("Time: "+whiteone);
                whiterecal();
            });
        }
        else if(this.value == "whitegamma"){
            whitedurationRangeSpan.hide();
            whitedurationVoiceover.hide();
            whitedurationScript.show();
            $('#whiteduration').val(0);
            $(document).on('input', '#whiteduration_script', function() {
                whiteone = 0;
                whiterecal();                
                let whitetext = this.value,
                whitecount = whitetext.trim().replace(/\s+/g, ' ').split(' ').length;
                whitewordCount.html(whitecount)
                a = whitecount * 0.8;
                b = a.toFixed(2);
                c = (b / 60).toFixed(2);
                whiteapproxMinute.html(c);
                whiteone = (b * 0.016666667).toFixed(2);
                $('#whiteduration').val(null);
                $('#whiteduration').val("Time "+whiteone);
                whiterecal();
            });
        }
        let x = $("input[type='radio'][name='whitedurationcount']:checked").attr('alt');  
        document.getElementById("showwhitecount").innerHTML = x;
    });
    $('input[type=radio][name=whiteanimationquality]').change(function() {
        let whitequality = this.value;
        switch (whitequality) {
            case 'whitelowan':
                whitetwo = whitelowQualityAnimationPrice;
                $('#whiteanimationstyle').val("$ "+whitetwo);
                whiterecal();
                break;
            case 'whitemediuman':
                whitetwo = whitemediumQualityAnimationPrice;
                $('#whiteanimationstyle').val("$ "+whitetwo);
                whiterecal();
                break;
            case 'whitehighan':
                whitetwo = whitehighQualityAnimationPrice;
                $('#whiteanimationstyle').val("$ "+whitetwo);
                whiterecal();
                break; 
            case 'whitescreen':
                whitetwo = whitescreenQualityCharacterPrice;
                $('#whiteanimationstyle').val("$ "+whitetwo);
                whiterecal();
                break; 
            case 'whitelive':
                whitetwo = whiteactionQualityCharacterPrice;
                $('#whiteanimationstyle').val("$ "+whitetwo);
                whiterecal();
                break;                                    
        }
        let x = $("input[type='radio'][name='whiteanimationquality']:checked").attr('alt');  
        document.getElementById("showwhiteanimestyle").innerHTML = x;
    });
    $('input[type=radio][name=whitecharacterquality]').change(function() {
        let whitequality = this.value;
        switch (whitequality) {
            case 'whitelowch':
                whitethree = whitelowQualityCharacterPrice;
                $('#whitedrawingdetails').val("$ "+whitethree);
                whiterecal();
                break;
            case 'whitemediumch':
                whitethree = whitemediumQualityCharacterPrice;
                $('#whitedrawingdetails').val("$ "+whitethree);
                whiterecal();
                break;
            case 'whitehighch':
                whitethree = whitehighQualityCharacterPrice;
                $('#whitedrawingdetails').val("$ "+whitethree);
                whiterecal();
                break;                                
        }
        let x = $("input[type='radio'][name='whitecharacterquality']:checked").attr('alt');  
        document.getElementById("showwhitedrawingdetails").innerHTML = x;
    });   

    $("#whitestoryboard").click(function () {
        if ($(this).is(":checked")) {
            whitefourstory = whiteStoryboardPrice;
            $('#whiteadditionalfeatures').val(whitefourstory);
            $('#showwhitefeaturesone').html($("input[type='checkbox'][name='whitestoryboard']:checked").val());
            whitechecked();
            whiterecal();
        } else {
            whitefourstory = 0;
            whitechecked();
            whiterecal();
            $('#showwhitefeaturesone').html(null);
        }
    });
    $("#whitevoiceover").click(function () {
        if ($(this).is(":checked")) {
            whitefourvoice = whiteVoiceoverPrice;
            $('#whiteadditionalfeatures').val(whitefourvoice);
            $('#showwhitefeaturestwo').html($("input[type='checkbox'][name='whitevoiceover']:checked").val());
            whitechecked();
            whiterecal();
        } else {
            whitefourvoice = 0;
            whitechecked();
            whiterecal();
            $('#showwhitefeaturestwo').html(null);
        }
    });
    $("#whitesoundeffects").click(function () {
        if ($(this).is(":checked")) {
            whitefoursound = whiteSoundeffectsPrice;
            $('#whiteadditionalfeatures').val(whitefoursound);
            $('#showwhitefeaturesthree').html($("input[type='checkbox'][name='whitesoundeffects']:checked").val());
            whitechecked();
            whiterecal();            
        } else {
            whitefoursound = 0;
            whitechecked();
            whiterecal();
            $('#showwhitefeaturesthree').html(null);
        }
    });
    $("#whitemusictrack").click(function () {
        if ($(this).is(":checked")) {
            whitefourmusic = whiteMusictrackPrice;
            $('#whiteadditionalfeatures').val(whitefourmusic);
            $('#showwhitefeaturesfour').html($("input[type='checkbox'][name='whitemusictrack']:checked").val());
            whitechecked();
            whiterecal();            
        } else {
            whitefourmusic = 0;
            whitechecked()
            whiterecal();
            $('#showwhitefeaturesfour').html(null);
        }
    }); 
      // --------------3d Animation Variables-----------------
      let threedtotal = $('#threedtotal');
      let threedtotal1 = $('#threedtotal1');
    
      let threedone = 0;
      let threedtwo = 0;
      let threedthree = 0;

      let threedfourstory = 0;
      let threedfourvoice = 0;
      let threedfoursound = 0;
      let threedfourmusic = 0;
      
      let threedsec = $('#threedsec');
      let threedwordCount = $('#threedwrdcnt');
      let threedapproxMinute = $('#threedaprxmnt');
      let threeddurationRange = $('#threedduration_range');
      let threeddurationRangeSpan = $('.threedduration_range_span');
      let threeddurationVoiceover = $('#threedduration_voiceover');
      let threeddurationScript = $('#threedscriptspan');
      
      let threedlowQualityAnimationPrice = 1000; 
      let threedmediumQualityAnimationPrice = 5000;
      let threedhighQualityAnimationPrice = 10000;
      let threedfashionQualityCharacterPrice = 12000;
      
      let threedlowQualityCharacterPrice = 2000; 
      let threedmediumQualityCharacterPrice = 6000; 
      let threedhighQualityCharacterPrice = 11000;
      

      let threedStoryboardPrice = 2000; 
    let threedVoiceoverPrice = 3000; 
    let threedSoundeffectsPrice = 4000;    
    let threedMusictrackPrice = 5000; 
      
      threeddurationRangeSpan.hide();
      threeddurationVoiceover.hide();
      threeddurationScript.hide();
      
      function threedrecal(){
        let threedtotalValue = (Number(threedone) + Number(threedtwo) + Number(threedthree) + Number(threedfourstory) + Number(threedfourvoice) + Number(threedfoursound) + Number(threedfourmusic)).toFixed(2);
        let threedtotalValue1 = (Number(threedone) + Number(threedtwo) + Number(threedthree) + Number(threedfourstory) + Number(threedfourvoice) + Number(threedfoursound) + Number(threedfourmusic)).toFixed(2);
        $('#threedtotal').val("$ "+threedtotalValue);
        $('#threedtotal1').val("$ "+threedtotalValue1);
          return threedtotalValue , threedtotalValue1;
      }

      function threedchecked(){
        let threedtotalValue = ( Number(threedfourstory) + Number(threedfourvoice) + Number(threedfoursound) + Number(threedfourmusic)).toFixed(2);
        $('#threedadditionalfeatures').val("$ "+threedtotalValue);      
        return threedtotalValue ;
    }
      
          
      //-----------------
      
      $('input[type=radio][name=threeddurationcount]').change(function() {
          if(this.value == "threedalpha"){
              threeddurationVoiceover.hide();
              threeddurationScript.hide();
              threeddurationRangeSpan.show();
              $('#threedduration').val(0);
              $(document).on('input', '#threedduration_range', function() {
                  threedone = 0;
                  threedrecal();
                  let threedrangeInSeconds = Number($(this).val());
                  s3.html("");
                    s3.html(secondsToHMS(threedrangeInSeconds));
                  threedsec.html(threedrangeInSeconds);
                  x = threedrangeInSeconds * 0.016666667;
                  threedone = x.toFixed(1);
                  $('#threedduration').val(null);
                $('#threedduration').val("Time: "+threedone);
                  threedrecal();
              });
          }
          else if(this.value == "threedbeta"){
              threeddurationRangeSpan.hide();
              threeddurationScript.hide();
              threeddurationVoiceover.show();
              $('#threedduration').val(0);
              $(document).on('input', '#threedduration_voiceover', function(){
                  threedone = 0;
                  threedrecal();                
                  let threednum = Number(this.value);
                  threedone = ((threednum * 0.8)*0.016666667).toFixed(2);
                  $('#threedduration').val(null);
                  $('#threedduration').val("Time: "+threedone);
                  threedrecal();
              });
          }
          else if(this.value == "threedgamma"){
              threeddurationRangeSpan.hide();
              threeddurationVoiceover.hide();
              threeddurationScript.show();
              $('#threedduration').val(0);
              $(document).on('input', '#threedduration_script', function() {
                  threedone = 0;
                  threedrecal();                
                  let threedtext = this.value,
                  threedcount = threedtext.trim().replace(/\s+/g, ' ').split(' ').length;
                  threedwordCount.html(threedcount)
                  a = threedcount * 0.8;
                  b = a.toFixed(2);
                  c = (b / 60).toFixed(2);
                  threedapproxMinute.html(c);
                  threedone = (b * 0.016666667).toFixed(2);
                  $('#threedduration').val(null);
                  $('#threedduration').val("Time: "+threedone);
                  threedrecal();
              });
          }
          let x = $("input[type='radio'][name='threeddurationcount']:checked").attr('alt');  
          document.getElementById("showthreedduration").innerHTML = x;
      });
      $('input[type=radio][name=threedanimationquality]').change(function() {
          let threedquality = this.value;
          switch (threedquality) {
              case 'threedlowan':
                  threedtwo = threedlowQualityAnimationPrice;
                  $('#threedanimationstyle').val("$ "+threedtwo);
                  threedrecal();
                  break;
              case 'threedmediuman':
                  threedtwo = threedmediumQualityAnimationPrice;
                  $('#threedanimationstyle').val("$ "+threedtwo);
                  threedrecal();
                  break;
              case 'threedhighan':
                  threedtwo = threedhighQualityAnimationPrice;
                  $('#threedanimationstyle').val("$ "+threedtwo);
                  threedrecal();
                  break;  
                  case 'threedfashion':
                    threedtwo = threedfashionQualityCharacterPrice;
                    $('#threedanimationstyle').val("$ "+threedtwo);
                    threedrecal();
                    break;     
                 }
                 let x = $("input[type='radio'][name='threedanimationquality']:checked").attr('alt');  
          document.getElementById("showthreedanimestyle").innerHTML = x;
      });
      $('input[type=radio][name=threedcharacterquality]').change(function() {
          let threedquality = this.value;
          switch (threedquality) {
              case 'threedlowch':
                  threedthree = threedlowQualityCharacterPrice;
                  $('#threeddrawingdetails').val("$ "+threedthree);
                  threedrecal();
                  break;
              case 'threedmediumch':
                  threedthree = threedmediumQualityCharacterPrice;
                  $('#threeddrawingdetails').val("$ "+threedthree);
                  threedrecal();
                  break;
              case 'threedhighch':
                  threedthree = threedhighQualityCharacterPrice;
                  $('#threeddrawingdetails').val("$ "+threedthree);
                  threedrecal();
                  break;                                
          }
          let x = $("input[type='radio'][name='threedcharacterquality']:checked").attr('alt');  
        document.getElementById("showthreeddrawingdetails").innerHTML = x;
      });   

      $("#threedstoryboard").click(function () {
        if ($(this).is(":checked")) {
            threedfourstory = threedStoryboardPrice;
            $('#threedadditionalfeatures').val(threedfourstory);
            $('#showthreedfeaturesone').html($("input[type='checkbox'][name='threedstoryboard']:checked").val());
            threedchecked();
            threedrecal();

        } else {
            threedfourstory = 0;
            threedchecked()
            threedrecal();
            $('#showthreedfeaturesone').html(null);
        }
    });
    $("#threedvoiceover").click(function () {
        if ($(this).is(":checked")) {
            threedfourvoice = threedVoiceoverPrice;
            $('#threedadditionalfeatures').val(threedfourvoice);
            $('#showthreedfeaturestwo').html($("input[type='checkbox'][name='threedvoiceover']:checked").val());
            threedchecked();
            threedrecal();
        } else {
            threedfourvoice = 0;
            threedchecked()
            threedrecal();
            $('#showthreedfeaturestwo').html(null);
        }
    });
    $("#threedsoundeffects").click(function () {
        if ($(this).is(":checked")) {
            threedfoursound = threedSoundeffectsPrice;
            $('#threedadditionalfeatures').val(threedfoursound);
            $('#showthreedfeaturesthree').html($("input[type='checkbox'][name='threedsoundeffects']:checked").val());
            threedchecked();
            threedrecal();            
        } else {
            threedfoursound = 0;
            threedchecked()
            threedrecal();
            $('#showthreedfeaturesthree').html(null);
        }
    });
    $("#threedmusictrack").click(function () {
        if ($(this).is(":checked")) {
            threedfourmusic = threedMusictrackPrice;
            $('#threedadditionalfeatures').val(threedfourmusic);
            $('#showthreedfeaturesfour').html($("input[type='checkbox'][name='threedmusictrack']:checked").val());
            threedchecked();
            threedrecal();            
        } else {
            threedfourmusic = 0;
            threedchecked()
            threedrecal();
            $('#showthreedfeaturesfour').html(null);
        }
    }); 
   
        $(".targetDiv").hide();

    
    
    jQuery(function(){
             
       jQuery('.showExample').click(function(){
          jQuery('.targetDiv').hide('.cnt');
          jQuery('#div'+$(this).attr('target')).slideToggle();
    
       }); 
    });
});
