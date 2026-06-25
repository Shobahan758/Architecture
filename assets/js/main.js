(function(){
  "use strict";

  /*
    Main JavaScript
    Section guide:
    1. Theme Section: saved light/dark mode and theme toggle icon.
    2. Header / Scroll Section: sticky header state and back-to-top button.
    3. Reveal Animation Section: intersection observer for .reveal elements.
    4. Counter Section: animated numeric counters.
    5. Projects Filter Section: category filtering for project grids.
    6. Hero Background Slider Section: rotating hero background images.
    7. Home 06 Hero Image Slider Section: image slider arrows and autoplay.
    8. Hover Showcase Section: image swap on hover/focus.
    9. Testimonial Slider Section: single and paired testimonial sliders.
    10. Home 04 Project Slider Section: infinite project carousel.
    11. Home 05 Gallery Section: auto-moving furniture gallery.
    12. Form Section: demo form submit prevention and validation state.
  */

  /* Theme Section Start: load, toggle, and sync dark/light mode */
  const root=document.documentElement;
  const getSavedTheme=()=>{
    try{return localStorage.getItem("nexora-theme")}catch(error){return null}
  };
  const setSavedTheme=(theme)=>{
    try{localStorage.setItem("nexora-theme",theme)}catch(error){}
  };
  const savedTheme=getSavedTheme();
  if(savedTheme==="dark")root.dataset.theme="dark";
  const header=document.querySelector("[data-header]");
  const topBtn=document.querySelector("[data-scroll-top]");
  const themeToggle=document.querySelector("[data-theme-toggle]");
  const mobileNav=document.querySelector(".site-header .navbar-collapse");
  const mobileToggler=document.querySelector(".site-header .navbar-toggler");
  const syncThemeIcon=()=>{
    const icon=themeToggle&&themeToggle.querySelector("i");
    if(!themeToggle||!icon)return;
    const isDark=root.dataset.theme==="dark";
    icon.className=isDark?"bi bi-sun":"bi bi-moon-stars";
    themeToggle.setAttribute("aria-label",isDark?"Switch to light mode":"Switch to dark mode");
    themeToggle.setAttribute("aria-pressed",isDark?"true":"false");
  };
  themeToggle&&themeToggle.addEventListener("click",()=>{
    const dark=root.dataset.theme!=="dark";
    root.dataset.theme=dark?"dark":"light";
    setSavedTheme(dark?"dark":"light");
    syncThemeIcon();
  });
  syncThemeIcon();

  /* Theme Section End */
  /* Header / Scroll Section Start: sticky header shadow and back-to-top button */
  const onScroll=()=>{const active=window.scrollY>40;header&&header.classList.toggle("is-scrolled",active);topBtn&&topBtn.classList.toggle("show",window.scrollY>500)};
  window.addEventListener("scroll",onScroll,{passive:true});onScroll();
  topBtn&&topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

  /* Header / Scroll Section End */
  /* Mobile Menu Section Start: right-side drawer behavior */
  if(mobileNav&&mobileToggler){
    const closeButton=document.createElement("button");
    closeButton.className="mobile-nav-close";
    closeButton.type="button";
    closeButton.setAttribute("aria-label","Close navigation menu");
    closeButton.innerHTML="<span></span><span></span>";
    mobileNav.prepend(closeButton);
    const getMobileCollapse=()=>window.bootstrap&&window.bootstrap.Collapse?window.bootstrap.Collapse.getOrCreateInstance(mobileNav,{toggle:false}):null;
    const closeMobileNav=()=>{const collapse=getMobileCollapse();collapse?collapse.hide():mobileNav.classList.remove("show");};
    mobileNav.addEventListener("show.bs.collapse",()=>document.body.classList.add("mobile-nav-open"));
    mobileNav.addEventListener("hide.bs.collapse",()=>document.body.classList.remove("mobile-nav-open"));
    closeButton.addEventListener("click",closeMobileNav);
    document.addEventListener("keydown",(event)=>{if(event.key==="Escape"&&mobileNav.classList.contains("show"))closeMobileNav();});
    mobileNav.querySelectorAll("a").forEach((link)=>{
      link.addEventListener("click",()=>{
        if(window.matchMedia("(min-width: 1200px)").matches)return;
        if(link.classList.contains("dropdown-toggle"))return;
        closeMobileNav();
      });
    });
  }

  /* Mobile Menu Section End */
  /* Desktop Dropdown Section Start: open menu cards on hover/focus */
  document.querySelectorAll(".site-header .navbar-nav .dropdown").forEach((item)=>{
    const toggle=item.querySelector(".dropdown-toggle");
    const menu=item.querySelector(".dropdown-menu");
    if(!toggle||!menu)return;
    const isDesktop=()=>window.matchMedia("(min-width: 1200px)").matches;
    const getDropdown=()=>window.bootstrap&&window.bootstrap.Dropdown?window.bootstrap.Dropdown.getOrCreateInstance(toggle):null;
    const showMenu=()=>{
      if(!isDesktop())return;
      const dropdown=getDropdown();
      dropdown?dropdown.show():menu.classList.add("show");
      toggle.classList.add("show");
      toggle.setAttribute("aria-expanded","true");
    };
    const hideMenu=()=>{
      if(!isDesktop())return;
      const dropdown=getDropdown();
      dropdown?dropdown.hide():menu.classList.remove("show");
      toggle.classList.remove("show");
      toggle.setAttribute("aria-expanded","false");
    };
    item.addEventListener("mouseenter",showMenu);
    item.addEventListener("mouseleave",hideMenu);
    item.addEventListener("focusin",showMenu);
    item.addEventListener("focusout",(event)=>{
      if(item.contains(event.relatedTarget))return;
      hideMenu();
    });
  });

  /* Desktop Dropdown Section End */
  /* Reveal Animation Section Start: add visible class when elements enter viewport */
  const observer=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}})},{threshold:.14});
  document.querySelectorAll(".reveal").forEach((el)=>observer.observe(el));

  /* Reveal Animation Section End */
  /* Counter Section Start: animate numeric stats */
  document.querySelectorAll("[data-counter]").forEach((el)=>{const raw=el.textContent.trim();const end=parseFloat(raw.replace(/[^0-9.]/g,""))||0;const suffix=raw.replace(/[0-9.]/g,"");let start=null;const duration=900;const tick=(time)=>{start??=time;const progress=Math.min((time-start)/duration,1);el.textContent=progress<1?Math.floor(end*progress)+suffix:raw;if(progress<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)});

  /* Counter Section End */
  /* Projects Filter Section Start: show/hide project cards by category */
  document.querySelectorAll(".Projects-filter").forEach((wrap)=>{wrap.addEventListener("click",(event)=>{const btn=event.target.closest("button[data-filter]");if(!btn)return;wrap.querySelectorAll("button").forEach((b)=>b.classList.remove("active"));btn.classList.add("active");const filter=btn.dataset.filter;wrap.parentElement.querySelectorAll(".filter-item").forEach((item)=>{item.style.display=filter==="all"||item.dataset.category===filter?"":"none"})})});

  /* Projects Filter Section End */
  /* Hero Background Slider Section Start: rotate background images */
  document.querySelectorAll("[data-hero-bg-slider]").forEach((hero)=>{
    const images=hero.dataset.heroBgSlider.split(",").map((src)=>src.trim()).filter(Boolean);
    if(images.length<2)return;
    const slides=images.map((src,index)=>{
      const slide=document.createElement("span");
      slide.className=`hero-bg-slide${index===0?" is-active":""}`;
      slide.style.backgroundImage=`url("${src}")`;
      slide.setAttribute("aria-hidden","true");
      hero.prepend(slide);
      return slide;
    });
    let active=0;
    window.setInterval(()=>{
      slides[active].classList.remove("is-active");
      active=(active+1)%slides.length;
      slides[active].classList.add("is-active");
    },5000);
  });

  /* Hero Background Slider Section End */
  /* Home 02 Hero Section Start: rotate background image and copy together */
  document.querySelectorAll("[data-home02-hero-slider]").forEach((hero)=>{
    const images=(hero.dataset.home02HeroImages||"").split("|").map((src)=>src.trim()).filter(Boolean);
    const titles=(hero.dataset.home02HeroTitles||"").split(";").map((text)=>text.trim());
    const texts=(hero.dataset.home02HeroTexts||"").split(";").map((text)=>text.trim());
    const heading=hero.querySelector(".home-02-hero-copy h1");
    const paragraph=hero.querySelector(".home-02-hero-copy p");
    if(images.length<2||!heading||!paragraph)return;
    const slides=images.map((src,index)=>{
      const slide=document.createElement("span");
      slide.className=`home-02-bg-slide${index===0?" is-active":""}`;
      slide.style.backgroundImage=`url("${src}")`;
      slide.setAttribute("aria-hidden","true");
      hero.prepend(slide);
      return slide;
    });
    let active=0;
    const setCopy=(index)=>{
      const title=titles[index]||titles[0]||heading.textContent.trim();
      const [main,accent]=title.split("||");
      heading.innerHTML=accent?`${main} <span>${accent}</span>`:main;
      paragraph.textContent=texts[index]||texts[0]||paragraph.textContent;
    };
    window.setInterval(()=>{
      slides[active].classList.remove("is-active");
      active=(active+1)%slides.length;
      slides[active].classList.add("is-active");
      hero.classList.add("is-copy-changing");
      window.setTimeout(()=>{
        setCopy(active);
        hero.classList.remove("is-copy-changing");
      },260);
    },5200);
  });

  /* Home 02 Hero Section End */
  /* Home 06 Hero Image Slider Section Start: auto-change hero images with arrows */
  document.querySelectorAll("[data-home06-hero-slider]").forEach((hero)=>{
    const slides=[...hero.querySelectorAll(".home-06-slider-bg span")];
    const prev=hero.querySelector("[data-home06-slider-prev]");
    const next=hero.querySelector("[data-home06-slider-next]");
    if(slides.length<2)return;
    let active=Math.max(0,slides.findIndex((slide)=>slide.classList.contains("is-active")));
    let timer;
    const setActive=(index)=>{
      slides[active].classList.remove("is-active");
      active=(index+slides.length)%slides.length;
      slides[active].classList.add("is-active");
    };
    const start=()=>{
      window.clearInterval(timer);
      timer=window.setInterval(()=>setActive(active+1),5200);
    };
    prev&&prev.addEventListener("click",()=>{setActive(active-1);start()});
    next&&next.addEventListener("click",()=>{setActive(active+1);start()});
    start();
  });

  /* Home 06 Hero Image Slider Section End */
  /* Hover Showcase Section Start: switch showcase image on hover/focus */
  document.querySelectorAll("[data-hover-showcase]").forEach((showcase)=>{
    const slides=[...showcase.querySelectorAll(".hover-showcase-bg span")];
    const items=[...showcase.querySelectorAll("[data-hover-showcase-item]")];
    const setActive=(index)=>{
      slides.forEach((slide,i)=>slide.classList.toggle("is-active",i===index));
      items.forEach((item,i)=>item.classList.toggle("is-active",i===index));
    };
    items.forEach((item)=>{
      const index=Number(item.dataset.hoverShowcaseIndex)||0;
      item.addEventListener("mouseenter",()=>setActive(index));
      item.addEventListener("focus",()=>setActive(index));
    });
  });

  /* Hover Showcase Section End */
  /* Team Slider Section Start: continuous smooth auto slide */
  document.querySelectorAll(".team-slider-track").forEach((track)=>{
    if(track.dataset.smoothReady)return;
    const originalSlides=[...track.children];
    if(!originalSlides.length)return;
    track.dataset.smoothReady="true";
    const appendCloneSet=()=>{
      originalSlides.forEach((slide)=>{
        const clone=slide.cloneNode(true);
        clone.setAttribute("aria-hidden","true");
        clone.dataset.teamClone="true";
        track.appendChild(clone);
      });
    };
    const setLoopDistance=()=>{
      const gap=parseFloat(getComputedStyle(track).gap)||0;
      const distance=originalSlides.reduce((total,slide)=>total+slide.getBoundingClientRect().width+gap,0);
      track.style.setProperty("--team-loop-distance", `${distance}px`);
      const neededWidth=distance+(window.innerWidth*2);
      let guard=0;
      while(track.scrollWidth<neededWidth&&guard<6){
        appendCloneSet();
        guard+=1;
      }
    };
    setLoopDistance();
    window.addEventListener("resize",setLoopDistance,{passive:true});
  });

  /* Team Slider Section End */
  /* Testimonial Slider Section Start: single and pair testimonial sliders */
	  document.querySelectorAll("[data-testimonial-slider]").forEach((slider)=>{
	    let slides=[...slider.querySelectorAll(".testimonial-slide")];
    const dots=[...slider.querySelectorAll("[data-testimonial-dot]")];
    if(slides.length<2)return;
    let active=0;
    let timer;
    const isPairSlider=slider.classList.contains("testimonial-pair-slider");
    const track=isPairSlider?slider.querySelector(".testimonial-track"):null;
    const originalSlideCount=slides.length;
    if(isPairSlider&&track&&!track.dataset.loopReady){
      slides.slice(0,2).forEach((slide)=>{
        const clone=slide.cloneNode(true);
        clone.setAttribute("aria-hidden","true");
        clone.classList.remove("is-active");
        clone.dataset.testimonialClone="true";
        track.appendChild(clone);
      });
      track.dataset.loopReady="true";
      slides=[...track.querySelectorAll(".testimonial-slide")];
    }
    const getVisible=()=>isPairSlider&&window.innerWidth>=768?2:1;
    const setTrackTransition=(enabled)=>{
      if(track)track.style.transition=enabled?"":"none";
    };
    const setActive=(index,instant=false)=>{
      const visible=getVisible();
      const max=Math.max(originalSlideCount-visible,0);
      const step=isPairSlider&&visible>1?visible:1;
      active=Math.max(0,Math.min(index,originalSlideCount));
      if(index<originalSlideCount)active=Math.min(active,max);
      if(isPairSlider&&visible>1&&active<originalSlideCount)active=active-active%step;
      if(isPairSlider){
        const gap=parseFloat(getComputedStyle(track).gap)||0;
        const offset=slides[0]?(slides[0].offsetWidth+gap)*active:0;
        setTrackTransition(!instant);
        track.style.transform=`translateX(${-offset}px)`;
        slides.forEach((slide,i)=>slide.classList.toggle("is-active",i>=active&&i<active+visible));
      }else{
        slides.forEach((slide,i)=>slide.classList.toggle("is-active",i===active));
      }
      const dotActive=active>=originalSlideCount?0:active;
      dots.forEach((dot)=>dot.classList.toggle("is-active",(Number(dot.dataset.testimonialDot)||0)===dotActive));
    };
    const start=()=>{
      window.clearInterval(timer);
      timer=window.setInterval(()=>{
        const visible=getVisible();
        const step=isPairSlider&&visible>1?visible:1;
        const max=Math.max(originalSlideCount-visible,0);
        const next=isPairSlider
          ? (active+step>max?originalSlideCount:active+step)
          : (active>=max?0:active+1);
        setActive(next);
        if(isPairSlider&&next===originalSlideCount){
          window.setTimeout(()=>{
            setActive(0,true);
            requestAnimationFrame(()=>setTrackTransition(true));
          },620);
        }
      },4500);
    };
    dots.forEach((dot)=>{
      dot.addEventListener("click",()=>{
        setActive(Number(dot.dataset.testimonialDot)||0);
        start();
      });
    });
    if(isPairSlider)window.addEventListener("resize",()=>setActive(active),{passive:true});
	    setActive(0);
	    start();
	  });

  /* Testimonial Slider Section End */
  /* Home 04 Project Slider Section Start: infinite project carousel */
	  document.querySelectorAll("[data-project-slider]").forEach((slider)=>{
	    const track=slider.querySelector(".home-04-project-strip");
	    const section=slider.closest(".home-04-featured-projects");
	    const prev=section&&section.querySelector("[data-project-prev]");
	    const next=section&&section.querySelector("[data-project-next]");
	    if(!track||track.children.length<2)return;
	    let timer;
	    let busy=false;
	    const distance=()=>{
	      const first=track.children[0];
	      const gap=parseFloat(getComputedStyle(track).gap)||0;
	      return first?first.getBoundingClientRect().width+gap:0;
	    };
	    const reset=()=>{
	      track.style.transition="none";
	      track.style.transform="translateX(0)";
	    };
	    const moveNext=()=>{
	      if(busy)return;
	      const amount=distance();
	      if(!amount)return;
	      busy=true;
	      track.style.transition="transform .7s ease";
	      track.style.transform=`translateX(${-amount}px)`;
	      const done=(event)=>{
	        if(event.target!==track)return;
	        track.appendChild(track.children[0]);
	        reset();
	        busy=false;
	        track.removeEventListener("transitionend",done);
	      };
	      track.addEventListener("transitionend",done);
	    };
	    const movePrev=()=>{
	      if(busy)return;
	      const amount=distance();
	      if(!amount)return;
	      busy=true;
	      reset();
	      track.prepend(track.children[track.children.length-1]);
	      track.style.transform=`translateX(${-amount}px)`;
	      requestAnimationFrame(()=>{
	        track.style.transition="transform .7s ease";
	        track.style.transform="translateX(0)";
	      });
	      const done=(event)=>{
	        if(event.target!==track)return;
	        busy=false;
	        track.removeEventListener("transitionend",done);
	      };
	      track.addEventListener("transitionend",done);
	    };
	    const start=()=>{
	      window.clearInterval(timer);
	      timer=window.setInterval(moveNext,3200);
	    };
	    const stop=()=>window.clearInterval(timer);
	    next&&next.addEventListener("click",()=>{moveNext();start()});
	    prev&&prev.addEventListener("click",()=>{movePrev();start()});
	    slider.addEventListener("mouseenter",stop);
	    slider.addEventListener("mouseleave",start);
	    window.addEventListener("resize",reset,{passive:true});
	    reset();
	    start();
	  });

  /* Home 04 Project Slider Section End */
  /* Home 05 Gallery Section Start: auto-moving furniture gallery */
	  document.querySelectorAll("[data-home05-gallery]").forEach((gallery)=>{
	    const track=gallery.querySelector(".home-05-gallery-track");
	    const slides=track?[...track.querySelectorAll(".home-05-gallery-card")]:[];
	    const current=gallery.querySelector("[data-home05-gallery-current]");
	    if(slides.length<2)return;
	    let active=0,busy=false;
	    const distance=()=>{
	      const first=track.children[0];
	      const gap=parseFloat(getComputedStyle(track).gap)||0;
	      return first?first.getBoundingClientRect().width+gap:0;
	    };
	    const reset=()=>{
	      track.style.transition="none";
	      track.style.transform="translateX(0)";
	    };
	    const move=()=>{
	      if(busy)return;
	      const amount=distance();
	      if(!amount)return;
	      busy=true;
	      track.style.transition="transform .75s ease";
	      track.style.transform=`translateX(${-amount}px)`;
	      const done=(event)=>{
	        if(event.target!==track)return;
	        track.appendChild(track.children[0]);
	        reset();
	        busy=false;
	        active=(active+1)%slides.length;
	        if(current)current.textContent=String(active+1).padStart(2,"0");
	        track.removeEventListener("transitionend",done);
	      };
	      track.addEventListener("transitionend",done);
	    };
	    reset();
	    window.addEventListener("resize",reset,{passive:true});
	    window.setInterval(move,3600);
	  });

  /* Home 05 Gallery Section End */
  /* Form Section Start: prevent demo forms from submitting and show validation state */
	  document.querySelectorAll("form").forEach((form)=>form.addEventListener("submit",(event)=>{event.preventDefault();form.classList.add("was-validated")}));
  /* Form Section End */
	})();
