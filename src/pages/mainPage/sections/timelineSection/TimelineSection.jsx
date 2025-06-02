import yearPoint from "../../../../assets/YearPoint.png";
import "./timelineSection.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function TimelineSection() {
    return(
        <div className="timelineSection">
            <div className="timelineContent">   
                <div className="timelineSliderBox">
                    <h1 className="timelineHeadline">Unsere Story</h1>
                    <Swiper navigation={true} modules={[Navigation]} className="timelineSwiper">
                        <SwiperSlide className="timelineSlide">
                            <h2 className="slideHeadline">1978 – Gründung durch meinen Vater von Inhaber Werner Kaiser</h2>
                            <p className="slideText">
                                Mit am Ende über 40 Jahren Meistererfahrung gründete mein Vater – Dachdeckermeister und Innungsmitglied – 1978 unseren ersten Familienbetrieb in Markkleeberg. Als aktives Mitglied und stellv. Vorstand der Dachdecker-Innung prägte er über Jahrzehnte das regionale Handwerk. Mehrere Mitarbeiter, langjährige Partnerschaften und ein großes Netzwerk legten das Fundament für eine erfolgreiche Unternehmensgeschichte.
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="timelineSlide">
                            <h2 className="slideHeadline">1990er–2000er – Ausbildung im elterlichen Betrieb</h2>
                            <p className="slideText">
                                Nach meiner Ausbildung im elterlichen Betrieb habe ich viele Jahre eng mit meinem Vater zusammengearbeitet. So konnte ich von seiner Erfahrung profitieren und das traditionelle Handwerk von der Pike auf lernen – mit Blick fürs Detail, echter Bodenständigkeit und Wertschätzung für unsere Kunden.
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="timelineSlide">
                            <h2 className="slideHeadline">2004–2007 – Erster Auslandseinsatz in der Schweiz</h2>
                            <p className="slideText">
                                Im Jahr 2004 zog es mich in die Schweiz, um mein Fachwissen zu vertiefen und neue Perspektiven zu gewinnen. Die Zeit dort prägte mein Qualitätsverständnis nachhaltig und erweiterte meinen handwerklichen Horizont.
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="timelineSlide">
                            <h2 className="slideHeadline">2007–2015 – Rückkehr und Familienbetrieb</h2>
                            <p className="slideText">
                                Nach der Rückkehr arbeitete ich erneut im Familienbetrieb mit – eine Zeit, in der ich mein Wissen weitergeben und vertiefen konnte. Die Mischung aus Tradition und wachsender Expertise machte unsere Arbeit besonders.
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="timelineSlide">
                            <h2 className="slideHeadline">2015–2022 – Zweiter Auslandseinsatz mit Spezialisierung</h2>
                            <p className="slideText">
                                In diesen Jahren war ich erneut in der Schweiz tätig – diesmal mit klarem Fokus auf Flachdacharbeiten und Dachservices. Diese Spezialisierung, kombiniert mit internationalem Praxiswissen, ist heute ein wichtiger Bestandteil meines Leistungsspektrums.
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="timelineSlide">
                            <h2 className="slideHeadline">2018 – Betriebsaufgabe durch meinen Vater</h2>
                            <p className="slideText">
                                Nach 40 Jahren erfolgreicher Tätigkeit ging mein Vater in den Ruhestand und schloss den ursprünglichen Familienbetrieb. Doch unsere Leidenschaft für das Dachdeckerhandwerk blieb – und wurde zur Grundlage eines neuen Anfangs.
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="timelineSlide">
                            <h2 className="slideHeadline">2023 – Neustart mit Familientradition</h2>
                            <p className="slideText">
                                Mit der Gründung des Dachdeckerfachbetrieb Kaiser führe ich die Familientradition fort: ein moderner Dachdecker-Fachbetrieb mit starken Wurzeln, regionaler Verbundenheit und klarem Qualitätsanspruch. 
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="timelineSlide">
                            <h2 className="slideHeadline">Heute – Persönlich. Familiär. Zuverlässig.</h2>
                            <p className="slideText">
                                Heute führe ich den Betrieb als Inhaber – mit Unterstützung meines Vaters (im Ruhestand, aber immer engagiert) und meines Sohnes, der sich um Marketing, Netzwerk und strategische Weiterentwicklung kümmert. So vereinen wir drei Generationen unter einem Dach – mit langjährigen Partnern, gewachsenen Netzwerken und echter Leidenschaft für unser Handwerk.
                            </p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default TimelineSection;