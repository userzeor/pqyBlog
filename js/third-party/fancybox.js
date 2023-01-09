document.addEventListener("page:loaded", () => {
  /**
   * Wrap images with fancybox.
   */
  document
    .querySelectorAll(".post-body :not(a) > img, .post-body > img")
    .forEach((element) => {
      const $image = $(element);
      const imageLink = $image.attr("data-src") || $image.attr("src");
      const $imageWrapLink = $image
        .wrap(
          `<a class="fancybox fancybox.image" href="${imageLink}" itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>`
        )
        .parent("a");
      if ($image.is(".post-gallery img")) {
        $imageWrapLink.attr("data-fancybox", "gallery").attr("rel", "gallery");
      } else if ($image.is(".group-picture img")) {
        $imageWrapLink.attr("data-fancybox", "group").attr("rel", "group");
      } else {
        $imageWrapLink.attr("data-fancybox", "default").attr("rel", "default");
      }

      const imageTitle = $image.attr("title") || $image.attr("alt");
      if (imageTitle) {
        // Do not append image-caption if pandoc has already created a figcaption
        if (!$imageWrapLink.next("figcaption").length) {
          $imageWrapLink.append(`<p class="image-caption">${imageTitle}</p>`);
        }
        // Make sure img title tag will show correctly in fancybox
        $imageWrapLink
          .attr("title", imageTitle)
          .attr("data-caption", imageTitle);
      }
    });

  // $.fancybox.defaults.hash = false;
  // $(".fancybox").fancybox({
  //   loop: true,
  //   helpers: {
  //     overlay: {
  //       locked: false,
  //     },
  //   },
  // });

  $(".fancybox").bind('[data-fancybox="gallery"]', {
    Toolbar: {
      display: [
        {
          id: "counter",
          position: "center",
        },
        "zoom",
        "slideshow",
        "fullscreen",
        "thumbs",
        "close",
      ],
    },

    on: {
      initLayout: (fancybox) => {
        // Create elements
        // ===

        // Create left column
        const $leftCol = document.createElement("div");
        $leftCol.classList.add("fancybox__leftCol");

        while (fancybox.$container.firstChild) {
          $leftCol.appendChild(fancybox.$container.firstChild);
        }

        // Create right column
        const $rightCol = document.createElement("div");
        $rightCol.classList.add("fancybox__rightCol");

        $rightCol.innerHTML =
          '<p class="mb-2">You can place any content here, such as ads, comments or map</p>';

        // Create info-box
        const $info = document.createElement("div");
        $rightCol.appendChild($info);
        fancybox.$info = $info;

        // Add elements to DOM
        fancybox.$container.appendChild(fancybox.$backdrop);

        fancybox.$container.appendChild($leftCol);
        fancybox.$container.appendChild($rightCol);

        fancybox.$leftCol = $leftCol;
        fancybox.$rightCol = $rightCol;
      },
      "Carousel.ready Carousel.change": (fancybox, carousel, slideIndex) => {
        // Update info-box
        // ===

        // Get index of the current gallery item
        slideIndex =
          slideIndex === undefined ? carousel.options.initialPage : slideIndex;

        // Get link related to current item
        const $trigger = fancybox.items[slideIndex].$trigger;

        // Get data from `data-info` attribute
        const data = $trigger.dataset.info || "";

        // Update info
        fancybox.$info.innerHTML = `<p>${data}</p>`;
      },
    },
  });
});
