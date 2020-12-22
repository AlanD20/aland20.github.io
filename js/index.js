const pageNumber=["p1","p2","p3","p4","p5"],url=["who","about","projects","resume","contact"],pageOffSets=[0,754.18,1430,2050,2750],Sections=document.querySelectorAll("section"),list=document.querySelectorAll(".leftIndicator > *:not(.img)"),cardList=document.querySelectorAll(".card-list > *"),nav=document.querySelectorAll("nav > ul.list > *"),DesktopMediaQuery=matchMedia("(min-width: 800px)"),myLogo=document.querySelector(".svg_logo"),frm=document.querySelector(".contactForm"),title=["AlanD20","ALAND AL-JAF"];gsap.registerPlugin(ScrollTrigger,TextPlugin);var leftCircleAnimation,firstA,thirdA;const tMain=gsap.timeline({defaults:{ease:"power3.inOut"}}),stMain=gsap.timeline({defaults:{duration:1,ease:"power3.inOut"}});title.forEach((a,b)=>{let c=gsap.timeline({repeat:1,yoyo:!0,repeatDelay:1});c.to(".title",{duration:1,text:a,onComplete:()=>{if(1===b)return tMain.kill()}}),tMain.add(c)}),stMain.to(".ff",{duration:1,text:"PROGRAMMER"}).to(".prtaqaly",{text:" & "},"-=.2").to(".ss",{text:"WEB DEVELOPER"},"<");const cur=location.origin;frm.addEventListener("submit",v=>{v.preventDefault();const a=frm.clientName.value,b=frm.clientMsg.value;return window.open(`mailto:alandsp20@pm.me?subject=Portfolio Feedback: ${a}&body=${b}`,"_blank"),frm.action=cur}),ScrollTrigger.matchMedia({"(min-width: 800px)":function(){function a(a,c){ScrollTrigger.create({trigger:`.${a}`,start:"top center",end:"bottom center",onToggle:a=>b(a,c)})}function b(a,b){return a.isActive?(list[b].classList.add("activePage"),list[b].classList.remove("inactivePage"),firstA=gsap.to(`.p${b+1} > ellipse:first-child`,{duration:.7,fill:"var(--clr-primary)",stroke:"none",strokeWidth:"0",opacity:1}),gsap.set(`.p${b+1} > ellipse:nth-child(2)`,{opacity:.5}),thirdA=gsap.to(`.p${b+1} > path:last-child`,{duration:.7,rotation:360,transformOrigin:"100% 50%",overwrite:"all",opacity:1}),(thirdA.restart(),firstA.restart())):(thirdA.pause().seek(0),firstA.pause().seek(0),list[b].classList.add("inactivePage"),list[b].classList.remove("activePage"),gsap.set(`.p${b+1} > ellipse:first-child`,{fill:"none",stroke:"var(--clr-primary)",strokeWidth:"2px",opacity:.65}),gsap.set(`.p${b+1} > ellipse:nth-child(2)`,{opacity:0}),void gsap.set(`.p${b+1} > path:last-child`,{opacity:0}))}ScrollTrigger.saveStyles(".list > *:not(.activePage)"),a("firstPage",0),a("secondPage",1),a("thirdPage",2),a("forthPage",3),a("fifthPage",4)}});const logoHoverAnimation=gsap.from(".svg_logo",{transformOrigin:".4rem",y:"-5px",rotation:720,ease:"power3.inout",opacity:1,paused:!0});var introAnimation,leftNavAnimation;function websiteIntro(){introAnimation=gsap.timeline({smoothChildTiming:!0,defaults:{duration:.6}}),leftNavAnimation=gsap.timeline({smoothChildTiming:!0}),introAnimation.from("header",{y:"-250%",ease:"bounce"}).from(".svg_logo",{opacity:.2,onStart:()=>logoHoverAnimation.restart()},"+=.2").from(".items",{opacity:.5,stagger:.4},"-=.7"),leftNavAnimation.from(".leftIndicator > svg:first-child",{height:"0"}).from(".leftIndicator > svg:nth-child(2)",{opacity:.2,scale:0,height:"0"},"-=.2").from(".leftIndicator > svg:nth-child(3)",{opacity:.2,scale:0,height:"0"},"<.2").from(".leftIndicator > svg:nth-child(4)",{opacity:.2,scale:0,height:"0"},"<.2").from(".leftIndicator > svg:nth-child(5)",{opacity:.2,scale:0,height:"0"},"<.2").from(".leftIndicator > svg:nth-child(6)",{opacity:.2,scale:0,height:"0"},"<.2").from(".leftIndicator > svg:last-child",{duration:.5,height:"0"},"<.2")}window.addEventListener("load",a=>{if(null!==localStorage.getItem("clr")&&clrChanger(localStorage.getItem("clr")),DesktopMediaQuery.matches){if(websiteIntro(),""!==location.hash){a.preventDefault(),loadedPage();const b=location.hash.replace("#","");autoWebTitle(b)}addEvents(),window.onresize=function(){ScrollTrigger.refresh()}}},{once:!0});function addAni(){return!(logoHoverAnimation.isActive()||leftNavAnimation.isActive())&&logoHoverAnimation.restart()}DesktopMediaQuery.addListener(resizeScript);function resizeScript(){DesktopMediaQuery.matches?addEvents():removeEvents()}function addEvents(){cardList.forEach(a=>{a.addEventListener("mouseenter",cardHover),a.addEventListener("mouseleave",cardLeave)}),nav.forEach(a=>a.addEventListener("click",navHoverLinks)),list.forEach(a=>{a.addEventListener("click",leftNavClick,{capture:!0}),a.addEventListener("mouseenter",leftNavHover),a.addEventListener("mouseleave",leftNavLeave)}),myLogo.addEventListener("mouseenter",addAni)}function removeEvents(){cardList.forEach(a=>{a.removeEventListener("mouseenter",cardHover),a.removeEventListener("mouseleave",cardLeave)}),nav.forEach(a=>a.removeEventListener("click",navHoverLinks)),list.forEach(a=>{a.removeEventListener("click",leftNavClick),a.removeEventListener("mouseenter",leftNavHover),a.removeEventListener("mouseleave",leftNavLeave)}),myLogo.removeEventListener("mouseenter",addAni)}function cardHover(){cardList[0].parentElement.previousElementSibling.classList.remove("howToHide"),cardList[0].parentElement.style.overflowX="scroll"}function cardLeave(){cardList[0].parentElement.previousElementSibling.classList.add("howToHide"),cardList[0].parentElement.style.overflowX="hidden"}function navHoverLinks(a){a.target.getAttribute("href").includes("#")&&(a.preventDefault(),changePage(a.target,!1))}function leftNavClick(a){a.preventDefault(),changePage(a.target,!0)}function leftNavLeave(a){a.target.classList.contains("inactivePage")&&CircleAnimationsLeave(a.target)}function leftNavHover(a){a.target.classList.contains("inactivePage")&&CircleAnimations(a.target)}function CircleAnimations(a){if(!a.parentElement.classList.contains("activePage"))return leftCircleAnimation=gsap.to(`.${a.classList[0]} > ellipse:first-child`,{duration:.2,opacity:1,fill:"var(--clr-primary)",stroke:"var(--clr-primary)",strokeWidth:"6px"}),leftCircleAnimation.restart()}function CircleAnimationsLeave(a){return gsap.set(`.${a.classList[0]} > ellipse:first-child`,{opacity:.65,fill:"none",stroke:"var(--clr-primary)",strokeWidth:"2px"}),leftCircleAnimation.pause()}function changePage(a,b){let c,d;b?(c=a.classList[0],pageNumber.includes(a.parentElement.classList[0])&&(c=a.parentElement.classList[0]),d=pageNumber.indexOf(c)):(c=a.getAttribute("href"),c=c.replace("#",""),d=url.indexOf(c)),window.location.hash="#"+url[d],window.scrollTo({top:pageOffSets[d]}),autoWebTitle(url[d])}function loadedPage(){let a=location.hash;a=a.replace("#","");let b=url.indexOf(a);window.scrollTo(0,pageOffSets[b])}function autoWebTitle(a){const b=document.querySelector(".webTitle");b.innerText="string"==typeof a?`AlanD20 - ${a.toUpperCase()}`:`AlanD20 - ${a.getAttribute("id").toUpperCase()}`}const clrs=document.querySelectorAll(".svg_colorCircle");clrs.forEach(a=>{a.addEventListener("click",()=>{if(a.classList.contains("custom")){const b=document.querySelector(".cstmClrForm");b.classList.toggle("d-hidden"),b.addEventListener("input",()=>{/^#[a-fA-F0-9]{6,6}$/.test(b.ccf.value)&&gsap.set(a,{fill:b.ccf.value})}),b.addEventListener("submit",a=>(a.preventDefault(),clrChanger(b.ccf.value),b.classList.toggle("d-hidden")))}else clrChanger(a.dataset.clr)})});function clrChanger(a){gsap.to(":root",{duration:1,"--clr-primary":a}),gsap.fromTo("body > *",{opacity:.5},{duration:.5,opacity:1}),list.forEach(a=>{a.classList.contains("inactivePage")?a.children[0].setAttribute("style",""):a.children[0].setAttribute("style","fill: var(--clr-primary);")}),localStorage.setItem("clr",a)}
