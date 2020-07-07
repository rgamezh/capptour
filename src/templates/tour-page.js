import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

const TourComponent = ({data}) => {

	const html = data.markdownRemark.html
	const { frontmatter } = data.markdownRemark
	const title = data.markdownRemark.frontmatter.title
	const img = data.markdownRemark.frontmatter.image
	const image = data.acuaticos
	const descuento = data.descuento
	const cancun = data.cancun
	const tulum = data.tulum
	const snorkel = data.snorkel
	const vacacionales = data.vacacionales
 
	return(
		<Layout>
			{console.log(html)}
			<section>
				<div className="container"
					style={{
						padding: '3rem',
						backgroundColor: '#f1f1f1',
						boxShadow: '0 10px 21px rgba(0, 0, 0, 0.16)'
					}}
				>
					<div className="columns">
						<div className="column is-two-thirds">
							<Img style={{borderRadius: '30px'}} fluid={img.childImageSharp.fluid} />
							<h3 style={{marginTop: '3rem', color: '#462a6c', width: '80%', marginLeft: 'auto', marginRight: 'auto'}} className="has-text-centered title tour-page-description-title">
								{title}
							</h3>
							<div className="tour-page-description" style={{color: '#504e4e'}}>
								<p>
									Salida de Cancún en diferentes horarios la capacidad máxima es de 15 personas. El tour tiene una duración de 6 horas, se rodea la Isla, se hace una breve visita por fuera del parque Garrafón para estar en contacto con las especies que habitan esta área. Posteriormente se visita la playa punta norte, catalogada como una de las mejores playas en el mundo.
								</p>
								<div className="columns" style={{marginTop: '2.1rem'}}>
									<div className="column is-one-third has-text-centered">
										<span>
										  <i className=" is-purple far fa-7x fa-clock"></i>
										</span>
										<p className="is-purple" style={{fontSize: '26px', fontWeight: 'bold', margin: '1rem 0'}}>
											Horarios
										</p>
										<p>
											Lorem ipsum dolor sit amet vum
										</p>
									</div>
									<div className="column is-one-third has-text-centered">
										<span>
										  <i className="is-purple fas fa-7x fa-child"></i>
										</span>
										<p className="is-purple" style={{fontSize: '26px', fontWeight: 'bold', margin: '1rem 0'}}>
											Menores
										</p>
										<p>
											Lorem ipsum dolor sit amet vum
										</p>
									</div>
									<div className="column is-one-third has-text-centered">
										<span>
										  <i className="is-purple fas fa-7x fa-child"></i>
										  <i className="is-purple fas fa-7x fa-female"></i>
										</span>
										<p className="is-purple" style={{fontSize: '26px', fontWeight: 'bold', margin: '1rem 0'}}>
											Niños
										</p>
										<p>
											Lorem ipsum dolor sit amet vum
										</p>
									</div>
								</div>
							</div>

							<ul style={{marginTop: '20px'}} className="nav nav-pills nav-fill info" id="pills-tab" role="tablist">
							  <li className="nav-item">
							    <a className="nav-link flex-sm-fill active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">¿Qué incluye?</a>
							  </li>
							  <li className="nav-item">
							    <a className="nav-link flex-sm-fill" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Recomendaciones</a>
							  </li>
							  <li className="nav-item">
							    <a className="nav-link flex-sm-fill" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">información importante</a>
							  </li>
							</ul>

							<div className="tab-content" id="pills-tabContent">
							  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
							  	<ul>
							  		<li>
							  			<p>
							  				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Ut labore et dolore magna aliqua. Quis ipsum suspendisse.
							  			</p>
							  		</li>
							  		<li>
							  			<p>
							  				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Ut labore et dolore magna aliqua. Quis ipsum suspendisse.
							  			</p>
							  		</li>
							  		<li>
							  			<p>
							  				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Ut labore et dolore magna aliqua. Quis ipsum suspendisse.
							  			</p>
							  		</li>
							  		<li>
							  			<p>
							  				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Ut labore et dolore magna aliqua. Quis ipsum suspendisse.
							  			</p>
							  		</li>
							  	</ul>
							  </div>
							  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
							  	...
							  </div>
							  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
							  	...
							  </div>
							</div>	


						</div>
						<div className="column is-one-third">
							<h1 className="title t-yellow is-size-1-desktop has-text-centered" style={{borderBottom: '1px solid #eab92a'}}>
								Experiencia Isla Mujeres
							</h1>
							<div className="columns">
								<div className="column is-half">
									<p className="t-yellow is-size-3 has-text-centered has-text-weight-bold">10%<span className="is-size-7">de descuento</span></p>
									<p className="has-text-centered is-purple is-size-5 has-text-weight-bold">Adultos</p>
									<p className="has-text-centered is-purple is-size-5 has-text-weight-bold">$ 120.00 MXN</p>
								</div>
								<div className="column is-half">
								<p className="t-yellow is-size-3 has-text-centered has-text-weight-bold">0%<span className="is-size-7">de descuento</span></p>
									<p className="has-text-centered is-purple is-size-5 has-text-weight-bold">Niños</p>
									<p className="has-text-centered is-purple is-size-5 has-text-weight-bold">$ 80.00 MXN</p>
								</div>
							</div>
							<form>
								<div className="field">
								  <div className="control">
								    <div style={{width: '100%'}} className="select is-medium">
								      <select style={{width: '100%'}}>
								        <option>Transportación desde:</option>
								        <option>With options</option>
								      </select>
								    </div>
								  </div>
								</div>
								<div className="columns">
									<div className="column is-half-desktop">
										<div className="field">
										  <div className="control">
										    <div className="select is-medium">
										      <select className="full-width">
										        <option>Adultos</option>
										        <option>With options</option>
										      </select>
										    </div>
										  </div>
										</div>
									</div>
									<div className="column is-half-desktop">
										<div className="field">
										  <div className="control">
										    <div className="select is-medium">
										      <select className="full-width">
										        <option>Niños</option>
										        <option>With options</option>
										      </select>
										    </div>
										  </div>
										</div>
									</div>
								</div>
								<div className="field">
								  <div className="control">
								    <div className="is-medium">
								      <input className="input is-medium" type="date" placeholder="Fecha de visita" />
								    </div>
								  </div>
								</div>
								<p className="has-text-centered is-size-3-desktop is-size-4-mobile has-text-weight-bold is-purple">
									Total:
									<span style={{marginLeft: '2rem'}}>$120.00 MXN</span>
								</p>
								<input style={{width: '100%', backgroundColor: '#eab92a', color: '#000', marginTop: '30px'}} type="submit" className="button is-large has-text-white" value="COMPRAR" />
							</form>           
							<div className="terms">
								<h3 className="title has-text-centered">Descuento Por Compra Anticipada</h3>
								<h4 className="title">10% de descuento</h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ipsum obcaecati esse, nesciunt pariatur, nulla ipsa rerum possimus officiis, laboriosam voluptatibus consequatur. At beatae, mollitia eaque cum consequatur necessitatibus dolore.
								</p>
								<h4 className="title">15% de descuento</h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ipsum obcaecati esse, nesciunt pariatur, nulla ipsa rerum possimus officiis, laboriosam voluptatibus consequatur. At beatae, mollitia eaque cum consequatur necessitatibus dolore.
								</p>
								<h4 className="title">20% de descuento</h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ipsum obcaecati esse, nesciunt pariatur, nulla ipsa rerum possimus officiis, laboriosam voluptatibus consequatur. At beatae, mollitia eaque cum consequatur necessitatibus dolore.
								</p>
								<h4 className="title">¿Por qué reservar con nosotros?</h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ipsum obcaecati esse, nesciunt pariatur, nulla ipsa rerum possimus officiis, laboriosam voluptatibus consequatur. At beatae, mollitia eaque cum consequatur necessitatibus dolore.
								</p>
							</div>
						</div>
					</div>
					<h2 className="title t-yellow is-size-1-desktop has-text-centered" style={{borderBottom: '3px solid #eab92a', margin: '2em 0', paddingBottom: '.5em'}}>Tours Relacionados</h2>
					<div className="columns related-tour-column">
						<div className="column is-one-quarter">
							<Link to="/tours/prueba/">
								<div className="related">
									<div 
										style={{
											backgroundImage: `url(${
									          !!cancun.childImageSharp ? cancun.childImageSharp.fluid.src : cancun
									        })`,
										}}
										className="related-tour-image"
									>
									</div>
									<h3 className="related-tour-title">Lorem Ipsum dolor</h3>
									<span className="stars">
										<i className="far fa-star"></i>
										<i className="far fa-star"></i>
										<i className="far fa-star"></i>
										<i className="far fa-star"></i>
										<i className="far fa-star-half"></i>
									</span>
									<p className="related-tour-price">
										<span>desde</span>
										$3,000.00
									</p>
								</div>
							</Link>
						</div>
						<div className="column is-one-quarter">
							<Link to="/tours/prueba/">
								<div className="related">
									<div 
										style={{
											backgroundImage: `url(${
									          !!tulum.childImageSharp ? tulum.childImageSharp.fluid.src : tulum
									        })`,
										}}
										className="related-tour-image"
									>
									</div>
									<h3 className="related-tour-title">Lorem Ipsum dolor</h3>
									<span className="stars">
										<i className="far fa-star"></i>
										<i className="far fa-star"></i>
										<i className="far fa-star"></i>
										<i className="far fa-star"></i>
										<i className="far fa-star-half"></i>
									</span>
									<p className="related-tour-price">
										<span>desde</span>
										$3,000.00
									</p>
								</div>
							</Link>
						</div>
						<div className="column is-one-quarter">
							<Link to="/tours/prueba/">
								<div className="related">
									<div 
										style={{
											backgroundImage: `url(${
									          !!snorkel.childImageSharp ? snorkel.childImageSharp.fluid.src : snorkel
									        })`,
										}}
										className="related-tour-image"
									>
									</div>
									<h3 className="related-tour-title">Lorem Ipsum dolor</h3>
									<span className="stars">
										<i className="far fa-star"></i>
										<i className="far fa-star"></i>
										<i className="far fa-star"></i>
										<i className="far fa-star"></i>
										<i className="far fa-star-half"></i>
									</span>
									<p className="related-tour-price">
										<span>desde</span>
										$3,000.00
									</p>
								</div>
							</Link>
						</div>
						<div className="column is-one-quarter">
							<Link to="/tours/prueba/">
								<div className="related">
									<div 
										style={{
											backgroundImage: `url(${
									          !!vacacionales.childImageSharp ? vacacionales.childImageSharp.fluid.src : vacacionales
									        })`,
										}}
										className="related-tour-image"
									>
									</div>
									<h3 className="related-tour-title">Lorem Ipsum dolor</h3>
									<span className="stars">
										<i className="far fa-star"></i>
										<i className="far fa-star"></i>
										<i className="far fa-star"></i>
										<i className="far fa-star"></i>
										<i className="far fa-star-half"></i>
									</span>
									<p className="related-tour-price">
										<span>desde</span>
										$3,000.00
									</p>
								</div>
							</Link>
						</div>
					</div>
					<div className="columns related-tour-column">
						<div className="column is-one-quarter">
							<Link to="/tours/prueba/">
								<div className="related">
									<div 
										style={{
											backgroundImage: `url(${
									          !!tulum.childImageSharp ? tulum.childImageSharp.fluid.src : tulum
									        })`,
										}}
										className="related-tour-image"
									>
									</div>
									<h3 className="related-tour-title">Lorem Ipsum dolor</h3>
									<span className="stars">
										<i className="far fa-star"></i>
										<i className="far fa-star"></i>
										<i className="far fa-star"></i>
										<i className="far fa-star"></i>
										<i className="far fa-star-half"></i>
									</span>
									<p className="related-tour-price">
										<span>desde</span>
										$3,000.00
									</p>
								</div>
							</Link>
						</div>
						<div className="column is-one-quarter">
							<Link to="/tours/prueba/">
								<div className="related">
									<div 
										style={{
											backgroundImage: `url(${
									          !!snorkel.childImageSharp ? snorkel.childImageSharp.fluid.src : snorkel
									        })`,
										}}
										className="related-tour-image"
									>
									</div>
									<h3 className="related-tour-title">Lorem Ipsum dolor</h3>
									<span className="stars">
										<i className="far fa-star"></i>
										<i className="far fa-star"></i>
										<i className="far fa-star"></i>
										<i className="far fa-star"></i>
										<i className="far fa-star-half"></i>
									</span>
									<p className="related-tour-price">
										<span>desde</span>
										$3,000.00
									</p>
								</div>
							</Link>
						</div>
						<div className="column is-one-quarter">
							<Link to="/tours/prueba/">
								<div className="related">
									<div 
										style={{
											backgroundImage: `url(${
									          !!vacacionales.childImageSharp ? vacacionales.childImageSharp.fluid.src : vacacionales
									        })`,
										}}
										className="related-tour-image"
									>
									</div>
									<h3 className="related-tour-title">Lorem Ipsum dolor</h3>
									<span className="stars">
										<i className="far fa-star"></i>
										<i className="far fa-star"></i>
										<i className="far fa-star"></i>
										<i className="far fa-star"></i>
										<i className="far fa-star-half"></i>
									</span>
									<p className="related-tour-price">
										<span>desde</span>
										$3,000.00
									</p>
								</div>
							</Link>
						</div>
						<div className="column is-one-quarter">
							<Link to="/tours/prueba/">
								<div className="related">
									<div 
										style={{
											backgroundImage: `url(${
									          !!cancun.childImageSharp ? cancun.childImageSharp.fluid.src : cancun
									        })`,
										}}
										className="related-tour-image"
									>
									</div>
									<h3 className="related-tour-title">Lorem Ipsum dolor</h3>
									<span className="stars">
										<i className="far fa-star"></i>
										<i className="far fa-star"></i>
										<i className="far fa-star"></i>
										<i className="far fa-star"></i>
										<i className="far fa-star-half"></i>
									</span>
									<p className="related-tour-price">
										<span>desde</span>
										$3,000.00
									</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</Layout>

	)

}

