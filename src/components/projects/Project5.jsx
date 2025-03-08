import React from "react";
import "./project.css";
import "./gridcontainers.css";
import Desingsystem from "../../assets/projectAssets/project5/desingsystem_forside.png";
import Arrow_upward from "../../assets/projectAssets/allProjects/arrow_upward.svg";
import ZoomableImageGallery from "../image/ZoomableImageGallery";
import Arrow_down from "../../assets/projectAssets/arrow_down.svg";
import Arrow_side from "../../assets/projectAssets/Arrow_side.svg";

const Project5 = () => {
  return (
    <div id="top">
      {/*Top section with image*/}

      <div className="top_section">
        <img src={Desingsystem} alt="Dissimilis First" className="top_image" />

        <div className="button_container">
          <button
            onClick={() => document.getElementById("farger").scrollIntoView()}
            className="scroll_button"
          >
            Farger
          </button>
          <button
            onClick={() =>
              document.getElementById("typografi").scrollIntoView()
            }
            className="scroll_button"
          >
            Typografi
          </button>
          <button
            onClick={() =>
              document.getElementById("komponenter").scrollIntoView()
            }
            className="scroll_button"
          >
            Komponenter
          </button>
          <button
            onClick={() =>
              document.getElementById("samlede_komponenter").scrollIntoView()
            }
            className="scroll_button"
          >
            Samlede komponenter
          </button>
        </div>
      </div>

      {/* OVERSKRIFT */}
      <div className="project_margin_top_container">
        <h1 className="project_title">
          Designsystem for Dissimilis
          <br></br>fargenotasjonsapp
        </h1>
      </div>

      {/*BESKRIVELSE AV PROSJEKTET*/}
      <div className="grid-container1">
        <section>
          <h2 className="text_very_small padding_headline">BAKGRUNN</h2>
          <p className="body_text">
            Dissimilis fargenotasjonapp brukte fra før MUI-komponenter for sine
            funksjoner. Disse skiftes ut regelmessig, og derfor farge for at det
            ikke blir et helhetlig design på siden. I tillegg var det lite
            sammenheng mellom de ulike komponentene og de var heller ikke
            WCAG-godkjent når det kom til kontrast i farge og størrelse på font.
            <br></br>
            Det var derfor et behov for et designsystem med egne komponenter.
            Mot slutten av sommerprosjektet ble det en av mine hovedoppgaver å
            få på plass
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
            Min rolle var i det store og det hele å få på plass så mye av
            designsystemet som mulig på tiden vi hadde til rådighet.
            Fokusområdet mitt var typografi og farger, mens komponentene ble
            laget sammen med tjenestedesigneren som var i sommerprosjekt sammen
            med meg.
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
            Tidsapsketet var her en utfordring. Jeg hadde kun tre uker på meg, i
            tillegg til øvrige oppgaver som å designe de andre funksjonene som
            utviklerne skulle jobbe med i mellomtiden. I tillegg var det et krav
            fra Experis om at alle farger og font skulle være AAA - i kontrast
            og størrelse, noe som gjorde prosessen utfordrende med å finne
            riktig stil som fremdeles passet Dissimilis øvrige tema.
          </p>
        </section>
      </div>

      {/*Margin for hele siden*/}
      <div className="project_margin_container">
        {/*ØNSKER FRA BRUKERNE */}
        <div className="project-margin-between-items">
          <div class="thin_line line_with_text">
            <span>DET NYE DESIGNSYSTEMET</span>
          </div>
          <p className="body_text_medium text_centeralign">
            Det nye designsystemet inneholder:
          </p>
          <div className="text_centeralign">
            <div className="grid-container6">
              <section>
                <div className="grid-container2 grid_placement2">
                  <div className="number_styling">01</div>
                  <div className="bold_text">Ny fargeprofil</div>

                  <div className="number_styling grid_placement1">02</div>
                  <div className="bold_text grid_placement2">Typografi</div>

                  <div className="number_styling grid_placement1">03</div>
                  <div className="bold_text grid_placement2">Ikoner</div>
                  <div className="number_styling grid_placement1">04</div>
                  <div className="bold_text grid_placement2">
                    Komponenter
                    <br></br>- Knapper
                    <br></br>- Inputfelt
                    <br></br>- Søkefelt
                    <br></br>- Dropdownmeny
                    <br></br>- Togglebuttons
                    <br></br>- Radiobuttons
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="project_container">
          <h1 className="level1_headlines">Partitursiden -før og etter</h1>
        </div>
        <div className="picture_inline picture_padding_top grid-container2-image">
          <ZoomableImageGallery id="45" />
          <ZoomableImageGallery id="46" />
        </div>

        {/*FARGER */}

        <section id="farger" className="theme_container">
          <div className="heading_with_arrow">
            <h2 className="level3_headlines">01. Farger</h2>
            <button
              onClick={() => document.getElementById("top").scrollIntoView()}
              className="arrow_button arrow_icon"
            >
              <img src={Arrow_upward} alt="Arrow" />
            </button>
          </div>

          <div className="horizontal_line"> </div>
        </section>

        <div className="padding_sectioning">
          <p className="body_text grid_placement2">
            Under utviklingen av fargesystemet var det viktig å forsikre seg om
            at de nye fargene tilfredstilte AAA-krav for kontrast i WCAG. I
            tillegg var det fokus på å gi klar og tydelig beskrivelse av hver
            farge, hvilken fargekode den hadde og hvor fargen skulle brukes.
          </p>
        </div>

        <ZoomableImageGallery id="47" />

        <div className="project_container">
          <h2 className="level2_headlines">Eksempel - endring av farger</h2>
          <div className="padding_sectioning">
            <p className="body_text">
              De største forandringene skjedde på siden for oppretting av
              partitur. Eksempler på det er blant annet menylinjen, der store
              forandringer i utseende og farge gjorde den mer sammenhengende og
              roligere. I tilleg kan en se hvordan fargene har endret seg i
              komponentene, slik som i dropdownmenyen og knappene
            </p>
          </div>
        </div>

        <ZoomableImageGallery id="48" />
        <p className=" text_image">Før</p>
        <div className="picture_padding_top image_center">
          <img src={Arrow_down} alt="Arrow down" />
        </div>
        <div className="picture_padding_top">
          <ZoomableImageGallery id="49" />
        </div>

        <p className=" text_image">
          Utklipp: Menyen i partituret endret seg drastisk etter de nye fargene
          kom på plass
        </p>

        <div className="grid-container1">
          <div className="grid-container3-image">
            <ZoomableImageGallery id="50" />
            <img src={Arrow_side} alt="Arrow down" />
            <ZoomableImageGallery id="51" />
          </div>
          <div className="grid-container3-image">
            <ZoomableImageGallery id="52" />
            <img src={Arrow_side} alt="Arrow down" />
            <ZoomableImageGallery id="53" />
          </div>
          <p className=" text_image">
            Utklipp: Dropdownmenyen fikk et nytt utseende med WCAG-sjekkede
            farger
          </p>
          <p className=" text_image">
            Utklipp: Knappene dekker krav AAA for kontrast
          </p>
        </div>

        {/*TYPOGRAFI*/}
        <section id="typografi" className="theme_container">
          <div className="heading_with_arrow">
            <h2 className="level3_headlines">02. Typografi</h2>
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
          <div className="padding_sectioning grid_placement2">
            <p className="body_text ">
              Valget falt på å bruke samme typografi som tidligere brukt i
              applikasjonen. Dette for å ikke gjøre unødvendige endringer, da
              den var tydelig og forståelig fra før. For å gjøre det tydelig
              hvor og når de forskjellige stilene, størrelser, font og fontvekt
              skulle brukes, ble det laget en guide til bruk.
            </p>
          </div>
        </div>

        <h1 className="level1_headlines">Utklipp fra typografisiden</h1>

        <section className="picture_padding">
          <ZoomableImageGallery id="55" />
          <p className=" text_image">
            Utklipp: Font og fontvekt er presisert, der stilene bestemmer
            hvilken en skal benytte seg av
          </p>
        </section>
        <div className="picture_padding">
          <ZoomableImageGallery id="56" />
          <p className=" text_image">
            Utklipp: Hver stil har en beskrivelse av hvor den skal brukes og
            hvilken størrelse og stil den har
          </p>
        </div>
        <div className="picture_padding">
          <ZoomableImageGallery id="57" />
          <p className=" text_image">
            Utklipp: Her er en overordnet oversikt over de forskjellige
            størrelsene. Stiltype bestemmer hvilken størrelse som skal benyttes.{" "}
          </p>
        </div>

        {/*KOMPONENTER*/}
        <section id="komponenter" className="theme_container">
          <div className="heading_with_arrow">
            <h2 className="level3_headlines">03. Komponenter</h2>
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
          <div className="padding_sectioning grid_placement2">
            <p className="body_text ">
              I løpet av ukene vi jobbet med designsystemet fikk vi på plass
              flere komponenter slik som knapper, Inputfelt, Søkefelt,
              Dropdownmeny, Togglebuttons og Radiobuttons. Hver komponent tre
              "states". En for
            </p>
          </div>
        </div>

        <h1 className="level1_headlines">Eksempel- ToggleButtons</h1>

        <section className="picture_padding">
          <ZoomableImageGallery id="55" />
          <p className=" text_image">
            Utklipp: Font og fontvekt er presisert, der stilene bestemmer
            hvilken en skal benytte seg av
          </p>
        </section>
        <div className="picture_padding">
          <ZoomableImageGallery id="56" />
          <p className=" text_image">
            Utklipp: Hver stil har en beskrivelse av hvor den skal brukes og
            hvilken størrelse og stil den har
          </p>
        </div>
        <div className="picture_padding">
          <ZoomableImageGallery id="57" />
          <p className=" text_image">
            Utklipp: Her er en overordnet oversikt over de forskjellige
            størrelsene. Stiltype bestemmer hvilken størrelse som skal benyttes.{" "}
          </p>
        </div>

        {/*SAMLEDE KOMPONENTER*/}
        <section id="samlede_komponenter" className="theme_container">
          <div className="heading_with_arrow">
            <h2 className="level3_headlines">03. Komponenter</h2>
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
          <div className="padding_sectioning grid_placement2">
            <p className="body_text ">
              I løpet av ukene vi jobbet med designsystemet fikk vi på plass
              flere komponenter slik som knapper , Inputfelt, Søkefelt,
              Dropdownmeny, Togglebuttons og Radiobuttons.
            </p>
          </div>
        </div>

        <h1 className="level1_headlines">Eksempel- ToggleButtons</h1>

        <section className="picture_padding">
          <ZoomableImageGallery id="55" />
          <p className=" text_image">
            Utklipp: Font og fontvekt er presisert, der stilene bestemmer
            hvilken en skal benytte seg av
          </p>
        </section>
        <div className="picture_padding">
          <ZoomableImageGallery id="56" />
          <p className=" text_image">
            Utklipp: Hver stil har en beskrivelse av hvor den skal brukes og
            hvilken størrelse og stil den har
          </p>
        </div>
        <div className="picture_padding">
          <ZoomableImageGallery id="57" />
          <p className=" text_image">
            Utklipp: Her er en overordnet oversikt over de forskjellige
            størrelsene. Stiltype bestemmer hvilken størrelse som skal benyttes.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project5;
