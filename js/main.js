const layout = window.innerWidth > 900 ? 250 : "auto";

$("#my_nanogallery2").nanogallery2({
  thumbnailHeight: layout,
  thumbnailWidth: 250,
  galleryMosaic: [
    { w: 5, h: 3, c: 2, r: 1 },
    { w: 2, h: 2, c: 1, r: 2 },
    { w: 2, h: 2, c: 7, r: 2 },
    { w: 2, h: 2, c: 2, r: 4 },
    { w: 3, h: 4, c: 4, r: 4 },
    { w: 3, h: 4, c: 7, r: 4 },
    { w: 2, h: 2, c: 10, r: 5 },
    { w: 4, h: 2, c: 11, r: 6 },
  ],
  galleryTheme: {
    thumbnail: { borderColor: "#fff" },
  },
});
