(function(a){var b={isRTL:!0,defaults:{recordtext:"\u0646\u0645\u0627\u0628\u0634 {0} - {1} \u0627\u0632 {2}",emptyrecords:"\u0631\u06a9\u0648\u0631\u062f\u06cc \u06cc\u0627\u0641\u062a \u0646\u0634\u062f",loadtext:"\u0628\u0627\u0631\u06af\u0632\u0627\u0631\u064a...",pgtext:"\u0635\u0641\u062d\u0647 {0} \u0627\u0632 {1}",pgfirst:"\u0635\u0641\u062d\u0647 \u0627\u0648\u0644",pglast:"\u0635\u0641\u062d\u0647 \u0622\u062e\u0631",pgnext:"\u0635\u0641\u062d\u0647 \u0628\u0639\u062f",pgprev:"\u0635\u0641\u062d\u0647 \u0642\u0628\u0644",
pgrecs:"\u0631\u06a9\u0648\u0631\u062f \u062f\u0631 \u0635\u0641\u062d\u0647",showhide:"Toggle Expand Collapse Grid",savetext:"\u062f\u0631 \u062d\u0627\u0644 \u0630\u062e\u06cc\u0631\u0647..."},search:{caption:"\u062c\u0633\u062a\u062c\u0648...",Find:"\u064a\u0627\u0641\u062a\u0647 \u0647\u0627",Reset:"\u0627\u0632 \u0646\u0648",odata:[{oper:"eq",text:"\u0628\u0631\u0627\u0628\u0631"},{oper:"ne",text:"\u0646\u0627 \u0628\u0631\u0627\u0628\u0631"},{oper:"lt",text:"\u06a9\u0648\u0686\u06a9\u062a\u0631"},
{oper:"le",text:"\u06a9\u0648\u0686\u06a9\u062a\u0631 \u064a\u0627 \u0645\u0633\u0627\u0648\u064a"},{oper:"gt",text:"\u0628\u0632\u0631\u06af\u062a\u0631"},{oper:"ge",text:"\u0628\u0632\u0631\u06af\u062a\u0631 \u064a\u0627 \u0645\u0633\u0627\u0648\u064a"},{oper:"bw",text:"\u0634\u0631\u0648\u0639 \u0628\u0627"},{oper:"bn",text:"\u0634\u0631\u0648\u0639 \u0646\u0634\u0648\u062f \u0628\u0627"},{oper:"in",text:"\u0639\u0636\u0648 \u0628\u0627\u0634\u062f"},{oper:"ni",text:"\u0639\u0636\u0648 \u0627\u06cc\u0646 \u0646\u0628\u0627\u0634\u062f"},
{oper:"ew",text:"\u0627\u062a\u0645\u0627\u0645 \u0628\u0627"},{oper:"en",text:"\u062a\u0645\u0627\u0645 \u0646\u0634\u0648\u062f \u0628\u0627"},{oper:"cn",text:"\u062d\u0627\u0648\u06cc"},{oper:"nc",text:"\u0646\u0628\u0627\u0634\u062f \u062d\u0627\u0648\u06cc"},{oper:"nu",text:"\u062a\u0647\u06cc"},{oper:"nn",text:"\u062a\u0647\u064a \u0646\u0628\u0627\u0634\u062f"}],groupOps:[{op:"AND",text:"\u06a9\u0644"},{op:"OR",text:"\u0645\u062c\u0645\u0648\u0639"}],operandTitle:"Click to select search operation.",
resetTitle:"\u062a\u0646\u0638\u06cc\u0645 \u0645\u062c\u062f\u062f \u0645\u0642\u062f\u0627\u0631 \u062c\u0633\u062a\u062c\u0648"},edit:{addCaption:"\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u0631\u06a9\u0648\u0631\u062f",editCaption:"\u0648\u064a\u0631\u0627\u064a\u0634 \u0631\u06a9\u0648\u0631\u062f",bSubmit:"\u062b\u0628\u062a",bCancel:"\u0627\u0646\u0635\u0631\u0627\u0641",bClose:"\u0628\u0633\u062a\u0646",saveData:"\u062f\u06cc\u062a\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u06a9\u0631\u062f! \u0630\u062e\u06cc\u0631\u0647 \u0634\u0648\u062f\u061f",
bYes:"\u0628\u0644\u0647",bNo:"\u062e\u06cc\u0631",bExit:"\u0627\u0646\u0635\u0631\u0627\u0641",msg:{required:"\u0641\u064a\u0644\u062f\u0647\u0627 \u0628\u0627\u064a\u062f \u062d\u062a\u0645\u0627 \u067e\u0631 \u0634\u0648\u0646\u062f",number:"\u0644\u0637\u0641\u0627 \u0639\u062f\u062f \u0645\u0639\u062a\u0628\u0631 \u0648\u0627\u0631\u062f \u06a9\u0646\u064a\u062f",minValue:"\u0645\u0642\u062f\u0627\u0631 \u0648\u0627\u0631\u062f \u0634\u062f\u0647 \u0628\u0627\u064a\u062f \u0628\u0632\u0631\u06af\u062a\u0631 \u064a\u0627 \u0645\u0633\u0627\u0648\u064a \u0628\u0627",
maxValue:"\u0645\u0642\u062f\u0627\u0631 \u0648\u0627\u0631\u062f \u0634\u062f\u0647 \u0628\u0627\u064a\u062f \u06a9\u0648\u0686\u06a9\u062a\u0631 \u064a\u0627 \u0645\u0633\u0627\u0648\u064a",email:"\u067e\u0633\u062a \u0627\u0644\u06a9\u062a\u0631\u0648\u0646\u064a\u06a9 \u0648\u0627\u0631\u062f \u0634\u062f\u0647 \u0645\u0639\u062a\u0628\u0631 \u0646\u064a\u0633\u062a",integer:"\u0644\u0637\u0641\u0627 \u064a\u06a9 \u0639\u062f\u062f \u0635\u062d\u064a\u062d \u0648\u0627\u0631\u062f \u06a9\u0646\u064a\u062f",
date:"\u0644\u0637\u0641\u0627 \u064a\u06a9 \u062a\u0627\u0631\u064a\u062e \u0645\u0639\u062a\u0628\u0631 \u0648\u0627\u0631\u062f \u06a9\u0646\u064a\u062f",url:"\u0627\u06cc\u0646 \u0622\u062f\u0631\u0633 \u0635\u062d\u06cc\u062d \u0646\u0645\u06cc \u0628\u0627\u0634\u062f. \u067e\u06cc\u0634\u0648\u0646\u062f \u0646\u06cc\u0627\u0632 \u0627\u0633\u062a ('http://' \u06cc\u0627 'https://')",nodefined:" \u062a\u0639\u0631\u06cc\u0641 \u0646\u0634\u062f\u0647!",novalue:" \u0645\u0642\u062f\u0627\u0631 \u0628\u0631\u06af\u0634\u062a\u06cc \u0627\u062c\u0628\u0627\u0631\u06cc \u0627\u0633\u062a!",
customarray:"\u062a\u0627\u0628\u0639 \u0634\u0645\u0627 \u0628\u0627\u06cc\u062f \u0645\u0642\u062f\u0627\u0631 \u0622\u0631\u0627\u06cc\u0647 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f!",customfcheck:"\u0628\u0631\u0627\u06cc \u062f\u0627\u0634\u062a\u0646 \u0645\u062a\u062f \u062f\u0644\u062e\u0648\u0627\u0647 \u0634\u0645\u0627 \u0628\u0627\u06cc\u062f \u0633\u062a\u0648\u0646 \u0628\u0627 \u0686\u06a9\u06cc\u0646\u06af \u062f\u0644\u062e\u0648\u0627\u0647 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u062f!"}},
view:{caption:"\u0646\u0645\u0627\u06cc\u0634 \u0631\u06a9\u0648\u0631\u062f",bClose:"\u0628\u0633\u062a\u0646"},del:{caption:"\u062d\u0630\u0641",msg:"\u0627\u0632 \u062d\u0630\u0641 \u06af\u0632\u064a\u0646\u0647 \u0647\u0627\u064a \u0627\u0646\u062a\u062e\u0627\u0628 \u0634\u062f\u0647 \u0645\u0637\u0645\u0626\u0646 \u0647\u0633\u062a\u064a\u062f\u061f",bSubmit:"\u062d\u0630\u0641",bCancel:"\u0627\u0628\u0637\u0627\u0644"},nav:{edittext:"",edittitle:"\u0648\u064a\u0631\u0627\u064a\u0634 \u0631\u062f\u064a\u0641 \u0647\u0627\u064a \u0627\u0646\u062a\u062e\u0627\u0628 \u0634\u062f\u0647",
addtext:"",addtitle:"\u0627\u0641\u0632\u0648\u062f\u0646 \u0631\u062f\u064a\u0641 \u062c\u062f\u064a\u062f",deltext:"",deltitle:"\u062d\u0630\u0641 \u0631\u062f\u06cc\u0641 \u0647\u0627\u064a \u0627\u0646\u062a\u062e\u0627\u0628 \u0634\u062f\u0647",searchtext:"",searchtitle:"\u062c\u0633\u062a\u062c\u0648\u064a \u0631\u062f\u064a\u0641",refreshtext:"",refreshtitle:"\u0628\u0627\u0632\u064a\u0627\u0628\u064a \u0645\u062c\u062f\u062f \u0635\u0641\u062d\u0647",alertcap:"\u0627\u062e\u0637\u0627\u0631",
alerttext:"\u0644\u0637\u0641\u0627 \u064a\u06a9 \u0631\u062f\u064a\u0641 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u064a\u062f",viewtext:"",viewtitle:"\u0646\u0645\u0627\u06cc\u0634 \u0631\u06a9\u0648\u0631\u062f \u0647\u0627\u06cc \u0627\u0646\u062a\u062e\u0627\u0628 \u0634\u062f\u0647"},col:{caption:"\u0646\u0645\u0627\u064a\u0634/\u0639\u062f\u0645 \u0646\u0645\u0627\u064a\u0634 \u0633\u062a\u0648\u0646",bSubmit:"\u062b\u0628\u062a",bCancel:"\u0627\u0646\u0635\u0631\u0627\u0641"},errors:{errcap:"\u062e\u0637\u0627",
nourl:"\u0647\u064a\u0686 \u0622\u062f\u0631\u0633\u064a \u062a\u0646\u0638\u064a\u0645 \u0646\u0634\u062f\u0647 \u0627\u0633\u062a",norecords:"\u0647\u064a\u0686 \u0631\u06a9\u0648\u0631\u062f\u064a \u0628\u0631\u0627\u064a \u067e\u0631\u062f\u0627\u0632\u0634 \u0645\u0648\u062c\u0648\u062f \u0646\u064a\u0633\u062a",model:"\u0637\u0648\u0644 \u0646\u0627\u0645 \u0633\u062a\u0648\u0646 \u0647\u0627 \u0645\u062e\u0627\u0644\u0641 \u0633\u062a\u0648\u0646 \u0647\u0627\u064a \u0645\u062f\u0644 \u0645\u064a \u0628\u0627\u0634\u062f!"},
formatter:{integer:{thousandsSeparator:" ",defaultValue:"0"},number:{decimalSeparator:".",thousandsSeparator:" ",decimalPlaces:2,defaultValue:"0.00"},currency:{decimalSeparator:".",thousandsSeparator:" ",decimalPlaces:2,prefix:"",suffix:"",defaultValue:"0"},date:{dayNames:"\u064a\u06a9;\u062f\u0648;\u0633\u0647;\u0686\u0647\u0627\u0631;\u067e\u0646\u062c;\u062c\u0645\u0639;\u0634\u0646\u0628;\u064a\u06a9\u0634\u0646\u0628\u0647;\u062f\u0648\u0634\u0646\u0628\u0647;\u0633\u0647 \u0634\u0646\u0628\u0647;\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647;\u067e\u0646\u062c\u0634\u0646\u0628\u0647;\u062c\u0645\u0639\u0647;\u0634\u0646\u0628\u0647".split(";"),
monthNames:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec \u0698\u0627\u0646\u0648\u064a\u0647 \u0641\u0648\u0631\u064a\u0647 \u0645\u0627\u0631\u0633 \u0622\u0648\u0631\u064a\u0644 \u0645\u0647 \u0698\u0648\u0626\u0646 \u0698\u0648\u0626\u064a\u0647 \u0627\u0648\u062a \u0633\u067e\u062a\u0627\u0645\u0628\u0631 \u0627\u06a9\u062a\u0628\u0631 \u0646\u0648\u0627\u0645\u0628\u0631 December".split(" "),AmPm:["\u0628.\u0638","\u0628.\u0638","\u0642.\u0638","\u0642.\u0638"],S:function(a){return 11>a||
13<a?["st","nd","rd","th"][Math.min((a-1)%10,3)]:"th"},srcformat:"Y-m-d",newformat:"d/m/Y",masks:{ShortDate:"n/j/Y",LongDate:"l, F d, Y",FullDateTime:"l, F d, Y g:i:s A",MonthDay:"F d",ShortTime:"g:i A",LongTime:"g:i:s A",YearMonth:"F, Y"}}}};a.jgrid=a.jgrid||{};a.extend(!0,a.jgrid,{defaults:{locale:"fa"},locales:{fa:a.extend({},b,{name:"\u0641\u0627\u0631\u0633\u0649",nameEnglish:"Persian"}),"fa-IR":a.extend({},b,{name:"\u0641\u0627\u0631\u0633\u0649 (\u0627\u06cc\u0631\u0627\u0646)",nameEnglish:"Persian (Iran)"})}})})(jQuery);