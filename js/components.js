class SiteHeader extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Common/header.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;
  }
}
customElements.define("site-header", SiteHeader);

class SiteBanner extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/hero.html").then((r) => r.text());
    this.innerHTML = html;
  }
}
customElements.define("site-banner", SiteBanner);

class SiteAbout extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Common/about.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;

    const showAbout = this.getAttribute("show-about");

    if (showAbout !== "true") {
      const aboutSection = this.querySelector(".about-us-info-div");
      if (aboutSection) aboutSection.remove();
    }
  }
}
customElements.define("site-about", SiteAbout);

class SiteBreadCrumb extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Common/banner-breadcrumb.html").then(
      (r) => r.text(),
    );
    this.innerHTML = html;

    const title = this.getAttribute("title");

    this.querySelectorAll(".page-title").forEach((el) => {
      el.textContent = title;
    });
  }
}
customElements.define("site-breadcrumb", SiteBreadCrumb);

class SiteOurOfferings extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Services/our-offerings.html").then(
      (r) => r.text(),
    );
    this.innerHTML = html;
  }
}
customElements.define("site-our-offerings", SiteOurOfferings);

class SiteOurHotels extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Services/hotel-section.html").then(
      (r) => r.text(),
    );
    this.innerHTML = html;
  }
}
customElements.define("site-our-hotels", SiteOurHotels);

class SiteRooms extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/rooms.html").then((r) => r.text());
    this.innerHTML = html;
  }
}
customElements.define("site-rooms", SiteRooms);

class SiteBooking extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/booking.html").then((r) => r.text());
    this.innerHTML = html;
  }
}
customElements.define("site-booking", SiteBooking);

class SiteRoomBook extends HTMLElement {
  async connectedCallback() {
    const html = await fetch(
      "components/Hotel Details/room-booking-form.html",
    ).then((r) => r.text());
    this.innerHTML = html;
  }
}
customElements.define("site-room-book", SiteRoomBook);

class SiteServiceBook extends HTMLElement {
  async connectedCallback() {
    const html = await fetch(
      "components/Service Details/service-book.html",
    ).then((r) => r.text());
    this.innerHTML = html;
  }
}
customElements.define("site-service-book", SiteServiceBook);

class SiteOffers extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/exclusive-deals.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;
  }
}
customElements.define("site-offers", SiteOffers);

class SiteCounter extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Common/counter.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;
  }
}
customElements.define("site-counter", SiteCounter);

class SiteTestimonials extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Common/testimonial.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;
  }
}
customElements.define("site-testimonial", SiteTestimonials);

class SiteMarquee extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/marquee.html").then((r) => r.text());
    this.innerHTML = html;
  }
}
customElements.define("site-marquee", SiteMarquee);

class SiteBlogs extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/blogs.html").then((r) => r.text());
    this.innerHTML = html;
  }
}
customElements.define("site-blogs", SiteBlogs);

class SiteInstagram extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Common/instagram.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;

    const showInstaTitleSection = this.getAttribute("show-insta-title-section");

    if (showInstaTitleSection !== "true") {
      const instaTitleSection = this.querySelector(".insta-title-section");
      if (instaTitleSection) instaTitleSection.remove();
    }
  }
}
customElements.define("site-instagram", SiteInstagram);

class SiteContactForm extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Contact/contact-form.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;
  }
}
customElements.define("site-contact-form", SiteContactForm);

class SiteMap extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Contact/map.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;
  }
}
customElements.define("site-map", SiteMap);

class SiteFooter extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Common/footer.html").then((r) =>
      r.text(),
    );
    this.outerHTML = html;
  }
}
customElements.define("site-footer", SiteFooter);
