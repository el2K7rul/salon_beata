window.onload=function(){var t=document.querySelector(".body"),o=document.querySelector(".burger"),n=document.querySelectorAll(".burger__bars"),c=document.querySelector(".nav"),s=document.querySelector(".nav-desktop"),e=document.querySelectorAll(".nav-mobile__link"),r=document.querySelector(".arrowup"),i=document.querySelector(".footer__bottom--date"),l=document.querySelectorAll(".section"),a=document.querySelector(".error-msg"),u=document.querySelector(".error-msg-tel"),d=document.getElementById("email"),m=document.getElementById("tel"),f=document.querySelector(".submit"),h=document.querySelector(".msg-status"),y=document.getElementById("cookie-box"),v=document.querySelector(".cookie-box__buttons--accept"),L=document.querySelector(".cookie-box__buttons--reject");v.onclick=function(){document.cookie="CookieBy=salonbeata.eu; max-age=86400",document.cookie?y.classList.add("hide"):alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.")},L.onclick=function(){alert("Pliki Cookies zostały odrzucone. Funkcjonalność strony może zostać ograniczona."),y.classList.add("hide")};function b(e){e.classList.remove("error-display"),e.textContent=""}function g(e,t){e.classList.add("error-display"),e.textContent=t}-1!==document.cookie.indexOf("CookieBy=salonbeata.eu")?y.classList.add("hide"):y.classList.remove("hide"),"?mail_status=sent"===document.location.search&&(h.classList.add("succes"),h.textContent="Wiadomość wysłana!"),setTimeout(function(){h.classList.remove("succes")},3e3),"?mail_status=error"===document.location.search&&(h.classList.add("error"),h.textContent="błąd, spróbuj ponownie"),setTimeout(function(){h.classList.remove("error")},3e3);f.addEventListener("click",function(){/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(d.value)?b(a):g(a,"wpisz poprawny adres email."),/^[0-9\+]{8,13}$/.test(m.value)?b(u):g(u,"wpisz poprawny nr tel.")});var v=(new Date).getFullYear(),E=(i.textContent=v.toString(),window.addEventListener("scroll",function(){var t=window.scrollY;l.forEach(function(e){!e.classList.contains("white-section")&&e.offsetTop<=t+30?n.forEach(function(e){return e.classList.add("white-burger")}):e.classList.contains("white-section")&&e.offsetTop<=t+100&&n.forEach(function(e){return e.classList.remove("white-burger")})}),480<window.scrollY?r.classList.add("active"):r.classList.remove("active")}),o.addEventListener("click",function(){c.classList.toggle("active"),o.classList.toggle("active"),t.classList.toggle("disable-scroll"),e.forEach(function(e){e.addEventListener("click",function(){c.classList.remove("active"),o.classList.remove("active"),t.classList.remove("disable-scroll")})})}),document.querySelectorAll(".carousel")),w=document.querySelectorAll(".carousel-thumbnails"),L=document.querySelectorAll(".work-btn"),k=document.querySelectorAll(".arrow"),S=document.querySelectorAll(".gallery"),q=document.getElementById("haircut"),p=document.getElementById("color"),A=document.getElementById("barber"),x=document.getElementById("style"),C=document.querySelectorAll(".img"),_=document.querySelectorAll(".thumbnail-img");function B(t,o){var n=t;k.forEach(function(e){return e.addEventListener("click",function(){"left"===e.id&&n===t?(n=o+1,n--):"left"===e.id&&t<n?n--:"right"===e.id&&n<o?n++:n=t,z(n),T(n)})})}function I(e){E.forEach(function(e){return e.firstElementChild.classList.add("show-image")}),w.forEach(function(e){return e.firstElementChild.classList.remove("thumbnail-disabled")}),t.classList.add("disable-scroll"),e.classList.add("display-gallery"),s.classList.add("nav-transition")}function z(o){C.forEach(function(e,t){o===t?(e.classList.add("show-image"),T(t)):e.classList.remove("show-image")})}function T(o){_.forEach(function(e,t){return o===t?e.classList.remove("thumbnail-disabled"):e.classList.add("thumbnail-disabled")})}L.forEach(function(t){return t.addEventListener("click",function(){var e;"btn-one"===(e=t).id?(I(q),B(0,3)):"btn-two"===e.id?(I(p),B(4,7)):"btn-three"===e.id?(I(A),B(8,11)):"btn-four"===e.id&&(I(x),B(12,15))})}),_.forEach(function(e,t){return e.addEventListener("click",function(){z(index=t)})}),document.addEventListener("click",function(e){(e.target.classList.contains("gallery")&&t.classList.contains("disable-scroll")||t.classList.contains("carousel"))&&(S.forEach(function(e){return e.classList.remove("display-gallery")}),t.classList.remove("disable-scroll"),s.classList.remove("nav-transition"),index=0,E.forEach(function(e){return e.firstElementChild.classList.add("show-image")}))});var j=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting&&e.target.classList.add("show")})}),f=document.querySelectorAll(".hidden"),i=document.querySelectorAll(".hidden-right"),v=document.querySelectorAll(".hidden-vanished");f.forEach(function(e){return j.observe(e)}),i.forEach(function(e){return j.observe(e)}),v.forEach(function(e){return j.observe(e)})};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnVyZ2VyIiwiYm9keSIsImFsbEJ1cmdlckJhcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmF2TW9iaWxlIiwibmF2RGVza3RvcCIsImFycm93VXAiLCJmb290ZXJEYXRlIiwiYWxsU2VjdGlvbnMiLCJlcnJvck1zZyIsImVycm9yTXNnVGVsIiwiZW1haWwiLCJnZXRFbGVtZW50QnlJZCIsInBob25lIiwibXNnU3RhdHVzIiwiY29uc2VudEJveCIsImFjY2VwdEJ0biIsInJlamVjdEJ0biIsIm9uY2xpY2siLCJjb29raWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJhbGVydCIsImNsZWFyRXJyb3IiLCJlbCIsImNoZWNrTWFpbCIsInJlbW92ZSIsImNoZWNrUGhvbmUiLCJzaG93RXJyb3IiLCJpbnB1dCIsIm1zZyIsImZvcm1Cb3giLCJjdXJyZW50WWVhciIsImN1cnJlbnREYXRlIiwiZ2V0RnVsbFllYXIiLCJoYW5kbGVGb290ZXJZZWFyIiwidGV4dENvbnRlbnQiLCJpbmRleE9mIiwibG9jYXRpb24iLCJzZWFyY2giLCJzZXRUaW1lb3V0IiwidmFsaWROdW0iLCJzdWJtaXRCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwidGVzdCIsInZhbHVlIiwibGluayIsImZvckVhY2giLCJEYXRlIiwiaGFuZGxlQXJyb3dBY3Rpb24iLCJ0b1N0cmluZyIsImhhbmRsZURpc3BsYXlHYWxsZXJ5IiwiY3VycmVudFNlY3Rpb24iLCJzY3JvbGxZIiwic2VjdGlvbiIsInRodW1ibmFpbHNDYXJvdXNlbHMiLCJjb250YWlucyIsIndvcmtCdG5zIiwib2Zmc2V0VG9wIiwiZ2FsbGVyaWVzIiwiY29sb3JHYWxsZXJ5IiwiYmFyYmVyR2FsbGVyeSIsImltYWdlcyIsInRvZ2dsZSIsImFsbE5hdkxpbmtzIiwiaGFuZGxlT2JzZXJ2ZXIiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJoYWlyY3V0R2FsbGVyeSIsInN0eWxlR2FsbGVyeSIsInRodW1ibmFpbEltYWdlcyIsImluZGV4IiwiZ2FsbGVyeVR5cGUiLCJpY29uIiwiaWQiLCJoYW5kbGVEaXNwbGF5SW1hZ2UiLCJjdXJyZW50SW5kZXgiLCJpbWFnZSIsImhhbmRsZUFjdGl2YXRlVGh1bWJuYWlsIiwiY2Fyb3VzZWwiLCJidG4iLCJmaXJzdEVsZW1lbnRDaGlsZCIsImhhbmRsZVdvcmtCdG4iLCJ0aHVtYm5haWxJbmRleCIsInRodW1ibmFpbCIsInRhcmdldCIsImdhbGxlcnkiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiYXJyb3dJY29ucyIsImNhcm91c2VscyIsImhpZGRlbkVsZW1lbnRzTGVmdCIsImUiLCJoaWRkZW5FbGVtZW50c1JpZ2h0IiwiaGlkZGVuVmFuaXNoZWRFbGVtZW50cyIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwib2JzZXJ2ZSJdLCJtYXBwaW5ncyI6IkFBQUFBLE9BQU9DLE9BQVMsV0FBaEJELElBQU9DLEVBQU1DLFNBQUdDLGNBQVksT0FBQSxFQUMxQkMsRUFBQUYsU0FBQUMsY0FBQSxTQUFBLEVBQ01FLEVBQWdCRixTQUFBQSxpQkFBc0IsZUFBQSxFQUN0Q0MsRUFBU0YsU0FBU0MsY0FBYyxNQUFVLEVBQzFDRyxFQUFhSixTQUFXQyxjQUFDSSxjQUFpQixFQUMxQ0MsRUFBWU4sU0FBU0MsaUJBQXFCLG1CQUFBLEVBQzFDTSxFQUFVUCxTQUFXQyxjQUFjLFVBQUMsRUFFcENPLEVBQVVSLFNBQVNDLGNBQWMsdUJBQVcsRUFFNUNRLEVBQWFULFNBQVNDLGlCQUFjLFVBQUEsRUFDcENTLEVBQVdWLFNBQVdDLGNBQUNJLFlBQWlCLEVBQ3hDTSxFQUFXWCxTQUFTQyxjQUFjLGdCQUFhLEVBQy9DVyxFQUFBQSxTQUFjWixlQUFTQyxPQUFjLEVBQ3JDWSxFQUFRYixTQUFTYyxlQUFlLEtBQU8sRUFDdkNDLEVBQVFmLFNBQVNjLGNBQW9CLFNBQUMsRUFHdENFLEVB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QU1RLENBQ04sRUFFQUEsU0FBQUEsaUJBQTBCLFFBQUMsU0FBQUMsSUFBNkJBLEVBQUFQLE9BQUFqRSxVQUFBb0MsU0FBQSxTQUFBLEdBQUF2RCxFQUFBbUIsVUFBQW9DLFNBQUEsZ0JBQUEsR0FDeERxQyxFQUFBQSxVQUFtQnJDLFNBQVMsVUFBQ2hDLEtBQTRCbUMsRUFBQVosUUFBQSxTQUFBdUMsR0FBQSxPQUFBQSxFQUFBbEUsVUFBQU0sT0FBQSxpQkFBQSxDQUFBLENBQUEsRUFDekRvRSxFQUFBQSxVQUFBQSxPQUF1Qi9DLGdCQUFTdkIsRUFBRW5CLEVBQUswRixVQUFnQnJFLE9BQUksZ0JBQUEsRUFBQzZDLE1BQUEsRUFuQnhEbUIsRUFBVTNDLFFBQVEsU0FBQ2dDLEdBQVEsT0FBS0EsRUFBU0Usa0JBQWtCN0QsVUFBVUMsSUFBSSxZQUFZLENBQUMsQ0FBQSxFQUUxRixDQUFDLEVBSUQsSUFBTTBFLEVBQVcsSUFBSUMscUJBQXFCLFNBQUNDLEdBQ3pDQSxFQUFRbEQsUUFBUSxTQUFDd0MsR0FDWEEsRUFBTUMsZ0JBQ1JELEVBQU1GLE9BQU9qRSxVQUFVQyxJQUFJLE1BQU0sQ0FFckMsQ0FBQyxDQUNILENBQUMsRUFFS3NFLEVBQXFCN0YsU0FBU0ssaUJBQWlCLFNBQVMsRUFDeEQwRixFQUFzQi9GLFNBQVNLLGlCQUFpQixlQUFlLEVBQy9EMkYsRUFBeUJoRyxTQUFTSyxpQkFBaUIsa0JBQWtCLEVBQzNFd0YsRUFBbUI1QyxRQUFRLFNBQUN2QixHQUFFLE9BQUt1RSxFQUFTRyxRQUFRMUUsQ0FBRSxDQUFDLENBQUEsRUFDdkRxRSxFQUFvQjlDLFFBQVEsU0FBQ3ZCLEdBQUUsT0FBS3VFLEVBQVNHLFFBQVExRSxDQUFFLENBQUMsQ0FBQSxFQUN4RHNFLEVBQXVCL0MsUUFBUSxTQUFDdkIsR0FBRSxPQUFLdUUsRUFBU0csUUFBUTFFLENBQUUsQ0FBQyxDQUFBLENBQzdEIiwiZmlsZSI6Im1haW4ubWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAvL3NlbGVjdG9yc1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvZHlcIik7XHJcbiAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJcIik7XHJcbiAgY29uc3QgYWxsQnVyZ2VyQmFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnVyZ2VyX19iYXJzXCIpO1xyXG4gIGNvbnN0IG5hdk1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2XCIpO1xyXG4gIGNvbnN0IG5hdkRlc2t0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1kZXNrdG9wXCIpO1xyXG4gIGNvbnN0IGFsbE5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtbW9iaWxlX19saW5rXCIpO1xyXG4gIGNvbnN0IGFycm93VXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFycm93dXBcIik7XHJcblxyXG4gIGNvbnN0IGZvb3RlckRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvb3Rlcl9fYm90dG9tLS1kYXRlXCIpO1xyXG4gIGNvbnN0IGFsbFNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWN0aW9uXCIpO1xyXG4gIGNvbnN0IGVycm9yTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvci1tc2dcIik7XHJcbiAgY29uc3QgZXJyb3JNc2dUZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yLW1zZy10ZWxcIik7XHJcbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsXCIpO1xyXG4gIGNvbnN0IHBob25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZWxcIik7XHJcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRcIik7XHJcblxyXG4gIGNvbnN0IG1zZ1N0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXNnLXN0YXR1c1wiKTtcclxuXHJcbiAgLy9jb29raWVBbGVydFxyXG5cclxuICBjb25zdCBjb25zZW50Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb29raWUtYm94XCIpO1xyXG4gIGNvbnN0IGFjY2VwdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29va2llLWJveF9fYnV0dG9ucy0tYWNjZXB0XCIpO1xyXG4gIGNvbnN0IHJlamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29va2llLWJveF9fYnV0dG9ucy0tcmVqZWN0XCIpO1xyXG5cclxuICBhY2NlcHRCdG4ub25jbGljayA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiQ29va2llQnk9c2Fsb25iZWF0YS5ldTsgbWF4LWFnZT1cIiArIDYwICogNjAgKiAyNDtcclxuICAgIGlmIChkb2N1bWVudC5jb29raWUpIHtcclxuICAgICAgY29uc2VudEJveC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFxyXG4gICAgICAgIFwiQ29va2llIGNhbid0IGJlIHNldCEgUGxlYXNlXCIgK1xyXG4gICAgICAgICAgXCIgdW5ibG9jayB0aGlzIHNpdGUgZnJvbSB0aGUgY29va2llXCIgK1xyXG4gICAgICAgICAgXCIgc2V0dGluZyBvZiB5b3VyIGJyb3dzZXIuXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZWplY3RCdG4ub25jbGljayA9ICgpID0+IHtcclxuICAgIGFsZXJ0KFwiUGxpa2kgQ29va2llcyB6b3N0YcWCeSBvZHJ6dWNvbmUuIEZ1bmtjam9uYWxub8WbxIcgc3Ryb255IG1vxbxlIHpvc3RhxIcgb2dyYW5pY3pvbmEuXCIpO1xyXG4gICAgY29uc2VudEJveC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICB9O1xyXG5cclxuICBsZXQgY2hlY2tDb29raWUgPSBkb2N1bWVudC5jb29raWUuaW5kZXhPZihcIkNvb2tpZUJ5PXNhbG9uYmVhdGEuZXVcIik7XHJcbiAgY2hlY2tDb29raWUgIT09IC0xID8gY29uc2VudEJveC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKSA6IGNvbnNlbnRCb3guY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcblxyXG4gIC8vc2VuZCBtYWlsXHJcblxyXG4gIGlmIChkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2ggPT09IFwiP21haWxfc3RhdHVzPXNlbnRcIikge1xyXG4gICAgbXNnU3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJzdWNjZXNcIik7XHJcbiAgICBtc2dTdGF0dXMudGV4dENvbnRlbnQgPSBcIldpYWRvbW/Fm8SHIHd5c8WCYW5hIVwiO1xyXG4gIH1cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIG1zZ1N0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKFwic3VjY2VzXCIpO1xyXG4gIH0sIDMwMDApO1xyXG5cclxuICBpZiAoZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoID09PSBcIj9tYWlsX3N0YXR1cz1lcnJvclwiKSB7XHJcbiAgICBtc2dTdGF0dXMuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xyXG4gICAgbXNnU3RhdHVzLnRleHRDb250ZW50ID0gXCJixYLEhWQsIHNwcsOzYnVqIHBvbm93bmllXCI7XHJcbiAgfVxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgbXNnU3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKTtcclxuICB9LCAzMDAwKTtcclxuXHJcbiAgLy8gZm9ybSB2YWxpZGF0b3JcclxuXHJcbiAgY29uc3QgY2hlY2tQaG9uZSA9IChwaG9uZSkgPT4ge1xyXG4gICAgY29uc3QgdmFsaWROdW0gPSAvXlswLTlcXCtdezgsMTN9JC87XHJcblxyXG4gICAgaWYgKHZhbGlkTnVtLnRlc3QocGhvbmUudmFsdWUpKSB7XHJcbiAgICAgIGNsZWFyRXJyb3IoZXJyb3JNc2dUZWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hvd0Vycm9yKGVycm9yTXNnVGVsLCBcIndwaXN6IHBvcHJhd255IG5yIHRlbC5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hlY2tNYWlsID0gKGVtYWlsKSA9PiB7XHJcbiAgICBjb25zdCB2YWxpZE1haWwgPSAvXltcXHctXFwuXStAKFtcXHctXStcXC4pK1tcXHctXXsyLDR9JC87XHJcblxyXG4gICAgaWYgKHZhbGlkTWFpbC50ZXN0KGVtYWlsLnZhbHVlKSkge1xyXG4gICAgICBjbGVhckVycm9yKGVycm9yTXNnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNob3dFcnJvcihlcnJvck1zZywgXCJ3cGlzeiBwb3ByYXdueSBhZHJlcyBlbWFpbC5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBjbGVhckVycm9yID0gKGVsKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtQm94ID0gZWw7XHJcbiAgICBmb3JtQm94LmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvci1kaXNwbGF5XCIpO1xyXG4gICAgZm9ybUJveC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd0Vycm9yID0gKGlucHV0LCBtc2cpID0+IHtcclxuICAgIGNvbnN0IGZvcm1Cb3ggPSBpbnB1dDtcclxuICAgIGZvcm1Cb3guY2xhc3NMaXN0LmFkZChcImVycm9yLWRpc3BsYXlcIik7XHJcbiAgICBmb3JtQm94LnRleHRDb250ZW50ID0gbXNnO1xyXG4gIH07XHJcblxyXG4gIC8vIGV2ZW50IGxpc3RlbmVyc1xyXG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY2hlY2tNYWlsKGVtYWlsKTtcclxuICAgIGNoZWNrUGhvbmUocGhvbmUpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBmb290ZXJcclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgY3VycmVudFllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVGb290ZXJZZWFyID0gKCkgPT4ge1xyXG4gICAgZm9vdGVyRGF0ZS50ZXh0Q29udGVudCA9IGN1cnJlbnRZZWFyLnRvU3RyaW5nKCk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRm9vdGVyWWVhcigpO1xyXG4gIC8vIE5BVlxyXG5cclxuICBjb25zdCBoYW5kbGVOYXYgPSAoKSA9PiB7XHJcbiAgICBuYXZNb2JpbGUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiZGlzYWJsZS1zY3JvbGxcIik7XHJcblxyXG4gICAgYWxsTmF2TGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbmF2TW9iaWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZS1zY3JvbGxcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVBcnJvd1VwID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudFNlY3Rpb24gPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgIGlmIChjdXJyZW50U2VjdGlvbiA+IDQ4MCkge1xyXG4gICAgICBhcnJvd1VwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcnJvd1VwLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT2JzZXJ2ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50U2VjdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuICAgIGFsbFNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICFzZWN0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcIndoaXRlLXNlY3Rpb25cIikgJiZcclxuICAgICAgICBzZWN0aW9uLm9mZnNldFRvcCA8PSBjdXJyZW50U2VjdGlvbiArIDMwXHJcbiAgICAgICkge1xyXG4gICAgICAgIGFsbEJ1cmdlckJhcnMuZm9yRWFjaCgoYmFyKSA9PiBiYXIuY2xhc3NMaXN0LmFkZChcIndoaXRlLWJ1cmdlclwiKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJ3aGl0ZS1zZWN0aW9uXCIpICYmXHJcbiAgICAgICAgc2VjdGlvbi5vZmZzZXRUb3AgPD0gY3VycmVudFNlY3Rpb24gKyAxMDBcclxuICAgICAgKSB7XHJcbiAgICAgICAgYWxsQnVyZ2VyQmFycy5mb3JFYWNoKChiYXIpID0+IGJhci5jbGFzc0xpc3QucmVtb3ZlKFwid2hpdGUtYnVyZ2VyXCIpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBoYW5kbGVBcnJvd1VwKCk7XHJcbiAgfTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlT2JzZXJ2ZXIpO1xyXG4gIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTmF2KTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLSBHQUxMRVJZIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIGNvbnN0IGNhcm91c2VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2Fyb3VzZWxcIik7XHJcbiAgY29uc3QgdGh1bWJuYWlsc0Nhcm91c2VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2Fyb3VzZWwtdGh1bWJuYWlsc1wiKTtcclxuICBjb25zdCB3b3JrQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29yay1idG5cIik7XHJcblxyXG4gIGNvbnN0IGFycm93SWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFycm93XCIpO1xyXG4gIGNvbnN0IGdhbGxlcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ2FsbGVyeVwiKTtcclxuICBjb25zdCBoYWlyY3V0R2FsbGVyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFpcmN1dFwiKTtcclxuICBjb25zdCBjb2xvckdhbGxlcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbG9yXCIpO1xyXG4gIGNvbnN0IGJhcmJlckdhbGxlcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhcmJlclwiKTtcclxuICBjb25zdCBzdHlsZUdhbGxlcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0eWxlXCIpO1xyXG5cclxuICBjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltZ1wiKTtcclxuICBjb25zdCB0aHVtYm5haWxJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRodW1ibmFpbC1pbWdcIik7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVdvcmtCdG4oYnRuKSB7XHJcbiAgICBpZiAoYnRuLmlkID09PSBcImJ0bi1vbmVcIikge1xyXG4gICAgICBsZXQgc3RhcnRJbmRleCA9IDA7XHJcbiAgICAgIGxldCBlbmRJbmRleCA9IDM7XHJcblxyXG4gICAgICBoYW5kbGVEaXNwbGF5R2FsbGVyeShoYWlyY3V0R2FsbGVyeSksIGhhbmRsZUFycm93QWN0aW9uKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcclxuICAgIH0gZWxzZSBpZiAoYnRuLmlkID09PSBcImJ0bi10d29cIikge1xyXG4gICAgICBsZXQgc3RhcnRJbmRleCA9IDQ7XHJcbiAgICAgIGxldCBlbmRJbmRleCA9IDc7XHJcbiAgICAgIGhhbmRsZURpc3BsYXlHYWxsZXJ5KGNvbG9yR2FsbGVyeSk7XHJcbiAgICAgIGhhbmRsZUFycm93QWN0aW9uKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcclxuICAgIH0gZWxzZSBpZiAoYnRuLmlkID09PSBcImJ0bi10aHJlZVwiKSB7XHJcbiAgICAgIGxldCBzdGFydEluZGV4ID0gODtcclxuICAgICAgbGV0IGVuZEluZGV4ID0gMTE7XHJcbiAgICAgIGhhbmRsZURpc3BsYXlHYWxsZXJ5KGJhcmJlckdhbGxlcnkpO1xyXG4gICAgICBoYW5kbGVBcnJvd0FjdGlvbihzdGFydEluZGV4LCBlbmRJbmRleCk7XHJcbiAgICB9IGVsc2UgaWYgKGJ0bi5pZCA9PT0gXCJidG4tZm91clwiKSB7XHJcbiAgICAgIGxldCBzdGFydEluZGV4ID0gMTI7XHJcbiAgICAgIGxldCBlbmRJbmRleCA9IDE1O1xyXG4gICAgICBoYW5kbGVEaXNwbGF5R2FsbGVyeShzdHlsZUdhbGxlcnkpO1xyXG4gICAgICBoYW5kbGVBcnJvd0FjdGlvbihzdGFydEluZGV4LCBlbmRJbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVBcnJvd0FjdGlvbihzdGFydEluZGV4LCBlbmRJbmRleCkge1xyXG4gICAgbGV0IGluZGV4ID0gc3RhcnRJbmRleDtcclxuICAgIGFycm93SWNvbnMuZm9yRWFjaCgoaWNvbikgPT5cclxuICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmIChpY29uLmlkID09PSBcImxlZnRcIiAmJiBpbmRleCA9PT0gc3RhcnRJbmRleCkge1xyXG4gICAgICAgICAgaW5kZXggPSBlbmRJbmRleCArIDE7XHJcbiAgICAgICAgICBpbmRleC0tO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaWNvbi5pZCA9PT0gXCJsZWZ0XCIgJiYgaW5kZXggPiBzdGFydEluZGV4KSB7XHJcbiAgICAgICAgICBpbmRleC0tO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaWNvbi5pZCA9PT0gXCJyaWdodFwiICYmIGluZGV4IDwgZW5kSW5kZXgpIHtcclxuICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGluZGV4ID0gc3RhcnRJbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGFuZGxlRGlzcGxheUltYWdlKGluZGV4KTtcclxuICAgICAgICBoYW5kbGVBY3RpdmF0ZVRodW1ibmFpbChpbmRleCk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRGlzcGxheUdhbGxlcnkoZ2FsbGVyeVR5cGUpIHtcclxuICAgIGNhcm91c2Vscy5mb3JFYWNoKChjYXJvdXNlbCkgPT4gY2Fyb3VzZWwuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZChcInNob3ctaW1hZ2VcIikpO1xyXG4gICAgdGh1bWJuYWlsc0Nhcm91c2Vscy5mb3JFYWNoKChjYXJvdXNlbCkgPT5cclxuICAgICAgY2Fyb3VzZWwuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInRodW1ibmFpbC1kaXNhYmxlZFwiKVxyXG4gICAgKTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImRpc2FibGUtc2Nyb2xsXCIpO1xyXG4gICAgZ2FsbGVyeVR5cGUuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktZ2FsbGVyeVwiKTtcclxuICAgIG5hdkRlc2t0b3AuY2xhc3NMaXN0LmFkZChcIm5hdi10cmFuc2l0aW9uXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRGlzcGxheUltYWdlKGN1cnJlbnRJbmRleCkge1xyXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoY3VycmVudEluZGV4ID09PSBpbmRleCkge1xyXG4gICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJzaG93LWltYWdlXCIpLCBoYW5kbGVBY3RpdmF0ZVRodW1ibmFpbChpbmRleCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctaW1hZ2VcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQWN0aXZhdGVUaHVtYm5haWwoY3VycmVudEluZGV4KSB7XHJcbiAgICB0aHVtYm5haWxJbWFnZXMuZm9yRWFjaCgodGh1bWJuYWlsLCBpbmRleCkgPT5cclxuICAgICAgY3VycmVudEluZGV4ID09PSBpbmRleFxyXG4gICAgICAgID8gdGh1bWJuYWlsLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aHVtYm5haWwtZGlzYWJsZWRcIilcclxuICAgICAgICA6IHRodW1ibmFpbC5jbGFzc0xpc3QuYWRkKFwidGh1bWJuYWlsLWRpc2FibGVkXCIpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gZXZlbnQgbGlzdGVuZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICB3b3JrQnRucy5mb3JFYWNoKChidG4pID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gaGFuZGxlV29ya0J0bihidG4pKSk7XHJcblxyXG4gIHRodW1ibmFpbEltYWdlcy5mb3JFYWNoKCh0aHVtYm5haWwsIHRodW1ibmFpbEluZGV4KSA9PlxyXG4gICAgdGh1bWJuYWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIChpbmRleCA9IHRodW1ibmFpbEluZGV4KSwgaGFuZGxlRGlzcGxheUltYWdlKGluZGV4KTtcclxuICAgIH0pXHJcbiAgKTtcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJnYWxsZXJ5XCIpICYmIGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZS1zY3JvbGxcIikpIHx8XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2Fyb3VzZWxcIilcclxuICAgICkge1xyXG4gICAgICBnYWxsZXJpZXMuZm9yRWFjaCgoZ2FsbGVyeSkgPT4gZ2FsbGVyeS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheS1nYWxsZXJ5XCIpKTtcclxuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZS1zY3JvbGxcIik7XHJcbiAgICAgIG5hdkRlc2t0b3AuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi10cmFuc2l0aW9uXCIpO1xyXG4gICAgICBpbmRleCA9IDA7XHJcblxyXG4gICAgICBjYXJvdXNlbHMuZm9yRWFjaCgoY2Fyb3VzZWwpID0+IGNhcm91c2VsLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJzaG93LWltYWdlXCIpKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1mYWRlSU4gYW5pbSAtLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGlkZGVuRWxlbWVudHNMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oaWRkZW5cIik7XHJcbiAgY29uc3QgaGlkZGVuRWxlbWVudHNSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGlkZGVuLXJpZ2h0XCIpO1xyXG4gIGNvbnN0IGhpZGRlblZhbmlzaGVkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhpZGRlbi12YW5pc2hlZFwiKTtcclxuICBoaWRkZW5FbGVtZW50c0xlZnQuZm9yRWFjaCgoZWwpID0+IG9ic2VydmVyLm9ic2VydmUoZWwpKTtcclxuICBoaWRkZW5FbGVtZW50c1JpZ2h0LmZvckVhY2goKGVsKSA9PiBvYnNlcnZlci5vYnNlcnZlKGVsKSk7XHJcbiAgaGlkZGVuVmFuaXNoZWRFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShlbCkpO1xyXG59O1xyXG4iXX0=
