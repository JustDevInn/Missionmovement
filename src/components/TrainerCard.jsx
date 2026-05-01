import React from "react";
import { FaCheck } from "react-icons/fa6";
const Trainer = "/img/profilepicturehd.png";

const TrainerCard = () => {
  return (
    <>
      {/* Trainer Section */}
      <section className="w-full bg-mmPage py-16 flex flex-col justify-center">
        <h1 className="mm-h1 text-center mb-10 text-mmText">Trainer</h1>

        <div className="flex flex-col lg:flex-row gap-10 px-5 lg:px-20 max-w-screen-xl mx-auto">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-4">
            <h2 className="font-display uppercase tracking-widest text-mmText text-[22px] md:text-[32px] lg:text-[40px] leading-tight">
              Justin Peeters, oprichter van Mission Movement
            </h2>
            <p className="text-mmTextMuted text-justify leading-relaxed text-base md:text-lg">
              Mijn naam is Justin Peeters. Ik ben voormalig marinier,
              gecertificeerd coach en oprichter van Mission Movement.
              <br></br>
              <br></br>
              Ik heb tien jaar gediend binnen het Korps Mariniers, waarvan vier
              jaar binnen MARSOC. In die omgeving heb ik van dichtbij gezien wat
              er fysiek, mentaal en professioneel gevraagd wordt van mensen die
              kiezen voor een leven in uniform.
              <br></br>
              <br></br>
              Maar mijn ervaring komt niet alleen uit de militaire praktijk.
              <br></br>
              <br></br>
              Sinds 2014 ben ik actief als coach. In die jaren heb ik een breed
              scala aan mensen begeleid: van beginners die sterker en fitter
              wilden worden, tot sporters, CrossFit-atleten, mensen met
              gewichtsverliesdoelen, militairen, kandidaten in voorbereiding en
              mensen die vooral weer grip wilden krijgen op hun lichaam en
              leefstijl.
              <br></br>
              <br></br>
              Ik heb gewerkt als personal trainer, CrossFit coach,
              groepslescoach, gymmanager en eigenaar van mijn eigen personal
              training gym. Daardoor heb ik geleerd dat goede coaching niet
              alleen gaat over oefeningen geven. Het gaat over kijken naar de
              persoon, het doel, de belastbaarheid, de techniek, het herstel en
              de realiteit van iemands dagelijks leven.
              <br></br>
              <br></br>
              Binnen mijn militaire carrière begeleidde ik daarnaast ook
              collega’s in fysieke voorbereiding, belastbaarheid en mentale
              weerbaarheid. Die combinatie; operationele ervaring en jarenlange
              coachingservaring, <br></br>vormt de basis van Mission Movement.
              <br></br>
              <br></br>
              Ik geloof dat voorbereiding eerlijk, gestructureerd en doelgericht
              moet zijn. Niet om iemand alleen door een test heen te krijgen,
              maar om iemand sterker te laten starten aan een traject dat veel
              langer en zwaarder is dan de meeste mensen vooraf beseffen.
              <br></br>
              <br></br>
              Mijn doel is simpel:
              <br></br>
              mensen helpen goed voorbereid te starten, zodat ze niet hoeven te
              stoppen door een blessure, verkeerde aanpak of gebrek aan
              structuur.
              <br></br>
              <br></br>
              Je moet kunnen stoppen wanneer jij daarvoor kiest. Niet omdat je
              voorbereiding tekortschiet.
            </p>
          </div>

          {/* Image + Stats */}
          <div className="lg:w-1/2 flex flex-col items-center justify-center ">
            <img
              src={Trainer}
              alt="Justin Peeters"
              className="w-[240px] h-[320px] object-cover object-[center_23%] rounded-2xl shadow-sm border border-mmBorder bg-mmSurface"
            />

            <div className="mt-6 w-full px-4">
              <h3 className="font-display uppercase tracking-widest text-mmText text-[20px] md:text-[28px] mb-3">
                Ervaring
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-mmTextMuted text-sm">
                {[
                  "10 jaar Korps Mariniers",
                  "Sinds 2014 Personal trainer, CrossFit coach en gymmanager",
                  "4 jaar MARSOC",
                  "Ervaring met beginners, sporters, militairen en selectievoorbereiding",
                  "Praktijkervaring in training, belastbaarheid en mentale weerbaarheid",
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FaCheck className="text-mmAccent" />
                    <p>{stat}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrainerCard;
