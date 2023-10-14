function animateCountUp(targetElementId, endValue) {
  let current = 0;
  const element = document.getElementById(targetElementId);
  const duration = 2000; // Animation duration in milliseconds

  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    current = Math.min(progress / duration, 1) * endValue;
    element.textContent = Math.floor(current);

    if (progress < duration) {
      requestAnimationFrame(step);
    }
  };

  let start = null;
  requestAnimationFrame(step);
}

// Check when the section comes into the viewport
const section5 = document.querySelector(".section5");

const section5Observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Animate the numbers
      animateCountUp("satisfiedClients", 92);
      animateCountUp("totalProjects", 85);
      animateCountUp("workCompleted1", 67);
      animateCountUp("workCompleted2", 85);
      section5Observer.unobserve(section5); // Stop observing once animation is triggered
    }
  });
});

section5Observer.observe(section5);
