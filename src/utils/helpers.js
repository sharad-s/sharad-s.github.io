import scrollToElement from "scroll-to-element"


const scrollToCoord = top => {
  // invoke scroll, with behavior smooth (not supported in Safari as of writing)
  window.scroll({
    behavior: "smooth", // delete this line if you don’t want smooth scrolling
    top,
  })
}

const scrollToHref = href => {
  // destination element to scroll to
  const destinationElement = document.querySelector(href)

  if (destinationElement) {
    scrollToCoord(destinationElement.offsetTop)
  }
}

const scroll = {
  toCoord: scrollToCoord,
  toHref: scrollToHref,
}

const handleLinkClick = (e, target) => {
  // NODE-SAFE CODE
  // Gatsby uses Node to generate our pages.
  // Node doesn't know what a window is.
  // Be sure to wrap any of your browser interactions
  // in some sort of node-safe if statement like this:

  if (typeof window !== "undefined") {
    // Are we on the home page?
    // If so, let's scroll to the desired block,
    // which was passed in as an onClick method on our <Link />.
    // If an event was also passed, we'll preventDefault()
    if (window.location.pathname === "/") {
      if (e) e.preventDefault()
      scrollToElement(target, {
        // offset: -50, // Offset a fixed header if you please
        duration: 800,
      })
    }
  }
}

export { scroll, handleLinkClick }
