import React from "react";
import "./project.css";
import "./gridcontainers.css";
import Skumring_hoved from "../../assets/projectAssets/project2/Skumring_hoved.svg";
import ZoomableImageGallery from "../image/ZoomableImageGallery";
import Arrow_upward from "../../assets/projectAssets/allProjects/arrow_upward_skumring.svg";

const Project2 = () => {
  return (
    <div id="top">
      {/*Top section with image*/}
      <div className="top_section top_color_Skumring">
        <img
          src={Skumring_hoved}
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
            onClick={() => document.getElementById("utvikle").scrollIntoView()}
            className="scroll_button"
          >
            Utvikle idéer
          </button>
          <button
            onClick={() =>
              document.getElementById("prototyping").scrollIntoView()
            }
            className="scroll_button"
          >
            Prototyping
          </button>
          <button
            onClick={() => document.getElementById("resultat").scrollIntoView()}
            className="scroll_button"
          >
            Resultat
          </button>
        </div>
      </div>
      {/* OVERSKRIFT */}
      <div className="project_margin_top_container">
        <h1 className="project_title">Skumring</h1>
      </div>
      {/*BESKRIVELSE AV PROSJEKTET*/}
      <div className="grid-container1">
        <section>
          <h2 className="text_very_small_skumring padding_headline">
            BAKGRUNN
          </h2>
          <p className="body_text">
            I løpet av vårsemesteret 2024 bidro jeg i et gruppeprosjekt i faget
            “Software engineering med prosjektarbeid”. Inspirert av en
            fantastisk solnedgang på vei hjem en kald januar ettermiddag, falt
            valget på å lage en app som forutså når omstendighetene lå til rette
            for å ta fine solnedgangsbilder. Appen baserer seg på værdata fra
            Meterologisk institutt og er laget i samarbeid med medlemmer fra
            fotoklubben på Chateau Neuf.
          </p>
        </section>

        <section>
          <h2 className="text_very_small_skumring padding_headline">
            TEAM OG ROLLE
          </h2>
          <p className="bold_text_small">Teamstørrelse</p>
          <p className="body_text">6</p>
          <p className="bold_text_small"> Min rolle </p>
          <p className="body_text">
            UX/UI design Frontend <br></br>
            Brukerintervjuer, analyse, workshops,<br></br>
            universell, utforming, wireframes, prototyping & testing, FrontEnd{" "}
            <br></br>
            <br></br>
            <p className="bold_text">Verktøy</p>
            <p className="body_text"> Figma, Miro, Trello, Kotlin, Git</p>
            Juni 2024 - august 2024 <br></br>
          </p>
        </section>

        {/*BESKRIVELSE AV UTFORDRINGER, HOVEDOPPGAVER, ØNSKER FRA BRUKERNE*/}

        <section>
          <h2 className="text_very_small_skumring padding_headline">
            UTFORDRING
          </h2>
          <p className="body_text">
            Det finnes mange gode værapper på markedet allerede. Utfordringen
            ble da å skille seg ut som en ressurs for hobbyfotografene, med det
            de trengte av værdata for å ta gode bilder av solnedganger.
          </p>
        </section>

        <section>
          <h2 className="text_very_small_skumring padding_headline">
            HOVEDOPPGAVER FOR DESIGNTEAMET
          </h2>
          <p className="body_text">
            Samling av innsikt gjennom intervju, workshop og analyse av data{" "}
            <br></br>
            Design av løsning basert på innsikt fra intervju, workshop,
            CrazyEight og brukertesting <br></br>
            Ansvar for universell utforming<br></br>
          </p>
        </section>
      </div>
      {/*Margin for hele siden*/}
      <div className="project_margin_top_container">
        {/*ØNSKER FRA BRUKERNE */}
        <div className="project-margin-between-items">
          <div class="thin_line line_with_text">
            <span>FRA IDÉ TIL PRODUKT</span>
          </div>
          <p className="body_text_medium text_centeralign centered_padding">
            Design Thinking ble brukt som metode for designprosessen. Metodikken
            gjorde det mulig å ha en iterativ prosess, der tilbakemeldinger fra
            brukerne var med på å bestemme veien fra idé til endelig produkt.
            <br></br>
            <br></br>
            Videre ble Scrumban brukt som smidig praksis for strukturering av
            arbeidet. Hver sprint varte i en uke med deler fra Scrum, slik som
            Sprintplanlegging og retrospektiv på tirsdager og Standup på
            fredager. For oppgavehåndtering benyttet vi oss av et Kanban-brett
            der oppgaver ble flyttet fra “To-Do” og “Doing” til “Done”.
          </p>

          <ZoomableImageGallery id="29" className="project_image" />
        </div>

        {/* DATAINNSAMLING */}
        <section id="datainnsamling" className="theme_container">
          <div className="heading_with_arrow">
            <h2 className="level3_headlines_skumring">01. Datainnsamling</h2>
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
            <h1 className="level1_headlines">Gruppeintervju</h1>
          </div>

          <p className="body_text">
            Gjennom et semi-strukturert gruppeintervju stilte vi åpne spørsmål
            som ga rom for diskusjon.Lydopptak og notater ble brukt som metode
            for datainnsamling og sikret nok materiale for å begynne å forstå
            brukernes ønsker og behov til appen.
            <br></br>
            <br></br>
            <div className="bold_text">Et utdrag av spørsmålene stilt:</div>-
            Hvilke verktøy pleier dere å bruke når dere tar bilder?
            <br></br> - Bruker dere applikasjoner fra før når dere fotograferer?
            <br></br> - Hva opplever dere som eventuelle utfordringer når dere
            tar bilder?
            <br></br>- Hvordan påvirker værforholdene valget av steder å
            fotografere?
            <br></br>- Hva ser dere etter når dere skal ta bilder av
            solnedganger?
          </p>
          <div className="picture_padding_top grid_placement2">
            <ZoomableImageGallery id="30" className=" image_center" />
          </div>
        </div>

        {/*PRESENTASJONSMODUS*/}
        <section id="analyse" className="theme_container">
          <div className="heading_with_arrow">
            <h2 className="level3_headlines_skumring">
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

        <div className="project_container ">
          <div className="padding_sectioning">
            <h1 className="level1_headlines">Affinity diagram</h1>
          </div>

          <div className="padding_sectioning">
            <p className="body_text">
              Defineringsfasen gikk ut på å trekke ut den viktigste innsikten
              fra datainnsamlingen for å komme frem til et klarere bilde av
              brukernes behov og krav til appen. Her ble affinity diagram brukt
              som metodikk for å utforme temaer ved å samle tanker, sitater og
              idéer fra intervjuene på post-it lapper.
              <br></br>
              <br></br>
              Basert på funnene fant vi sammenhenger og dro linjer på tvers av
              de forskjellige brukerne. Dette ga oss forståelse for brukernes
              behov som igjen ga oss idéer til funksjonaliteter og hvilke
              aspekter av appen det var lurt for oss å fokusere på videre i
              designet.
            </p>

            <section className="picture_padding_top">
              <ZoomableImageGallery id="31" />
            </section>
          </div>
        </div>

        <div className="project_container project-margin-between-items">
          <h1 className="level1_headlines">
            Funksjonelle og ikke- funksjonelle krav
          </h1>

          <p className="body_text">
            Innsikten fra defineringsfasen ga oss mulighet til å definere
            funksjonelle og ikke-funksjonelle krav som ga oss en samlet
            forståelse av hvordan vi skulle bevege oss videre med tanke på
            appens utforming. Kravene ble deretter hierarkisk sortert uf fra
            prioritet.
          </p>

          <section className="picture_padding_top grid_placement2">
            <ZoomableImageGallery id="32" />
          </section>
        </div>

        {/* DATAINNSAMLING */}
        <section id="utvikle" className="theme_container">
          <div className="heading_with_arrow">
            <h2 className="level3_headlines_skumring">03. Utvikle idéer</h2>
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
            Basert på innsikten fra analysen av intervjuene, brainstormet vi med
            hjelp av CrazyEight. Her var hele gruppen med, for å få med varierte
            synspunkter og idéer. CrazyEight hjalp i tillegg gruppen med å få en
            felles forståelse av veien videre der alles tanker og ønsker for
            produktet ble hørt og tatt hensyn til. På den måten hadde vi et godt
            utgangspunkt for videre idémyldring rundt appens utforming og
            funksjon.
          </p>

          <div className="picture_padding_top grid_placement2">
            <ZoomableImageGallery id="33" />
          </div>
        </div>

        {/*PRESENTASJONSMODUS*/}
        <section id="prototyping" className="theme_container">
          <div className="heading_with_arrow">
            <h2 className="level3_headlines_skumring">
              04. Prototyping og testing
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
            <h1 className="level1_headlines">Low- Fidelity prototype</h1>
          </div>

          <p className="body_text">
            Prototypingsfasen skjedde i flere omganger. Basert på funnene fra
            CrazyEight lagde vi den første prototypen i Figma som ble
            utgangspunkt for Minimal Viable Product (MVP) som ble kodet i
            Kotlin.
          </p>

          {/*MÅ LEGGE INN FLERE BILDER */}

          <div className="grid-container5 grid_placement2 picture_padding_top picture_padding_bottom">
            <ZoomableImageGallery
              id="34"
              className="project_image image_center grid_placement2"
            />
            <ZoomableImageGallery
              id="35"
              className="project_image image_center grid_placement2"
            />
            <ZoomableImageGallery
              id="36"
              className="project_image image_center grid_placement2"
            />
            <ZoomableImageGallery
              id="37"
              className="project_image image_center grid_placement2"
            />
          </div>
        </div>

        <div className="project_container grid_placement1">
          <div className="padding_sectioning ">
            <h1 className="level1_headlines">Geriljatesting</h1>
          </div>

          <p className="body_text">
            For å finne ut hvordan å forbedre eksisterende design, valgte vi å
            geriljateste foreløpig løsning med venner og kjente. Svar vi ønsket
            å få var om layouten og konseptet bak appen var intuitiv. Totalt
            geriljatestet vi med 14 personer.
            <br></br>
            <br></br>
            Funn fra geriljatestingen: <br></br>- Måtte skrenke inn omfanget av
            appen, gjøre den mer rettet mot solnedganger <br></br>- Ønsket
            tydeligere ikoner med beskrivende tekst <br></br>- Forvirrende med
            stjernerangering av været, ønsket beskrivelse eller forklaring av
            rangeringen  
          </p>
        </div>

        <div className="project_container project-margin-between-items">
          <div className="padding_sectioning">
            <h1 className="level1_headlines">High-fidelity prototype 1.0</h1>
          </div>

          <p className="body_text">
            Basert på funn fra geriljatestingen ble det laget to High-fidelity
            prototyper som vi kunne teste under brukertestingen. Her var fokus
            på et mer helhetlig design, samt finne ut av hvilken flyt brukerne
            likte best av de to alternativene.
            <br></br>
            <br></br>
            Hovedforskjellen mellom de to flytene var hvordan å komme til sine
            favoritter. Flyt 1 gjorde dette gjennom “My Locations”, mens Flyt 2
            hadde sin egen navigasjon til favoritter.
          </p>

          <div className="grid_placement2 picture_padding_top">
            <ZoomableImageGallery id="43" />
          </div>
          <div className="button_padding_top_bottom grid_placement2">
            <a
              href="https://www.figma.com/proto/s2DLgTDQRIKmnEzQQH6dNi/High-fi-flow?node-id=1-1652&p=f&t=8nFuRCdqzWN1wwEp-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A1575&show-proto-sidebar=1"
              className="button_container"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button_skumring grid_placement2">
                Flyt 1
              </button>
            </a>
          </div>

          <div className="picture_padding_top grid_placement2">
            <ZoomableImageGallery id="44" className="  " />
          </div>
          <div className="button_padding_top_bottom grid_placement2">
            <a
              href="https://www.figma.com/proto/s2DLgTDQRIKmnEzQQH6dNi/High-fi-flow?node-id=1-341&p=f&t=pykJFnqifyox4vlJ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A341&show-proto-sidebar=1"
              className="button_container grid_placement2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button_skumring grid_placement2">
                Flyt 2
              </button>
            </a>
          </div>
        </div>

        <div className="project_container project-margin-between-items">
          <div className="padding_sectioning">
            <h1 className="level1_headlines">Brukertesting</h1>
          </div>

          <p className="body_text">
            Vi gjennomførte tre brukertester der prototypens funksjonalitet og
            brukskvalitet stod i fokus. Vi ga en kort introduksjon til appen før
            vi ba deltakerne klikke seg gjennom de to forskjellige flytene.
            <br></br>
            <br></br>
            <div className="bold_text">Utvalg av spørsmål:</div>- Kan du
            fortelle hvordan du opplever flyten til appen? <br></br>- Hva tror
            du knappene betyr? <br></br>- Hvor intuitiv opplever du appen? Er
            den enkel i bruk? <br></br>- Hvilken flyt foretrekker du? <br></br>-
            Hvorfor? <br></br>
            <br></br>
            <div className="bold_text">Funn:</div> - Foretrakk Flyt 2, grunnet
            enkel tilgang til sine Favoritter <br></br>- Forvirrende med ikonene
            som ble brukt til rangering av værforhold <br></br>- Ønsket
            besrkivelse av hvordan vi rangerte gode og dårlige forhold <br></br>
            - Fargene i designet var for sterke og distraherende <br></br>-
            Informasjonsskjermen med kamerainnstillinger opplevdes som
            unødvendig <br></br>- All nyttig funksjonalitet burde være lett
            tilgjengelig på hjemskjermen <br></br>- Ønsket å kunne se avstand
            fra sin posisjon til en lokasjon hvor de kunne ta bilde av
            solnedgang <br></br>- Ønsket å kunne legge til sine steder direkte
            fra kartet med “long-press” <br></br>
          </p>
          <div className="picture_padding_top grid_placement2">
            <ZoomableImageGallery id="39" />
          </div>
        </div>

        <section id="resultat" className="theme_container">
          <div className="heading_with_arrow">
            <h2 className="level3_headlines_skumring">05. Endelig design</h2>
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
          <h1 className="level1_headlines">Endelig design - mørkt tema</h1>
          <p className="body_text grid_placement2">
            Med brukertestingen friskt i minnet, ble fokus videre på å lage en
            High- fidelity prototypen som vi kunne basere det endelige designet
            i appen på. Her var det spesielt fokus på tilbakemeldingene fra
            brukertestingen, samt å sjekke at alle farger tilfredsstilte krav
            til AAA for kontrast og at teksten var lett lesbar og forståelig.
          </p>

          <div className="picture_padding_top grid_placement2">
            <ZoomableImageGallery id="40" />
          </div>
        </div>

        <div className="project_container project-margin-between-items">
          <h1 className="level1_headlines">Endelig design - lyst tema</h1>

          <div className="picture_padding_top grid_placement2">
            <ZoomableImageGallery id="41" />
          </div>
        </div>
      </div>
      <div className="button_container theme_container">
        <button
          className="button_skumring"
          onClick={() => document.getElementById("top").scrollIntoView()}
        >
          Til toppen
        </button>
      </div>
    </div>
  );
};

export default Project2;
