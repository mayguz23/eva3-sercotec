import { useEffect, useState } from "react";
import ServiceCard from "./components/ServiceCard";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Testimonial from "./components/Testimonial";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost/wordpress/wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);
  const servicios = posts.filter((post) =>
  post.title.rendered.startsWith("SERVICIO")
);

const testimonios = posts.filter((post) =>
  post.title.rendered.startsWith("TESTIMONIO")
);

const faqs = posts.filter((post) =>
  post.title.rendered.startsWith("FAQ")
);

return (
  <>
    <Navbar />

    <Hero />

    <About />

    <div style={{ padding: "20px" }}>
      <h2>Servicios</h2>

      {servicios.map((post) => (
        <ServiceCard
          key={post.id}
          title={post.title.rendered}
          description={post.excerpt.rendered}
        />
      ))}
    </div>

<div style={{ padding: "20px" }}>
  <h2>Testimonios</h2>

  <Testimonial testimonios={testimonios} />
</div>

<div style={{ padding: "20px" }}>
  <h2>Preguntas Frecuentes</h2>

  {faqs.map((post) => (
    <div key={post.id}>
      <h3>
        {post.title.rendered
          .replace("FAQ - ", "")
          .replace("Preguntas frecuentes - ", "")}
      </h3>

      <div
        dangerouslySetInnerHTML={{
          __html: post.excerpt.rendered,
        }}
      />
    </div>
  ))}
</div>

    <ContactForm />

    <Footer />
  </>
);
}

export default App;