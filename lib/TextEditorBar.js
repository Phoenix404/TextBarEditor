(function($) {
	$.fn.textareaPos = function (begin, end){
     if (this.length === 0) return;
     if (typeof begin == "number"){
            end = (typeof end == "number") ? end : begin;
            return this.each(function (){
                if (this.setSelectionRange){
                    this.setSelectionRange(begin, end);
                } else if (this.createTextRange){
                    var range = this.createTextRange();
                    range.collapse(true);
                    range.moveEnd("character", end);
                    range.moveStart("character", begin);
                    try { range.select(); } catch (ex) { }
                }
            });
        }else{
            if (this[0].setSelectionRange){
                begin = this[0].selectionStart;
                end = this[0].selectionEnd;
            } else if (document.selection && document.selection.createRange){
                var range = document.selection.createRange();
                begin = 0 - range.duplicate().moveStart("character", -100000);
                end = begin + range.text.length;
            }
            return { Start: begin, End: end };
        }
    };
    $.fn.TextEditorBar = function(parms) {
        var cont = $("<div class='tb_container tb_01'></div>");
        var Buttons = {
            bold: true,
            italic: true,
            underline: true,
            NumbericOrderList: false,
            OrderList: false,
            unOrderList: false,
            bulletList: false,
            fontFamily: true,
            fontSize: true,
            color: true,
            backGroundColor: true,
            horizontalLine: true,
            newLine: true,
			link:true,
			smiles:true			
        };
        var textEditorBar = {
            TextBar_width: "100%",
            TextBar_height: "25px",
            TextBar_display: "inline-block",
            TextBar_backgroundColor: "#EFEFEF",
            TextBar_fontSize: "18px",
            TextBar_margin: "0px",
            TextBar_padding: "0px",
            TextBar_border: "intial",
            TextBar_border_radius: "0px",
            TextBar_textDecoration: "none",
            TextBar_font_style: "normal"
        };
        var BoldButton = {
            Bwidth: "20px",
            Bheight: "25px",
            Bdisplay: "inline-block",
            BbackgroundColor: "#efefef",
            BfontSize: "20px",
            Bmargin: "0px 3px",
            Bpadding: "0px 5px",
            Bborder: "intial",
            Bborder_radius: "0px",
            BfontWeight: "bold",
            BtextDecoration: "none",
            Bfont_style: "normal",
            Bcursors: "pointer",
        };
        var ItalicButton = {
            Iwidth: "20px",
            Iheight: "25px",
            Idisplay: "inline-block",
            IbackgroundColor: "#efefef",
            IfontSize: "20px",
            Imargin: "0px 3px",
            Ipadding: "0px 5px",
            Iborder: "intial",
            Iborder_radius: "0px",
            IfontWeight: "normal",
            ItextDecoration: "none",
            Ifont_style: "italic",
            Icursors: "pointer",
        };
        var UnderlineButton = {
            Uwidth: "20px",
            Uheight: "25px",
            Udisplay: "inline-block",
            UbackgroundColor: "#efefef",
            UfontSize: "20px",
            Umargin: "0px 10px 0px 0px",
            Upadding: "0px 5px",
            Uborder: "intial",
            Uborder_radius: "0px",
            UfontWeight: "normal",
            UtextDecoration: "underline",
            Ufont_style: "none",
            Ucursors: "pointer",
        };
        var FontsizeButton = {
            FSwidth: "85px",
            FSminwidth: "85px",
            FSheight: "22.7px",
            FSdisplay: "inline-block",
            FSborder: "none",
            FSborder_radius: "none",
            FSbackgroundcolor: "#efefef",
            FSpadding: "0px",
            FSmargin: "0px",
            FSfontwieght: "normal",
            FStextDecoration: "none",
            FSfontstyle: "normal",
            FSfontsize: "14px",
            FSoutline: "none",
            FScurson: "pointer",
        };
        var FontfamilyButton = {
            FFwidth: "100px",
            FFminwidth: "100px",
            FFheight: "22.7px",
            FFdisplay: "inline-block",
            FFborder: "none",
            FFborder_radius: "none",
            FFbackgroundcolor: "#efefef",
            FFpadding: "0px",
            FFmargin: "0px",
            FFfontwieght: "normal",
            FFtextDecoration: "none",
            FFfontstyle: "normal",
            FFfontsize: "14px",
            FFoutline: "none",
            FFcurson: "pointer",
        };
        var textcolorButton = {
            Cwidth: "20px",
            Cheight: "22.7px",
            Cdisplay: "inline-block",
            Cborder: "none",
            Cborder_radius: "none",
            Cbackgroundcolor: "#efefef",
            Cpadding: "2px 10px 2px 2px",
            Cmargin: "0px",
            Cfontwieght: "normal",
            CtextDecoration: "none",
            Cfontstyle: "normal",
            Cfontsize: "20px",
            Coutline: "none",
            Ccursor: "pointer",
        };
        var textbackgroundcolorButton = {
            TBGwidth: "20px",
            TBGheight: "22.7px",
            TBGdisplay: "inline-block",
            TBGborder: "none",
            TBGborder_radius: "none",
            TBGbackgroundcolor: "#efefef",
            TBGpadding: "2px 10px 2px 2px",
            TBGmargin: "0px",
            TBGfontwieght: "normal",
            TBGtextDecoration: "none",
            TBGfontstyle: "normal",
            TBGfontsize: "20px",
            TBGoutline: "none",
            TBGcursor: "pointer",
        };
        var extra = {
            connectToThisClass: "",
        };
        var hrButton = {
            HRwidth: "30px",
            HRheight: "25px",
            HRdisplay: "inline-block",
            HRborder: "none",
            HRborder_radius: "none",
            HRbackgroundcolor: "#efefef",
            HRpadding: "2px 3px 2px 3px",
            HRmargin: "1px",
            HRfontwieght: "normal",
            HRtextDecoration: "none",
            HRfontstyle: "bold",
            HRfontsize: "25px",
            HRoutline: "none",
            HRcursor: "pointer",
        };       
		var NewLineButton = {
			NLwidth: "30px",
            NLheight: "25px",
            NLdisplay: "inline",
            NLborder: "none",
            NLborder_radius: "none",
            NLbackgroundcolor: "#efefef",
            NLpadding: "2px 8px 2px 5px",
            NLmargin: "1px",
            NLfontwieght: "bold",
            NLtextDecoration: "none",
            NLfontstyle: "bold",
            NLfontsize: "20px",
            NLoutline: "none",
            NLcursor: "pointer",
        };
        var settings = $.extend(true, Buttons, BoldButton, textEditorBar, ItalicButton, UnderlineButton, FontsizeButton, FontfamilyButton, textcolorButton, textbackgroundcolorButton, extra, hrButton,NewLineButton,parms);
        cont.css({
            "max-width": settings.TextBar_width,
            "min-height": settings.TextBar_height,
            display: settings.TextBar_display,
            backgroundColor: settings.TextBar_backgroundColor,
            fontSize: settings.TextBar_fontSize,
            margin: settings.TextBar_margin,
            padding: settings.TextBar_padding,
            border: settings.TextBar_border,
            textDecoration: settings.TextBar_textDecoration,
            "font-style": settings.TextBar_font_style,
            "border-radius": settings.TextBar_border_radius
        });
        return this.each(function(){
            $(this).append(cont);
            if (settings.bold === true) {
                var B = $("<div class='boldBtn tetb_2  _txb02 sng_02 TEB_CMN'>&Beta;</div>");
                cont.append(B);
                B.css({
                    width: settings.Bwidth,
                    height: settings.Bheight,
                    display: settings.Bdisplay,
                    backgroundColor: settings.BbackgroundColor,
                    fontSize: settings.BfontSize,
                    margin: settings.Bmargin,
                    padding: settings.Bpadding,
                    border: settings.Bborder,
                    textDecoration: settings.BtextDecoration,
                    "font-style": settings.Bfont_style,
                    "border-radius": settings.Bborder_radius,
                    "font-weight": settings.BfontWeight,
                    cursor: settings.Bcursors
                });
				B.on("click touchstart",function(){InsertBold()});
            }
            if (settings.italic === true) {
                var I = $("<div class='italicBtn tetb_3  _txb03 sng_03 TEB_CMN' >&Iota;</div>");
                cont.append(I);
                I.css({
                    width: settings.Iwidth,
                    height: settings.Iheight,
                    display: settings.Idisplay,
                    "background-Color": settings.IbackgroundColor,
                    margin: settings.Imargin,
                    padding: settings.Ipadding,
                    border: settings.Iborder,
                    "border-radius": settings.Iborder_radius,
                    textDecoration: settings.ItextDecoration,
                    "font-style": settings.Ifont_style,
                    fontSize: settings.IfontSize,
                    "font-weight": settings.IfontWeight,
                    cursor: settings.Icursors
                });
				I.on("click touchstart",function(){InsertItalic()});
			}
            if (Buttons.underline === true) {
                var U = $("<div class='underlineBtn TEB_CMN tetb_4  _txb04 sng_04'>&#85;</div>");
                cont.append(U);
                U.css({
                    width: settings.Uwidth,
                    height: settings.Uheight,
                    display: settings.Udisplay,
                    backgroundColor: settings.UbackgroundColor,
                    border: settings.Uborder,
                    "border-radius": settings.Uborder_radius,
                    margin: settings.Umargin,
                    padding: settings.Upadding,
                    textDecoration: settings.UtextDecoration,
                    "font-style": settings.Ufont_style,
                    fontSize: settings.UfontSize,
                    "font-weight": settings.UfontWeight,
                    cursor: settings.Ucursors
                });
				U.on("click touchstart",function(){InsertUnderLine()});
            }
            
			if (settings.fontSize === true || settings.fontFamily === true)
                cont.append(vLine());
            if (settings.fontSize === true) {
                var FS = $("<select id='slcvluimp' class = 'a2sdf1 sdf45a1 srlize tetb_5  _txb05 sng_05 cmncls'>" +
                    "<option value='0'>Font Size</option>" +
                    "<option value='6'>6pt</option>" +
                    "<option value='8'>8pt</option>" +
                    "<option value='10'>10pt</option>" +
                    "<option value='12'>12pt</option>" +
                    "<option value='16'>16pt</option>" +
                    "<option value='18'>18pt</option>" +
                    "<option value='24'>24pt</option>" +
                    "</select>");
                cont.append(FS);
                FS.css({
                    width: settings.FSwidth,
                    height: settings.FSheight,
                    display: settings.FSdisplay,
                    border: settings.FSborder,
                    "border-radius": settings.FSborder_radius,
                    margin: settings.FSbackgroundcolor,
                    padding: settings.FSbackgroundcolor,
                    backgroundColor: settings.FSbackgroundcolor,
                    textDecoration: settings.FStextDecoration,
                    "font-style": settings.FSfontstyle,
                    fontSize: settings.FSfontsize,
                    "font-weight": settings.FSfontwieght,
                    outline: settings.FSoutline,
                    cursor: settings.FScurson

                });
                $(".tetb_5").on("change", function() {
                    getTextSize($(this).val());
                });
            }
            if (settings.fontFamily === true) {
                var FF = $("<select class = 'fe87a1 drs5daf ed2 tetb_6  _txb06 sng_06 cmncls'>" +
                    "<option value='Arial'>Font Family</option>" +
                    "<option value='Arial'>Arial</option>" +
                    "<option value='Arial_Black'>Arial Black</option>" +
                    "<option value='Comic_Sans_MS'>Comic Sans MS</option>" +
                    "<option value='Courier_New'>Courier New</option>" +
                    "<option value='Impact'>Impact</option>" +
                    "<option value='Times_New_Roman'>Times New Roman</option>" +
                    "<option value='Verdana'>Verdana</option>" +
                    "</select>");
                cont.append(FF);
                FF.css({
                    "min-width": settings.FFminwidth,
                    "width": settings.FFwidth,
                    height: settings.FFheight,
                    display: settings.FFdisplay,
                    border: settings.FFborder,
                    "border-radius": settings.FFborder_radius,
                    margin: settings.FFbackgroundcolor,
                    padding: settings.FFbackgroundcolor,
                    backgroundColor: settings.FFbackgroundcolor,
                    textDecoration: settings.FFtextDecoration,
                    "font-style": settings.FFfontstyle,
                    fontSize: settings.FFfontsize,
                    "font-weight": settings.FFfontwieght,
                    outline: settings.FFoutline,
                    cursor: settings.FFcurson

                });
                $(".tetb_6").on("change", function() {
                    getFontFamily($(this).val());
                });
            }
            
			if (settings.color === true || settings.backGroundColor === true){
                cont.append(vLine());
			
				var TEXT_COLOR_FLAG = 0;
				if (settings.color === true) {
					var textColor = '<div class="tb_textColorContainer" style="position: relative;display: inline-block;min-width:50px;max-width:50px;height:30px;padding:0px;margin-right:3px;">'+
					
							'<div class="tb_textColortxtCont" style="display:block;padding:0px 5px 0px 0px;margin:0px;width:100%;height:28px;background-color:#efefef;cursor:pointer;">'+
							
								'<span class="tb_textColorTEntity" style="display:inline-block;background-color: #efefef;padding: 0px 5px 0px 5px;font-size: 20px;border: none;cursor: pointer;color:#000;height:99%;">&#120139;</span>'+
								
								'&#x025BE;'+
							'</div>'+
							colorList()+
						'</div>';
					cont.append(textColor);
					$(".tb_textColortxtCont").on("click touchstart",function (e){
						TEXT_COLOR_FLAG = 1;
						$(".tb_textColorContainer").children(".tb_textColorContent").toggle();
					});

					$(".tb_textColorClrContainer").on("click touchstart",function (e){
						var clr = e.target;
						clr = $(clr).attr("value");
						if(TEXT_COLOR_FLAG===1)
							getTextColor(clr);
						$(".tb_textColorContent").hide();
					});
				}
				if (settings.backGroundColor === true) {
					var tBGColor = '<div class="tb_textBGColorContainer" style="position: relative;display: inline-block;min-width:40px;max-width:45px;height:30px;padding:0px;margin-right:5px;">'+
							'<div class="tb_textBGColortxtCont" style="display:block;padding:0px 5px 0px 0px;margin:0px;width:100%;height:28px;background-color:#efefef;cursor:pointer;">'+
								'<span class="tb_textBGColorTEntity" style="display:inline-block;background-color: #efefef;padding: 0px 10px 0px 5px;font-size: 20px;border: none;cursor: pointer;color:#000;height:99%;">&#120139;</span>'+
								'&#x025BE;'+
							'</div>'+
							colorList()+
						'</div>';
					cont.append(tBGColor);
					$(".tb_textBGColortxtCont").on("click touchstart",function (e){
						TEXT_COLOR_FLAG=2;
						$(".tb_textBGColorContainer").children(".tb_textColorContent").toggle();
					});

					$(".tb_textColorClrContainer").on("click touchstart",function (e){
						var clr = e.target;
						clr = $(clr).attr("value");
						if(TEXT_COLOR_FLAG===2)
							getTextBgColor(clr);
						$(".tb_textColorContent").hide();
					});
				
				}
            }            
            if (settings.horizontalLine === true || settings.newLine === true){
				cont.append(vLine());
				if(settings.horizontalLine === true){
					var hrLine = $("<span class='hrLinebtn cmncls tetb_13  _txb013 sng_013'></span>");
					var hrLineBTN = $("<button class='hrlnBtn tr_501_trigr tetb_13'>&#x2015;</button>");
					hrLine.append(hrLineBTN);
					cont.append(hrLine);
					hrLine.css({
						display: settings.HRdisplay,
						"width": settings.HRwidth,
						"height": settings.HRheight,
						border: settings.HRborder,
						"border-radius": settings.HRborder_radius,
						backgroundColor: settings.HRbackgroundcolor,
						padding: settings.HRpadding,
						margin: settings.HRmargin,
						"outline": settings.HRoutline,
						cursor: settings.HRcursor,
					});				
					hrLineBTN.css({
						border: settings.HRborder,
						"border-radius": settings.HRborder_radius,
						backgroundColor: settings.HRbackgroundcolor,
						padding: settings.HRpadding,
						margin: settings.HRmargin,
						"font-weight": settings.HRfontwieght,
						"text-Decoration": settings.HRtextDecoration,
						"font-style": settings.HRfontstyle,
						"font-size": settings.HRfontsize,
						"outline": settings.HRoutline,
						cursor: settings.HRcursor,
					});
					hrLine.on("click touchstart",function(){InsertHorizontalLine()});
				}
				if(settings.newLine === true){
					var nwLine = $("<span class='nwLine cmncls tetb_14  _txb014 sng_014'></span>");
					var nwLineBtn = $("<button class='hrlnBtn tr_401_trigr tetb_14'>&crarr;</button>");
					nwLine.append(nwLineBtn);
					cont.append(nwLine);
					//&lt;br/&gt;
					nwLine.css({
						display: settings.NLdisplay,
						"width": settings.NLwidth,
						"height": settings.NLheight,
						border: settings.NLborder,
						"border-radius": settings.NLborder_radius,
						backgroundColor: settings.NLbackgroundcolor,
						padding: settings.NLpadding,
						margin: settings.NLmargin,
						"outline": settings.NLoutline,
						cursor: settings.NLcursor,
					});				
					nwLineBtn.css({
						display: settings.NLdisplay,
						border: settings.NLborder,
						"border-radius": settings.NLborder_radius,
						backgroundColor: settings.NLbackgroundcolor,
						padding: settings.NLpadding,
						//margin: settings.NLmargin,
						"margin-bottom": "-15px",
						"font-weight": settings.NLfontwieght,
						"text-Decoration": settings.NLtextDecoration,
						"font-style": settings.NLfontstyle,
						"font-size": settings.NLfontsize,
						"outline": settings.NLoutline,
						cursor: settings.NLcursor,
					});
					nwLine.on("click touchstart",function(){InsertNewLine()});
				}
			}           
			
			if (settings.link === true || settings.smiles === true){
				cont.append(vLine());
				if(settings.link === true){
					var link = $("<span class='tb_linkContaienr' style='width:25px;height:20px;display:inline-block;padding:5px;margin:5px;cursor:pointer;'><img class='tb_linkImg' style='width:15px;height:15px;' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACD0lEQVRIS6WW3yufURzHUSIrxCgSV8qVX7M/QCL5kTKUJkJLakvbbihuqNWuFtndUNZSNOTHBZbcoNxoLdSKi10s2W6ncLPXu85Tp2ff757zPE69Ot/v83w+78/5fM45n+83MSH6SMZ1GPqhEH7AB3gLd55sYkT9FPw+QyP8gq9QBjmwDE/uE8AW30SoA64hDVahFppA7xLCZmCLb5iV3lpVeMznI3gPz8MGCBKXXgmcmb14FiaALb6OYxvYK/eSmOLDC+iDOdcAruKjCE7AN6jyFhC0B0lm45qZ16A9zso98e+8r4afXkpBAZTqDOhEtIYVdymRhOsgD/5ACxTDJei8D5qy/LNy1wwOMCyCBlMi3ViNY9iDlxBX3CWDSYyujFAms9rADugivTbiCn7urdg/B+3BIxy2IQPGQGdcR/SpEVeZdMpeRQlQgdMXIz7OrItTYIT2mTtBDW4L6sMGsMV7cF6BGsiFUziEctBezINsYo5YJarEUnVWWeT4KYZnFs92QR1UzU2ZOgWQuIzTA8RloyzfQdz6K6KdwUO+n0C2o/g0duo7/x12gBEs38AQqGn5h8rirdxJ3J/BEg90BB+AfkDsEUncH2CWB72gtqBW4I3I4v4Aup3q9YvQDTeQD/rl0oY6l8VO3X9MP/KyC37DBZRCKmhPtDehhz+A+v8A6K+Ibq16jFa+EFrZOPwF/C51Gd6VM+gAAAAASUVORK5CYII=' /></span>");
					cont.append(link);
					modalForLink();
					$(".tb_linkContaienr").on("click touchstart", function (){
						$(".tb_linkModal").show();
					});
					$(".tb_linkModalclos").on("click touchstart", function (){
						$(".tb_linkModal").hide();
					});
					$(".tb_modalLinkInsertButton").on("click touchstart", function (e){
						var linkName=$(".tb_modalLinkNameInput").val();
						var link=$(".tb_modalLinkInput").val();
						if(linkName==="undefined" || linkName ===""){
							$(".tb_modalLinkNameInput").css({"border":"2px solid red"});
							$(".tb_inputemptyerrmsg").show();
							return;
						}
						$(".tb_modalLinkNameInput").css({"border":"none"});
						$(".tb_inputemptyerrmsg").hide();
						if(link==="undefined" || link ===""){
							$(".tb_modalLinkInput").css({"border":"2px solid red"});
							$(".tb_inputemptyerrmsg").show();
							return;
						}
						link = link.replace("http://","");
						link = link.replace("https://","");
						link = link.replace(/ +/g,'');
						InsertLink(linkName,link);
						$(".tb_linkModal").hide();
						$(".tb_modalLinkNameInput").val("");
						$(".tb_modalLinkInput").val("");
					});
				}
				if(settings.smiles === true){
					var smile = $("<span class='tb_SmileBTNContaienr' style='position:relative;width:25px;height:20px;display:inline-block;margin:5px 10px 0px 5px ;cursor:pointer;' ><img class='tb_SmileImg' style='width:20px;height:20px;'  src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDUzMy4zMzMgNTMzLjMzMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTMzLjMzMyA1MzMuMzMzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTI2Ni42NjcsMEMxMTkuMzkxLDAsMCwxMTkuMzkxLDAsMjY2LjY2N2MwLDE0Ny4yNzUsMTE5LjM5MSwyNjYuNjY2LDI2Ni42NjcsMjY2LjY2NiAgIGMxNDcuMjc1LDAsMjY2LjY2Ny0xMTkuMzkxLDI2Ni42NjctMjY2LjY2NkM1MzMuMzMzLDExOS4zOTEsNDEzLjk0MiwwLDI2Ni42NjcsMHogTTM2Ni42NjcsMTMzLjMzMyAgIGMxOC40MSwwLDMzLjMzMywyMi4zODYsMzMuMzMzLDUwcy0xNC45MjMsNTAtMzMuMzMzLDUwcy0zMy4zMzMtMjIuMzg2LTMzLjMzMy01MFMzNDguMjU2LDEzMy4zMzMsMzY2LjY2NywxMzMuMzMzeiAgICBNMTY2LjY2NywxMzMuMzMzYzE4LjQwOSwwLDMzLjMzMywyMi4zODYsMzMuMzMzLDUwcy0xNC45MjQsNTAtMzMuMzMzLDUwcy0zMy4zMzMtMjIuMzg2LTMzLjMzMy01MCAgIFMxNDguMjU3LDEzMy4zMzMsMTY2LjY2NywxMzMuMzMzeiBNMjY2LjY2Nyw0NjYuNjY3Yy04Ni45MTEsMC0xNTkuMDc0LTcyLjg1LTE2Ni42NjctMTY1Ljc4NCAgIGM0OC44MzgsMjguMTg3LDEwNi4yNzYsNDQuMzA1LDE2Ni42NjcsNDQuMzA1czExNy44MjgtMTYuMDQ1LDE2Ni42NjctNDQuMjI5QzQyNS43NDMsMzkzLjg5NSwzNTMuNTc5LDQ2Ni42NjcsMjY2LjY2Nyw0NjYuNjY3eiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo='/>"+smilesContainer()+"</span>");
					cont.append(smile);
					$(".tb_SmileImg").on("click touchstart ",function (){
						$(".tb_smileContainer").toggle();
					});
					$(".tb_smileContainer").on("click touchstart ", function (e){
						var el = $(e.target).parent();
						if($(el).hasClass("tb_smiles")){
							el = $(el).attr("value");
							insertEmoji(el);
						}
					});
					
				}
			}
        });
        // *************** Start functions ****************************** 
		
        function InsertBold(){
			var text = "",pos=null,beforeStr="",endStr="";
            textarea = $("." + getClassName());
			pos = textarea.textareaPos();
			text = textarea.val();
			if(pos.Start == pos.End){
				beforeStr = text.slice(0,pos.Start);
				endStr = text.slice(pos.End);
				text = beforeStr+" [B] "+" [/B] "+endStr;
			}
			else{
				beforeStr = text.slice(0,pos.Start);
				endStr = text.slice(pos.End);
				text = beforeStr+ "[B]"+(text.slice(pos.Start,pos.End)).trim()+"[/B]"+endStr;
			}
			if(text.length >=5)
				text = text.replace(/ +/g,' ');
            textarea.val(text);
			textarea.textareaPos(pos.Start+4);
			textarea.focus(); 
		}
		function InsertItalic(){
			var text = "",pos=null,beforeStr="",endStr="";
            textarea = $("." + getClassName());
			pos = textarea.textareaPos();
			text = textarea.val();
			if(pos.Start == pos.End){
				beforeStr = text.slice(0,pos.Start);
				endStr = text.slice(pos.End);
				text = beforeStr+" [I] "+" [/I] "+endStr;
			}
			else{
				beforeStr = text.slice(0,pos.Start);
				endStr = text.slice(pos.End);
				text = beforeStr+ "[I]"+(text.slice(pos.Start,pos.End)).trim()+"[/I]"+endStr;
			}
			if(text.length >=5)
				text = text.replace(/ +/g,' ');
            textarea.val(text);
			textarea.textareaPos(pos.Start+4);
			textarea.focus(); 
		}		
		function InsertUnderLine(){
			var text = "",pos=null,beforeStr="",endStr="";
            textarea = $("." + getClassName());
			pos = textarea.textareaPos();
			text = textarea.val();
			if(pos.Start == pos.End){
				beforeStr = text.slice(0,pos.Start);
				endStr = text.slice(pos.End);
				text = beforeStr+" [U] "+" [/U] "+endStr;
			}
			else{
				beforeStr = text.slice(0,pos.Start);
				endStr = text.slice(pos.End);
				text = beforeStr+ "[U]"+(text.slice(pos.Start,pos.End)).trim()+"[/U]"+endStr;
			}
			if(text.length >=5)
				text = text.replace(/ +/g,' ');
            textarea.val(text);
			textarea.textareaPos(pos.Start+4);
			textarea.focus(); 
		}
        function insertEmoji(val){
			var text = "",pos=null;
            textarea = $("." + getClassName());
			pos = textarea.textareaPos();
			text = textarea.val();
			text = text.slice(0,pos.Start)+" ["+val+"] "+text.slice(pos.End);
			if(text.length >=5)
				text = text.replace(/ +/g,' ');
            textarea.val(text);
			textarea.textareaPos(pos.Start+10);//11 is for [newline] characters
			textarea.focus();
		}
		function InsertHorizontalLine(){
			var text = "",pos=null;
            textarea = $("." + getClassName());
			pos = textarea.textareaPos();
			text = textarea.val();
			text = text.slice(0,pos.Start)+" [HrLine] "+text.slice(pos.End);
			if(text.length >=5)
				text = text.replace(/ +/g,' ');
            textarea.val(text);
			textarea.textareaPos(pos.Start+9);//10 is for [hrline] characters
			textarea.focus();
		}
		function InsertNewLine(){
			var text = "",pos=null;
            textarea = $("." + getClassName());
			pos = textarea.textareaPos();
			text = textarea.val();
			text = text.slice(0,pos.Start)+" [NewLine] "+text.slice(pos.End);
			if(text.length >=5)
				text = text.replace(/ +/g,' ');
            textarea.val(text);
			textarea.textareaPos(pos.Start+10);//11 is for [newline] characters
			textarea.focus();
		}		
		function InsertLink(namelink,link){
			var text = "",pos=null;
            textarea = $("." + getClassName());
			pos = textarea.textareaPos();
			text = textarea.val();
			text = text.slice(0,pos.Start)+' [url="http://'+link+'"]'+namelink+'[/url] '+text.slice(pos.End);
			if(text.length >=5)
				text = text.replace(/ +/g,' ');
            textarea.val(text);
			textarea.textareaPos(pos.Start+10);//11 is for [newline] characters
			textarea.focus();
		}
		function getTextColor(textcolor) {
            var text = "",pos=null,beforeStr="",endStr="";
            textarea = $("." + getClassName());
			pos = textarea.textareaPos();
			text = textarea.val();
			if(pos.Start == pos.End){
				beforeStr = text.slice(0,pos.Start);
				endStr = text.slice(pos.End);
				text = beforeStr+' [tColor="'+textcolor+'"] '+'[/tColor="'+textcolor+'"] '+endStr;
			}
			else{
				beforeStr = text.slice(0,pos.Start);
				endStr = text.slice(pos.End);
				text = beforeStr+ '[tColor="'+textcolor+'"]'+(text.slice(pos.Start,pos.End)).trim()+'[/tColor="'+textcolor+'"]'+endStr;
			}
			if(text.length >=5)
				text = text.replace(/ +/g,' ');
            textarea.val(text);
			textarea.textareaPos(pos.End);
        }
        function getTextBgColor(textcolor) {
			var text = "",pos=null,beforeStr="",endStr="";
            var textarea = $("." + getClassName());
			pos = textarea.textareaPos();
			text = textarea.val();
			if(pos.Start == pos.End){
				beforeStr = text.slice(0,pos.Start);
				endStr = text.slice(pos.End);
				text = beforeStr+' [tBGColor="'+textcolor+'"]'+'[/tBGColor="'+textcolor+'"]'+endStr;
			}
			else{
				beforeStr = text.slice(0,pos.Start);
				endStr = text.slice(pos.End);
				text = beforeStr+ '[tBGColor="'+textcolor+'"]'+(text.slice(pos.Start,pos.End)).trim()+'[/tBGColor="'+textcolor+'"]'+endStr;
			}
			if(text.length >=5)
				text = text.replace(/ +/g,' ');
            textarea.val(text);
			textarea.textareaPos(pos.End);
        }
        function getTextSize(size) {
			var text = "",pos=null,beforeStr="",endStr="";
            var textarea = $("." + getClassName());
			pos = textarea.textareaPos();
			text = textarea.val();
			if(pos.Start == pos.End){
				beforeStr = text.slice(0,pos.Start);
				endStr = text.slice(pos.End);
				text = beforeStr+' [FSize='+size+'] '+'[/FSize='+size+']'+endStr;
			}
			else{
				beforeStr = text.slice(0,pos.Start);
				endStr = text.slice(pos.End);
				text = beforeStr+ '[FSize='+size+']'+(text.slice(pos.Start,pos.End)).trim()+'[/FSize='+size+']'+endStr;
			}
			if(text.length >=5)
				text = text.replace(/ +/g,' ');
            textarea.val(text);
			textarea.textareaPos(pos.Start);
        }
		function getFontFamily(font) {
			font = font.replace("-"," ");
            var text = "",pos=null,beforeStr="",endStr="";
            var textarea = $("." + getClassName());
			pos = textarea.textareaPos();
			text = textarea.val();
			if(pos.Start == pos.End){
				beforeStr = text.slice(0,pos.Start);
				endStr = text.slice(pos.End);
				text = beforeStr+' [Font="'+font+'"] '+'[/Font="'+font+'"] '+endStr;
			}
			else{
				beforeStr = text.slice(0,pos.Start);
				endStr = text.slice(pos.End);
				text = beforeStr+ '[Font="'+font+'"]'+(text.slice(pos.Start,pos.End)).trim()+'[/Font="'+font+'"]'+endStr;
			}
			if(text.length >=5)
				text = text.replace(/ +/g,' ');
            textarea.val(text);
			textarea.textareaPos(pos.Start);
        }
		function getClassName() {
            var clas = settings.connectToThisClass;
            return clas;
        }
        function vLine() {
            var vr = $("<div class='_txb012841 _tdgr2004 _pdsfa75215'>&nbsp;</div>");
            vr.css({
                content: " ",
                "display": "inline-block",
                "border-left": "0.5px solid #000000",
            });
            return vr;
        }
		function colorList(){
			return '<div id="myDropdown" style=" display: none;position: absolute;background-color: #e9e9e9; min-width: 100px;max-width: 120px;overflow: hidden;padding:5px 0px 5px;box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);" class="tb_textColorContent">'+
							'<span class="tb_textColorClrContainer" value="999911" style="background-color:#999911;display:block;width:80%;height:15px;margin:5px auto;border:1px solid #000;" ></span>'+
							'<span class="tb_textColorClrContainer" value="DDFFDD" style="background-color:#DDFFDD;display:block;width:80%;height:15px;margin:5px auto;border:1px solid #000;" ></span>'+
							'<span class="tb_textColorClrContainer" value="CCEE44" style="background-color:#CCEE44;display:block;width:80%;height:15px;margin:5px auto;border:1px solid #000;" ></span>'+
							'<span class="tb_textColorClrContainer" value="88FFFF" style="background-color:#88FFFF;display:block;width:80%;height:15px;margin:5px auto;border:1px solid #000;" ></span>'+
							'<span class="tb_textColorClrContainer" value="FFFFFF" style="background-color:#FFFFFF;display:block;width:80%;height:15px;margin:5px auto;border:1px solid #000;" ></span>'+
							'<span class="tb_textColorClrContainer" value="000000" style="background-color:#000000;display:block;width:80%;height:15px;margin:5px auto;border:1px solid #000;" ></span>'+
							'<span class="tb_textColorClrContainer" value="441177" style="background-color:#441177;display:block;width:80%;height:15px;margin:5px auto;border:1px solid #000;" ></span>'+
							'<span class="tb_textColorClrContainer" value="006600" style="background-color:#006600;display:block;width:80%;height:15px;margin:5px auto;border:1px solid #000;" ></span>'+
							'<span class="tb_textColorClrContainer" value="006677" style="background-color:#006677;display:block;width:80%;height:15px;margin:5px auto;border:1px solid #000;" ></span>'+
							'<span class="tb_textColorClrContainer" value="0088FF" style="background-color:#0088FF;display:block;width:80%;height:15px;margin:5px auto;border:1px solid #000;" ></span>'+
							'<span class="tb_textColorClrContainer" value="0000FF" style="background-color:#0000FF;display:block;width:80%;height:15px;margin:5px auto;border:1px solid #000;" ></span>'+
							'<span class="tb_textColorClrContainer" value="554433" style="background-color:#554433;display:block;width:80%;height:15px;margin:5px auto;border:1px solid #000;" ></span>'+
							'<span class="tb_textColorClrContainer" value="666688" style="background-color:#666688;display:block;width:80%;height:15px;margin:5px auto;border:1px solid #000;" ></span>'+
							'<span class="tb_textColorClrContainer" value="8833FF" style="background-color:#8833FF;display:block;width:80%;height:15px;margin:5px auto;border:1px solid #000;" ></span>'+
							'<span class="tb_textColorClrContainer" value="8800BB" style="background-color:#8800BB;display:block;width:80%;height:15px;margin:5px auto;border:1px solid #000;" ></span>'+
							'<span class="tb_textColorClrContainer" value="880022" style="background-color:#880022;display:block;width:80%;height:15px;margin:5px auto;border:1px solid #000;" ></span>'+
							'<span class="tb_textColorClrContainer" value="AA0022" style="background-color:#AA0022;display:block;width:80%;height:15px;margin:5px auto;border:1px solid #000;" ></span>'+
							'<span class="tb_textColorClrContainer" value="FF4500" style="background-color:#FF4500;display:block;width:80%;height:15px;margin:5px auto;border:1px solid #000;" ></span>'+
							'<span class="tb_textColorClrContainer" value="DD0033" style="background-color:#DD0033;display:block;width:80%;height:15px;margin:5px auto;border:1px solid #000;" ></span>'+
							'<span class="tb_textColorClrContainer" value="FF0000" style="background-color:#FF0000;display:block;width:80%;height:15px;margin:5px auto;border:1px solid #000;" ></span>'+
							'<span class="tb_textColorClrContainer" value="CC88FF" style="background-color:#CC88FF;display:block;width:80%;height:15px;margin:5px auto;border:1px solid #000;" ></span>'+
							'<span class="tb_textColorClrContainer" value="9977EE" style="background-color:#9977EE;display:block;width:80%;height:15px;margin:5px auto;border:1px solid #000;" ></span>'+
							'<span class="tb_textColorClrContainer" value="AA22FF" style="background-color:#AA22FF;display:block;width:80%;height:15px;margin:5px auto;border:1px solid #000;" ></span>'+
						'</div>';
		}
		function modalForLink(){
			var container = '<div id="myModal" class="tb_linkModal" style="color:#000;display:none;position:fixed;z-index: 1;padding-top: 100px;left: 0;top: 0;width:100%;height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);">'+
					'<div class="tb_linkModalContent" style="background-color: #fefefe;margin: auto;padding: 20px;border: 1px solid #888;width: 50%;">'+
						'<span class="tb_linkModalclos" style="cursor:pointer;color: #aaaaaa;float: right;font-size: 28px;font-weight: bold;">&times;</span>'+
							'<span class="tb_inputemptyerrmsg" style="display:none;margin:10px auto;color:red;">Empty Field</span>'+
							'<span style="display:block;font-size:16px;margin:5px 30px;font-style: italic;font-weight: bolder;">Link Name: </span>'+
							
							'<input autofocus style="display:block;width:50%;height:40px;padding:5px;margin:10px 30px;outline:none;box-shadow: 1px 1px 121px -14px rgba(0,0,0,0.75);border:none;border-left:2px solid #03a9f4;" name="modal_linkName" class="tb_modalLinkNameInput" />'+
							
							'<span style="display:block;font-size:16px;margin:5px 30px;font-style: italic;font-weight: bolder;">Link : </span>'+
							
							'<input name="modal_link" autofocus style="display:block;width:80%;height:40px;padding:5px;margin:10px 30px;outline:none;box-shadow:2px 60px 137px -8px rgba(0,0,0,0.75);;border:none; border-left:2px solid #03a9f4;" class="tb_modalLinkInput" />'+							
							'<button class="tb_modalLinkInsertButton" style="display:block;width:40%;font-size:20px;height:40px;margin:30px auto -10px; border:none;background: #00BCD4;font-style: normal;font-family: -webkit-pictograph;color:#fff;cursor:pointer;outline:none;">Insert</button>'+
					'</div>'+
				'</div>';

			$("body").append(container);
		}
		function smilesContainer(){
			return "<div class='tb_smileContainer' style='display:none;position:absolute;background-color: #fff;height:250px;width:200px;margin-top:10px;margin-left:-50px;overflow-x:hidden;padding:0px;text-align:center;box-shadow: 0px 8px 100px 0px rgba(0,0,0,0.3);' >"+
						"<span class='tb_smiles' value=':img1:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEwElEQVR4Ae2bA5MlSRSF9yf0P1jbtu2xbdusWXtsrG17a23bY6O2176bX8RkRCNRb+flZM+rPhGnlZk37zl1E69iZqdGNCIM7rpi+C6KieIHiqKYFkn4jYiuw7QI4rsoZgg2cGqli78RoQ42KbJ4uEulik8QWEQDEH8K4nKySyUasLQEAzLFQyptx5cSiQlTqZxKMOADj9i8hqR1+KBiUoMYzVKramiXHYlATE+YP7YBTUgoMpP4R1983lh0A2BSdAPgLvGPwLgcEv8UiMs0/j0gLpdGuQkW3YAqxaywSwDccdnQpJCb4MIxXbsopopyx6VDooq/8/JhsnhcD3I5ZXsIP0QL11w8rjtJRDPglsn9dC6Q3HYJ+dTFxMXje0Qx4dYpA0z5ZOQaXrzZhDjizexSzrIXH1+6d5GsW/q11ES2brW8/+xDcv8NE0oWyBjGEqMm1i//Vl576Fbm9DEj93IYkLomemD6ZNm0Zrm48Odvv8pTi6/PLZ6+jHGBOe+6eqTPhHRbxZ/imuDmpL/88dsvYobfBK94D37aspEcfCYcsi0GTHUFX/Pdl2LDM08/LdOnThO+V1dXC/j5hy3O5UAbfQBj7r/3XiHGm2+8IRaQg8+AJEj5U/omkPgF554nu++8i2geeuBB8vlnnwlgr1g0tpssmdCrHmkD9GVMzRjEJLYB5BJmGbCR2AK/99xDYkK71m1IuB5PPv4E7xOjDdDXFIPYJpBLKANKLn8StZBSZs+wxaSNPs4YzmUQwICl5TYA2GICnwF6GQQ34OpeF1TNG9npA1vgZZ+9LybotWviqpUrOb6sydLG+reNJ7YJ5GKLOXdEhw+Ull1KEq6YKMq0gS2sgd949A4xgV3blPyo4SMEfP3uq9aYtAH6mmLcuHixmEAutphTBzQXpQXeiLY84nFM4DW9L5T5ozqVfAcgUb2R8dQunXKJaDy24GprsrTVMFJXE7Fs4snBeheYN7IjOmryAzS6DJhaZwAOSoknAfCXqn9p+eE5Aa7r2wQNdfmgTfwudDCQpeApWz9Y375bG6QPfT3wLidytuiBh5gMGOIY4N0PXFfiT159xiDebQJjbGAu27pfMLqLTzycajIg9QyipJx7Ajc5SlKTJM0fWHKRsXVj8rtrzeuy9zE1GZDRmIfTB7U0GxGJ5KKfel6aDJASyaS4Hk347GHt/MJDGqB5bZ+LqQoSypX4rGEdZVDrc6XzBadCfuZvvnGsby2aOfX8sQ0w7xUkOXNIG25itaoEwfvvuUe9Sw5/o63membsjMGtieVf2/EN8PPc4w5FrIv0CTF3fAP6NjkJgXlI3ygGLA054VEH7JPbAPoGNmCpyYAbA06IsJIY2IAbTQacEmrCCR3PbmgGdLF9HkgLUAFLjeJDV8Eh++yVWzx9Qz99lwlJiIm7n39CbgPoG0h8mvet0I2xToKAJ4DxZYj35Ug5eWm3c+X0I+3vDGmjTzTxBhOaKGblTmhIi1OlyUmHy4mH7g/5mb8FO/L84v3vCQkiOxiXKpbtX43oV2YYke0AwoP97xRdEV0UH2xAojPFG/1PPIwZTbZumB9sZ8GpYqJfcEaF4TLVZWtyVEn6P81ZytgaQiGxdylfto1oxH9kA1bE3ENbPwAAAABJRU5ErkJggg==' ></span>"+

						"<span value=':img2:' class='tb_smiles' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAllBMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3WfZuVeWeztwVyvGp09mTiefhD/11GOpjUODaTO8nkvPsFPsy1/iwluMcjezlkf/yGz/onT/h3r/l3b/t2//2Gj/knj/zWv/rXL/jHn/0mn/p3P/nXX1g3VwUiyDWTfivVzsgHCpgkV5YC+Bn3CIAAAAD3RSTlMAMHCfv/9Q7xCA30CPIM+wsVKeAAACNklEQVR4Ac3Xh5bqIBAG4KtxxMQKY0vHtW0v7/9wW1nCcEnUcMt+p9n4z4SATH79XJ1u0AOlF3Q7l43uBwwsLOifO3oQRuAUhYNzxocMarHw5PBhBI2iYXP1Izhp1HAd4wmcYTKuvXMMzsI6fuNpAh3vkzBmcAE2/m3+J3CRiX0vRnChkbV+4GJ0RUVwsYisf2ghNGaQQQtsUFPAdMb5bAoWMUP709A9A3P8NAfTYoafls5Z6DvGWwkr56d9FRBAZY3aGrQlajFUAhXAQEs4ajwBJcUKX4DG1C5yXAAtN0NDDpWvPdU1CkBEPhfTqZhzRExUAdWnVgldewpyxKX6frFEzHVZufo0mSEKexJ6RoD5rfgOWPLYnGXjTe8zQL0pSvluc7WFBturjXxXFup9FbAtpbLbQ639TirllgZsN7JSQI1CVjZbEnCQhuO2pv6jNBzMgGtJ3IDTjSSujYCDJI7gdJTEwQi4lVThngHq1giQbQLkd0CvdYBaSEH7SwjUZmo9iV21nVvfRnVEMlLC3f3DIzg9PtzTApj+SzOX8hOqPW1S+xvvyFIOVECfbqZnROTLBIgk54j4TDeTbvwisp0XK/yQrXVGImb4YbUg2zlyHSzkn5VnWZ7PMv02BSKsPdrSFTq8pO6jjZZADiIiWwAVNh7v4gUJLsASnWowhHEdq/XC3WA0tziJyLN3uUhcLY53k+Xb5vk2mt6trn+z7d/u+z9w+D/y+D90+T/2+T94+j/6/gBvXEiBitfywqQAAAAASUVORK5CYII='></span>"+
						"<span class='tb_smiles' value=':img3:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAw1BMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3WfZuVeWeztwVyvGp09mTiefhD/11GOpjUODaTO8nkvPsFPsy1/iwluMcjezlkd5YC/1zWWWWUP/eH7/yWzZaGn/cX+MVz3iam//hXv/1mmzYFP/jHmVUkH6bXv/tXDiWWzmXG79cH7/f3ypXU7tYnPrYXJ5UjLyZ3f/k3hwUC31b3rGhlf/mnb4a3r/wm3/p3P/0GoWGn+OAAAAEHRSTlMAMHCfv/+vUO8QgN9AjyDP+qWW8gAAAlxJREFUeAHd14V64zAMAOAraHU4cVTmdszM9P5PdTk3sXwqpuP94+STJifGP99XoVgqQ6q8USzki66UBDCiVFk12rIdmMmxrZXCBcwllqdwHVjIcRf/ew+W8hYU4QewgsCf++YErEQU3hLPM7D4N2TwBeQgfB5vBZBLwN+FBzl5rP9Abq4ZbzmQm2M2wgZDGEkZhcDEEbKrtlGAAFJFpQqmWoRKHYiweAFGPM/QYFdZCQ5oTdSaoNVRa4Hm6PkHtLZETbYh1UEia6Blc1SJN4CX20VDD7RSmkBQAYgoq3EYxlWJiO20ALr6fwkiHUWg9RDr6f1aHbGny+qlV9sRYgzaZEwVzQTG3ThLUJct8ykbfxRVgg3Iiz2EMqytrBLAG/zGBHETlmg2FyVoI/ZgoR5iuKiCPg23mVqIOFiUoIcoOzBXRyIOR2PQqCOZo2luDS2JiJtblKGsR7NWR9QDiqmpe9tbW5ShpAeTVpOY6McAXNzHf3a2Ert75mAqgClEpV8PwRDW+6jsbykHNJwTAkwxZhrdai9R7TYwc3i0NXFMEwo9BMowz+HJ6dmWcm5OaRXeWomzXVyenFwZJVTYtK51qGbD9ebW1s3Jyc2WcgvgsIWFPXLmbv9+K3F0enKUPUZ7xtJGWpFEEj0k4crZVfoYaGmjEpiw2esm6r2wBvC4lbm5mlRg51zeKcPTU/Lt0bFybDB0BvLs5t/ivGyRR2+dTdbzuY4PrPW2ece7qhseC3/9jebz8+ubt6qi8PbN9tu2+289cLzxyPPWQ9cbj31vO3i+4ehboqPv9/MXVGVx8k4JfGgAAAAASUVORK5CYII='></span>"+
						"<span class='tb_smiles' value=':img4:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAjVBMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wfqylrkw1bx0F/dvVK6nD2fgiyRdSStjzXWtk7412PIqUaYfCizljmmiTHBo0HPsEqpjUODaTPsy1/11GOMcjdmTiefhD/PsFOzlkdwVyviwlvZuVd5YC+WezvGp0+8nktJynxQAAAAD3RSTlMAMHCfv/9Q7xCA30CPIM+wsVKeAAACJElEQVR4AczSRYKEMBAF0CLwieDu3P+Yk6YVh6zm7eIlof/LYrYDPDk2s+gW1+ZY4LZLFwmpsElJQRdIjl1c0hlP4ZDy6IjwccoXtCsIcUEY0A6L4xJuGZ4/ueF53vyGgOMGHtCCCHFLKGjOx0cUxwlO+TTj4SnN8mISYSEqC63MqhpP8x+loNVNW7zFWIg/S91zTdEPCS2eHu+HMY7HpsZCXQ5N05TtdEUCTdKH4AAavZKPNU5Emd7XpgC4mAegc2xwRdLpWsxDUM/5CBdVbTSrggtDLj3ZMGTTE4chThMLxix6YDDG5iX4K74+cBuJYSiAZstPv4Mk6k9Uptz/eOtKjMxBCwPsQ4krR47NFmIClIQst1s5CKBSDOM/QftHJKcvXKVSyXS7TdZyj90mMmrHuQTAXedJzVMpeeZJwU3hyZxDmXLlScfdGACBexEqci/ABriZ9u8XKNlHmGACHJ0hC3Ykm+sfB0Bfrpdf8WC9HmLpsAFG0ntPOJBOTwhwEMDhZwL8xbf99WUz8MefTP50tgVFamw41GK1BcX+ExLJIDAkkBT7L7BFNZCsIUFpejPYoqpl3WRO3jRGWheTX0Nze8MgVV7VnEtZst5tGLyNrW34b/HA3DDQ1maPAFloZIE9gDLj5TpzUFczcpoBwxYAFTfBow8z4hhpLfmkrAnWp3/I8o95/kHTP+r6h23/uO9aOPwrj3/p8q99/sXTv/r+f/8AR1dsFio8np8AAAAASUVORK5CYII='></span>"+
						"<span class='tb_smiles' value=':img5:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA6lBMVEUAAAD0Z2f0Z2f0Z2f0Z2f0Z2f3h2f+02f/3Wf4jmf0Z2f0Z2f1dmf9x2f0Z2f1bmf+zmf3hWf2f2f8wGf0Z2f0Z2f0Z2f0Z2f/3Wf/3Wf2fWf4k2f3jGf0Z2f0Z2f/3Wf7sWf2e2f6qWf5m2f+1mf0Z2f8uGf6omf7rmf9xWf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wfsy1/ZuVfPsFOzlkfGp0/11GO8nkuMcjdmTid5YC+fhD+Mel2pm4azp5PZ08nGva7s6eT///95ZEJwVyvi3tf19PL/3WeDb1D/3Wf/3Wf/3Wf/3WfiwlupjUOdXIcgAAAATHRSTlMAEECA3/+vv/+/YO///5////9Q/3C/j1AQj////68gz/9g////z///UFCf7zBwr7//////////////////////////////UP/fgEAgpQ902wAAAqZJREFUeAG81FXCo0AQBOCO1P4FBI+7u9z/dotEBnYY1r83rOgek3+k0WyYbxg1Wm0A7W9ffPqyshutn8ywHeQ6LjNuBznHlp/g4c0PmAh8vHlSqwVFyEQIRUtqRCiIyRgFkX7Yul6vPxAZjsYomJBTFIxHQ2nYs16vNf9h2NrRYokin/RRtFysnqNsv7/HyzpECYmScIOEmjB3UM11Uc1pSKoPg+0WBl1JtWFAwmAniQYMOmQHBpJowmBCTv4oYE/uYVDXgs+EXxMgDiodmDjUDKJ41QVsmdhWl9AX8yDsmTCNwlwyPehN+TSFnie5o29owNCEf5LceQmdmG+x9nv3LLkLdQkHKg6673mRzDX9hV85AOVhUE/cq6RuTARjFIy3LNiWnofZ85uk7sxsSvWVuL6mv3wQHkyobagDqB3IzuvxQ1KfMt+NLqmxfA/Ppz0lILP31QIVylT4e1IXoBQxYYWJ+ns1QBV3Jqw0ybo3BdT7fwHfm6NvRIdBIAigW84RUKUelCPOOdv3P853theHxeV/pYDZoCzP86K8qPKTnwPqvCnb1n7QabtlXn8ISMGU1qMBk9KZBmMver3+YDBkBoN+r2cvwGg6i18CRuPJF+PR6TjDU0xnkRvQmwh6bgcRXRi3Aylgamd4MnTFl3Da//z7+4W1rbuCiyWeGmunva9W7l9Y0s0aD5mV8R2u6W6Dp64VdfG0oTtlWAszK5ixBowi1gLfgqByG3hQ689DSAOsFTFb+BPc99iSI4B3ilkFJiCXCsFk7YfyGZhQ0YudAbfvzizTOWTgzI7eRAaufXNoL8pqD5eJiPwJnPzemyC/Z3YhfhDu6CsVwCtQJNmuIVpvyUNtjDD9RijPIr50sZafc0tt8MLoJfkxUaxT3KQ6jujfOgJ/5Ng9cO8dIAAAAABJRU5ErkJggg=='></span>"+
						"<span class='tb_smiles' value=':img6:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAmVBMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wfz02XGr16kk1iCd1J3blFUUktJSUn01GVaVkxrZU+7plxJSUnoy2PdwWGZilZJSUm2oltgXE2ShFXSuGCNgVSvnFr11GNwVyuDaTPiwlvsy19mTiepjUOzlkeMcje8nkvGp0+Wezt5YC+ZN1lLAAAAI3RSTlMAMHCfv/+vUO8QgN9AjyDP7/////////+v//8Q////QFD/UM6g6LgAAAIrSURBVHgBzMy1AUQxAMNQBxyG/ac9Zvpxd6+X8L+MdZ4XPlgDSXSJL5KLWJRL5Ue15KU88au0vWiVP9WGX3Lnpp7x1ZhcMAe+MIlLkhF64fDaq4eRKEgDL/KkZGY86xR1PGmUNTzIlbKacVdIXdlzUh5JDsJQFKwx7ikvlUXO3P+IE2Uc0N/Q2/doZZ4moLSxzoc7zhkdeSFq49xe8M4afXtMoQwZqnp3xLrKNcomfd+EPN60AF3vhcKQBOMUJLxzQQ7nJChiFU5QxSIJbrRiqW2tlC3c0isCVmGSEeIkuIH/N3UB6nxpBejz2QZc/gSfIK2hBlikFcD/JlwB5BIxnwFc/wQAOLEEPhdNACSBtFDHHzaX2TdBJ24BaDl7CHDSLOXsVbDktjDR+UOmDwLq3CQT+t3QcxRQv7S85gHddLhERwHtuism8/5DMQ/F2vIiuPJgMatz/daRoduMc+v+r3pcpILTFOkxneaSnvNpPtIPhZN8N18WRhDDMBB8xjosg8z9F/cfjibWUHCHwuzc3qv7pc15BBVPshSk0uXttZJ0QS9+JNgMIlqY7g4WEcnyL5Ns1YbSGrq7cbI6MJNtb/IYQWGFD6bfOyasUEAe4ZsLVyOxQXrvXPL9rKYXwMe7Vlgg60K8M4IBCSd4KAgGrzgxI0FGRnF4yYoKe1QAXrJ4zTPR+T8uGl7z5ovmfNWdL9vzdX924ZhReWaUrhm1b0bxnFF9r1X1PSo/mTuM47KbYvkAAAAASUVORK5CYII='></span>"+
						"<span class='tb_smiles' value=':img7:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAkFBMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wfqylrkw1bx0F/dvVK6nD2fgiyRdSSYfCitjzXIqUb412OmiTHWtk7Bo0HPsEqzljnsy1/PsFOzlkfGp0/iwlv11GPZuVe8nkt5YC9mTieDaTNwVyufhD+McjeWezupjUPqX8PPAAAAEHRSTlMAMHCfv/+vUO8QgN9AjyDP+qWW8gAAAhZJREFUeAHMz0eCgzAMBVBRfpDpEGpo97/lYJNeZVbzllb7pv/LcT0fZ/7BdchK4DGesBeQkAojvBWFSjTO+Ih/r4gjfBXF9I1K8FPyJUSaQSBL6QOHIcKOYF6wQTYv35AyLHBKT1QGK5miRwksJfQghrWY7qgI1iJFNyF2CO8CMO7kRVFCgNWbAMeqbowCT/K2WbVdn7+JEME49abp/YKiuRhGbCI6C2AUtSlPc1HMPZ6deq0amlWXwwho40Hr10o9n/BDaWJuITzaMLSuaXpInKY1AzQmw4FRLjmEissfHNJc7OaSdsBuHmk+dvNJw4O/5ssqwWEYBqLLeAlzjdH9b7cqK7Ky5abvJ+SMzB4pbRDrhOI+GGQRyCsuoExMG6Jmv9u8/VSMlwW8SZQ6+r0kQvaSgMtpjNtLV/bJCAJqHaNFXgoZ1nFb2tIEASxUKnaQ7gUsPgwaq/2vgE3gV9Xtm+BKU6ubxvqHCBCARSGErYCiAt1EqqSnGXb1qdjRRHrtA9U22HcRBa2BGk3lyxfT8/kCz2RDOYcvsqWdxSvZVM/ik2zr5/B70cmG/EhH2zTepOj40XZ8FRQUPrt/jj7elYaY1sjHu2wwsMZtRdoDssGQLU5JnBYEizNtstjfpQbRZE3bvExjg+Y27wij6YM1iA7qcqt6uVnm/19u9y9POC5PeS5Mui5I+y5IPC9IfV8x9X1Y/gCyh3SqA/podAAAAABJRU5ErkJggg=='></span>"+
						"<span class='tb_smiles' value=':img8:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA6lBMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/44T/7Kr/7rP/5o3/33H/6qD/++z/////8sb/4Xr/+eP//fb/8L3/6Jfi3teWhWtmTid5ZEKzp5PPyLyfkHj/99n19PJwWTXGva7Gp0+DaTOMel311GOMcje8sqGWezuDb1DPsFN5YC/sy1/Z08lwVyvZuVf/9ND/cX/xZXbiWWyfhD/0aHj4a3qpjUP6bXu8nkviwlvpX3H/hXv/k3jvZHT/mnb/tXD/1mnyZ3f/0Gr/rnL/eH7/1Gn/p3O+kLl6AAAATXRSTlMAMHCfv/9Q7xCA30CPIM//////////////////////////////////////////////////////////////////////////////////v6700t4AAAKdSURBVHgBzNPXguIwDAXQheRieseEKnqHof//n21R7BmbYuK3PU8DjK6b9Ov/lUoHIZQwSKf8qjOBwAMRZJJWZ3N5vJTPZZPU5wTeErmP5YU8nPIF9+6L+KjoOEepjATKpbcvJ5CISHnUeyTY9f4JJQEPovR0/2V4KT++hfF+lWqtVqs34FZ86B9ozZaMtSM42R2l+y/qyG/dJlzyVv/r3XelqQeXnHGDAqzRkrY+HET2aQM9+aDbSLaFPFgk2WBINBpLVkt0CxnEqlwzITblDy24ZFRAgNhM/jVfUGzJCREcAhUgEGvpDbAhB9ShrNZEtF7BJNQUQeGKMSkbM2C7o9huC0M8U2ko3ATLVwHbNWlrMyFtXoG+A1L2HFDhXw704/B0CSGsNtgT+5pzI/APRzId8S3kAGgVyZYLIprO44niH05Eu9UZwHm1Izrhhx2AmYwNLlyuX/F8Pd2g3U7X89uAqCttNbDtFpr54TkAfWlpw+05APWuPc3eAWi0dfmsDv8Ajmj2ZrN7rQL4B/izG8lfaLeyv8AcJra90gdXPA1Tygygj+xxZn+aLwsch4Eohi7DSZZB+CfMnNz/OMuWrK2TdoR9okK+hzM234peAtf0SgNeQzinlyp41WX6dXBFr3Vwv0/gXl1utzvLYH+4IHD4/DuCJ75Y+GoD4bZAKK421QUURUEQ4bPsgJiFdxaIgyBmgXc1AzAYICGBNAhSEkjYYEiLg2kwEAQGMAGwOBsmK9MCmTJZ2ublBorCQK5tnjaa5a5A6WVVK5TVNT41Xma5RZlz+NRS/X6736Gs7/Gp22/3OXA02EkxjUAHDh15hv8CAyLPoaFrNMZGhK7DY19jRIPY5xM8xwnl04jg6Rd956W0L8plRvQ9Sj4BK4bBgGozPy0AAAAASUVORK5CYII='></span>"+
						"<span class='tb_smiles' value=':img9:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAllBMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wfsy1/ZuVf11GPGp0+WeztmTidwVyt5YC/PsFOMcjefhD/iwlu8nkuDaTOpjUOzlkf/cX/xZXbiWWz0aHj4a3r6bXvpX3H/hXv/k3jvZHT/mnb/tXD/1mnyZ3f/0Gr/rnL/eH7/1Gn/p3O4VYe/AAAAMXRSTlMAMHCfv/9Q7xCA30CPIM////////////////////////////////////////////+/chKn2gAAAktJREFUeAHNlwXS4zAMhTegBgohp6EyM9z/cAvZ2L+q1nHdoX5DIb2RXwzSr+/FMC0bGmzLNPSiO5YDBMfqvBvtej68xPfcd+I9B6Q4njK860Mrfrc9+x4o6bWMoz+ANxj0pX/OgbdwDP14qqAfr1boO6CB8+SDOwAtBvRf9ECTHpk/oM3jjPJBGx/He/ABHnLQgQ9wXN0EKJ7EAX0XOoAIwjACCVEYBoDge5QFnDhh/0iTGDjoXVq/RO+sRoBbGAyZYJjBAxl+x9NwmlUkMkxy9kMRodwL9CL/eWPUAiYgyiphDSMQjFhDUpWAMLEFgqhKWc0YGsasJq1QUsgEm5rFOEHjDeNQc+1aADDVENsANdiAYQUYKlCOGCaFmpRhRqVcIE6bb/J8MinyPIeavxfFZJLnjXoaywTCfymO4wCkBPH43xBDiUCWVwEoCao8IwL6fJuADR9jk6msjfW0mKKUKUifF5OBBZgSQBhiQxFoCThoS+NoDcF6sakmTEFCNlW6rcdMQfzqcPOefsO0YTafz/j1/xFEIPBeHm1Fu0BBjjZZCjxoMZ8v+LUsAepChgWW8/kSC2TIAWmBMUYCq/l8hQTGpMBA9ODBhilnPheXDwZAr63Iql4LVLTIkpd5pYhar8VlScq81kJz8yyw0SpVtzxst+NXe61i+SBmkphHBxSvLvePPOx04ldHXO6rG449n0lLOoKe+1bLc6YCZ9LyKJuuy/SBC2261G3fHsfvedun03herjz8euGNp17re7vX82lzv/HW9yv5A99bfwEHqWaNAAAAAElFTkSuQmCC'></span>"+
						"<span class='tb_smiles' value=':img10:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAilBMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wfkw1bqylqYfCiRdSTdvVLWtk7412OzljnIqUbx0F/Bo0GmiTGfgiytjzXPsEr11GO8nkuMcjdmTieWezvZuVefhD9wVyuDaTPiwlvPsFN5YC/Gp0/sy1+zlkepjUO6zowRAAAAD3RSTlMAMHCfv/9Q7xCA30CPIM+wsVKeAAACC0lEQVR4Ac3X94KjIBAH4ItmQqquxPTKYopl3//1zrMis2AI177/tsxPnIT24/81cNwhVIauMzCrHrkEJMQdvVo9nkzhW9PJ+JX6CQElMuktn01BazrTj34Oveaa91h48AJvofzkCLyEDKzqcYJQb5OwIGCAoD6MPTDiyZ/FHAzNpe8PGOt+o6ZgbCrWT+ANE6GDBN5AxpoB+H7/b2Ci7sBHQJfQsaTBh7ILI5CEAcUBNAhBUq9RLnSs1pTSEIXmv1yvoMOtAkinfBPkD/MB8X/9ftOJINUsgtZ2F4hPwiMLdltolXPKqYv9zZ7mDj4o+Aea22/8OsQRWrCkpWMIGuGRlpZCE8r941SGb6HHthzmqdxxioC6eWEz9PPlytgnCD4Zu17OdTP8sG5mGSDhESuAgBUiDgJFAL8ypgjIXXlPwLl6Og6oRWddAL+xxh0Ed9a4cXXAgwmeIHgywUMZcGGtCDoi1rqoX+GO63HCXX6FIe5hnACSxLiLQzyb00uWZRy+xfM/XVI8nx14m4Oms6EBXlCMELykmXHxompmZLSxYdO+nS19ZoVnqt7b1Fsbj2LWiCOu3drwEM4xk8RnNADd9s4ZwlEHtAeMWzH1r19Z9nUtRyOPYKY/4iQszh7tBImZPL3m9ocs+2Oe/UHT/qhrf9i2P+7bXzjsrzz2ly77a5/9xdP+6vtP/QRcFWS7gAAfrwAAAABJRU5ErkJggg=='></span>"+
						"<span class='tb_smiles' value=':img11:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAjVBMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wfqylrkw1bx0F/dvVK6nD2fgiyRdSStjzXWtk7412PIqUaYfCizljmmiTHBo0HPsErsy1+8nkuzlkepjUNmTiefhD/iwlvPsFOMcjf11GODaTPGp0+WezvZuVd5YC9wVyvZ4BnlAAAAD3RSTlMAMHCfv/9Q7xCA30CPIM+wsVKeAAAB3klEQVR4Ac2X1cKrMBCEDzLF6+4tWn3/t6tgP5KSlD32XQ7ZYbPxX/8vkqyoSFEVWfouuqNoqKApHdFo3TDBxDR0kXhDw0c0gxtumWjEtJqzt8HFbuiH04UAXefjyGkQQpNI8bEDLZ7t4BTie/3+gONQq4Oe1W84Gk9ieijQm76l6Wg2zypZHQs7lueL5SSjjwL9XF6lul2ZP0mz+Ofrzbbf3y7mKDCfbhaLxXQZWyTdK8+oeP4tXl/H2zka6I1ebZbDeE6W5j/evPq5AI/B6lULvDEKFdTSbz0IMFsmzTS9kEArjEIFWpFXoYOWZHuUgpYoqYGGlmjpKkKZ3f6w3yGGJydrSkaJo/vmCAjIMqMEnpvggS0ziqCigO9m+AKyGhugyMHNOAjI+B8NAjcjEJAZBgjdhFBIZhhEp7jhKeLLDIOYsxdezgBfzg0I5BOpJSppNedTWUZr5Hw5t0SibijkLY2zqe6CQ0ywA5tO07Z+9W5uzs27oo7ZcLBEeXTuETUcLLqGCle3RjWH/Ghjp3B3X9zD4+FwDJNsos8JsKpwdm8H/2dHv7lnZgVyLHyNxbjifIPNvGSJ09VZ1zxxNId+0aRfdcmXbcJ1n/rgID55iI8u6rOP9vAkPn3/W55X4WS5bHX+zAAAAABJRU5ErkJggg=='></span>"+
						"<span class='tb_smiles' value=':img12:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABJlBMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3WfZuVe8nkvGp09wVytmTid5YC/iwluWezuzlkepjUOMcjefhD/sy1/11GODaTPf33bp3nFS6Lap449y5qfJ4ID03mzU4HuT5Jhd57Ge45Oz4op95aKI5Z2+4YVo56xfiF1T3q1bpXdkYTlVqoBTOyZMNSZWPiZgSCd15qZNSzhkTCdhSSdZQidQpYBjSydbQydPOCZONyZeRifPsFNS3a1S6LZPj25cRSdS6LZWy5tS6LZS6LZia0JROiZUPSZS6LZXQCZ5RDyaT02mU1NuTyzdZm7/cX+cUU1wUC1S6LaA5aGWWUP1b3riam+fW0jZaGnPZmSMVz2zYFN4Z/JVAAAAWnRSTlMAMHCfv/9Q7xCA30CPIM//////////////////////////////////////////////////////7////////////////7///3D/EO////+A////////////YO/WI7+SAAAC0ElEQVR4AczSNYLFMAwE0AlMBIb733Y/U9BKta+22Pi/un4Y+TQOfYeQaRDOyDChkZpzlZuigQk3ieFIcu7yhD2aeSgrNpXKBrVgQydsIl04fka69vj2DEUYIAUzWhlSFb8yg/Ls/zAs4ZszzPHFeILhTYUniM4buBRfF8yNw0AUgEt7NyzHzxCOyswqMzMzt///T5wpmk1qpXD0DYTfbFaGlbCIYS8zgjhLsBJ4B2w4GapyPcBNngKeSzrNgV3XhR/VZAC25wshrKwDIEeJHAAnawUf+HkbQLW06jWqlX2RsQuUKNjQeHBrEqBbWCyBEaQJMKWibmNyFpHGEmxBjLD577X4nGohxrcRyReoRiGf5PrEtPAWJIoZ3/et5OflCouwgg8yRdJ0E9rIpCzbqaG2KICMOkwBWuOAdik7fyegLKXs+lpApbu7wv+A7KAvBHT39MpAb083RfqCF/2fD6gMSG0wLHxIBiqfDij3Sqajq6tPBgaEHxCfCEh+rw3Hr0egD0uD5EDq6pVpRqH5jQ6kVuqRqcb4KVwkrf5QbqnIdONgPErREp/O7TLVxKRSU8CUUpPThn+R3CJnZKpZFZibV6EFfoHSfjbFZKpFFVqaVpFlIJ/egkCDAlaAVRVaXYJNHL+oNihgDVjWJaybbm4yxUZUwCQCKyp5mjXd2zble1sqtI3AQjUgZ7q17ch3dlVKQMl0c93bl/UO4roP54C5+OkRAOPt/VjWGcGUiqycnKzqJsI8YGy+OwmmVa3VOcAxjzh7NQlDHoDJ4Fenp2fn52enp/GhCK/RkLWj+zBQpgyAi7PLK+3y+gZAJm3M0/Zu7waGBwbay0RUdHD/cFXj4R5O8fOjqoubx9qAxxu4XxmWXRtPz1fayxNs0+8N437Rd4DX17fA6yvg+EXTuG/ecLhWNhfJWq55w/H7W57f33T9/rbv9zeev7/1/a9+AalevG0A3QA6AAAAAElFTkSuQmCC'></span>"+
						"<span class='tb_smiles' value=':img13:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABBVBMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wfkw1aYfCimiTG6nD2fgizqylrx0F+RdSTIqUb412PWtk6zljnPsErBo0GtjzXdvVL11GPZuVe8nkuzlkfGp0+WeztmTidwVyufhD/iwlvPsFN5YC/sy1+McjeDaTOpjUNwWTWfkHjGva7i3tf///+zp5P19PJ5ZEKpm4aDb1BkTCdZQidTOyZUPSZWPiZjSydhSSdONyZMNSZgSCdcRSdbQydeRidPOCZROiZXOSymU1PdZm7/cX+eWkj0bXmbVkipXU7iam+zYFOMVz2WWUPPZmTZaGlwUC3xBhylAAAAD3RSTlMAMHCfv/9Q7xCA30CPIM+wsVKeAAADAUlEQVR4AczSRYLEIBAFUCIfi1sRY+5/y3aLy2remnLY/+W4no8X33Mddgj3BEaEx9lOUmnM0kqyHZTAIqHYlkBjlQ7YGhliUyjZoijGDnG0eDmBXYSzHb+dYTM+STN85EW5mSEaxFc5ESV4KYnI1IMMERuRMT7qpqWbDh+GiNK+xFcs2VCIuzaz1hZ0ZwdNJxndpDY3uTW4C0f/Bw/01iYYaSy94WH4ozQeOntn/mrMqJrcZlTYFg968P9xgmIfUuAEcS2+LpQbiWEwAM8k9eFDrOlf3i0zMzO8/6NcN5E80Z4PS18hqadWXc1Ktr9EFpBoY63TKko7a41OIkvgCtQeY2mmVY/OUox5rXpZ+EQDOSb4RE1IPCbkNMo9aqhIYX0JVuYqyCeGvS0UGVIAkcLK1fx/VGGMV1+7SqSRqkj1OP51RTikUz3jmhr0koVA0xCCXnIHIQUsr0Ui1YhIYF0pxkmYUoGBpEYgGRVMjQKoIEOn8dYWWmtjDYW1RmtdWOsbdDIVyAAGKNsiUb+RFG1Ja4gEyE2l/kJl8niAqHjIvwpQGX4s68wl/xzANRAy/U8BdAlMz8zOzY/Mzc5MA776+wAWmF5YnJ80u4TUxQPwgyQeh+UwnS0uA1b1TIlHmbXAynxEpJqGVExCAba6tr6xurqxvrnVLy82iJVzCbK9s7u7u7a3+2wfpIyVs2woDmSrm797sL3bOQRxkYYik+BBNruJR6vYGL2KCmdD0VQJ2BH95dXdjqhw9km0dQIW5h3HAsjN7WsswHo3bxPYlytIxN4W2drADnY7Ozu7FIjIrS2yBATHJ6dn58/OTk92tsAiC5BZKMEuLs/J5RVYIzIgDhgkA7k+P7+5vXt2e3N+fg3SKva9f8TpPUj35w93IHcP5/diW5RHHHnISmgbe+ymZ4XWznchHuVmJQ9Z8phnwWxCzc0DT09cTOKYJw+aMgtZJTtUp/27o6pp0LTVzz0yNXL+yw/bLz/uv/zC8fIrz8svXS+/9r384vnCq+/H+wHymcaJOO2HWgAAAABJRU5ErkJggg=='></span>"+
						"<span class='tb_smiles' value=':img14:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAgVBMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3WfZuVezlkf11GOWeztmTieMcjfGp09wVyu8nkvsy1+fhD+Mel2pm4a8sqHZ08n///95ZELi3tfPsFN5YC9wWTXGva6DaTP19PLs6eSDb1CWhWuzp5PtnbpZAAAAD3RSTlMAMHCfv/9Q7xCA30CPIM+wsVKeAAAB1UlEQVR4Ad2Xhc7jMBCES1sHmtTNBMrM7/+AJ/84csFJffyJLXllz3Lr76Xd6fbkg1630252u99VYqG6/bq3gzCSu0RhUOd+qOQhKnRejyN5ShQ/f/1AnAye/CNJpQZp8tBzSmqh2n732YJ938dCoqQBKrnRP5VGpLYvBtKQgRU/0pi4xUTSmIjvh/ICISmo5AVU8OABQ631UAyO4/CuAqMMhnwkjHVsqdAXIsc7mYjz+LNGdfmh+GQozuNu6x2WUOMTLc5j9ZFF8qoBec+pzusGOiRBQw1YhJ4wGcntPO61DJbDcxiyUa1jMtA4EsmAB/+vgWGh87wEUea5Loa1DIyqDA/JKtuNdiCNJzBMZ/PFYkksFvPZFIbJmAPJDuWqBFaz9fIB69kKKCsKZSuZJgDmy6fMzSM4mTidCwCrpYMVgA2nMxWULYDd0gEAlFxQSAQYFsun7GFgCaioojZcVA0RV97V9Ak7GA52cws/RTQcl084wVBwY6HWNjIqnt0abu3Wxk/AyvUCegARfUcSLlcOYw7n6wXfcRTdHTB0CQeltgcMa8QZ6kmeg6GUnnxXxYH/kOU/5vkPmv6jrv+w7T/u+y8c/iuP/9Llv/b5L57+q+8f5QcXX3VJMkaXggAAAABJRU5ErkJggg=='></span>"+
						"<span class='tb_smiles' value=':img15:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABFFBMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3WfqylqfgizBo0HWtk7dvVKYfCiRdSTkw1bPsErx0F+zljmtjzX412OmiTHIqUa6nD2zlkefhD/11GN5YC9mTidwVyupjUPsy1/Gp0/PsFOWezuMcjeDaTNmc3Jlse9mYU3iwltmZ1llkrH12nBlpdafkFi8nkvZuVfZ0om8yqOfwrzi1YF4t97s2HiCudbFzZqoxLSDb1C8sqHZ08n19PL///+Mel3s6eRvtOdwWTV5ZEKVv8Wyx6uMvM2EutRlse9lse9lse9lse9lse9lse9lse9lse9lse9lse9lse/Z0ollse9lse+MahAoAAAAXHRSTlMAMHCfv/9Q7xCA30CPIM///////////////////////////////////////////////////////////////////////////////////++/r4Aw33BAjyBgEEDPnxtKGekAAAMTSURBVHgBzNBFmoQwEAXgQh4RXIqhQ+v9LzkfsgiZRlfzr6Jl9H95fhBiFga+R6dEgYBDBBEdJJXGV1pJOkAJrBKK9sQam3S8XX2CXYmkVWmGA7KUVngChwhv/f/5CO7/6xFSgRNESg6Z4ZRM0lKCkxJaiHFaTDaN0zRZFC5Q1gQFHHlRYqEqcjiEXC+gbphb2Jj5Bw61NoHuxsxuBcxsupUpRLD09fC9qeDImyFE1cMS0STApDLG3Hlw6/BHX/KgMMY8MAloIjAxPGqeLb7qyoZHBhNBIw+zhzHm9mixoX08rQrg0cDHZb49gisCGoS4LKQBcN0ywOv9wcDdfn6bLwslx2EgiOZgCg6+wYrH4Wg3zMyw4eX9//8461ZuQ6zUFd8rMow7o5ZmpAiLAG5jBGx2UmkvKmMz65s0s53xtNOWw7ZBIMsuds6yrFSeXVKkSbFLQbgvhM0uWYMAFTlIIYmkCxykSCYBecc+zj2Be4d9StIsIP0cCvp7reDnUJS3BGT5MwnHogiWw4q7srwSwEKqSEW1XKs3KIZGvVauSkUlvJCwlJvykyZFMAZ8CxdT618FWiimcDm39fsOGejogDbKOdxQuvo9KdL1HJwviEzac1nRDTUUmNDTr/tq2nIcQSiJvg7pBS1AUx3ot0OiDDOPxpPp7C/TyXjEzBmioQ4ZoKmirQcsaKrv54tZiMVcKTTxG2jr2FiQ31JV32p2xVpV5xKjxMaCra2i1TckXIHplYDygTY6qOJvbUihifGxcmAeQbnA8KmJBHwXtnCYjWCmtnBA8xMOd+mWAHXh4s/oEefBs4AcNuCQZ8ID/bo6ZD0guRwbyGGgDzhkgd87CGTYQAYCu5jj7h4CSTaQhMA+cc0BAiQ4FkEQOMQIHGGi34WjXRomHmMETsFSzYq8E/I/L7LBkj8lYjib+1G0J50TcVy8Kb6BnutLzAAeL0/mlhhtik+Xx8fn6AyA5bZHsfS2SxnkfHhB9nsZYjOoUITKYCOjhJbD6+Pj49Hn8S3w17c5GPZlkPf9/uN4eXxN/A/8AQ808zD8XIvrAAAAAElFTkSuQmCC'></span>"+
						"<span class='tb_smiles' value=':img16:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAbFBMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3WfqylrIqUazljmtjzW6nD3x0F/412PdvVLBo0GYfCiRdSTkw1amiTHWtk6fgizPsEqzlkdwVytmTif11GODaTPoewHMAAAAD3RSTlMAMHCfv/9Q7xCA30CPIM+wsVKeAAABrklEQVR4Ad2Xh5LDIAxEz8brnt57+/9vTIPxcNkDjLn+pivWRiAQ0tvvJYpFAkUi4sjPOxUZXshE2tY7L0p8SFnkbfyLDEaywulelbBSVvboazipLevo9dGCfs+YuQytyKIgf1Ig/8FwNL4zmaJhNpzcDcP51KLQk/7TxXKlWKNhvVJstkqB9iHvy39aPRnfWWoRTFe78Xi3erCTEv3XXNTP4DePL/YDGFgvdg/1Ge7UL+cHD3Z39zmsbJd3BTx4f6JK+etqARez0WqIB6XuX6ADhbaDGTqQ5RxA1xBK+KPvQoqOpEpAQOdwPJ2OhzMkVrtQAvoWni+nJxdIrPZM3SJoHE6KA+C2yzsVQ+N4UhwBtz3mLTg1AAY7bULSXSB5CqD7EkACHptoEACli+12gbM8MNBhOwv4868EEnQmoaPsiaDL5ElM19mTiAqKHxmVNE9EeFHlsm4upExJD4u9kBIFP232GsBPG4fgrkIcgHkXTg22HZBU/gIVtzheS6i5yfLaxH5uaPPchZTbPG5UuZD6tarhzbK/f3i7Hz5whI884UNX+NgXPnjaR99fyw2pq1+HHAsGFgAAAABJRU5ErkJggg=='></span>"+
						"<span class='tb_smiles' value=':img17:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAtFBMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3WfiwluMcjdmTifZuVfGp0/PsFP11GNwVyu8nkuzlkd5YC+Db1D19PL///+Mel2zp5ODaTNkTCdcRSdbQydeRiepjUNONyZMNSZPOCZgSCdhSSdZQidUPSZjSydWPiZwUC2cWEi8W17dZm7/cX+ZVUizYFP1b3qfW0jGZF7sbXSWWUOWezuMVz3LOjS8AAAAD3RSTlMAMHCfv/9Q7xCA30CPIM+wsVKeAAACFklEQVR4Ae2XhZLjMAyGL6CG4U/rLDMz8/u/121csKNp7aTH8G1pNaN/ZFmR5S+/L47r+TTB91ynn/fAC4gReIOu3mEU01ziKOziHwW0kCCyuicxGYkTc/QpWUkN68hy6kCeLdy5gDoRON/kzxSY/zcoZAH1IMi4f5hTL3K+Fyn1JGX1Q71pV1RMvYlb9U9LEGkZDEhRlADKiiQmcxDODWCIMSOSmMzRvAyIGmNqQWQ2qywMSLGCKStkNU97lEeKVUxZJavZmwgEywoEk6eIll0COVLANWfLZHZZChpGar/MZpUEn1pUsmIKog5mXwrQNzBP4L9AJchMYRQQNazUwiCwChvsaeCFtIb1jU0zW1jjheQpA7C9aWEb4KXsLi/g8scZ2LIJbOkCDm8o6ITeUFgSdtBid28P2D9Amx2WAr2pHkLn4Oj4eG//+PjkFDqHvKlqbb2AxtnxJ+fnzWdLoeBtXT9YSiguGtfLy6PPzxMoytbBwo+2CgoZAHAudZS54kebCoFlYRL7aXsNhzwAlgWhNqKJ/Qq4akWwI3gG+IChFKTnUSOjcqD8KeEjDle4vrm9u5fc3T5cg/uni4csIfPw+HSv8fQo1y/4kLVgzKvWADy/vE7dX1/eAOxUfMwzDJqjd7mKDwka3kc9R1UxPCxrSOrycCi+fVjm/t8+7n/7hePbrzzffun69mvft188v/3q++v5Cp17eeDV3zh9AAAAAElFTkSuQmCC'></span>"+
						"<span class='tb_smiles' value=':img18:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABF1BMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wezlkd5YC9mTif11GNwVyu8nkuDaTOMcjepjUOWezvZuVfPsFPsy1+fhD/iwlvGp0/s2HjPz5KoxLSMvM14t95lse/Z0olvtOe8yqOCudbi1YGfwryVv8X12nBlq+NlmL2o0/b////P5/rs9f1lse+CwPJlse9lhphmWkBkTCdcRSdbQydeRidONyZMNSZPOCZgSCdmZ1lhSSdZQidlse9UPSZjSydlse9mYU1lse+Ml4Jlse9WPiZlse9lse9lse9wUC2cWEi8W17dZm7/cX+ZVUjn1nyzYFP1b3qfW0jGZF7sbXSWWUOMVz0/UkLRAAAAVnRSTlMAMHCfv/9Q7xCA30CPIM////////////////////////////////////////////////9g/7//////////////////7///n/8g/4D/j0Cv////////z4djSbUAAAKySURBVHgBzNDFgcVADANQBRTDQP/d7mcKjnPadzbJ+L+6fhj5NA59h5BpEM7IMKGRmnOVm6KBCTeJ4Uhy7vKEPZp5KCs2lcoGtWBDJ2wiXbR/TrqG/vCEIgyQghmtDKmKX5lBGT8SwxK+OcMcX4wnGN5UeILo/IAoa/tAwxemS/NloZxMEAPgejvKBedwCE7dBafuru//HOVylhxs//mn+tUgs/luhW12ZdynAWg+T2O/LzCIBmXQ/h81KVqGgAj5R0XDIjppCWa9LaVBRMNiGq1dxGMRcIi40Sg4iLGZe2qCRWLAiNlRHRhx1nxiaArCwHC6qwEjMTQJU24gCcZUJwcvgkZS0u1AODV4E6Mo68IUCZgxAQFnpYIB+2FRCOjOGgPwtfQKdC3JuhNOmS9SARaNhfUhwSfwCtKZbC6PWBjduoBYzGUzaZUgXSqjCW/C9WhSLqVHCCpVdFB1GB1qBY+gztJxHhTMo0u1zgWVIjIWQMECMooVWzA1nSkiZ3FJwSIKQ8b6IE3S8xnLKsEyouzDpLmZyihZUQlWUFI2N9MqStaWlKyhZJUE6yjZACUbKFknAXrYBJut7W2AnV1w2EQPUuBdxN29RmN7p9FotthC/lvQBotOY0C3a/x2DO1Rgp6iA30jdX9/0I1GU9GFHgkOkHMINtQBgC55wOIQOQckOELGMThYfW+JMcAxMo7GiBO2RdwKAEbfTwFORQ9CfrbtTsYsztCixGsIZe4ZmkaTV5uSzCfOLxCxWE3zKnR5dX1zS9xc313yapWuFhHx4lwesu4pmwxUnR4ebxmPD1SrnGpXv5/76JgX0wDg6fnFTn95fjUeHxPHvI8PmnqURvFGgEFU/8+jqj8VCQeACIQjKf/nD8s8//PH/c9fOD5/5fn8pevz177PXzw/f/X9G7wDC0vNFVn0VuoAAAAASUVORK5CYII='></span>"+
						"<span class='tb_smiles' value=':img19:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAq1BMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3WfZuVeWeztwVyvGp09mTifs2HifhD/11GOpjUOfwrxvtOf12nCDaTO8yqNlse+MvM28nkvPsFOyx6vsy1/iwluMcjezlkfZ0omVv8WCudbPz5Li1YHFzZqoxLSMel2pm4azp5PZ08nGva7s6eT///95ZELi3tf19PKDb1B5YC8Oqfx2AAAAD3RSTlMAMHCfv/9Q7xCA30CPIM+wsVKeAAACSElEQVR4AdXXhbajMBAG4G3hb+oBBqkhS8vqdX//F1uhIYeEhsr17+iVmTNEJ18+rk7XsiHYVrdzXHTPYtAwq3dodH8wxE7DQf+Q+AGDERvsDR8N0Wo4aq9+jL3GLd8xmeIA04lx5hgOwjrPi1czqPHPyTBhOAJrjEN/iqNM9bkY40hjbf3gaOqKGuJoQ2X94wSD2ggynID1dxXAHdd1ODSeQ9pvfVmCOgIBlQLUhQ6VIkiz+aI2Cj0tXs+wbPx2FccJgOqMsiCkJKWQIpIyUf88juOvgCUSVEOYuyS5OYQ1keSG+C+J/5n7YGIX6R+glruhmgL/fItLM2C7p7pVAUTkBh7nXuASUS4LqH5blZDEWz66yhAURFEoxj0iKmRZhfht7hB5gB8LKzEItkzgQfKqBJGbQUopA1axkMAuE+BI3+MKcFKC5PMnkIP448QEi7lI8NOYYM25V0gp5xx1v7YZfqOZYO0VzoZ2Wm4Kb13VsEqSMx9VAlvfd2YRVLa6m0MqnZ9fXF5e1VxeXpyfUwkqS24mmeD65tbg5lruMKmrbmcQnd+2OG9U0FEPFLhEbQnuyIWC6UeaQ3Rvjn8gcqCw9EM1Jbo7N3okSqHo6cd6SHuEhsttoJyKZgEUg+bVFrrUwg31q61ZgkctPEMByuUWHbyOh4YGIzowHiNTi+O5tIObQTU2N1lhQA1B2N5kaW1eXjxRzVORm9o8c6OZZ0W0+Scosvz5rerzm2U9/vnt/vMfHM9/8jz/0fX8Z9/zH57Pf/p+DH8BZNaHNWwAyp0AAAAASUVORK5CYII='></span>"+
						"<span class='tb_smiles' value=':img20:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA4VBMVEUAAAD/3Wf/3Wf0Z2f0Z2f0Z2f0Z2f0Z2f/3Wf/3Wf0Z2f0Z2f/3Wf0Z2f0Z2f0Z2f/3Wf0Z2f6omf0Z2f9x2f2fWf6omf1bmf+1mf/3Wf8wGf/3Wf6qWf1dmf8uGf3hWf7sWffYmC/WVafUUypVE/JXFnpZGRpQzpJOzCulpGknZh3bGRUPjOZkYv////d2th0Rj7UX133jY32hISvqaTo5+W0V1L80NCNhX67trH08/JrYFfSzsvGwr77xsZURz36vb31cXH94+P+9vb1enp+SUFeQTeUTkiJTEX0Z2f0Z2f0CCHbAAAAS3RSTlMAnxAwcJ+//7+vUO//EIDfj0Agj///////gP9A////////////////////////////////////////////////////////////zyCkKIoGAAACuUlEQVR4AczQhbLDIBCFYaKnDQvUIxX6/k95B2I7xKYZu99Y9N9NxL8RxcGFJM1ydPIsTYLbcRRcOBwFU2QSAZkVgjkewgANSaUNZhmthoVpGqCT8LTEIqn79+cCfoezwSpz9u/PByi6XLHpeoloKUC3Ozbdb7QUcB4lVpUPotlARJ3qgRWPijpREKhp0JSL4xsa1EHgSaMXFrxo9AwCipg3Zr2JUUHg+qGRxSxLo89VCO4M+1vA4iw4AzS/fEIDGMFod7tid+ewGZUbocVASXf7XrG7c4YZ1d2dScUW8Mqvn//Gorff4VvC0+wPdEpr71h1t7Z7nf2FAjsVXSDDTlkXkNhJCi/BbolwUvT+mq8LXDdiIAzAW5wyniCL8/a5f5iZ4f73ySPbWk9i1VLxE5sZanGSpFlOXnmWJklcI+OlMwRxwU+KNL+aO7UJYmcQzP2R3ZS3/ESldCFR/OT2x01mbpzoARlAnY2GaESzYKMOkOEU0AJKtlTTya/YKoFWQAGscrJqigMKaAMdrmiQVXBFB2iLAjSgy1UxaT2u6vrGgPrAgI1yyA3SCh6WbAyAvqeAFjAa85MxMDGjkKspYCNGQEsWYMyAUTln5nkJYNbUS67ZnAHQESNgQZZeSMZyhXuTyQT3Vkv6acTri928gLEgyx/xym4mqz1bA1jPNiRsdESbKl7++nb+9QPl14+0XztUtc9UkWTklSVU8VlcLFrMjZiu6jXYifkkrjZjy7zbZyRke8W8JU1cbW4T8oIfNJI005J9gx8UuWyA9VmWIF3m/yweGI49X3HIqeqreOKQo3lgoSFG5Xvk+ngkV22/Y0sd5KAeP0bC6T1pzkX1oNck6f0puvDiPQV7r3eRLOEX8osSQvNLpyMFOJ4ir48hH46PkV/gl8cv9NPlF/rt8wv8ePr5v77/rTvHh65smYdXJAAAAABJRU5ErkJggg=='></span>"+
						"<span class='tb_smiles' value=':img21:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAq1BMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3WfPsFOzlkeMcjepjUPGp0/sy19wVytmTif/4Xr////Z08nGva6zp5Piwlv/5o3i3tf/7rP/7Kr11GPs6eRwWTX/+eOpm4b19PKDb1D/6qCMel2fkHjZuVe8sqF5ZEL12Hb/44T//fb/8L3/33H/9ND/++z/6JefhD+DaTN5YC+IFPB1AAAAD3RSTlMAMHCfv/9Q7xCA30CPIM+wsVKeAAACQklEQVR4AczSRYKGIQgGYIwXFOP+t536+2tYzbOWlv6vEFPGXU4xkAknwYIkpotKVWzSWuiCKtgllc40xSFtx913nOqFdo2JC+agHUFwiYSDeEeGRbw7wxAYyKCFMmEyC33qMOqL/wOzRu8UZkpvKhwqPRWBgxRzAwvVv4HFFhhOTDcJTumb07rQeRuGogCsRbvbP1Gcxr45ZWbmvv+LFRzrJnWz0idoSscMLkC6MFRRFJViTf+h49L1ByqUbnSriFLKsBPFVCCO2DGKUumaCshKUK5UJaJGnpr8vVopIyEryHdBHUCDHTZeJWIjXzUA1POd4M6PJoAqZ+4SYs5UATTdiWMDKNXyAjgkEbIX0KKUBLgmVDjHtMlpG86puCb4AQmADotulxU56vZOdAAkBQHUA9DPKjoYGnLMcJA1rg+gR0UBI1yNOTUBBsMpWdPhAJhwaoyrkR+QVQGzOTPPK7gaLMhaDHBVkS+kAn7AcoWbTrkDa03OGndfrJZ+gJcA+b+XAP//JBPJ2WzhYLennP0ODrYbEr8fV3Oytj/djsgzstm7dfK4ngP6WiDL+Uu/ZEP5zt/XW5qeTvWzLe35pqoPhq/MoUbF/jzd1tslFof2s229+GDRR845FlXi37OjrX3iO0YXHW1PqmDLP6pwOg1V+vykAgW9oG4N11lvMrPye+DpBcNwdFdnHbHxLxhPrzhGkUeZp1ecyyhuZFHezKO8oUl5U5fyxjblzX3KOxyUd3kId7oo7fZR1vGkT9eX/gAA6olpMyEW9MEAAAAASUVORK5CYII='></span>"+
						"<span class='tb_smiles' value=':img22:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAq1BMVEUAAADvU1DvU1DvU1DvU1DvU1DvU1DvU1DvU1DvU1DvU1DvU1DvU1DvU1DvU1CzREKQPDpgMC+EOTenQUDXTUs8JycwJCTxaWb////LyMixra2YkpLLSkjzfnzY1tb3qaj2np3jUE3l5OQ9MjL8396LhITy8fFXTU31lJJkW1t+dna/R0Wkn59KPz/lZmPyc3H+9PT4tLLwXlv6ycj96un0iYd4NjVULSxIKir6SFYYAAAAD3RSTlMAMHCfv/9Q7xCA30CPIM+wsVKeAAACQklEQVR4AczSRYKGIQgGYIwXFOP+t536+2tYzbOWlv6vEFPGXU4xkAknwYIkpotKVWzSWuiCKtgllc40xSFtx913nOqFdo2JC+agHUFwiYSDeEeGRbw7wxAYyKCFMmEyC33qMOqL/wOzRu8UZkpvKhwqPRWBgxRzAwvVv4HFFhhOTDcJTumb07rQeRuGogCsRbvbP1Gcxr45ZWbmvv+LFRzrJnWz0idoSscMLkC6MFRRFJViTf+h49L1ByqUbnSriFLKsBPFVCCO2DGKUumaCshKUK5UJaJGnpr8vVopIyEryHdBHUCDHTZeJWIjXzUA1POd4M6PJoAqZ+4SYs5UATTdiWMDKNXyAjgkEbIX0KKUBLgmVDjHtMlpG86puCb4AQmADotulxU56vZOdAAkBQHUA9DPKjoYGnLMcJA1rg+gR0UBI1yNOTUBBsMpWdPhAJhwaoyrkR+QVQGzOTPPK7gaLMhaDHBVkS+kAn7AcoWbTrkDa03OGndfrJZ+gJcA+b+XAP//JBPJ2WzhYLennP0ODrYbEr8fV3Oytj/djsgzstm7dfK4ngP6WiDL+Uu/ZEP5zt/XW5qeTvWzLe35pqoPhq/MoUbF/jzd1tslFof2s229+GDRR845FlXi37OjrX3iO0YXHW1PqmDLP6pwOg1V+vykAgW9oG4N11lvMrPye+DpBcNwdFdnHbHxLxhPrzhGkUeZp1ecyyhuZFHezKO8oUl5U5fyxjblzX3KOxyUd3kId7oo7fZR1vGkT9eX/gAA6olpMyEW9MEAAAAASUVORK5CYII='></span>"+
						"<span class='tb_smiles' value=':img23:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABF1BMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wfqylrkw1bx0F/dvVK6nD2fgiyRdSStjzXWtk7412PIqUaYfCizljmmiTHBo0HPsEr/33H/7Kr/+eP/////6qD//fb/6Jfs6eSfkHhwWTVmTifi3td5ZEKzp5PGva7Z08nPyLyDb1D19PKMel2o0/bP5/plse/1+v5vtvD1+PWVyfSVv8XPz5LZ0on12nB4t96yx6tvtOfsy1/PsFOzlkfZuVefhD95YC/11GNvgoPFzZplpdaCudZwVyuMcjepjUNmYU3s2HjGp0/iwlu8nktmeX+8yqOMvM1lse9lse/i1YFlse9lse/R0JBI8G+ZAAAAXXRSTlMAMHCfv/9Q7xCA30CPIM/////////////////////////////////////////////////////////////////////////////////////////////////PYP/vMJ9t09rmAAACnklEQVR4AczTZYLjMAwGUAcUKjMzM7f3v9koUckuyDu471/yyWyL/5dhWjac2ZZpKDHDsVxQuJYjNHl+AE8Fvic0+C685PqCEwvgrSD2fvZxYMXfrCORBA3JxMuTc0GLa/Dt+R702+v2kNBvj9zEw/4r+8dJqmdxd36pdDoDrLhyf4Bkc/lCJAWKVLGAirlSGYh8owJA5Uq1cJEGRfoa1SgLpPsflUSD1xvNdLpZAVW52KhUKsVoiFq0RP9uB138rmCSb5aBkcphXTUbnoQnTwDXWAEdmRruhTyFgP6nQFOpmpJ2wYFPcgSx4KrV7nRRp90C8jaxBHHhotfvnvUHQN4lLrU3blXdOz1ATEJvyryvGo7Gk8l4NKQ6LjGlLWjhLKfjSWQ8xbm2gEtoE2wgbRyFqtAYR2oDl9giBGe4y6PJ1Qh3nE+kDnBxY0yHMxoIP/lE7WAywfnNJxH8ZJKf6IAmuliu1jRRNnm6iUss2Ixpq7hEhJTDWndDczosLhEh5bpsr5e+xSd0keQLey0bAFKS3U5KbLrK+o9pfzjs7xNLekxooDxaJTmePpqvC6SIgSgIoLjDPeYAjUvcVvD1+18Dp8lv9G8Zr3y1KzOZ9AcODlvvLPF2/tuBcoQnx6sfFnmg/MkJXpzKgcKLoNTZOV6cm0vgOFQv8OZCD9WFrT8FiPAmOluVh9vm6pfiJH2RxAxgImyaR5vK8iJQkWcMwAh8tH0VoSyCqNBSM4BcBcqCatDS4RXQgkHd8KTb66dpv/ec5hLGlRQMVhy6DkV6w6t5W9zBuF/dcZasAYzjvQ1nzYtgRLveognhrqoQ7rIM4a77EO6BowNj6B55ahgj/9DV0QDesW8cgSbTeQbP2ZD/P51z9B0NX74+WvhfHgGwLdY8nkSbHwAAAABJRU5ErkJggg=='></span>"+
						"<span class='tb_smiles' value=':img24:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAt1BMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wfqylrkw1bx0F/dvVK6nD2fgiyRdSStjzXWtk7412PIqUaYfCizljmmiTHBo0HPsEriwluMcjdmTifZuVfGp0/PsFP11GNwVyu8nkuzlkeWezvsy195ZEKfkHi8sqHZ08n19PL////Gva6pm4aDb1CWhWvs6eSMel2fhD+zp5NwWTV5YC+pjUODaTOS4/bJAAAAD3RSTlMAMHCfv/9Q7xCA30CPIM+wsVKeAAACHklEQVR4AczSRZaFMBBA0W+PGA4VnP3vsl3R9KzvNKc8l//rers/+PC4365/i47uigV1j0KjtbFsskaHxBvFLmVOw53lkHXH3cecig/mSFICpMnu5RRB1PUkPsvzIjjDMr6sanmT8Uvm5YWvmnYvQ6Kg7Xr5lPNLLp+GHFDJMl6nkL8VH6c5z+eO31o/dV3n+7cUBaTLW8TQvbzVc8uhrBKRvoR48X8AL9JxrhhEPPD7R9m3l4wgTZ8B9rn9ukBuJYbBABxSOLlC/C+FmeH+1yptNOPIS6O2r6/wDS+vbMvSw/wnhZYVwQYpNJr6D5Cf0CYFKwp1sg0MAOMRyzjMOapKFh+xgCj3cLUUs0MYRohFIeUebtxXEVmGYMMCh+M1VSHLCGxU4HCFQ6B7AAehpv+FWukVkSaIMfcBFCAW5B8WD2CeAWAGlHVYPEDl7wHMmUgsDEbGAMyYURCSq8ZTWfDGSDD2SKqKxRSbGADT2XyxXN0tF+vNFoCZ0KMKL2fbIAJ2i5VjPwMiMZHKnFDErD+sEm3kUmgkpbQjgO0q0QnAUYTATap4tT0kOQOATKoyrXvI4cm0LjaWEDlCubHIrS1Cpsjd2sQnHJHp6HyAjIJXNARtWWCwCzJciFFHljgsQIaAWNctspgfQWCRT6zfTCjzWOhfzQ3CzVz9kFijl1voqktV/f36Yltf7usbjs9refRNl77t0zee+tb3f/MMcMKUP6cnojUAAAAASUVORK5CYII='></span>"+
						"<span class='tb_smiles'value=':img25:'  style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAw1BMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3WdGdZFGdZFGdZFGdZH/3Wf/3WdGdZFGdZFGdZH/3Wf/3Wf/3WdGdZFGdZFGdZHFvXS6tnfo0Gz/3WddgoyLnIHz12pGdZH/3Wfcym9piYmXo39GdZH/3Wf/3WfRw3J0j4dGdZGAloTz1mpbgYyusHmjqXxSfI5GdZG1s3jZuVdmTieMcjf11GN5YC+WezuDaTOzlkfsy1/PsFO8nktwVyufhD/iwlv/3WfGp0+pjUNXodUOAAAAP3RSTlMAMHCfv/+vMP/fYFDvn3AQEIDfIO+A////QP///7+P////QCDP//9Q/++P////z+///////////////////2ASLUP8AAAC4ElEQVR4Ac3XV0PbMBAHcGVcemTahuy9p1uPlEwD3/9TNZItI65GGU/8nkrhf9qyzX6uVDqThUg2l04x6Rc+5dk1hUwRiGKmwIQSIj6VK5q0YVqQyDINxp5ReKlWvo0XQVGrN9RumEYeIy+lZ5agSVpHxFa71gHJaua7KP1fwujBV30MDYZ9iPSM0WcJkh9PgJiiNANpMmbzFxSeyMoVgYJ6u4XCAmLLVZTHvC4vdWbIreOfNzZGft+UHyDX7tA43U/j5HzfRm4IQqNN4zFjAklqYaAOwhql1h+DfdWDJHXk7FrUfhyvA/TI/iHB1gA4FKI8bBCV+WwyhWGBoj+TvY630RQu5PjtDZ9RSx2EqU77ELlNWEASPbBRLWEqHVBXYIGf81ZfRBmbrqG9hqKR2AFoozCV41nzIgvZvXoLQwu1CxYoGvaAL1en0QeIi/TVCZYza8l8IekIXXrbgGS1GWILLgoslAEiWq82fGe6EV3KsFARiGE8TL0iE1JAzcKlgqtSjEsDtVGOn1aacbmEIzybamKO6wEnJyEL9/G37l8IZRl3b/7VdXcQeaDA/pJ3D48XOJ4u+RM8WGB/3Lrc+f4CO2+383iaO/n3F5BZ4QD3F/DPrnSS+TvnYH8+ifh5D4prG8nZ7dUajhPAFxY9zYR/ch3QydLDRHiutoB8OKR0Ewdab+qFQgV8z3qgNVavNDrpLvcOOlbSpeoEsHeOr66wBa1ewrUeuCqHdMvZHdR1bSY8WHxPhukA/F24nz/oCOij7V3u++2BnmNSNk0frlKw8zzvLOO0Y/F9VjTI410jiJtXltbUvGAQe5lXrxPL0L3i0C2tOAUgFDQvWcS7kvaOPgg5RoyL1ztwDkCaGIxKfVshYVsUU4zQVYim8KjJ6yt8yOXX58nrPt1Frz5IFslrPjikw04Zf85gGk0L9IpvjNB/dFE92rz+s48ommNG6T886Zfno5++VraXTrGf6h/dGo/o18MWLgAAAABJRU5ErkJggg=='></span>"+
						"<span class='tb_smiles' value=':img26:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABOFBMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3WfPsErIqUbkw1b412ORdSSmiTHWtk66nD2tjzWYfCifgiyzljndvVLx0F/qylr11GPPsFOzlkfZuVefhD9mTifsy1/iwlt5YC+8nkuWezuMcjfGp09wVyuDaTP+33D944v+4Hn57MD19fX38dr94oL29Oz66a7z8/Pr6+vk5OTe3t7v7+/x8fHi4uLY2NjW1tbn5+f567f75pz47snt7e328uPc3Nzg4ODp6enm5uba2tr19fX19fX19fX19fX19fX479L19fX19fX19fXm5ubW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tba2tr19fXW1tb66rP19fX19fXW1tb19fXo6Ojd3d3f39/19fXv7+/Zy+hmAAAAaHRSTlMAIGCPv+//EHDPn1D//////////////////////////////////////////////////////////////////////////////0BggI+//88w32C/IO8wEJ9QgGBAcO/fz1Agj6+/z3AQn87FQ+AAAAMYSURBVHgBzNLFwqwwDAZQ9MNdxorD2Ps/4C2Fwhhyd/9ZVZMSIvxpoiQrKhhVkSVR+C+abuCDoWv7k5v4yRT3ZZexSN7xCkvFCtUSNpjYYK4/38AmQ9u4vzfC/vv7IxjYyVitn+04tuvhi+f2O2Dkn/8PA58JQu/tdhj4DAbWjwKoGERxnPhUEmISspU0jiMM1O8yyO8JD/RC7I2zmE6i4zhb+AgRH040RHoGdU5prBM+iNsdGPq+Dcr2/XCzIzVwF5JR+aVPbYNxwn4979fJBdx7FXR+vShHRQXMqnmdh9B/9lDdlJMWk3ZebWoMjKUS5m3Hk2HE03dtvlBGCW+qa8kQMKRkrhXeSEtNkHfTc8E0fN7lS62gYFJfy9kN1K2cXWtMFGGmguOn79frg9WRVfBxvd6nmJwqzMARerVjXfCNdkJHwxBwvwLcCoJVpLj9DrDg+a/5skB2GwaDsEuHCW3Y9IeZmfvKdP8bVPbsAxnaKkP9wol3R6v8olwuF/3OwCBfgKJYus+AckU5e49BlvKAwl8N3sXklXK1VrcdOuQTV6nEQmLjy67ni0iDBs0kg7dppdxqo2NLiAOg2gG6iStt0mDKt9plyhU9KHp9AEnd+DoynEu5SrsLUB4yADCUEYCEYuBwHk+m0+lsvihD8VLOBjjqFUAldXmChtsXwh5AT712Eg04pS1fyj15yTAMEBpgETfgpDoDSHXoa3qbAWiQNq2vQBq6XHpVBqBB6sKyRsBgJDq+ywA0SC+Cid71xHcYIKAaM9AW17VDua5ngADEDLTlfSM6zM8A7M1mYgCylQh2qHeEeCyk1C3Obi8adYT0XhZ064+brMNLB38AMABxORaS9OR4eo7vAAxARlBk0/W0OF8U19v7B2gBmKgbq8BUxgip60Oq8M+bbY6ujugJWgbb/SmA6kgfk8gbHDgmAPpC+B8UTY48Y2CgdNvbB1aR4qPJoesTHF/kZFlnjkTFZ8uAKXoiXyzFieMAXy0TZnXZXzlI2ICxZcI32e4eq+u7DcXcMuJHICc/f7EH7mf8FVPrf+Y3LccAEIRApC8AAAAASUVORK5CYII='></span>"+
						"<span class='tb_smiles' value=':img27:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAb1BMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wfsy1/iwlv11GPGp09mTidwVyuDaTOfhD/ZuVezlkepjUOMcjfPsFOWezu8nkt5ZELGva719PL///+fkHiMel3s6eSKluq1AAAAD3RSTlMAMHCfv/9Q7xCA30CPIM+wsVKeAAAB90lEQVR42s2X2XKDMAxFy3IxuOyCdKG0Sdv//8bOeERaWaHB4SXnhad7xiNLxn64X6I4ScGkSRyFpbPEwMMk2dZ0XlhcxBb5lnxhsIoprsYfLf7FPv6/+hJXKfP1fFVjA3W1unMGmzDRjrww6PweQ2UQgKlU/WsEUft7USKQ0usfBCM7yoJpWjBdizNtB6ZpwFjR/2B6GlrOj3QAc6CxY9NAPZjiTwWXHXgicgaXJ3qG44XIGVye6GnZiVwv4JmcgfP0CscrOYPLOy1TqApwbmiX73ndzrB8VRUywDOc88Lg5YGMBQl8w5KXBj+PhAUGysB5YVB5GJ4iCBpy9BD05GggiJwgxq0rQMwlCKuBKkKKW3cBqRMACO8DRgh0Jw4XO/GwJtCz8HJxFqYVgZ7Gt251GrVAzLuiFbVXggDuVJDiZlLZyuEkYpgU3Ty6Fpo7rBCLcfaZBmKGCZeJ5IGiToD3j+PpdPx459NBYeSRJpmIPo8nx/FT9K8+0jJouoG+Tme+aOigycSxLpmJvn8F30QzFFb+WCQjeYxQFPLXJiGFLmEufq7hAnHptOECKy8Y4QLvylqGFrG8csmayWPWlyxJZfxGEniNZKqrF82JBFP4VbWnP/TBl2U9zjqvqeotB0pd7X5w7H/y7H907X/27X94hj9975YfZo1hiNi8sjkAAAAASUVORK5CYII='></span>"+
						"<span class='tb_smiles' value=':img28:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA/FBMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wfkw1bIqUatjzWRdSSzljnBo0HWtk7x0F+YfCimiTGfgizdvVLqylr412O6nD3PsEr/4Xr/8L3/+eP/////33H/99n/7rPs6eS8sqGzp5P/7Kr//fZmTif/++z/6JfPyLz/5o15ZEL/0Gr/mnb/f3z/cX//uL//oHVwWTX/jHn/naf/eof/9vefkHjZ08mMel3/7e//jJf/44T/g4//5Of/pq//6qD/0ZL/eH7/wG3/k3j/1mn/hXv/tXD/u2//wm28nkt5YC+pjUPiwluzlkfkXrBrAAAASXRSTlMAMHCfv/9Q7xCA30CPIM/////////////////////////////////////////////////////////////////////////////vURlDIwAAAtFJREFUeAHM0mWCgzAUBODaEMHd/f533DRVINj69y8yL3r4v46n8wV3l/PpuC+tnQlGyFnbmqaMQ4kzuiXPCGYRthrXORZxfXn3BlYZC+cwLWxgmbMvR7AJOX4tP6wwzH+lgkmwA5ncA73fn+24rudCyXfdIIzuNzl+CwNCFMTeVQwlT0pCXBmj/wPBuU3wnRBKgevKBdIMwvBHcSBPZPkCi3InFdN8MYsP/j+Qx/fSq0IxMxEV2NsNEpkvC2xSuLICoe8bKD2vwkZytvO+BS6qlg6kumm7rmubGgOj7mBwCxqe+qZ7aPrVbu2DsfpQUhAGwgA8Ajkfw2Gxd3DpcPb2/i90YdlcCNZv+j/rr4YkcIGtB13QXO9DLGwu6AqFB1n/Qyy6fIqEMoDKcDQeDaEyeROTDhVYQpmCNJ5VxiDN38TEMpdgAdJyVluCtHoT60VwjH+w5sk1SIM3ccWhAnMJZgpNvomJLvCDDYbfFoS4CXyzIEKJCmIejM0CIw5RipoFCVZSXm293gu1iGacYiXRBRGSLAepoMECpKknJG/aivMMSaQKfGQhVMrityihsViDVhwi87kgQpZtoWnuCeLNjXibIYu4IEFll4M23Qu2n4KW71BJ6gIHtcMRFLcn/vVcUI4H1BwqsLHpVFe4Z2E4u/XHT9hkU4GVoOmyWoknVqsLmhKLCjoBGq7iJTQF/Iq8tWLxUuurbupKuxs/wBcv+VdsuNtc8PNXfFkbMAxDUbD64WQRNeFkBYsl7z+Lmf3NdLUY71H2zuHQAn/nMJqJ34n+s/4FtCKyMfzpqfixcBZV/1Lo4PGNmmAc4Fj82gColA+ooDQhWtXakDLsZ38ofa4YhkQYQDmWv3cESxIsIJwqgoHgkgQXECrKehnawAWVrP4N3A5tmte9Bvtru2i270J/VS2fg3L96bI9XfenB47pkWd66Joe+6YHz+nRd3t8un/g4ftvHvUAAAAASUVORK5CYII='></span>"+
						"<span class='tb_smiles' value=':img29:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABfVBMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3WfdvVLWtk7kw1afgiyRdSSzljmYfCjPsErqylq6nD2miTH412PIqUaMcjdwVyvGp0/iwlvsy195YC9mTie8nkv11GOWezufhD/PsFOpjUOzlkf/33H/4Xr/7rP/7Kr/8sb/////6Jf//fb/5o3/8L2fiFKDaTOznm3/+eP/99nZuVe8rY7p5uLs6eSpl3N5ZEL19PLW0MfZ08lwWTW3rZy6r57PyLyzp5P65ZufkHiMel39/f343HyDb1D18+zz6MP18N//6qD/9ND/44T/++zz3pTw8PD93W7w5Lf78c719fX13IPY2Njz8/Pp4cPY2NjY2Nj4+Pj47cjY2Nji4uLk5OTY2Nju7u7a2trY2Njd3d36+vrf39/Y2NjY2Njp6ens7Ozn2q7f2cPs26Da2NHY2Njw4q7i3MTY2Njn5+fd3d3Y2NjY2NjY2NjY2Nh1N3Y2AAAAf3RSTlMAMHCfv/+vUO8QgN9AjyDP/////////////////////////////////////////////////////////////////////////////////////////////////5///5///4D////v//+///8w////z9////////8Q/+8g/+9Aj69wXtSAFgAAA6xJREFUeAHM0oVuwzAUBdDSXQ0ht7em+P9/c/ykcDLhjiD4yPbp/zpfrjf8ur1dzn+Lvl8VJtT1fjRaG4tF1uhD4Qqr1H6KymKTrbbL19hVbzTRtDigbVZ3TuEQdd6I79wDGx6ukwzL8XiSfDksci+Sz7UeGgVJQPqAmeBJSQA1Wwct6xdd8iRzxEjMJH1y8rqd7sVw//riSd9hoPOkD/1wNyfnByN9IukA4UimHiOjE6UtBiQkQvofphN2OITBjCO93PtRvDCDBhTmCrPcZhbMKf3BN30kVgjDQAB1ygTW2UvGHjr3P19+EoleHs29cxjAg28cHIbgKyAasapEk4VSlgqrqOKrEFwBI2SurWgTW1IbWETJNlok1ZkUmCKYD5ik/CMiFqjhav5REbFAgvkIpoSL3Oqw6LgV4Ur/i7CIXEmDRSPH+sb+qXeseqUbsDPQaY/Ve/jzhY1mzCS1SzhInZLMYwO3LsIn7ky7z4uTusxuGAYCINw23ZdblMI8YWZmpvtfpJGiF+bvv8e27N0LPnVArvEHRAteL9wOhEwgEHgt4CdsAhHfS4EQUdHCxF4JRCGesG0kkuB/PuBIgc2AtOPZQCYLOZuRh0LmucB3sQRlm1GBUvX7auBTznyra6glXN4NV6IONGzf134ky/nz25oALTFaAG3b+VtYzoZp668D0O2J0QMo9f8copwN0/vZ3PRLAAPZGQDkq2cT9n6yUAxfBGUoO0OUke90Lx+stPEknY75RZnO0OayM0dLbQv+WDo9GR+sNKv4UmhqasIRtMVSdpYLtEhUjcauZt2t9RRGOJrGWMmBFUZoGsRI6bWurflvviySGwaCKKqAjhPGO9ircITfFjMkMttXN0y1YcqtrPN2qu55w6BjNP1QoGtMyrdCGCYTtVQJi0kxDUVgg9H3+pd3Bzvzst9jGglbCBx8XLO8var7aWH4gCMEgHvNcysMr7ctYQ8gAdMEasNG8NwS1EACH0BwzfO6bkBLyAwBXwgiB0CssVl36wFkA0kKwIkUQZQB+EPAAiCj8kLBCzrqmg4voOJEzguKjaBg1ciVQ/hhLKuNoCq5IQQkQYZUjpuaFsT1p9iKdRxomimvdxeZJLDlJiQh1lSftJl/fgGEidwAWxI0DkJt38FBV9d1UZxYf3YH+9HshXAaSSAWQ0kZH0OVZfhB/pKWgMTIB0KvLMvxxG778bQn43WCFwL+SDlmOvMdZPNFc/zre0a/vs1insHxZ1PlH7ECLk5G7+j5r1kAAAAASUVORK5CYII='></span>"+
						"<span class='tb_smiles' value=':img30:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAArlBMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3WfiwltmTieMcjfZuVeWezt5YC+zlkepjUNwVyvPsFP11GPGp0+8nkuDaTPsy1+fhD904GNcu01EljZu111QqUFixFJx22Br0ltHmzllyVVTrURNpD5KnzxZtkpfwE9ozliO32Sf32So32XL3mZWskf23Wfu3WfC3mV94GPz3We632XV25MfAAAAOXRSTlMAMHCfv/9Q7xCA30CPIM///////////////////////////////////////////////////////79R1wqAAAACj0lEQVR4AczUh3KEMAwEUIFZXK6Ja5Qr//+ZCW1QaEpP3vQde/EY2/R/RbFJ0ElMHJFOSI3FiDUpvZPzAbOCd/QO3mKR9aTZBKwKm/XVb6HaOlq02+Md9jtaEFm8i420+XqDMv9TDTt9vmB3NOL20An78b8Q/+/AzBnGxul2dH4wOI4L5tMNSUGMPDHz+XKAMJcGEvyQX7mTHbCeerGDVq60l2E9tW5uAfVK8+slq4dqqZ/bgXpMAaCs8puSDruQ4u3QdkxZailSahmRXfjV6YialsJQy4qsvHPtXgFqCkuNaPS1nGvn4h1pRLUYI1XGtUJPY7kF0jGvv6anhmoJhNNj2DUtBRKqje7cqXrg0WyaktZmCgYnJZ0tQM69e6mk8wUorvVC82elpPMF+oOiFGhPml6g+KGCBJ+WUM3g08zkMpU5K/LpZYpkAasgRNMH5UMFL82XhY7kMBAFj0FwzFR+6TA4w/D/H3Y0aG1L0Qi3xeBntqueO0/aTVN47Dyq7/1m/mV65jzr36YCvnmf28s720AIJBUChxl89T6Ww9d2qF9JQJDSgF9Pk6/NH8IlIDMpL84BzgCcVfhyCSgrSarqS8CXdAV8wPh0Dmik1qTmHPDJB4wD4iTLcAgwdVD0A9D/C/jlII4LWd/fMNhhBE0GADbw5rsPWR7mvSa2QNFKsgjQRl77mOeD5pgJgNwk1YCy8SZUndFFKIFBMogd85tgecGyB1keg2SwXLKYap/g/opYFehQNUUVWU3ifiIcc6wnLjupibA05tPCkSjPmlL56S7kKllPK08qXRtyLbMsRrJGOZsJ6XK0b05pas1aWcl8Uvsc8dxsKYcQhpLtxhfPKfXd7UeAcb87qO89rT+hR4CJqgxx+gAAAABJRU5ErkJggg=='></span>"+
						"<span class='tb_smiles' value=':img31:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAB9VBMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wfqylqfgiy6nD2miTGYfCjkw1b412PIqUaRdSTx0F/Bo0HPsEqzljnWtk6tjzXdvVL11GO8nkuMcjfiwluDaTNmTif83nfv4rbq5M3l5eX14Jbn5d3Gp0/n5+fv7+/y8vLq6ury4aazlkf9/f3////39/f58fPu1dr6+vrNycFuVzPw8PCrLki4Nk74vMLV0s1+akvsy1/l5eX5+fmwPFSlIDzJNkztTFz0j5n+9PX09PTd3NmGdFepjUPl5eXSkJ6qIz7pSVrwbnv83eCWh27t7e28WG3gRFbuV2bs7Oy/taLPsFPp5NDrtLzlUmLt47793m/634D96evyeYX633/5x8zzhI/1mqPs48b8/PzaTVz34I7o5NWpUVxbVlvk5eZcYmWWXWazUFzjTVz2pq5tcnVuc3fx6OnMh49RV1vZuVf534fT09TJysvf3+BnbHByd3rvYnDQTlyVUlv70tb19fWfhD95YC/04Z7AwsNkaWzb29zz8/NvYGV4VFvw4q6SlZdaYGTmyMznbntlVlu8T1z88vPc2dSOfWK3ubqGio2zWE9wWTXc3Ny/wcKDX2aZTTuWezuvsbO5iIt/TjFwVyuusLGBbk5ATD8BAAAAYXRSTlMAMHCfv/9Q7xCA30CPIM///////////////////////////////////////////////////////////////////yD//////////////zD/////////////////v/////+fz2TtGgAAAzhJREFUeAHM1EVixDAMBVAHvimMmoB6/1uWw9xV39oksvi/HNfz8cv3XEc8Ij2FFeVJcZM2Frus0eIGo3BIGXElsDhlg/PXh7gUanEoinFDHB1WTuEW5dzff/+E9f7nJ0QKD6hIrOgYj8TrWoR4KFz1D9aSNMMoL0qsLTtq3X9VTUQJfpVElL3WPbno/9XtTUFENUYtfer6CnNGjPRQgZqzOuOCPuXl4kimLykz591QCb19AA24x0rZ0WB8wjYDHaeUc9a/sKN6q/lLu8mCxB8Nf5T3UXw5OEcShFE86sNfsRq8wTK2F7Ft287ZvpyVM/7Om9kvnp2qyUa/8qvq1+5+H4uT5ATiMouTyzu3iMUN3amkw6LN7nA47DbGLMhJMZbA6eJ0XE5mQaZFSGGMF0SIAq9rLo5wsT3M5ZSoAWMSosgSYwq3i8L2MJUZGUiA6vZ4AfiYn9vFz/Yxk8mAl+ENpKampqmAEI+BAFVvn56R6QWyso9vICNHa5+Rm5cfcAMFhRxRxA5QtGdQZDAoBkq0/kvLyoOhcASoqOR0qtghqjjOKJNBNZCWmlpTVlsXDNY3ZKpAo2GkNAmjTFMAmlJTm2tbghqt+YE2oL3DxgzYOvwGmQw6AU9qV3eQCKXmAD29zBJ0kPpkwFvSPxAk6vvTVIj8Me5z0qAMICcw1EoOrUPafsqDzAJJO9e51wdATQsPB4kRbT9lyeJ1pgeFHwXQNqYPYjw6jQjgs/qg0H2emATUSHhkanqcpqFCsLYEe4+qT1/Mmdm54PyCZrEY8ELstfSo7j3rvAAsLa+srk0FNQbCOZjcX0rnujFwGT+WDXHz2vUbN2/dvqNP4+49Vd7QVJty/0Gsw3nV8LVpPJQfPX7y9NnzoM6itp+S8z5HOI4u4ZWYn2vvC+Dl1qvXb97q03j3/gNHGA2umn3vg6MfH7V9ml1Y0Lbj85e99i7FbAWMAUOa3N762vBtOvidI34oRSYBwyTi6Efz59qv35zOH7/NNOKYhyy+Z/PvP+rdZilkGWPeRiM94xZinknQjA7fGXdUpWfQeaKwrPzosND+BHH/xAXHyUuekxddJy/7Tl54nrz0vXj+A1av0HNGbozsAAAAAElFTkSuQmCC'></span>"+
						"<span class='tb_smiles' value=':img32:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABZVBMVEUAAAD/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf/3Wf412PWtk66nD2miTGRdSSYfCitjzXBo0HdvVLx0F/IqUbkw1afgizsy1+8nkufhD+Mcje8qXv/7rP/7Kr/5o3ixGWzlkfs3Kv/6qD/4XqWhWtmTid5ZEL//////fb/8sb/9NBwWTWzp5P/++z/6Jf/+eOMel3/44T/8L3PyLz/99mfkHjs6eT19PLGva68sqHi3tfZ08n/33Hi1aTP0M3Mz9Tm1p7iwlupjUN5YC+WezvS1dnZ29/f1KuDaTPGp0/Z07n8/Pzi5OfPsFP5+frc3uH83G5wVyvp15fv8PLs2JDy2oLm5+rZuVf11GPv2Yny8/Tp6uz323n19vfS0cbS0cbf4eTc07LP0tfMz9T523XW2NzMz9T12nvMz9Ts7e/Mz9TMz9TMz9TMz9TMz9TT0cTMz9TMz9TMz9QzV8/zAAAAd3RSTlMAIGCfv/+P30AwEM9Q7/////////////////////////////////////////////////////////////////////////////////////////////////////////////+///+A////z///MP+A/yCfEO9A32DfUJFEMccAAAMUSURBVHgBzNFFAoQwDAVQJD+40xa4/z3Hvb6bt4/9JP8rzXLCA+VZGlnNBX4UHN6jJBhRGVReEayo8pbXDCeu3fVVA4+mctW3XT+M0zzPyyokzLrWXp+pcX7bYJFZ6zFfTGLb5TYe847IDi0wLZvCQ49P36cZr6g6WP2e1lV6fd3ATjut0b/JcFi101g7AGfuySspYxgGwnQ4AzW97d97T+5/KnAka7x0Xvkev1F2VrbzR94vcaX+4fHp+Y2XKE6C6fQxczaPitJeNX9/pzqp6p4GwGDoh0djsRMA05nKu08LzBe1AIeWWKK2AGD6WYVzlSW0wRgOrbCiACx1+PyTKyiwDkfnYjfYit3BEYmli7hVFwETN7mF4AP2brPxARRwyxtoA2B3PJ4gTH0A0E4OewQBvMOFV0sQI7FDtrOP/9TltWeKkELvluTAhi/5Em0HY+7txpRtwBdpiuoOll6WA0o1OIAT9HtlaauNum8ChKQvPI26UHZRHzEvzHAA0yVJycZRJolmfhvwPf82QB/Sa+91leU2DEYB2Dmtzuwh9FLuvwr7BmU3zMzMtP1JRkXFco+D37uYrnQDRoj9Fo4Eo99OgjG/z/GplbZyCHEeh8l+CXz7y/rBlN5JhymBJFEKv/vw8du/oun/P1AeUUGGiLLIMcGXzwcDHwNiHG/8zM4jXSgFFIkogxKT+fyWQwUv8pVWRoVOEGI2VeubVVNkDflS/V1Bibnlka/1uqiggTJz6f3Zw2KieVkFZ5GtBbEKbejsj1y5oCeATkjdAVkXnN70YCQSoVA/kejgZMArqQFMF4/rEEUSGj2ON5ynKo0MnRSBkXIJJECSHLRtFagCBsaO5cfoM4ky4oCTUrEH6EyiDFkTRQXNSooPYJgjVzFPUQFHJxEqu42JijkoonxB1B3aVyGL6QVhe4Y5yZroXxL3F4jbll+/6MOxRJNkSFz05VmtB22pfA+hyz5dGwwa0gi2l377dkDq71IkMdMutVkDvXmGhMqFFQir2VrcAbzC48BCu8Jqt9xD2B+0qy02m432NEcRT+6Yejny1QAAAABJRU5ErkJggg=='></span>"+
						"<span class='tb_smiles' value=':img33:' style='display:inline-block;width:25px;height:25px;margin:5px ;cursor:pointer;'><img class='tb_smile' style='width:25px;height:25px;'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABAlBMVEUAAADMz9TMz9TMz9TMz9TMz9TMz9TMz9TZ29/c3uHm5+rW2NzMz9TMz9Tp6uz19vf////y8/TMz9TS1dn8/Pz5+fri5OfP0tff4eTMz9Tv8PLMz9TMz9TMz9Ts7e/Z07nS0cb/3Wf/3Wf83G7y2oLp15fm1p7W0sD/3Wf12nvs2JD/3Wfc07LP0M3/3Wf/3WfGp095YC9mTiefhD/11GPpyma5t7RwVyviwltsVjL/3WfPsFOMcjeDaTO/v76Wezvsy195ZkfGx8nZuVe8nkuGdl2ThnOmn5OvlU7/3Wf/3Wff1Kv/3Wf/3WezlkepjUP/3Wf523Xu2Iv/3Wf/3Wf/3WfxXwydAAAAVnRSTlMAMHCfv/9Q7/////8Q3/////+A////////QP+PIM/////f////////QP//n///MHD/////////////v///////////////////r4D/71D//xD/MM8gYBQbU4IAAAMGSURBVHgBzJJFYsQwEARje1swMoi8Mv//l6FNYqZb6t41+PZ/ieLkgR8eSRzdS7OEA4CQ9I1QAE/Y1XQaZwBkXugJhhQym17JWw643OsV5TPwcwXLAFTGGL2Bp5DVx90nGHGiosYsFBXagya6HrLUXxTGEEkBAKrKpxYT+m73cjwMy7kbkgGAoL+VesWj3XyhtyiHygGhGn42W/Hocn6U5BKAHPyuodvJj/jhy1E134b1HnqM8x87HJVa9ctbtHjqS/jcAZUJ7Txfw3l9FVMBAfOPymD0DTwFZNMhLCp9kwF28sEcSgj8IYQgaszxUBUfW7AfzdX1tiMhDAZwVlK97i6pe0uvu7vL+7/Kkg6TQ6HG+u//+U6AJAMAq2wNQrOxGW5jx7RRwjpaUul0Jrua0/XMLHSsJTYstDx2UyhmV4EkZ9xKViDcUSXsqZApV4BmYcF6CvjGJ+grnQM3Ix4VLVUcQEolTFLGzDQHjEAwUzVsU29IKZsbaNncguToDGXEwqEZha8drqApW7athJ3tXZUwNbYQpzISwbPoS9hDw77UDrDNoZS7R5RAy5mmmk4S+y4Imo5l6KStAKmcnlECTYKOiIMbsC1D52i4kDohrntgkiLmfAPkpfqK5xEUryOQK4AVHmkAWOKA/pcYuAbg1Tmd5AoGeUbZcpODWR6tGAcM0EgnlNzYx0IF4m6AjyLAiA6YBG4kH2WY1fMAQSPdop/UGsSC7axb+Q49pfVbjsBXXkh+7oOXiNM4kwf0lKpAgjZSlFearyKVsMIr7RG7OX86PpDK4cHTOZpyaiaStFR7neHkeVsaNux7BF7r/A5O55lO0LQKYPxYXtwSnqSlgW1eAejX1r2E8LPmxblSfzo4t5+SCyAv62hpSKW5g1298g3YD8Hje3yCPTy8CZN/L9REu5d39HIrbFWvhn5/Eb+U8OB875fwUBXiVxLeP0QX1YFucs+tn70M8Jp3oqfH9T7lV0UfL3c9bmL9UxDPCI/P2WPJyVgv5YWX/N3tHt97qVYV/60foIlM5uCnO5cAAAAASUVORK5CYII='></span>"+
					"</div>";
		}
	};
	$.fn.ConvertText = function(parms) {
        var optionText = {
            minChar: 20,
            readLess: "ReadLess",
            readmore: ".. ReadMore",
			minimizeText:true,
			convertTag:true,
			MaxtextLength:999999
        };
        var options = $.extend(true, optionText, parms);

        var txt = this.val();
		var parnt = this.parent();
		if(typeof txt === "undefined" || !txt || txt===""){
			return;
		}
		
		if(options.convertTag){
			txt=ConvertEntity(txt)
			txt=CommentTags(txt)
		}
		
		if(options.MaxtextLength<txt.length)
			return "Too Much Characters in TextArea ! Page Owner has allowed maximum "+options.MaxtextLength+" characters";
		
		txt=boldText(txt);
		txt=ItalicText(txt);
		txt=UnderLineText(txt);
		txt=FontSizeText(txt);
		txt=FontFamilyText(txt);
		txt=TextColorText(txt);
		txt=TextBGColorText(txt);
		txt=findHR_NewLine(txt);
		txt=LinkText(txt);
		txt=emoticonsText(txt);
		return txt;
	

		function boldText(text){
            text = text.replace(/\[B]/gmi, "<b>");
            text = text.replace(/\[\/B\]/gmi, ["</b>"]);
            return text;
		}
		function ItalicText(text){
            text = text.replace(/\[I]/gmi, "<i>");
            text = text.replace(/\[\/I]/gmi, ["</i>"]);
            return text;			
		}
		function UnderLineText(text){
            text = text.replace(/\[u]/gmi, "<u>");
            text = text.replace(/\[\/u\]/gmi, ["</u>"]);
            return text;
		}
		function FontSizeText(text){
			var str = text,
                strtsizeArr = null,
                endsizeArr = null,
                holdStrtTagSize = null,
                holdEndTagSize = null;
            strtsizeArr = str.match(/\[FSize=(\d+)\]/gmi);
            endsizeArr = str.match(/\[\/FSize=(\d+)\]/gmi);
            if (strtsizeArr !== null)
                if (strtsizeArr.length === endsizeArr.length) {
                    for (var i = 0; i < strtsizeArr.length; i++) {
                        holdStrtTagSize = /\[FSize=(\d+)\]/gmi.exec(strtsizeArr[i]);
                        holdEndTagSize = /\[FSize=(\d+)\]/gmi.exec(strtsizeArr[i]);
                        if (parseInt(holdStrtTagSize[1]) <= 36) { //<-- verify  maximum font size 
                            str = str.replace(strtsizeArr[i], "<span style='font-size:" + holdStrtTagSize[1] + "px'>");
                            str = str.replace(endsizeArr[i], "</span>");
                        }else{
							str = str.replace(strtsizeArr[i], "<span style='font-size:24px'>");
                            str = str.replace(endsizeArr[i], "</span>");
						}
                    }
                }
            return str;
		}
		function FontFamilyText(text){
			var str = text,
                strtFFArr = null,
                endFFArr = null,
                holdStrtTagFF = null,
                holdEndTagFF = null;
            strtFFArr = str.match(/\[Font="(\w+)\"]/gmi);
            endFFArr = str.match(/\[\/Font="(\w+)\"]/gmi);
            if (strtFFArr !== null)
                if (strtFFArr.length === endFFArr.length) {
                    for (var i = 0; i < strtFFArr.length; i++) {
                        holdStrtTagFF = /\[Font="(\w+)\"]/gmi.exec(strtFFArr[i]);
                        holdEndTagFF = /\[\/Font="(\w+)\"]/gmi.exec(strtFFArr[i]);
                        holdStrtTagFF = holdStrtTagFF[1].replace(/\_/gmi, " ");
						str = str.replace(strtFFArr[i], "<span style='font-family:" + holdStrtTagFF + "'>");
                        str = str.replace(endFFArr[i], "</span>");
                    }
                }
            return str;
		}
		function TextColorText(text){
			var str = text,strtPatt = null,endPatt = null;
            var srtclrArr = null, endClrArr = null, hldStrtClr = null,hldEndClr = null;
            strtPatt = /\[tColor="(\w+)\"]/gim;
            endPatt = /\[\/tColor="(\w+)\"]/gim;
            srtclrArr = str.match(strtPatt);
            endClrArr = str.match(endPatt);
            if (srtclrArr !== null)
                if (srtclrArr.length === endClrArr.length) {
                    for (var i = 0; i < srtclrArr.length; i++) {
                        hldStrtClr = /\[tColor="(\w+)\"]/gim.exec(srtclrArr[i]);
                        hldEndClr = endPatt.exec(srtclrArr[i]);
                        str = str.replace(srtclrArr[i], "<span style='color:#" + hldStrtClr[1] + "'>");
                        str = str.replace(endClrArr[i], "</span>");
                    }
                }
            return str;
		}		
		function TextBGColorText(text){
			var str = text,strtPatt = null,endPatt = null;
			var srtclrArr = null,endClrArr = null,hldStrtClr = null,hldEndClr = null
			
			strtPatt = /\[tBGColor="(\w+)\"]/gim;
			endPatt = /\[\/tBGColor="(\w+)\"]/gim;
			srtclrArr = str.match(strtPatt);
			endClrArr = str.match(endPatt);
			if (srtclrArr !== null) //<--- Error handler
				if (srtclrArr.length === endClrArr.length) {
					for (var i = 0; i < srtclrArr.length; i++) {
						hldStrtClr = /\[tBGColor="(\w+)\"]/gim.exec(srtclrArr[i]);
						hldEndClr = endPatt.exec(srtclrArr[i]);
						str = str.replace(srtclrArr[i], "<span style='background-color:#" + hldStrtClr[1] + "'>");
						str = str.replace(endClrArr[i], "</span>");
					}
				}
			return str;
		}
		function findHR_NewLine(text){
            var str = text;
            str = str.trim();
            str = str.replace(/\[HrLine\]/gim, "<hr>");
            str = str.replace(/\[NewLine\]/gim, "<br/>");
            return str;
		}
		function LinkText(text){
			var str = text;
			str = text.replace(/ +/g,' ');
			var UrlCodeReg = /\[url="[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?"\][a-z0-9\s\-\_]*\[\/url\]/gmi;
			var urls = str.match(UrlCodeReg);
			var i = 0, url,name;
			if(urls !== null)
			for(i=0;i<urls.length;i++){
				url = /[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/gmi.exec(urls[i]);
				name = /\][a-z0-9\_\-\s]*\[/gmi.exec(urls[i]);
				if(name !== null)
					name = name[0].substring(1,name[0].length-1);
				if((name != null ) && (url!= null)){
					//url = url[0].replace(",","");
					str = str.replace(urls[i],"<a style='display:inline-block;color:#1784C7;' class='tb_link' href='"+url[0]+"' target='_blank'>"+name+"</a>");
				}
			}
			
            return str;	
		}
		function emoticonsText(text){
			var str = text;
			var reg = /\[:img(\d+):\]/gmi;
			var digitReg = /(\d+)/gmi;
			var smiles = str.match(reg);
			var childrens = $(".tb_smileContainer").children();
			var smileSrc, i = 0,smile;
			if(smiles !== null)
				for(i = 0;i<smiles.length;i++){
					smile = /(\d+)/gmi.exec(smiles[i]);
					if(smile!== null)
					if(smile[0]<=33 && smile[0] >=1){
						smileSrc = $(childrens[smile[0]].firstChild).attr("src");
						str = str.replace(smiles[i],"<img class='tb_smile' style='line-height:20px;width:15px;height:15px;' src='"+smileSrc+"'>");
					}
				}
			return str;
		}
		function ConvertEntity(text) {
            var str = text;
            // /(<([^>]+)>)/gim;*/ // for all tags
            str = str.trim();
            str = str.replace(/\</gim, "&lt;");
            str = str.replace(/\>/gim, "&gt;");
            return str;
        }
		function CommentTags(input, allowed) { // comment php tags
            allowed = (((allowed || '') + '')
                    .toLowerCase()
                    .match(/<[a-z][a-z0-9]*>/gim) || [])
                .join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
            var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gim,
                commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gim;
            return input.replace(commentsAndPhpTags, '')
                .replace(tags, function($0, $1) {
                    return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
                });
        }
    };
})(jQuery);