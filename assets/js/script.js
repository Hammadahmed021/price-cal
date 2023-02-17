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
        $('#exptotal').val("$ "+exptotalValue);
        return exptotalValue;
    }
   
    
    function secondsToHMS(s) {
        var h = Math.floor(s/3600); // Hours
        s -= h*3600;
        var m = Math.floor(s/60); // Minutes
        s -= m*60;
        return h+":"+(m < 10 ? '0'+m : m)+":"+(s < 10 ? '0'+s : s); //zero padding on minutes and seconds
    }
    
    $('input[type=radio][name=expdurationcount]').change(function() {
        if(this.value == "expalpha"){
            expdurationVoiceover.hide();
            expdurationScript.hide();
            expdurationRangeSpan.show();
            $(document).on('input', '#expduration_range', function() {
                expone = 0;
                exprecal();
                let exprangeInSeconds = Number($(this).val());
                console.log(exprangeInSeconds , 'secconds');
                expsec.html(exprangeInSeconds);
                x = exprangeInSeconds * 0.016666667;
                expone = x.toFixed(1);
                exprecal();
            });
        }
        else if(this.value == "expbeta"){
            expdurationRangeSpan.hide();
            expdurationScript.hide();
            expdurationVoiceover.show();
            $(document).on('input', '#expduration_voiceover', function(){
                expone = 0;
                exprecal();                
                let expnum = Number(this.value);
                expone = ((expnum * 0.8)*0.016666667).toFixed(2);
                exprecal();
            });
        }
        else if(this.value == "expgamma"){
            expdurationRangeSpan.hide();
            expdurationVoiceover.hide();
            expdurationScript.show();
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
                exprecal();
            });
        }
    });
    $('input[type=radio][name=expanimationquality]').change(function() {
        let expquality = this.value;
        switch (expquality) {
            case 'explowan':
                exptwo = explowQualityAnimationPrice;
                exprecal();
                break;
            case 'expmediuman':
                exptwo = expmediumQualityAnimationPrice;
                exprecal();
                break;
            case 'exphighan':
                exptwo = exphighQualityAnimationPrice;
                exprecal();
                break;                                
        }
    });
    $('input[type=radio][name=expcharacterquality]').change(function() {
        let expquality = this.value;
        switch (expquality) {
            case 'explowch':
                expthree = explowQualityCharacterPrice;
                exprecal();
                break;
            case 'expmediumch':
                expthree = expmediumQualityCharacterPrice;
                exprecal();
                break;
            case 'exphighch':
                expthree = exphighQualityCharacterPrice;
                exprecal();
                break;                                
        }
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
            exprecal();
        } else {
            expfourstory = 0;
            exprecal();
        }
    });
    $("#expvoiceover").click(function () {
        if ($(this).is(":checked")) {
            expfourvoice = expVoiceoverPrice;
            exprecal();
        } else {
            expfourvoice = 0;
            exprecal();
        }
    });
    $("#expsoundeffects").click(function () {
        if ($(this).is(":checked")) {
            expfoursound = expSoundeffectsPrice;
            exprecal();            
        } else {
            expfoursound = 0;
            exprecal();
        }
    });
    $("#expmusictrack").click(function () {
        if ($(this).is(":checked")) {
            expfourmusic = expMusictrackPrice;
            exprecal();            
        } else {
            expfourmusic = 0;
            exprecal();
        }
    });        
    
    // --------------Whiteboard Variables-----------------
    let whitetotal = $('#whitetotal');
    
    let whiteone = 0;
    let whitetwo = 0;
    let whitethree = 0;
    
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
    
    whitedurationRangeSpan.hide();
    whitedurationVoiceover.hide();
    whitedurationScript.hide();
    
    function whiterecal(){
        let whitetotalValue = (Number(whiteone) + Number(whitetwo) + Number(whitethree)).toFixed(2);
        $('#whitetotal').val("$ "+whitetotalValue);
        return whitetotalValue;
    }
    
        
    //-----------------
    
    $('input[type=radio][name=whitedurationcount]').change(function() {
        if(this.value == "whitealpha"){
            whitedurationVoiceover.hide();
            whitedurationScript.hide();
            whitedurationRangeSpan.show();
            $(document).on('input', '#whiteduration_range', function() {
                whiteone = 0;
                whiterecal();
                let whiterangeInSeconds = Number($(this).val());
                whitesec.html(whiterangeInSeconds);
                x = whiterangeInSeconds * 0.016666667;
                whiteone = x.toFixed(1);
                whiterecal();
            });
        }
        else if(this.value == "whitebeta"){
            whitedurationRangeSpan.hide();
            whitedurationScript.hide();
            whitedurationVoiceover.show();
            $(document).on('input', '#whiteduration_voiceover', function(){
                whiteone = 0;
                whiterecal();                
                let whitenum = Number(this.value);
                whiteone = ((whitenum * 0.8)*0.016666667).toFixed(2);
                whiterecal();
            });
        }
        else if(this.value == "whitegamma"){
            whitedurationRangeSpan.hide();
            whitedurationVoiceover.hide();
            whitedurationScript.show();
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
                whiterecal();
            });
        }
    });
    $('input[type=radio][name=whiteanimationquality]').change(function() {
        let whitequality = this.value;
        switch (whitequality) {
            case 'whitelowan':
                whitetwo = whitelowQualityAnimationPrice;
                whiterecal();
                break;
            case 'whitemediuman':
                whitetwo = whitemediumQualityAnimationPrice;
                whiterecal();
                break;
            case 'whitehighan':
                whitetwo = whitehighQualityAnimationPrice;
                whiterecal();
                break;                                
        }
    });
    $('input[type=radio][name=whitecharacterquality]').change(function() {
        let whitequality = this.value;
        switch (whitequality) {
            case 'whitelowch':
                whitethree = whitelowQualityCharacterPrice;
                whiterecal();
                break;
            case 'whitemediumch':
                whitethree = whitemediumQualityCharacterPrice;
                whiterecal();
                break;
            case 'whitehighch':
                whitethree = whitehighQualityCharacterPrice;
                whiterecal();
                break;                                
        }
    });   


      // --------------3d Animation Variables-----------------
      let threedtotal = $('#threedtotal');
    
      let threedone = 0;
      let threedtwo = 0;
      let threedthree = 0;
      
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
      
      let threedlowQualityCharacterPrice = 2000; 
      let threedmediumQualityCharacterPrice = 6000; 
      let threedhighQualityCharacterPrice = 11000;
      
      threeddurationRangeSpan.hide();
      threeddurationVoiceover.hide();
      threeddurationScript.hide();
      
      function threedrecal(){
          let threedtotalValue = (Number(threedone) + Number(threedtwo) + Number(threedthree)).toFixed(2);
          $('#threedtotal').val("$ "+threedtotalValue);
          return threedtotalValue;
      }
      
          
      //-----------------
      
      $('input[type=radio][name=threeddurationcount]').change(function() {
          if(this.value == "threedalpha"){
              threeddurationVoiceover.hide();
              threeddurationScript.hide();
              threeddurationRangeSpan.show();
              $(document).on('input', '#threedduration_range', function() {
                  threedone = 0;
                  threedrecal();
                  let threedrangeInSeconds = Number($(this).val());
                  threedsec.html(threedrangeInSeconds);
                  x = threedrangeInSeconds * 0.016666667;
                  threedone = x.toFixed(1);
                  threedrecal();
              });
          }
          else if(this.value == "threedbeta"){
              threeddurationRangeSpan.hide();
              threeddurationScript.hide();
              threeddurationVoiceover.show();
              $(document).on('input', '#threedduration_voiceover', function(){
                  threedone = 0;
                  threedrecal();                
                  let threednum = Number(this.value);
                  threedone = ((threednum * 0.8)*0.016666667).toFixed(2);
                  threedrecal();
              });
          }
          else if(this.value == "threedgamma"){
              threeddurationRangeSpan.hide();
              threeddurationVoiceover.hide();
              threeddurationScript.show();
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
                  threedrecal();
              });
          }
      });
      $('input[type=radio][name=threedanimationquality]').change(function() {
          let threedquality = this.value;
          switch (threedquality) {
              case 'threedlowan':
                  threedtwo = threedlowQualityAnimationPrice;
                  threedrecal();
                  break;
              case 'threedmediuman':
                  threedtwo = threedmediumQualityAnimationPrice;
                  threedrecal();
                  break;
              case 'threedhighan':
                  threedtwo = threedhighQualityAnimationPrice;
                  threedrecal();
                  break;                                
          }
      });
      $('input[type=radio][name=threedcharacterquality]').change(function() {
          let threedquality = this.value;
          switch (threedquality) {
              case 'threedlowch':
                  threedthree = threedlowQualityCharacterPrice;
                  threedrecal();
                  break;
              case 'threedmediumch':
                  threedthree = threedmediumQualityCharacterPrice;
                  threedrecal();
                  break;
              case 'threedhighch':
                  threedthree = threedhighQualityCharacterPrice;
                  threedrecal();
                  break;                                
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
