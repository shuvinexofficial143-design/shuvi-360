import { services } from "@/lib/services";
export default function Home() {
  return <div className="shell"><section className="hero"><div>
    <div className="eyebrow">Marketing · Creativity · Technology</div>
    <h1>Your vision.<br/>Our technology.<br/><span className="text-[#8ab4ff]">Real growth.</span></h1>
    <p>Marketing, creativity and technology solutions designed to help you grow. Working with businesses and professionals in Indore.</p>
    <a className="button" href="#services">Explore our services</a>
  </div><div className="visual" aria-hidden="true"><strong>360°</strong><span>STRATEGY · DESIGN · TECHNOLOGY</span></div></section>
  <section className="section" id="services"><div className="eyebrow">Our capabilities</div><h2>Nine ways to move forward.</h2><div className="services">{services.map((service,index)=><article key={service.slug} className="service"><small>{String(index+1).padStart(2,"0")}</small><h3>{service.name}</h3><p>{service.description}</p></article>)}</div></section></div>;
}
