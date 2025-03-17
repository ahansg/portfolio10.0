import React from "react";
import "./project.css";
import "./gridcontainers.css";

import Veles1 from "../../assets/projectAssets/Veles/Veles_top_image.png";

import Arrow from "../../assets/projectAssets/Veles/Arrow_Veles.svg";
import Arrow_upward from "../../assets/projectAssets/Veles/Arrow_Upward_Veles.svg";
import { Link } from "react-router-dom";
import ZoomableImageGallery from "../image/ZoomableImageGallery";

const Veles = () => {
  return (
    <div id="top">
      {/*Top section with image*/}

      <div className="top_section top_color_Veles">
        <img src={Veles1} alt="Veles" className="top_image" />

        <div className="button_container">
          <button
            onClick={() =>
              document.getElementById("datainnsamling").scrollIntoView()
            }
            className="scroll_button_Veles"
          >
            Datainnsamling
          </button>
          <button
            onClick={() => document.getElementById("analyse").scrollIntoView()}
            className="scroll_button_Veles"
          >
            Analyse
          </button>
          <button
            onClick={() =>
              document.getElementById("utvikle ideer").scrollIntoView()
            }
            className="scroll_button_Veles"
          >
            Utvikle idéer
          </button>
          <button
            onClick={() => document.getElementById("workshop").scrollIntoView()}
            className="scroll_button_Veles"
          >
            Workshop
          </button>
          <button
            onClick={() =>
              document.getElementById("prototyping").scrollIntoView()
            }
            className="scroll_button_Veles"
          >
            Prototyping
          </button>
          <button
            onClick={() => document.getElementById("resultat").scrollIntoView()}
            className="scroll_button_Veles"
          >
            Resultat
          </button>
          <button
            onClick={() =>
              document.getElementById("evaluering").scrollIntoView()
            }
            className="scroll_button_Veles"
          >
            Evaluering
          </button>
        </div>
      </div>

      {/* OVERSKRIFT */}
      <div className="project_margin_top_container">
        <h1 className="project_title">Veles</h1>
      </div>

      {/*BESKRIVELSE AV PROSJEKTET*/}
      <div className="grid-container1">
        <section>
          <h2 className="text_very_small_Veles padding_headline">BAKGRUNN</h2>
          <p className="body_text">
            I løpet av vårsemesteret 2023 bidro jeg i et gruppeprosjekt i
            bruksorientert design.Temaet var å sanse det ikke sansbare, der vi
            valgte å fokusere på hvordan man kan redusere antall påkjørsler av
            hjortevilt uten å invadere dyrenes habitat og levemåter. Prosjektet
            utfordret oss til å finne innovative løsninger som beskytter både
            dyr og mennesker.
          </p>
        </section>

        <section>
          <h2 className="text_very_small_Veles padding_headline">
            TEAM OG ROLLE
          </h2>
          <p className="bold_text_small">Teamstørrelse</p>
          <p className="body_text">6</p>
          <p className="bold_text_small"> Min rolle </p>
          <p className="body_text">
            UX/UI design <br></br>
            Brukerintervjuer, analyse, visualisering,<br></br>
            wireframes, prototyping & testing, workshops <br></br>
            <br></br>
            <p className="bold_text">Verktøy</p>
            <p className="body_text"> Figma, Miro, Trello</p>
            Februar 2023 - mai 2023 <br></br>
          </p>
        </section>

        {/*BESKRIVELSE AV UTFORDRINGER, HOVEDOPPGAVER, ØNSKER FRA BRUKERNE*/}

        <section>
          <h2 className="text_very_small_Veles padding_headline">UTFORDRING</h2>
          <p className="body_text">
            På grunn av de store konsekvensene dyrepåkjørsler fører med seg,
            forskes det mye på hvilke tiltak som bør benyttes. De tiltakene som
            antas å ha størst effekt, som viltgjerder og siktrydding, er
            kostbare og krever vedlikehold. I tillegg fører de til uønsket
            endring av dyrenes atferd og ferdeområder. Alternative tiltak som
            reflektorer og skremmere (lyd, lukt, lys) har vist seg lite
            effektive, mens statiske fareskilt har vist seg ineffektive.
            Utfordringen ble dermed å finne et alternativ der mennesker blir
            varslet om dyr i nærheten uten inngripen i hjortenes levemåte.
          </p>
        </section>

        <section>
          <h2 className="text_very_small_Veles padding_headline">MIN ROLLE</h2>
          <p className="body_text">
            - Samling av innsikt gjennom intervju og analyse av data <br></br>-
            Holde workshop sammen med brukerne for innhenting av data <br></br>-
            Design av endelig løsning basert på brukernes tilbakemelding{" "}
            <br></br>
          </p>
        </section>
      </div>

      {/*Margin for hele siden*/}
      <div className="project_margin_container">
        {/*VEIEN TIL ENDELIG LØSNING */}
        <div className="project-margin-between-items">
          <div class="thin_line line_with_text">
            <span>VEIEN TIL ENDELIG LØSNING</span>
          </div>

          <p className="body_text_medium text_centeralign">
            For å komme frem til en god løsning gjorde vi:
          </p>
          <div className="text_centeralign">
            <div className="grid-container6">
              <section>
                <div className="grid-container2 grid_placement2">
                  <div className="number_styling_Veles">01</div>
                  <div className="bold_text">
                    Utvikling av personas og scenarioer for bruk
                  </div>

                  <div className="number_styling_Veles grid_placement1">02</div>
                  <div className="bold_text grid_placement2">
                    Seks semi-strukturerte intervjuer
                  </div>

                  <div className="number_styling_Veles grid_placement1">03</div>
                  <div className="bold_text grid_placement2">
                    Analyse av data med Affinity Diagram
                  </div>
                  <div className="number_styling_Veles grid_placement1">04</div>
                  <div className="bold_text grid_placement2">
                    To workshoper med brukerne
                  </div>
                  <div className="number_styling_Veles grid_placement1">05</div>
                  <div className="bold_text grid_placement2">Prototyping</div>
                  <div className="number_styling_Veles grid_placement1">06</div>
                  <div className="bold_text grid_placement2">
                    Evaluering av endelig produkt
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="image_right_margin picture_padding_top">
            <ZoomableImageGallery id="77" />
          </div>
        </div>

        {/*LINJE TIL DATAINNSAMLING */}

        <section id="datainnsamling" className="theme_container">
          <div className="heading_with_arrow">
            <h2 className="level3_headlines_Veles">01. Datainnsamling</h2>
            <button
              onClick={() => document.getElementById("top").scrollIntoView()}
              className="arrow_button arrow_icon"
            >
              <img src={Arrow_upward} alt="Arrow" />
            </button>
          </div>

          <div className="horizontal_line"> </div>
        </section>

        {/*BRUKERINTERVJU*/}
        <div className="project_container">
          <h1 className="level1_headlines">Brukerintervju</h1>

          <div className="padding_sectioning">
            <p className="body_text">
              Vi utførte seks semi-strukturerte intervjuer for å få innsikt i
              brukernes tanker og idéer rundt problemstillingen. To av
              intervjuene var ekspertintervju med en kjørelærer og en
              lastebilsjåfør.
            </p>
          </div>
        </div>

        <div className="image_right_margin">
          <ZoomableImageGallery id="78" />
          <p className="body_text">
            “Jeg er ofte ekstra på vakt når jeg kjører i utsatte områder. (...)
            jeg blir sliten av å hele tiden følge med og jeg tar meg selv i å
            miste konsentrasjonen. Det kan være farlig.”
          </p>

          {/*Analyse*/}
          <section id="analyse" className="theme_container">
            <div className="heading_with_arrow">
              <h2 className="level3_headlines_Veles">
                02. Analyse og nøkkelfunn
              </h2>
              <button
                onClick={() => document.getElementById("top").scrollIntoView()}
                className="arrow_button arrow_icon"
              >
                <img src={Arrow_upward} alt="Arrow" />
              </button>
            </div>

            <div className="horizontal_line"> </div>
          </section>

          <div className="project_container">
            <h2 className="level2_headlines">Affinity diagram </h2>
            <div className="padding_sectioning">
              <p className="body_text">
                Funn fra brukerintervju ble sortert med hjelp av affinity
                diagram. Her sorterte vi de forskjellige meningene i nøkkelfunn
                som vi så kunne basere oss på videre i idémyldringen.
              </p>
            </div>
          </div>

          <div className="picture_padding_top">
            <ZoomableImageGallery id="79" />
          </div>

          <div className="picture_padding_top">
            <ZoomableImageGallery id="80" />
          </div>

          {/*NØKKELFUNN-ANALYSE*/}
          <div class="thin_line line_with_text">
            <span>Nøkkelfunn analyse</span>
          </div>
          <div className="body_text text_centeralign centered_padding">
            Etter analysen konkluderte vi med tre hovedfunn for veien videre med
            utviklingen av enheten.
          </div>

          {/*Grid with the different findings*/}
          <div className="container">
            <div className="grid-container3">
              <div className="number_styling_Veles">01</div>
              <div className="number_styling_Veles">02</div>
              <div className="number_styling_Veles">03</div>
              <div className="bold_text">
                Dårlig erfaring med nåværende løsninger
              </div>
              <div className="bold_text">
                Redusert oppmerksomhet når man kjører lenge
              </div>
              <div className="bold_text">Dårlig sikt</div>

              <div className="item_box_Veles">
                Brukerne følte seg ikke trygge med nåværende løsninger for
                varsling om dyr i veibanen
              </div>
              <div className="item_box_Veles">
                Brukerne opplevde at de fikk redusert oppmerksomhet når de
                kjørte lange distanser. Det førte til mindre årvåkenhet og
                større sjanse for tregere reaksjonsevne.
              </div>
              <div className="item_box_Veles">
                Dårlige veier og dårlig sikt fører til at sjåførene får mindre
                tid til å reagere når dyr går ut i veibanen
              </div>

              <div>
                <img src={Arrow} alt="Arrow" className="project_image" />
              </div>
              <div>
                <img src={Arrow} alt="Arrow" className="project_image" />
              </div>
              <div className="item item-12">
                <img src={Arrow} alt="Arrow" className="project_image" />
              </div>

              <div className="bold_text">Alternativ varsling</div>
              <div className="bold_text">Varslingsenhet</div>
              <div className="bold_text">Øke sikten</div>

              <div>
                Se på alternative løsninger til det som allerede finnes og blir
                brukt på markedet
              </div>
              <div>
                Presentasjonsmodus gir brukeren lett tilgang til sine lagrede
                sanger under konsert, samt tilgang til det virtuelle pianoet til
                opplæringsformål{" "}
              </div>
              <div>
                Muliggjøre bedre sikt for sjåførene, for eksempel med mer
                belysning langs veien
              </div>
            </div>
          </div>
        </div>

        {/* UTVIKLE IDEER*/}
        <section id="utvikle ideer" className="theme_container">
          <div className="heading_with_arrow">
            <h2 className="level3_headlines_Veles">03. Utvikle idéer</h2>
            <button
              onClick={() => document.getElementById("top").scrollIntoView()}
              className="arrow_button arrow_icon"
            >
              <img src={Arrow_upward} alt="Arrow" />
            </button>
          </div>

          <div className="horizontal_line"> </div>
        </section>

        <div className="project_container">
          <div className="padding_sectioning">
            <h1 className="level1_headlines">CrazyEight</h1>
          </div>

          <p className="body_text">
            Med bakgrunn i nøkkelfunn fra intervjuene valgte vi å utvide
            idérommet ved å gjennomføre CrazyEight. På den måten kunne vi tømme
            oss for alle de rare og uortodokse idéene for å forsikre oss om at
            vi virkelig hadde utforsket mulighetsrommet.
            <br />
            <br />
            Disse ble så presentert for brukerne slik at vi kunne høre deres
            tanker og idéer. Etter dette kom vi frem til to muligheter for
            design;
            <br></br>- et dynamisk veiskilt eller en varslingsenhet i bilen
          </p>

          <div className="padding_sectioning_headlines">
            <h1 className="level1_headlines">CrazyEight skissene</h1>
          </div>
        </div>

        <ZoomableImageGallery id="81" />

        {/*WORKSHOP*/}
        <section id="workshop" className="theme_container">
          <div className="heading_with_arrow">
            <h2 className="level3_headlines_Veles">04. Workshop</h2>
            <button
              onClick={() => document.getElementById("top").scrollIntoView()}
              className="arrow_button arrow_icon"
            >
              <img src={Arrow_upward} alt="Arrow" />
            </button>
          </div>

          <div className="horizontal_line"> </div>
        </section>

        <div className="project_container">
          <div className="padding_sectioning">
            <h1 className="level1_headlines">Low-fidelity prototyping</h1>
          </div>

          <p className="body_text">
            Vi lagde to lavoppløselige prototyper i papp som vi tok med oss på
            workshopen. Den ene skulle representere en varslingsenhet i bilen,
            den andre et dynamisk veiskilt.
          </p>
        </div>

        {/* Resterende innhold i grid */}
        <div className=" project_container">
          <div className="grid_placement2  padding_sectioning">
            <ZoomableImageGallery id="82" />
            <p className="text_image">
              Lavoppløselige prototyper laget under workshop med gruppen. Til
              venstre, varslingsenhet i bil. Til høyre, dynamisk veiskilt
            </p>
          </div>

          <div className="padding_sectioning">
            <h1 className="level1_headlines">Workshop</h1>
          </div>

          <p className="body_text">
            Under workshopen diskuterte hvilke muligheter og begrensninger hver
            løsning ville tilby, og ga dem innsikt i teknologien vi tenkte å
            bruke. Brukerne var samstemte i ønske om varslingsenhet i bil
            framfor dynamiske skilt langs veien.
          </p>

          <div className="grid_placement2  padding_sectioning">
            <ZoomableImageGallery id="83" />
            <p className="text_image">
              Lavoppløselige prototyper laget under workshop med gruppen. Til
              venstre, varslingsenhet i bil. Til høyre, dynamisk veiskilt
            </p>
          </div>
        </div>

        <div className="project_container  project-margin-between-items">
          <h2 className="level2_headlines">Skisser fra workshopen</h2>
          <p className="body_text">
            Under workshopen skisserte vi plassering og form til
            varslingsenheten. Disse skissene tok vi med oss videre når vi skulle
            begynne på den High-fidelity prototypen.
          </p>
        </div>
        <div className=" grid-container4 picture_padding_top">
          <ZoomableImageGallery id="84" />
          <ZoomableImageGallery id="85" />
        </div>

        {/*PROTOTYPING*/}
        <section id="prototyping" className="theme_container">
          <div className="heading_with_arrow">
            <h2 className="level3_headlines_Veles">05. Prototyping</h2>
            <button
              onClick={() => document.getElementById("top").scrollIntoView()}
              className="arrow_button arrow_icon"
            >
              <img src={Arrow_upward} alt="Arrow" />
            </button>
          </div>

          <div className="horizontal_line"> </div>
        </section>

        <div className=" project_container  project-margin-between-items">
          <h2 className="level2_headlines">1. Papirskisse av tenkt løsning</h2>
        </div>

        <div className="picture_inline picture_padding_top">
          <ZoomableImageGallery id="86" />
        </div>

        <div className=" project_container  project-margin-between-items">
          <h2 className="level2_headlines">
            2. Prototyping av deler i Fusion360
          </h2>
        </div>

        <div className="picture_inline picture_padding_top">
          <ZoomableImageGallery id="87" className="project_image" />
        </div>

        <div className=" project_container  project-margin-between-items">
          <h2 className="level2_headlines">3. Implementering av komponenter</h2>
        </div>

        <div className="picture_inline picture_padding_top">
          <ZoomableImageGallery id="88" className="project_image" />
        </div>

        {/*RESULTAT*/}
        <section id="resultat" className="theme_container">
          <div className="heading_with_arrow">
            <h2 className="level3_headlines_Veles">6.0 Resultat</h2>
            <button
              onClick={() => document.getElementById("top").scrollIntoView()}
              className="arrow_button arrow_icon"
            >
              <img src={Arrow_upward} alt="Arrow" />
            </button>
          </div>

          <div className="horizontal_line"> </div>
        </section>

        <div className="project_container  project-margin-between-items">
          <p className="body_text grid_placement2">
            En varslingsenhet i bilen som varsler ved hjelp av lys og lyd om
            hjortevilt er på vei ut i veibanen. Enheten kan i tillegg fungere
            som en varsler til andre biler i nærheten ved bruk av en
            varslingsknapp montert på toppen av enheten.
          </p>
        </div>

        <div className="picture_inline picture_padding_top">
          <ZoomableImageGallery id="89" className="project_image" />
        </div>
        <p className="image_text">
          Dekselet bak på enheten kan byttes om ønskelig
        </p>

        {/*EVALUERING MED BRUKER*/}
        <section id="evaluering" className="theme_container">
          <div className="heading_with_arrow">
            <h2 className="level3_headlines_Veles">
              7.0 Evaluering med bruker
            </h2>
            <button
              onClick={() => document.getElementById("top").scrollIntoView()}
              className="arrow_button arrow_icon"
            >
              <img src={Arrow_upward} alt="Arrow" />
            </button>
          </div>

          <div className="horizontal_line"> </div>
        </section>

        <div className="project_container">
          <div className="padding_sectioning">
            <h1 className="level1_headlines">Feltstudie</h1>
          </div>

          <p className="body_text">
            Vi utførte en feltstudie i semi-kontrollerte forhold som en summativ
            evaluering. Vi kartla artefaktens posisjon og rolle i bilen.
            Brukerens interaksjon med artefakten var reell, men sensoren sin
            sansing av hjortedyret var kunstig ved bruk av “Trollmannen fra Oz”.
            <br></br>
            Evalueringen fant sted i en stillestående bil der brukeren testet og
            interagerte med artefakten, mens vi observerte og tok notater.
            Videre fulgte et semi-strukturert intervju
          </p>
        </div>

        <div className="picture_inline picture_padding_top">
          <ZoomableImageGallery id="90" className="project_image" />
        </div>
        <div className="picture_inline picture_padding_top">
          <ZoomableImageGallery id="91" className="project_image" />
        </div>

        <div className="theme_container project_container padding_sectioning">
          <h1 className="level1_headlines">Funn</h1>

          <p className="body_text">
            Brukernes helhetsinntrykk av artefakten var positivt og de synes den
            var enkel å interagere med. Funksjonaliteten var klar og tydelig, og
            designet møtte deres forventninger. <br></br>
            <br></br>
            «Denne overgikk alle mine forventninger for hva dere kunne få til
            (...)» <br></br>
            <br></br>
            Allikevel var det en utfordring med artefaktens størrelse, da den
            var for stor. I tillegg var den vanskelig å plassere i bilen uten at
            den var i veien for bilens betjeningssystemer. <br></br>
            «(...) den var litt stor, hvordan skal jeg gire?» <br></br>
            <br></br>
            Alt i alt var brukerne fornøyde med løsningen, og kunne tenkt å ta
            den i bruk om nye modifikasjoner ble tatt i betraktning.
          </p>
        </div>
      </div>

      <div className="button_container theme_container">
        <button
          className="button_Veles"
          onClick={() => document.getElementById("top").scrollIntoView()}
        >
          Til toppen
        </button>
      </div>
    </div>
  );
};

export default Veles;
