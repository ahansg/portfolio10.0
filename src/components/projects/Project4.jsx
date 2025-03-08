import React from "react";
import "./project.css";
import "./gridcontainers.css";

import ExperisWishes from "../../assets/projectAssets/project4/Experis_onsker_forside.png";

import ZoomableImageGallery from "../image/ZoomableImageGallery";
import Arrow from "../../assets/projectAssets/allProjects/Arrow 3.svg";
import Arrow_upward from "../../assets/projectAssets/allProjects/arrow_upward.svg";
import { Link } from "react-router-dom";

const Project4 = () => {
  return (
    <div id="top">
      <div className="top_section">
        <img src={ExperisWishes} alt="Dissimilis First" className="top_image" />

        <div className="button_container">
          <button
            onClick={() =>
              document.getElementById("Tilbakemeldingsskjema").scrollIntoView()
            }
            className="scroll_button"
          >
            Tilbakemeldingsskjema
          </button>
          <button
            onClick={() =>
              document.getElementById("Landingsside").scrollIntoView()
            }
            className="scroll_button"
          >
            Landingsside
          </button>
        </div>
      </div>

      {/* OVERSKRIFT */}
      <div className="project_margin_top_container">
        <h1 className="project_title">
          Dissimilis fargenotasjonsapp-<br></br>Experis' ønsker
        </h1>
      </div>

      {/*BESKRIVELSE AV PROSJEKTET*/}
      <div className="grid-container1">
        <section>
          <h2 className="text_very_small padding_headline">
            KUNDEN OG PROSJEKTET
          </h2>
          <p className="body_text">
            Dissimilis arbeider for å skape livskvalitet for mennesker med
            utviklingshemming og funksjonsnedsettelser ved å tilby
            kulturaktiviteter som gir positive opplevelser og mestring.
            Fargenotasjonsappen er et samarbeid mellom Dissimilis og Experis med
            mål om å forenkle musikkinstruktørers arbeidsflyt. Ved å gjøre om
            noter til fargekoder kan elevene enkelt lære seg sanger som ellers
            ville vært utilgjengelig for dem. <br></br>
            <br></br>
            Målet for årets sommerstudenter var å gjøre appen klar for et
            internasjonalt marked, i tillegg til å forbedre den eksisterende
            versjonen av tjenesten ved å tilføre ny funksjonalitet og oppdatert
            design.
          </p>
        </section>

        <section>
          <h2 className="text_very_small padding_headline">TEAM OG ROLLE</h2>
          <p className="bold_text_small">Teamstørrelse</p>
          <p className="body_text">
            7 (utviklere, tester, tjenestedesigner, UX-designer)
          </p>
          <p className="bold_text_small"> Min rolle </p>
          <p className="body_text">
            UX/UI design <br></br>
            Brukerintervjuer, analyse, visualisering,<br></br>
            wireframes, prototyping & testing, workshops <br></br>
            <br></br>
            <p className="bold_text">Verktøy</p>
            <p className="body_text"> Figma, Miro, Jira, Confluence</p>
            Juni 2024 - august 2024 <br></br>
          </p>
        </section>

        {/*BESKRIVELSE AV UTFORDRINGER, HOVEDOPPGAVER, ØNSKER FRA BRUKERNE*/}

        <section>
          <h2 className="text_very_small padding_headline">UTFORDRING</h2>
          <p className="body_text">
            I tillegg til ønskene fra brukerne hadde Experis sine egne ønsker
            for applikasjonen for å gjøre den klar for et internasjonalt marked.
            Dette omhandlet blant annet å få på plass et tilbakemeldingsskjema
            og en landingsside for appen. Utfordringen ble dermed å balansere
            tiden vi hadde til rådighet med implementasjon av brukernes ønsker
            samtidig som teamet tok hensyn til Experis sine behov.
          </p>
        </section>

        <section>
          <h2 className="text_very_small padding_headline">
            HOVEDOPPGAVER FOR DESIGNTEAMET
          </h2>
          <p className="body_text">
            Verifisere behov ved å skaffe innsikt <br></br>
            Brukerteste eksisterende løsning med nullpunktsmåling <br></br>
            Skissere ny funksjonalitet og forbedringer <br></br>
            Utvikle detaljerte brukerhistorier<br></br>
            Lage prototyper for responsivt design for Desktop og iPad
          </p>
        </section>
      </div>

      {/*Margin for hele siden*/}
      <div className="project_margin_top_container">
        {/*ØNSKER FRA BRUKERNE */}
        <div className="project-margin-between-items">
          <div class="thin_line line_with_text">
            <span>ØNSKER FRA EXPERIS</span>
          </div>
          <p className="body_text_medium text_centeralign centered_padding">
            Oppgaven ble todelt med ønsker både fra Dissimilis og Experis.
            <br></br>
            Denne siden viser implementerte funksjoner som Experis ønsket, da
            det ville gjøre applikasjonen mer klar for et internasjonalt marked.
            Se "Dissimilis fargenotasjonsapp- brukernes ønsker" for å se flere
            funksjoner.
          </p>
          <div className="grid-container4">
            <section>
              <div className="grid-container2 grid_placement2">
                <div className="number_styling">01</div>
                <div className="bold_text">Tilbakemeldingsskjema</div>
                <div className="body_text grid_placement2">
                  Mulighet for brukeren å gi tilbakemelding ved feil og mangler
                  i appen
                </div>

                <div className="number_styling grid_placement1">02</div>
                <div className="bold_text grid_placement2">Landingsside</div>
                <div className="body_text grid_placement2">
                  Informativ landingsside om formålet med Dissimilis
                  fargenotasjonsapp
                </div>

                <div className="number_styling grid_placement1">03</div>
                <div className="bold_text grid_placement2">Designsystem</div>
                <div className="body_text grid_placement2">
                  Opprette et grunnleggende designsystem for Dissimilis
                  fargenotasjonsapp
                </div>
              </div>
            </section>

            <ZoomableImageGallery id="19" className="project_image" />

            <div className="grid_container_buttons">
              <div className="button_container">
                <Link to="/project1" className="button-link">
                  <button className="button">Ønsker fra brukerne </button>
                </Link>
              </div>

              <div className="button_container">
                <Link to="/project5" className="button-link">
                  <button className="button">Designsystem</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* TILBAKEMELDINGSSKJEMA */}
        <section id="Tilbakemeldingsskjema" className="theme_container">
          <div className="heading_with_arrow">
            <h2 className="level3_headlines">01. Tilbakemeldingsskjema</h2>
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
            <h1 className="level1_headlines">Bakgrunn</h1>
          </div>

          <p className="body_text">
            Ved flere anledninger hadde brukerne av appen sendt inn
            tilbakemeldinger med mangler i appen. Det var en tungvindt prosess
            der brukeren måtte snakke med sin nærmeste leder i Dissimilis, slik
            at lederen kunne sende tilbakemeldingen til produkteier i Experis.
            Produkteier måtte så videresende mailen til den personen som kunne
            løse problemet.
            <br />
            <br />
            Grunnet denne lange prosessen, ønsket Experis at sommerprosjektet
            skulle lage et tilbakemeldingsskjema som gjorde opplevelsen enklere
            for brukerne og Experis. Målet var også å kunne få inn flere
            tilbakemeldinger.
          </p>

          {/* Brukerhistorie plassert utenfor grid */}
          <div className="text_centeralign grid_placement2 user_story_padding">
            <p className="text_very_small">Brukerhistorie</p>
            <p className="text_italic">
              Som bruker av Dissimilis fargenotasjon kan jeg gi tilbakemelding
              slik at appen kan forbedres
            </p>
          </div>
          {/*Grid with the different findings*/}

          <div className="grid-container2 grid_placement2 padding_sectioning">
            <div className="item-1-container2 number_styling">01</div>
            <div className="item item-13 bold_text">Unngå feiltrykk</div>
            <div className="item item-4 body_text grid_placement2">
              Skjemaet skal unngå unødvendige knapper i tillegg til å være
              enkelt i bruk
            </div>

            <div className="item-2-container2 number_styling grid_placement1">
              02
            </div>
            <div className="item item-14 bold_text grid_placement2">
              Intuitivt
            </div>
            <div className="item item-5 body_text grid_placement2">
              Brukeren skal ikke misforstå stegene i tilbakemeldingsskjemaet.
              Det skal være enkelt i bruk.
            </div>

            <div className="item-3 number_styling grid_placement1">03</div>
            <div className="item item-15 bold_text grid_placement2">
              Sortering av tilbakemeldinger
            </div>
            <div className="item item-6 body_text grid_placement2">
              Tilbakemeldingene skal kunne sorteres slik at service lettere kan
              finne frem i tilbakemeldingene.
            </div>
          </div>
        </div>

        {/* Resterende innhold i grid */}
        <div className=" project_container">
          <div className="padding_sectioning_headlines">
            <h1 className="level1_headlines">Prototyping og testing</h1>
          </div>

          <div className="padding_sectioning_headlines">
            <p className="body_text">
              Vi prototypet flere ulike forslag før vi valgte ut to design vi
              ønsket å teste med brukerne.
            </p>
          </div>
        </div>
        <div className="picture_inline picture_padding_top">
          <ZoomableImageGallery id="20" className=" image_center" />
        </div>

        <div className=" project_container project-margin-between-items">
          <h2 className="level2_headlines">Geriljatesting</h2>

          <p className="body_text">
            Vi valgte ut to design som vi ønsket å teste med brukere.
            Prototypene var interaktive slik at vi enkelt kunne se hvilken flyt
            som fungerte best og hvorfor. Til sammen geriljatestet vi med 11
            personer på Experis-kontoret.
          </p>
        </div>
        <div className="picture_inline picture_padding_top">
          <ZoomableImageGallery id="21" className=" image_center" />
        </div>
        <div className="picture_padding_top">
          <ZoomableImageGallery id="22" className="project_image" />
        </div>

        <div className="  project-margin-between-items">
          {/*NØKKELFUNN-ANALYSE*/}
          <div class="thin_line line_with_text">
            <span>Funn fra geriljatesting</span>
          </div>
          <div className="body_text text_centeralign centered_padding">
            Etter analysen ble tre hovedfunn rammen for videre utvikling av
            appen. Selv om SUS viste at brukerne stort sett var fornøyde, viste
            dermed intervju og nullpunktsmåling at det fantes
            forbedringspotensiale.{" "}
          </div>

          {/*Grid with the different findings*/}
          <div className="container">
            <div className="grid-container5">
              <div className="number_styling">01</div>
              <div className="number_styling">02</div>
              <div className="number_styling">03</div>
              <div className="number_styling">04</div>
              <div className="bold_text">
                Uenighet om hvilken versom som var best
              </div>
              <div className="bold_text">
                Mindre tekst og store overskrifter
              </div>
              <div className="bold_text">Mer forpliktende med flere steg</div>
              <div className="bold_text">
                Filtrering gjorde det mer troverdig
              </div>

              <div className="item_box_dissimilis">
                Det var kun én stemme som skilte de to alternativene (i favør av
                alternativ 1)
              </div>
              <div className="item_box_dissimilis">
                Mindre tekst gjorde at flere leste den, i tillegg til
                beskrivende overskrifter
              </div>
              <div className="item_box_dissimilis">
                Flere steg gjorde at brukeren følte seg mer forpliktet til å
                gjennomføre tilbakemeldingsskjemaet
              </div>
              <div className="item_box_dissimilis">
                Valgene i alternativ 1 gjorde at brukeren tenkte problemet vil
                bli tatt tak i raskere fordi ikke alt havner på samme sted
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
              <div className="item item-12">
                <img src={Arrow} alt="Arrow" className="project_image" />
              </div>

              <div>
                Begge alternativene var sterke kandidater, kun små preferanser
                som skilte dem fra hverandre
              </div>
              <div>
                Fokus på å kun ha nødvendig tekst. Bør ha forskjellige
                overskrifter for å skille innhold fra hverandre
              </div>
              <div>
                Bør inkorporere flere steg i tilbakemeldingsskjemaet for å nudge
                brukeren til å fullføre{" "}
              </div>
              <div>
                Inkorporering av flere steg i tilbakemeldingsskjemaet gir
                brukeren en trygghet i at tilbakemeldingen blir tatt tak i
                raskere{" "}
              </div>
            </div>
          </div>

          <div className=" project_container">
            <div className="padding_sectioning_headlines">
              <h1 className="level1_headlines">Endelig design</h1>
            </div>
          </div>
          <div className="picture_inline picture_padding_top">
            <ZoomableImageGallery id="23" className=" image_center" />
          </div>
        </div>

        {/*LANDINGSSIDE*/}

        <section id="Landingsside" className="theme_container">
          <div className="heading_with_arrow">
            <h2 className="level3_headlines">02. Landingsside</h2>
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
            <h1 className="level1_headlines">Bakgrunn</h1>
          </div>

          <p className="body_text">
            Experis ønsket en bedre landingsside til appen da den skulle rulles
            ut til flere brukere. Målet var å få til en landingsside som
            forklarer Dissimilis fargenotasjon på en forståelig måte for nye
            brukere. For å få til dette, arrangerte vi en workshop med mentorer,
            utviklere og tester der vi utførte forskjellige øvelser for å komme
            frem til et sluttprodukt som vi kunne videreutvikle til en ferdig
            skisse.
          </p>

          {/* Brukerhistorie plassert utenfor grid */}
          <div className="grid_placement2">
            <div className="picture_padding_bottom">
              <div className=" text_centeralign user_story_padding">
                <p className="text_very_small">Mål</p>
                <p className="text_italic">
                  Hvordan kan vi få brukeren til å forstå hensikten med appen
                  før de logger inn?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resterende innhold i grid */}
        <div className=" project_container">
          <h1 className="level1_headlines">Øvelsene</h1>

          <p className="body_text">
            Deltakerne fikk utforske sin kreative side ved å først varme opp for
            å så gå over til lavoppløselig prototyping. Disse skissene ble
            utgangspunktet for det endelige designet til landingssiden.
          </p>

          {/*Grid with the different findings*/}
          <div className="grid-container2 grid_placement2">
            <div className="item-1-container2 number_styling">01</div>

            <div className="item item-4 body_text grid_placement2">
              Oppvarming med "ja -og"
            </div>

            <div className="item-2-container2 number_styling grid_placement1">
              02
            </div>

            <div className="item item-5 body_text grid_placement2">
              Crazy Eight
            </div>

            <div className="item-3 number_styling grid_placement1">03</div>

            <div className="item item-6 body_text grid_placement2">
              idemyldring med “12 sirkler”
            </div>
            <div className="item-3 number_styling grid_placement1">04</div>
            <div className="item item-6 body_text grid_placement2">
              Lavoppløselig prototyping
            </div>
          </div>
        </div>

        <div className=" project_container padding_sectioning_headlines">
          <h2 className="level2_headlines">Bilder fra workshopen</h2>
          <div className="picture_padding_bottom">
            <ZoomableImageGallery id="24" />
          </div>
        </div>

        {/*MÅ ORDNE LINK TIL PRESENTASJONEN!!! */}
        <div className="button_container">
          <Link to="/project4" className="button-link">
            <button className="button">Workshop-presentasjonen </button>
          </Link>
        </div>

        <div className=" project_container">
          <div className="padding_sectioning_headlines">
            <h1 className="level1_headlines">
              Fra Crazy Eight til lavoppløselig prototyping
            </h1>
          </div>
        </div>
        <div className="picture_inline picture_padding_top grid-container2-image">
          <ZoomableImageGallery id="25" className="project_image" />
          <ZoomableImageGallery id="26" className="project_image" />
        </div>

        <div className=" project_container">
          <div className="padding_sectioning_headlines">
            <h1 className="level1_headlines">Endelig design</h1>
          </div>
        </div>
        <div className="picture_inline picture_padding_top">
          <ZoomableImageGallery id="27" className="project_image" />
        </div>
      </div>

      <div className="button_container theme_container">
        <button
          className="button"
          onClick={() => document.getElementById("top").scrollIntoView()}
        >
          Til toppen
        </button>
      </div>
    </div>
  );
};

export default Project4;
