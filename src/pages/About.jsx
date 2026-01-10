import React from "react";
import { Link } from "react-router-dom";
import FloatingCTA from "../components/FloatingCTA";
import { Helmet } from "react-helmet-async";
import TrainerCard from "../components/TrainerCard";

const About = () => {
  return (
    <div className="pt-10">
      <Helmet>
        <title>Over Ons | Mission Movement</title>
        <meta
          name="description"
          content="Ontdek het verhaal achter Mission Movement en de reis van elite-eenheid naar elite coaching."
        />
        <meta property="og:title" content="Over Mission Movement" />
        <meta
          property="og:description"
          content="Van het Korps Mariniers naar de moderne krijger - dit is ons verhaal."
        />
        <meta
          property="og:image"
          content="https://missionmovement.vercel.app/img/thestory.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:url"
          content="https://missionmovement.vercel.app/about"
        />
      </Helmet>

      {/* Hero Section: The Story */}
      <section
        className="relative section flex justify-center items-center bg-parajumping bg-bottom bg-no-repeat bg-cover"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 h-full w-full flex justify-center lg:justify-center items-center pt-32 px-5 lg:px-20">
          <div className="text-center lg:text-center">
            <h1 className="text-yellow font-primary text-[35px] md:text-[60px] font-medium uppercase tracking-wider">
              Het Verhaal
            </h1>
            <p className="text-white mt-2 font-secondary tracking-widest text-base md:text-lg">
              Elke missie begint met een waarom. Deze begon met ervaring -
              verdiend op de harde manier.
            </p>
          </div>
        </div>
      </section>

      <FloatingCTA />

      {/* Foundations Section */}
      <section className="w-full px-5 sm:px-10 lg:px-20 py-20 flex flex-col justify-center items-center text-left">
        <h1 className="h1-teko pb-10">Grondslagen</h1>
        <div className="max-w-5xl pt-5 text-justify">
          <h5 className="mb-5 text-yellow font-secondary text-[25px] md:text-[50px] font-light uppercase leading-[120%] tracking-wide">
            Ons verhaal
          </h5>
          <p className="font-light tracking-wider text-white lg:text-xl leading-relaxed">
            Gebouwd op een decennium aan dienst binnen het Korps Mariniers,
            inclusief vier jaar in MARSOC, brengt Mission Movement
            praktijkgerichte voorbereiding vanuit echte ervaring. Na de
            militaire carrière runden we vijf jaar lang een privé
            trainingsruimte - waar we niet alleen lichamen trainden, maar vooral
            onbreekbare mindsets bouwden.
            <br />
            <br />
            Met negen jaar coachingervaring combineren we militaire precisie met
            persoonlijke begeleiding. Of het nu gaat om selectietrainingen,
            bergexpedities of sportschoolklanten - we hebben elke herhaling die
            we aanleren zelf doorleefd.
            <br />
            <br />
            Onze missie is simpel: toekomstige operators voorbereiden. Van
            fysiek tot mentaal - we geven je de tools die we zelf graag eerder
            hadden gehad. Vooral wanneer falen geen optie is.
            <br />
            <br />
            Mission Movement is er om veerkrachtige mensen te vormen. Niet
            alleen voor het leger, maar voor het leven. Als jij bereid bent je
            te committeren, leiden wij de weg.
          </p>
        </div>
      </section>

      {/* Inspirational Quote Divider */}
      <section className="relative bg-fixed bg-cover bg-center bg-heigendhert h-[300px] flex items-center justify-center">
        <div className="bg-black/70 px-6 py-4 border-l-4 border-yellow max-w-4xl">
          <h2 className="text-yellow text-lg md:text-2xl uppercase tracking-widest font-secondary text-center">
            Discipline is de brug tussen doelen en verwezenlijking.
          </h2>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="w-full px-5 sm:px-10 lg:px-20 py-20 flex flex-col justify-center items-center">
        <h1 className="h1-teko py-10">Missie & Waarden</h1>
        <div className="flex flex-col md:flex-row w-full max-w-6xl gap-10 text-justify">
          {/* Missie */}
          <div className="w-full md:w-1/3 p-5 bg-primary/10 rounded-xl">
            <h5 className="font-secondary text-yellow uppercase text-[22px] md:text-2xl mb-2">
              Onze Missie:
            </h5>
            <p className="font-light tracking-wider text-white lg:text-xl space-y-4 leading-relaxed">
              Wij vormen de operators van morgen. Dat betekent: lichamen
              voorbereiden, minds aanscherpen, en een niveau van discipline
              installeren dat maar weinigen ooit bereiken. Wil je dienen - écht
              dienen - dan begint het hier.
            </p>
          </div>

          {/* Waarden */}
          <div className="w-full md:w-2/3 p-5 bg-primary/10 rounded-xl">
            <h5 className="font-secondary text-yellow text-[22px] md:text-2xl mb-2">
              Kernwaarden:
            </h5>
            <div className="font-light tracking-wider text-white lg:text-xl space-y-4 leading-relaxed">
              <p>
                <span className="text-brown uppercase font-semibold font-secondary">
                  Discipline:
                </span>{" "}
                Geen motivatie. Structuur. Gewoontes. Zelfrespect zonder
                concessies.
              </p>
              <p>
                <span className="text-brown uppercase font-semibold font-secondary">
                  Vastberadenheid:
                </span>{" "}
                Wij verschijnen. Elke dag. Juist wanneer het zwaar is.
              </p>
              <p>
                <span className="text-brown uppercase font-semibold font-secondary">
                  Doorzettingsvermogen:
                </span>{" "}
                We hopen niet op vooruitgang - we vechten ervoor. Eén herhaling
                tegelijk.
              </p>

              <p>
                Deze waarden vormen het fundament van onze aanpak - gericht op
                duurzame, mentale én fysieke voorbereiding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer cards */}
      <TrainerCard />

      {/* CTA Ending Section */}
      <section className="w-full py-20 text-center px-5 flex flex-col justify-center items-center">
        <h2 className="h2-teko text-yellow mb-5">
          Je kent nu het verhaal. Wat wordt jouw rol?
        </h2>
        <p className="text-white font-light max-w-2xl mx-auto mb-8">
          Veel mensen praten over verandering. Weinig doen wat nodig is. Of je
          nu droomt van een uniform of je potentieel wilt waarmaken - wij wijzen
          je de weg en duwen je erdoorheen.
        </p>
        <Link to="/program">
          <button className="btn btn-lg min-w-[200px]">Start nu</button>
        </Link>
      </section>

      {/* Background Divider Image */}
      <section
        className="h-[250px] md:h-[450px] w-full bg-fixed bg-friscatnight bg-center bg-no-repeat bg-cover"
        aria-hidden="true"
      ></section>
    </div>
  );
};

export default About;
