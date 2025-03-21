//CALL 'package' USING package("package_name", "package_type", "message if applicable");
$(document).ready(function() {
  $('.tags').each(function() { // Iterate through each container
    const scrollableElement = $(this);
    let isMouseDown = false;
    let startX;
    let scrollLeft;

    scrollableElement.on('mousedown', (e) => {
      isMouseDown = true;
      startX = e.pageX - scrollableElement.offset().left;
      scrollLeft = scrollableElement.scrollLeft();
      scrollableElement.css('cursor', 'grabbing');
    });

    $(document).on('mouseleave mouseup', () => {
      isMouseDown = false;
      $('.scrollable-container').css('cursor', 'grab'); // Reset all containers
    });

    scrollableElement.on('mousemove', (e) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - scrollableElement.offset().left;
      const walk = (x - startX) * 2;
      scrollableElement.scrollLeft(scrollLeft - walk);
    });

      scrollableElement.on('wheel', (e) => {
          e.preventDefault();
          scrollableElement.scrollLeft(scrollableElement.scrollLeft() + e.originalEvent.deltaY);
      });

    scrollableElement.css('cursor', 'grab');
  });
  
  
  document.querySelector(".filters_dropdown").addEventListener('click', function(event) {
    if (document.querySelector(".filters").classList.contains("filters_active")){
        document.querySelector(".filters").classList.remove("filters_active");
    } else {
        document.querySelector(".filters").classList.add("filters_active");
    }
  });
});
