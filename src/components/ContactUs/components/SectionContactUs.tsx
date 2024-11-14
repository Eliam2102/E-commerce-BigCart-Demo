
import { FaHeadset, FaEnvelopeOpenText, FaMapMarkedAlt } from 'react-icons/fa';
import SocialBar from '../../Control/components/SocialBar';  // Importamos el componente SocialBar
import '../assets/styles/SectionContactUs.css';

const ContactSection = () => {
    return (
        <>
            {/* Insertamos SocialBar arriba o en la parte deseada */}
            <SocialBar />

            <section className="contact_us">
                <div className="container">
                    <div className="contact_inner">
                        <div className="contact_form_section">
                            <div className="contact_form_inner">
                                <div className="contact_field">
                                    <h1>Contáctanos</h1>
                                    <p>
                                        Nos encantaría saber de ti. Si tienes alguna pregunta, sugerencia o necesitas asistencia, por favor, completa el formulario a continuación.
                                        Con gusto nos pondremos en contacto contigo lo antes posible.Solo debes proporcionar tu nombre, correo electrónico y el mensaje con tus inquietudes o comentarios.
                                    </p>
                                    <h3>¡Esperamos poder ayudarte pronto!</h3>

                                    <input type="text" className="form-control" placeholder="Nombres" />
                                    <input type="text" className="form-control" placeholder="Correo" />
                                    <textarea id="form-control-textarea" placeholder="Mensaje"></textarea>
                                    <button className="contact_form_submit"> Enviar </button>
                                </div>
                            </div>
                        </div>
                        <div className="contact_info_sec">
                            <h4>Información de contacto</h4>
                            <div className="info_single">
                                <FaHeadset />
                                <span>+52 8009 054294</span>
                            </div>
                            <div className="info_single">
                                <FaEnvelopeOpenText />
                                <span>bigcart213@bigcart.com.mx</span>
                            </div>
                            <div className="info_single">
                                <FaMapMarkedAlt />
                                <span>Calle 60 No. 488, Centro, 97000 Mérida, Yucatán, MX</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="map_sec">
                <div className="container">
                    <div className="map_inner">
                        <h2>Encuéntranos en Google Maps</h2>
                        <p>
                            En el corazón de Mérida, justo en el Parque Santa Lucía, una de las zonas más emblemáticas de la ciudad. Estamos ubicados en la Calle 60, a pocos pasos de la plaza principal.
                        </p>
                        <div className="map_bind">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.469031462957!2d-89.6224415!3d20.9699994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5671610e9f8b57%3A0x217fceceddec1611!2sC.%2060%20488%2C%20Parque%20Santa%20Lucia%2C%20Centro%2C%2097000%20M%C3%A9rida%2C%20Yucat%C3%A1n!5e0!3m2!1ses!2smx!4v1602921234567!5m2!1ses!2smx"
                                width="100%"
                                height="450"
                                frameBorder="0"
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactSection;