export default TourComponent

export const tourQuery = graphql`
	query TourPage($id: String!){
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
				image{
					childImageSharp{
						fluid(maxWidth: 1200) {
							...GatsbyImageSharpFluid
						}
					}
				}
				description
				price {
		            adults_discount
		            adults_price
		            children_discount
		            children_price
		            q_price
		        }
			}
		}
		acuaticos: file(relativePath: { eq: "isla-mujeres.jpg" }){
	      childImageSharp {
	        fluid(maxWidth: 1920) {
	          ...GatsbyImageSharpFluid
	        }
	      }
	    }
	    descuento: file(relativePath: { eq: "descuento.png" }){
	      childImageSharp {
	        fluid(maxWidth: 1920) {
	          ...GatsbyImageSharpFluid
	        }
	      }
	    }
	    tulum: file(relativePath: { eq: "tulum.jpg" }){
	      childImageSharp {
	        fluid(maxWidth: 1920) {
	          ...GatsbyImageSharpFluid
	        }
	      }
	    }
	    snorkel: file(relativePath: { eq: "snorkel.jpg" }){
	      childImageSharp {
	        fluid(maxWidth: 1920) {
	          ...GatsbyImageSharpFluid
	        }
	      }
	    }
	    cancun: file(relativePath: { eq: "cancun.jpg" }){
	      childImageSharp {
	        fluid(maxWidth: 1920) {
	          ...GatsbyImageSharpFluid
	        }
	      }
	    }
	    vacacionales: file(relativePath: { eq: "vacacionales.jpg" }){
	      childImageSharp {
	        fluid(maxWidth: 1920) {
	          ...GatsbyImageSharpFluid
	        }
	      }
		}
		isla: file(relativePath: { eq: "isla-mujeres.jpg" }){
			childImageSharp {
			  fluid(maxWidth: 1920) {
				...GatsbyImageSharpFluid
			  }
			}
		  }
	}
`
