"use strict";var toggleMenu=function(){$("#navbar").toggle("fast")};function showTab(t){"qte"==t?($("#qte").show(),$("#per").hide(),$("#tab_qte").addClass("ativo"),$("#tab_per").removeClass("ativo")):($("#qte").hide(),$("#per").show(),$("#tab_qte").removeClass("ativo"),$("#tab_per").addClass("ativo"))}function updateSaldo(){}function diff_hours(t,e){var a=(t.getTime()-e.getTime())/1e3;return a/=3600,Math.abs(Math.round(a))}function percBarra(t,e){var a=e/t-1;return 100*Math.abs(a)}function getTime(){var t=new Date,e=new Date("02/26/2018 23:00:00"),a=new Date(e-t),n=new Date(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds());n.getDate()>1?($("#put_s_day_en").html("Days"),$("#put_s_day_pt").html("Dias")):($("#put_s_day_en").html("Day"),$("#put_s_day_pt").html("Dia")),n.getHours()>1?($("#put_s_hour_en").html("Hours"),$("#put_s_hour_pt").html("Horas")):($("#put_s_hour_en").html("Hour"),$("#put_s_hour_pt").html("Hora")),n.getMinutes()>1?($("#put_s_min_en").html("Minutes"),$("#put_s_min_pt").html("Minutos")):($("#put_s_min_en").html("Minute"),$("#put_s_min_pt").html("Minuto")),n.getSeconds()>1?($("#put_s_sec_en").html("Seconds"),$("#put_s_sec_pt").html("Segundos")):($("#put_s_sec_en").html("Second"),$("#put_s_sec_pt").html("Segundo")),n.getDate()>1?$("#con_days").html(n.getDate()):$("#con_days").html("0"),$("#con_hours").html(n.getHours()),$("#con_min").html(n.getMinutes()),$("#con_sec").html(n.getSeconds()),document.getElementById("loading_bar_green").style.width=percBarra(408,diff_hours(e,t))+"%"}$("#navbar").click(function(){toggleMenu()}),$("#navbar #cont a").click(function(){$("#navbar #cont").find(".ativo").removeClass("ativo"),$(this).addClass("ativo")}),$("#navbar #cont a").on("click",function(t){}),setInterval(getTime,1e3),setInterval(updateSaldo,6e4),$(document).ready(function(){var t=$("#header"),e="lunes-nav-shadow";$(window).scroll(function(){$(this).scrollTop()>100?t.addClass(e):t.hasClass(e)&&t.removeClass(e)}),$("#slide_time").lightSlider({gallery:!0,item:1,loop:!0,thumbItem:9,slideMargin:0,enableDrag:!0,currentPagerPosition:"left",onSliderLoad:function(t){t.lightGallery({selector:"#slide_time .lslide"})}}),getTime(),updateSaldo()});