# GSAP Animations Reference

## Overview

All animations in this project use GSAP (GreenSock Animation Platform) for smooth, professional motion effects.

## Installed Plugins

- `gsap` - Core animation library
- `ScrollTrigger` - Scroll-based animations

## Animation Types by Section

### 1. Hero Section (`Hero.jsx`)

**Background Animation:**
```javascript
gsap.to(heroRef.current, {
  backgroundPosition: '100% 100%',
  duration: 20,
  repeat: -1,
  yoyo: true,
  ease: 'none',
});
```
- Infinite animated gradient background
- 20-second duration
- Yoyo effect for back-and-forth motion

**Text Animations:**
```javascript
const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

tl.fromTo(titleRef.current, 
  { y: 50, opacity: 0 }, 
  { y: 0, opacity: 1, duration: 1 }
)
.fromTo(subtitleRef.current, 
  { y: 30, opacity: 0 }, 
  { y: 0, opacity: 1, duration: 0.8 }, 
  '-=0.5'
);
```
- Sequential fade-up animations
- Overlapping timing for smooth flow
- Power3.out easing for natural deceleration

### 2. About Section (`About.jsx`)

**Slide-in Animations:**
```javascript
gsap.fromTo(imageRef.current,
  { x: -100, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none none',
    },
  }
);
```
- Image slides in from left
- Text slides in from right
- Triggered when section enters viewport
- `start: 'top 80%'` - Animation starts when section top reaches 80% viewport height
- `toggleActions` - Play once on enter

### 3. Services Section (`Services.jsx`)

**Stagger Animation:**
```javascript
gsap.fromTo(cardsRef.current,
  { y: 50, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.6,
    stagger: 0.1,
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top 70%',
      end: 'top 30%',
      toggleActions: 'play none none none',
    },
  }
);
```
- Cards animate in sequence
- 0.1 second delay between each card
- Fade-up effect for each service card
- Creates cascading entrance effect

### 4. Why Us Section (`WhyUs.jsx`)

**Scale-in Animation:**
```javascript
gsap.fromTo(itemsRef.current,
  { scale: 0.8, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 0.6,
    stagger: 0.15,
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top 70%',
      end: 'top 30%',
      toggleActions: 'play none none none',
    },
  }
);
```
- Items scale from 80% to 100%
- Staggered for sequential appearance
- Zoom + fade effect

### 5. Contact Section (`Contact.jsx`)

**Fade-in Animations:**
```javascript
gsap.fromTo(formRef.current,
  { y: 50, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.8,
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top 70%',
      end: 'top 40%',
      toggleActions: 'play none none none',
    },
  }
);
```
- Form and info sections fade in separately
- Slight delay between form and info
- Smooth entrance effect

## ScrollTrigger Configuration

### Common Properties

**trigger:** Element that triggers the animation
```javascript
trigger: sectionRef.current
```

**start:** When animation starts
```javascript
start: 'top 80%'  // Section top reaches 80% of viewport
```

**end:** When animation ends
```javascript
end: 'top 50%'    // Section top reaches 50% of viewport
```

**toggleActions:** What happens on scroll events
```javascript
toggleActions: 'play none none none'
// onEnter onLeave onEnterBack onLeaveBack
```

## Customization Guide

### Change Animation Speed

Modify `duration` property:
```javascript
duration: 1,      // 1 second (default)
duration: 0.5,    // Faster
duration: 2,      // Slower
```

### Change Stagger Delay

Modify `stagger` property:
```javascript
stagger: 0.1,     // 100ms between elements
stagger: 0.2,     // 200ms between elements
stagger: 0.05,    // 50ms between elements
```

### Change Easing

Common easing options:
```javascript
ease: 'power3.out',     // Smooth deceleration (default)
ease: 'power2.inOut',   // Acceleration + deceleration
ease: 'elastic.out',    // Bouncy effect
ease: 'back.out',       // Slight overshoot
ease: 'none',           // Linear
```

### Change Scroll Trigger Point

Adjust when animations start:
```javascript
start: 'top 90%',    // Earlier (more of page needed to scroll)
start: 'top 70%',    // Later (less scroll needed)
start: 'top center', // When section center reaches viewport center
start: 'top top',    // When section top reaches viewport top
```

### Add Scrub Effect (Animation tied to scroll)

```javascript
scrollTrigger: {
  trigger: element,
  start: 'top bottom',
  end: 'bottom top',
  scrub: true,        // Animation progress tied to scroll
}
```

## Animation Cleanup

All animations use GSAP Context for proper cleanup:
```javascript
useEffect(() => {
  const ctx = gsap.context(() => {
    // Animations here
  }, sectionRef);

  return () => ctx.revert(); // Cleanup on unmount
}, []);
```

This prevents memory leaks and ensures animations are properly removed when components unmount.

## Best Practices

1. **Use refs** for elements you want to animate
2. **Register plugins** at the top of files
   ```javascript
   gsap.registerPlugin(ScrollTrigger);
   ```
3. **Set defaults** in timeline for consistency
   ```javascript
   const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
   ```
4. **Use contexts** for cleanup
5. **Test on different devices** for smooth performance
6. **Keep animations subtle** for professional feel
7. **Stagger sparingly** to avoid long wait times

## Performance Tips

- Animate `transform` and `opacity` for best performance
- Avoid animating `width`, `height`, `top`, `left`
- Use `will-change` CSS for complex animations
- Keep duration reasonable (0.3s - 1.5s typically)
- Limit stagger on many elements

## Resources

- GSAP Docs: https://greensock.com/docs/
- ScrollTrigger Docs: https://greensock.com/docs/v3/Plugins/ScrollTrigger
- Easing Visualizer: https://greensock.com/ease-visualizer/
- GSAP Cheat Sheet: https://greensock.com/cheatsheet/

## Common Issues

### Animations not triggering on scroll
- Ensure ScrollTrigger is registered
- Check trigger element exists
- Verify start/end values

### Animations running multiple times
- Use `toggleActions: 'play none none none'`
- Ensure cleanup with `ctx.revert()`

### Janky animations
- Reduce number of animated elements
- Simplify animation properties
- Use GPU-accelerated properties (transform, opacity)
