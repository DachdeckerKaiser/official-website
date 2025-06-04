import { useRef, useState } from "react";
import "./timelineSection.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function TimelineSection() {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const timelineEntries = [
        {
            year: "1978",
            title: " – Gründung durch meinen Vater von Inhaber Werner Kaiser",
            text: "Mit am Ende über 40 Jahren Meistererfahrung gründete mein Vater – Dachdeckermeister und Innungsmitglied – 1978 unseren ersten Familienbetrieb in Markkleeberg. Als aktives Mitglied und stellv. Vorstand der Dachdecker-Innung prägte er über Jahrzehnte das regionale Handwerk. Mehrere Mitarbeiter, langjährige Partnerschaften und ein großes Netzwerk legten das Fundament für eine erfolgreiche Unternehmensgeschichte."
        },
        {
            year: "1990er–2000er",
            title: " – Ausbildung im elterlichen Betrieb",
            text: "Nach meiner Ausbildung im elterlichen Betrieb habe ich viele Jahre eng mit meinem Vater zusammengearbeitet. So konnte ich von seiner Erfahrung profitieren und das traditionelle Handwerk von der Pike auf lernen – mit Blick fürs Detail, echter Bodenständigkeit und Wertschätzung für unsere Kunden."
        },
        {
            year: "2004–2007",
            title: " – Erster Auslandseinsatz in der Schweiz",
            text: "Im Jahr 2004 zog es mich in die Schweiz, um mein Fachwissen zu vertiefen und neue Perspektiven zu gewinnen. Die Zeit dort prägte mein Qualitätsverständnis nachhaltig und erweiterte meinen handwerklichen Horizont."
        },
        {
            year: "2007–2015",
            title: " – Rückkehr und Familienbetrieb",
            text: "Nach der Rückkehr arbeitete ich erneut im Familienbetrieb mit – eine Zeit, in der ich mein Wissen weitergeben und vertiefen konnte. Die Mischung aus Tradition und wachsender Expertise machte unsere Arbeit besonders."
        },
        {
            year: "2015–2022",
            title: " – Zweiter Auslandseinsatz mit Spezialisierung",
            text: "In diesen Jahren war ich erneut in der Schweiz tätig – diesmal mit klarem Fokus auf Flachdacharbeiten und Dachservices. Diese Spezialisierung, kombiniert mit internationalem Praxiswissen, ist heute ein wichtiger Bestandteil meines Leistungsspektrums."
        },
        {
            year: "2018",
            title: " – Betriebsaufgabe durch meinen Vater",
            text: "Nach 40 Jahren erfolgreicher Tätigkeit ging mein Vater in den Ruhestand und schloss den ursprünglichen Familienbetrieb. Doch unsere Leidenschaft für das Dachdeckerhandwerk blieb – und wurde zur Grundlage eines neuen Anfangs."
        },
        {
            year: "2023",
            title: " – Neustart mit Familientradition",
            text: "Mit der Gründung des Dachdeckerfachbetrieb Kaiser führe ich die Familientradition fort: ein moderner Dachdecker-Fachbetrieb mit starken Wurzeln, regionaler Verbundenheit und klarem Qualitätsanspruch. "
        },
        {
            year: "Heute",
            title: " – Persönlich. Familiär. Zuverlässig.",
            text: "Heute führe ich den Betrieb als Inhaber – mit Unterstützung meines Vaters (im Ruhestand, aber immer engagiert) und meines Sohnes, der sich um Marketing, Netzwerk und strategische Weiterentwicklung kümmert. So vereinen wir drei Generationen unter einem Dach – mit langjährigen Partnern, gewachsenen Netzwerken und echter Leidenschaft für unser Handwerk."
        },
    ];

    return (
        <div className="timelineSection">
                <div className="timelineContent">   
                    <div className="timelineSliderBox">
                        <h1 className="timelineHeadline">Unsere Story</h1>
                        <Swiper
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                            navigation={true}
                            modules={[Navigation]}
                            spaceBetween={30}
                            className="timelineSwiper"
                        >
                            {timelineEntries.map((entry, index) => (
                                <SwiperSlide key={index} className="timelineSlide">
                                    <h2 className="slideHeadline">{entry.year}{entry.title}</h2>
                                    <p className="slideText">{entry.text}</p>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="reglerBox">
                            {Array.from({ length: 36 }, (_, i) => {
                                const isBig = i % 5 === 0;
                                const slideIndex = i / 5;
                                const year = timelineEntries[slideIndex]?.year;
                                const isActive = isBig && slideIndex === activeIndex;

                                return (
                                    <div
                                        key={i}
                                        className={`${isBig ? "bigLine" : "smallLine"} ${isActive ? "activeLine" : ""}`}
                                        onClick={() => isBig && swiperRef.current?.slideTo(slideIndex)}
                                        data-tooltip={isBig ? year : null}
                                        style={{ cursor: isBig ? "pointer" : "default" }}
                                    ></div>
                                );
                            })}
                    </div>
                </div>
        </div>
    );
}

export default TimelineSection;
