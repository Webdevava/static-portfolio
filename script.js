const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll("nav a");

const resetLinks = () => {
  navlinks.forEach((link) => link.classList.remove("active"));
};

const handleScroll = () => {
  const { scrollY } = window;

  sections.forEach((section) => {
    const { id, offsetTop, clientHeight } = section;
    const offset = offsetTop - 1;

    if (scrollY >= offset && scrollY < offset + clientHeight) {
      resetLinks();
      const link = document.querySelector(`nav a[data-scroll="${id}"]`);
      if (link) {
        link.classList.add("active");
      }
    }
  });
};

document.addEventListener("scroll", handleScroll);
