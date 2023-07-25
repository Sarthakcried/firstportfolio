const skillIcons = document.querySelectorAll('.skills-icons img');

skillIcons.forEach((icon) => {
  icon.addEventListener('mouseenter', () => {
    const skillName = icon.getAttribute('title');
    icon.insertAdjacentHTML('afterend', `<p class="skill-name">${skillName}</p>`);
  });

  icon.addEventListener('mouseleave', () => {
    const skillName = icon.nextElementSibling;
    if (skillName.classList.contains('skill-name')) {
      skillName.remove();
    }
  });
});
