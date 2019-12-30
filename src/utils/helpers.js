const scrollToCoord = top => {
    // invoke scroll, with behavior smooth (not supported in Safari as of writing)
    window.scroll({
      behavior: 'smooth', // delete this line if you don’t want smooth scrolling
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
  
  export { scroll }