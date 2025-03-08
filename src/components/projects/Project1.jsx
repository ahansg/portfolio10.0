import React from "react";
import "./project.css";
import "./gridcontainers.css";

import DissimilisWishes from "../../assets/projectAssets/project1/DissimilisWishes.png";

import Arrow from "../../assets/projectAssets/allProjects/Arrow 3.svg";
import Arrow_upward from "../../assets/projectAssets/allProjects/arrow_upward.svg";
import { Link } from "react-router-dom";
import ZoomableImageGallery from "../image/ZoomableImageGallery";

const Project1 = () => {
  return (
    <div id="top">
      {/*Top section with image*/}

      <div className="top_section">
        <img
          src={DissimilisWishes}
          alt="Dissimilis First"
          className="top_image"
        />

        <div className="button_container">
          <button
            onClick={() =>
              document.getElementById("datainnsamling").scrollIntoView()
            }
            className="scroll_button"
          >
            Datainnsamling
          </button>
          <button
            onClick={() => document.getElementById("analyse").scrollIntoView()}
            className="scroll_button"
          >
            Analyse
          </button>
          <button
            onClick={() => document.getElementById("piano").scrollIntoView()}
            className="scroll_button"
          >
            Virtuelt Piano
          </button>
          <button
            onClick={() =>
              document.getElementById("presentasjonsmodus").scrollIntoView()
            }
            className="scroll_button"
          >
            Presentasjonsmodus
          </button>
          <button
            onClick={() =>
              document.getElementById("sangtekst").scrollIntoView()
            }
            className="scroll_button"
          >
            Sangtekst
          </button>
        </div>
      </div>

      {/* OVERSKRIFT */}
      <div className="project_margin_top_container">
        <h1 className="project_title">
          Dissimilis fargenotasjonsapp-<br></br>brukernes ønsker
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
            Dissimilis hadde allerede en fungerende fargenotasjonsapp som
            brukerne var fornøyde med. Under brukertintervju kom det dog frem at
            flere av brukerne ikke brukte appen slik den først var tiltenkt. Den
            var heller ikke tilrettelagt for utrulling til et større marked, da
            den ikke hadde en velfungerende landingsside eller
            tilbakemeldingsfunksjon. Disse problemstillingene ble fokusområdene
            for design.
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
      <div className="project_margin_container">
        {/*ØNSKER FRA BRUKERNE */}
        <div className="project-margin-between-items">
          <div class="thin_line line_with_text">
            <span>ØNSKER FRA BRUKERNE</span>
          </div>
          <p className="body_text_medium text_centeralign centered_padding">
            Oppgaven ble todelt med ønsker både fra Dissimilis og Experis.
            <br></br>
            Her ser man implementerte funksjoner basert på funn fra kunden
            (Dissimilis). Se "Dissimilis fargenotasjonsapp- Experis ønsker" for
            å se flere funksjoner.
          </p>
          <div className="grid-container4">
            <section>
              <div className="grid-container2 grid_placement2">
                <div className="number_styling">01</div>
                <div className="bold_text">Virtuelt piano</div>
                <div className="body_text grid_placement2">
                  Mulighet for brukeren å benytte seg av piano for å forbedre
                  arbeidsflyten ved partiturlaging, samt til undervisningsformål
                </div>

                <div className="number_styling grid_placement1">02</div>
                <div className="bold_text grid_placement2">Sangtekst</div>
                <div className="body_text grid_placement2">
                  Mulighet for brukeren å skrive inn sangtekst under notene
                </div>

                <div className="number_styling grid_placement1">03</div>
                <div className="bold_text grid_placement2">
                  Presentasjonsmodus
                </div>
                <div className="body_text grid_placement2">
                  Mulighet for å bruke appen til undervisning og i konsertformål
                </div>
              </div>
            </section>
            <ZoomableImageGallery id="2" />

            <div className="grid_container_buttons">
              <div className="button_container">
                <Link to="/project4" className="button-link">
                  <button className="button">Til Experis' ønsker</button>
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

        {/*LINJE TIL DATAINNSAMLING */}

        <section id="datainnsamling" className="theme_container">
          <div className="heading_with_arrow">
            <h2 className="level3_headlines">01. Datainnsamling</h2>
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
              Gruppen hadde lite erfaring med noter og partiturer. Dermed ble
              intervjuene avgjørende for å forstå brukergruppens behov. Det ble
              gjennomført fire semi-strukturerte intervjuer med
              musikkinstruktører. Spørsmålene dreide seg om: <br></br>
              <br></br>- Vaner rundt bruk av appen <br></br>- Tanker rundt
              eksisterende applikasjon <br></br>- Ønsket funksjonalitet{" "}
              <br></br>- Prioritering av funksjonalitet
            </p>
          </div>

          <h2 className="level2_headlines">Nullpunktsmåling</h2>
          <div className="padding_sectioning">
            <p className="body_text">
              I tillegg til brukerintervjuene ble nullpunktsmåling av
              eksisterende applikasjon et godt utgangspunkt for å se om
              fremtidig løsning forbedret instruktørenes opplevelse av bruk.
              Spørsmålene dreide seg om:
              <br></br>
              <br></br>
              <h3 className="section_text_small_bold"> Del 1 </h3>
              1. Opprett nytt partitur  <br></br>
              2. Lag åttendedels F- note, åttendedels H-note, punktert D-note,
              C-akkord og åttendedels G-note <br></br>
              3. Ta bort Ters på C-akkord <br></br>
              4. Legg til repetisjon foran  <br></br>
              5. Endre navn på takten <br></br>
              6. Rediger takt <br></br>
              7. Eksporter sangen <br></br>
              <h3 className="section_text_small_bold"> Del 2 </h3>
              1. Lag en ny gruppe <br></br>
              2. Legg til tre sanger i gruppen <br></br>
              3. Finn en eksisterede gruppe <br></br>
              4. Dupliser en eksisterende sang<br></br>
            </p>
          </div>

          <h2 className="level2_headlines">System Usability Scale</h2>
          <section className="body_text">
            Til slutt ble intervjuobjektene bedt om å gjennomføre en SUS (System
            Usability Scale) undersøkelse som gir håndfaste tall på brukernes
            opplevelse av nåværende app. Denne viste at brukerne stort sett var
            fornøyd med funksjonaliteten til appen.
            <div className="picture_padding_top">
              <ZoomableImageGallery id="3" />
              <p className="text_image">0 = ikke fornøyd, 5 = fornøyd</p>
            </div>
          </section>
        </div>

        {/*Analyse*/}
        <section id="analyse" className="theme_container">
          <div className="heading_with_arrow">
            <h2 className="level3_headlines">02. Analyse og nøkkelfunn</h2>
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
            <h1 className="level1_headlines">
              Atomic UX research <br></br> Canvas
            </h1>
          </div>

          <div className="padding_sectioning">
            <p className="body_text">
              Funn fra intervju og nullpunktsmåling ble systematisert ved bruk
              av Atomic UX research canvas. Her ble nøkkelfunn gjort om til
              brukerhistorier.
            </p>
            <section className="picture_padding">
              <ZoomableImageGallery id="4" />
              <p className=" text_image">
                Intervjuene er systematisert horisontalt med hver sin påfølgende
                rute med fakta som så ble gjort om til innsikt og mulighet for
                forbedringer.
              </p>
            </section>
            <ZoomableImageGallery id="5" />
            <p className=" text_image">
              Fra fakta, til innsikt, til muligheter
            </p>
          </div>
        </div>

        {/*NØKKELFUNN-ANALYSE*/}
        <div class="thin_line line_with_text">
          <span>Nøkkelfunn analyse</span>
        </div>
        <div className="body_text text_centeralign centered_padding">
          Etter analysen ble tre hovedfunn rammen for videre utvikling av appen.
          Selv om SUS viste at brukerne stort sett var fornøyde, viste dermed
          intervju og nullpunktsmåling at det fantes forbedringspotensiale.{" "}
        </div>

        {/*Grid with the different findings*/}
        <div className="container">
          <div className="grid-container3">
            <div className="number_styling">01</div>
            <div className="number_styling">02</div>
            <div className="number_styling">03</div>
            <div className="bold_text">Vanskelig arbeidsflyt i partituret</div>
            <div className="bold_text">
              Appen blir brukt i undervisning og konsert
            </div>
            <div className="bold_text">
              Ingen mulighet for tekst under notene
            </div>

            <div className="item_box_dissimilis">
              Brukerne brukte lenger tid enn nødvendig grunnet tungvindt
              navigering i partituret, spesielt ved bruk av iPad
            </div>
            <div className="item_box_dissimilis">
              Instruktørene bruker appen til undervisning, enten ved å vise
              eksporteringsmodus eller å scrolle gjennom partituret.
            </div>
            <div className="item_box_dissimilis">
              Ingen måte å legge til sangtekst under notene for formål der det
              trengs
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

            <div className="bold_text">Virtuelt piano</div>
            <div className="bold_text">Presentasjonsmodus</div>
            <div className="bold_text">Sangtekst under notene</div>

            <div>
              Mulighet for brukeren å benytte seg av piano for å forbedre
              arbeidsflyten ved partiturlaging, samt til undervisningsformål
            </div>
            <div>
              Presentasjonsmodus gir brukeren lett tilgang til sine lagrede
              sanger under konsert, samt tilgang til det virtuelle pianoet til
              opplæringsformål{" "}
            </div>
            <div>Mulighet for brukeren å skrive inn sangtekst under notene</div>
          </div>
        </div>

        {/* Virtuelt Piano */}
        <section id="piano" className="theme_container">
          <div className="heading_with_arrow">
            <h2 className="level3_headlines">03. Virtuelt piano</h2>
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
            Funn fra intervju viste at det var behov for en enklere måte å
            navigere seg i partituret på. Spesielt vanskelig var det for
            instruktører som benyttet seg av iPad til å lage fargenotasjoner.
            Her var flyten tungvindt da de måtte bruke flere trykk for å få frem
            en note på partituret.
            <br />
            <br />
            Etter samtale med musikkinstruktørene ble det tydelig at å bruke
            piano som alternativ flyt var et naturlig valg. Det muliggjorde
            enkel tilgang til de mest brukte notene, samtidig som at det var noe
            alle var kjente med fra før.
          </p>

          {/* Brukerhistorie plassert utenfor grid */}
          <div className="grid_placement2">
            <div className="picture_padding_bottom">
              <div className=" text_centeralign user_story_padding">
                <p className="text_very_small">Brukerhistorie</p>
                <p className="text_italic">
                  Som bruker skal jeg kunne få opp et visuelt piano på skjermen
                  og spille på det og det kommer lyd
                </p>
              </div>
            </div>

            <ZoomableImageGallery id="6" />
            <p className="text_image">
              I gammel flyt måtte man for hver note trykke på en tom rute, velge
              noteverdi og tonelengde før man trykket seg videre til neste - det
              var slitsomt og lite intuitivt.
            </p>
          </div>
        </div>

        {/* Resterende innhold i grid */}

        <div className=" project_container">
          <div className="padding_sectioning_headlines">
            <h1 className="level1_headlines">Prototyping og testing</h1>
          </div>

          <div className="padding_sectioning_headlines">
            <p className="body_text">
              {" "}
              Det var flere faktorer å ta hensyn til ved utforming av pianoet.
              Vi lagde derfor en liste med egenskaper som vi kunne bruke som
              retningslinjer for endelig design.{" "}
            </p>
          </div>

          {/*Grid with the different findings*/}

          <div className="grid-container2 grid_placement2 padding_sectioning">
            <div className="item-1-container2 number_styling">01</div>
            <div className="item item-13 bold_text">
              Enkel tilgang til pianoet
            </div>
            <div className="item item-4 body_text grid_placement2">
              Funksjonaliteten skal være lett å finne og lett å lukke ved behov
            </div>

            <div className="item-2-container2 number_styling grid_placement1">
              02
            </div>
            <div className="item item-14 bold_text grid_placement2">
              Pianoet må ikke overskygge eksisterende design
            </div>
            <div className="item item-5 body_text grid_placement2">
              Pianoet skal passe inn med eksisterende design. Skal ikke være en
              distraherende faktor
            </div>

            <div className="item-3 number_styling grid_placement1">03</div>
            <div className="item item-15 bold_text grid_placement2">
              Hver note har en tilsvarende farge
            </div>
            <div className="item item-6 body_text grid_placement2">
              Pianoet må reflektere eksisterende løsning ved å ha samme
              fargekoder som notene ellers har
            </div>

            <div className="item-3 number_styling grid_placement1">04</div>
            <div className="item item-15 bold_text grid_placement2">
              Muliggjøre bruk til undervisningsformål
            </div>
            <div className="item item-6 body_text grid_placement2">
              Kunne bruke pianoet til undervisningsformål ved at tangentene
              kommer i fokus ved tilbakespilling{" "}
            </div>
          </div>
        </div>

        <div className=" project_container">
          <h2 className="level2_headlines">1. Formuttrykk</h2>

          <p className="body_text">
            For å finne frem til formuttrykket til pianoet, tok vi inspirasjon
            fra hvordan instruktørene lærte bort musikk ved å gi hver note en
            farge. Det ble dermed naturlig å videreføre det til designet.
            <br></br>
            <br></br>
            Vi kom frem til to design med en eller to oktaver som vi sendte til
            instruktørene for tilbakemelding. Her var instruktørene enstemmig i
            valg av nummer fire som favoritt. Dette fordi den best reflekterte
            det elevene og instruktørene var kjent med fra før, samtidig som at
            to oktaver ga dem mulighet til å skrive flere sanger.
          </p>
        </div>
        <div className="picture_inline picture_padding_top">
          <ZoomableImageGallery id="7" className=" image_center" />
        </div>

        <div className=" project_container project-margin-between-items">
          <h2 className="level2_headlines">2. Avspilling av piano</h2>

          <p className="body_text">
            Videre måtte vi finne en god måte å visualisere avspilling av
            pianoet. Det måtte være tydelig nok til at svaksynte elever så
            fargespillet og forstod hvilken tangent som var i fokus. Dermed gikk
            vi for design tre.
          </p>
        </div>
        <div className="picture_inline picture_padding_top">
          <ZoomableImageGallery id="8" className=" image_center" />
        </div>

        <div className=" project_container project-margin-between-items ">
          <h2 className="level2_headlines">3. Plassering og endelig design</h2>

          <p className="body_text">
            Ved å plassere pianoet i en “bottomdrawer” hadde vi to muligheter
            for å skjule pianoet. Ved trykk på pianoknappen vil helle
            bottomdrawer forsvinne. Om bruker “slider” bottomdrawer nedover, vil
            den legge seg på bunnen av siden (spesielt hendig for Ipad brukere)
          </p>
        </div>
        <div className="picture_inline picture_padding_top grid-container2-image">
          <ZoomableImageGallery id="9" />
          <ZoomableImageGallery id="10" />
        </div>

        {/*PRESENTASJONSMODUS*/}
        <section id="presentasjonsmodus" className="theme_container">
          <div className="heading_with_arrow">
            <h2 className="level3_headlines">04. Presentasjonsmodus</h2>
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
            Appens tiltenkte funksjon er å bruke den som et verktøy til å
            opprette partitur for så å eksportere og skrive dem ut i
            papirformat. Funn fra intervju viste dog at brukerne valgte heller å
            bruke appen som et visningsmodus istedenfor å printe ut partitur.
            Det var derfor behov for en side som lot brukerne benytte appen til
            opplæringsformål, samt under konserter.
          </p>

          {/* Brukerhistorie plassert utenfor grid */}
          <div className="user_story_padding text_centeralign grid_placement2">
            <p className="text_very_small">Brukerhistorie</p>
            <p className="text_italic">
              Som instruktør kan jeg bruke presentasjonsmodus som et
              opplæringsverktøy for mine elever istedenfor å printe ut partitur
            </p>
          </div>
        </div>

        {/* Resterende innhold i grid */}
        <div className=" project_container">
          <div className="grid_placement2  padding_sectioning"></div>

          <div className="padding_sectioning">
            <h1 className="level1_headlines">Prototyping og testing</h1>
          </div>

          <p className="body_text">
            {" "}
            I løpet av designprosessen tok vi høyde for disse faktorene ved
            utforming av presentasjonsmoduset:{" "}
          </p>

          {/*Grid with the different findings*/}

          <div className="grid-container2 grid_placement2">
            <div className="item-1-container2 number_styling">01</div>
            <div className="item item-13 bold_text">
              Enkel tilgang til flere sanger innen en valgt gruppe
            </div>
            <div className="item item-4 body_text grid_placement2">
              Gjøre det mulig for instruktørene å bytte mellom sanger under
              konserter
            </div>

            <div className="item-2-container2 number_styling grid_placement1">
              02
            </div>
            <div className="item item-14 bold_text grid_placement2">
              Navigering og fokusering på notene
            </div>
            <div className="item item-5 body_text grid_placement2">
              Muliggjøre bruk av hurtigtaster og fokus på noter. Gjør det enkelt
              for eleven å vite hvilken note som instruktøren peker ut
            </div>

            <div className="item-3 number_styling grid_placement1">03</div>
            <div className="item item-15 bold_text grid_placement2">
              Tilgang til piano
            </div>
            <div className="item item-6 body_text grid_placement2">
              Tilgang til pianoet slik at det kan brukes som et ekstra
              hjelpemiddel ved opplæring av elever
            </div>
          </div>
        </div>

        <div className="project_container  project-margin-between-items">
          <h2 className="level2_headlines">
            1. Navigering til presentasjonsmodus
          </h2>
          <p className="body_text">
            Tilgang til presentasjonsmodus viste seg å være mest intuitiv å ha
            på partitursiden. På den måten fikk man lett tilgang til å se sangen
            man ønsket å presentere ved å trykke på knappen i høyre hjørne.
          </p>
          <div className=" grid_placement2 picture_padding_top">
            <ZoomableImageGallery id="11" />
          </div>
        </div>

        <div className=" project_container  project-margin-between-items">
          <h2 className="level2_headlines">2. Design og funksjoner</h2>

          <p className="body_text">
            Designet baserte seg på øvrig design i appen for å skape kontinuitet
            mellom nytt og gammelt. Her kom vi frem til tre alternativer som vi
            diskuterte med mentorer, utviklere og tester for å komme frem til et
            design som ville oppfylle krav til både form og funksjon.<br></br>
            <br></br>
            Oppsettet til forslag nr. 3 ble valgt, da en ny side istedenfor
            overlay ville gjøre det enklere å legge til eller trekke fra
            funksjoner ved fremtidig tilpasning av siden. I tillegg gjorde det
            mulig å gjøre menylinjen mindre som ga mer plass til
            hovedfunksjonaliteten - visning av partituret.
          </p>
        </div>
        <div className="picture_inline picture_padding_top">
          <ZoomableImageGallery id="12" />
        </div>
        <div className=" project_container  project-margin-between-items">
          <h2 className="level2_headlines">3. Endelig design</h2>
        </div>

        <div className="picture_inline picture_padding_top">
          <ZoomableImageGallery id="13" className="project_image" />
        </div>

        {/*SANGTEKST*/}
        <section id="sangtekst" className="theme_container">
          <div className="heading_with_arrow">
            <h2 className="level3_headlines">05. Sangtekst</h2>
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
            Gjennom brukerintervju kom det frem et ønske om å ha tilgang til
            sangtekst i partituret. Dette ville øke funksjonaliteten til appen
            ytterligere ved å gi brukerne mulighet til å koble sangtekst til
            noter - likt som på et “vanlig” noteark.
          </p>

          {/* Brukerhistorie plassert utenfor grid */}
          <div className="text_centeralign grid_placement2 user_story_padding">
            <p className="text_very_small">Brukerhistorie</p>
            <p className="text_italic">
              Som instruktør skal jeg ha tilgang til sangtekst for å kunne
              tilpasse partituret til sangere.
            </p>
          </div>
        </div>

        {/* Resterende innhold i grid */}
        <div className=" project_container">
          <div className="grid_placement2  padding_sectioning"></div>

          <div className="padding_sectioning">
            <h1 className="level1_headlines">Prototyping og testing</h1>
          </div>

          <p className="body_text">
            {" "}
            I løpet av designprosessen tok vi høyde for disse faktorene ved
            utforming av sangtekst:{" "}
          </p>

          {/*Grid with the different findings*/}

          <div className="grid-container2 grid_placement2">
            <div className="item-1-container2 number_styling">01</div>
            <div className="item item-13 bold_text">
              Sangtekst skal ikke være synlig som standard
            </div>
            <div className="item item-4 body_text grid_placement2">
              Sangtekst skal være en tilleggsfunksjon om brukeren ønsker det.
              Den skal derfor ikke være synlig som standard.
            </div>

            <div className="item-2-container2 number_styling grid_placement1">
              02
            </div>
            <div className="item item-14 bold_text grid_placement2">
              Sangtekst skal være lett tilgjengelig
            </div>
            <div className="item item-5 body_text grid_placement2">
              Sangtekst skal lett kunne skrus av og på etter behov.
            </div>

            <div className="item-3 number_styling grid_placement1">03</div>
            <div className="item item-15 bold_text grid_placement2">
              Sangtekst skal være mulig å redigere
            </div>
            <div className="item item-6 body_text grid_placement2">
              Sangtekst skal være mulig å redigere ved å slette og skrive inn ny
              sangtekst.
            </div>
          </div>
        </div>

        <div className="project_container  project-margin-between-items">
          <div className="padding_sectioning">
            <h2 className="level2_headlines">1. Skissering</h2>
          </div>
          <p className="body_text">
            Vi skisserte flere mulige løsninger til tekstinputfeltet. Det er mye
            som foregår på siden og fokuset ble dermed på å gjøre
            tekstinputfeltet så lite distraherende som mulig på
          </p>
        </div>
        <div className=" picture_padding_top picture_inline">
          <ZoomableImageGallery id="16" className="project_image" />
        </div>

        <div className=" project_container  project-margin-between-items">
          <h2 className="level2_headlines">2. Videreutvikling</h2>
        </div>
        <div className=" picture_padding_top picture_inline">
          <ZoomableImageGallery id="17" className="project_image" />
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

export default Project1;
