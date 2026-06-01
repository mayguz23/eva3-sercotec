function Testimonial({ testimonios }) {
  return (
    <div
      id="carouselTestimonios"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {testimonios.map((post, index) => (
          <div
            key={post.id}
            className={`carousel-item ${
              index === 0 ? "active" : ""
            }`}
          >
            <div className="text-center p-4">
              <h4>
                {post.title.rendered.replace(
                  "TESTIMONIO ",
                  ""
                )}
              </h4>

              <div
                dangerouslySetInnerHTML={{
                  __html: post.excerpt.rendered,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselTestimonios"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselTestimonios"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default Testimonial;