import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom Marker Icon
const customIcon = new L.Icon({
  iconUrl: "/marker.svg", // Path to your custom SVG marker
  iconSize: [32, 32], // Size of the icon
  iconAnchor: [16, 32], // Anchor point for the icon
  popupAnchor: [0, -32], // Popup positioning relative to the icon
});

// Geolocation Custom Icon
const geolocationIcon = L.icon({
  iconUrl: "/geolocation.svg",
  iconSize: [30, 30],
  iconAnchor: [15, 0],
});
// MarkerData interface for typing the markers
interface MarkerData {
  id: number;
  position: [number, number];
  title: string;
  category: string;
  description: string;
}

// List of markers to display on the map
const markers: MarkerData[] = [
  {
    id: 1,
    position: [63.3177774, -20.4972221],
    title: "Geirfuglasker",
    category: "Huldufólk",
    description:
      "Í fyrri tíð bjó prestur einn á Melstað er Ásmundur hét; hann var ríkur maður og vel metinn. Hann átti tvær dætur...",
  },
  {
    id: 2,
    position: [65.1841666, -13.759167],
    title: "Loðmundarfjörður",
    category: "Huldufólk",
    description:
      "Rík hjón voru eitt sinn á bæ í Loðmundarfirði; þau héldu tvo vinnumenn og tvær vinnukonur...",
  },
  {
    id: 3,
    position: [65.6695917, -22.607964],
    title: "Melstaðarkirkja",
    category: "Huldufólk",
    description:
      "Í fyrri tíð bjó prestur einn á Melstað er Ásmundur hét; hann var ríkur maður og vel metinn. Hann átti tvær dætur...",
  },
  {
    id: 4,
    position: [64.08799549, -16.98293665],
    title: "Skaftafell",
    category: "Tröll",
    description:
      "Í Skaftafelli er sagt að mjög lengi hafi búið sami ættleggur, en helst er getið eins manns er Einar hét...",
  },
  {
    id: 5,
    position: [64.1540458, -21.2815924],
    title: "Jorukleif",
    category: "Tröll",
    description:
      "Jórunn hét stúlka ein; hún var bóndadóttir einhvers staðar úr Sandvíkurhrepp í Flóanum; ung var hún og efnileg, en heldur þótti hún skapstór. Hún var matselja hjá föður sínum. Einhvern dag bar svo við, að hestaat var haldið skammt frá bæ Jórunnar; átti faðir hennar annan hestinn, er etja skyldi, og hafði Jórunn miklar mætur á honum. Hún var viðstödd hestaatið og fleiri konur; en er atið byrjaði, sá hún, að hestur föður hennar fór heldur halloka fyrir.",
  },
  {
    id: 6,
    position: [63.7153782, -19.8436617],
    title: "Eyvindarmúli",
    category: "Tröll",
    description:
      'Það var eitthvort sinn þá hann var ungur að hann var sendur til sauða upp til fjalls, en skelldi yfir níðaþoku svo hann vissi ekki hvað hann fór. Og þá hann var lengi búinn að gánga heyrði hann að kallað var og sagt: "Tökum við hann. Þá kom rödd úr annari átt sem sagði: Tökum við hann ekki.',
  },
  {
    id: 7,
    position: [65.110218, -13.8434718],
    title: "Rafnkelsstaðir",
    category: "Draugar",
    description:
      "Bergþór bjó á Hrakkellsstöðum (=Rafnkelsstöðum) fyri og eftir miðbik 18. aldar (lifði 1767). Hann var maður fjáður, einkum að sjávarútvegi og átti mörg skip. Það var þá siður að gjalda sjómönnum skiplag sitt í mjöli, hverjum tvo fjórðunga, eða þá annan í mjöli, en hinn í hörðum fiski, og færið skyldu þeir fá að vertíðarlokum; flestir létu þá fá stykki úr gömlu færi. Þar var með sjómönnum Bergþórs unglingspiltur úr Norðurlandi ósjóvanur.",
  },
  {
    id: 8,
    position: [65.0625528, -15.1571429],
    title: "Snjóholt",
    category: "Draugar",
    description:
      "Í tíð Brynjólfs biskups Sveinssonar kom í Skálholt margt umferðarfólk meðal hvörs að var kerling ein að nafni Sezelja sem vandi komur sínar þangað oftlega, og höfðu skólapiltar við hana ýmsar glettingar og var einn hvað mest fyrir þeim í þessu, að nafni Eiríkur, og dugði ei þó biskup aðvaraði hann að erta ekki kerlingu upp.",
  },
  {
    id: 9,
    position: [64.5194429, -21.9365519],
    title: "Reynistaðarkirkja",
    category: "Draugar",
    description:
      "Um haustið 1780 sendi Halldór Bjarnason, er þá hélt Reynistaðarklaustur, son sinn tvítugan, er Bjarni hét, og mann með, er Jón hét og var kallaður Austmann, suður um land til fjárkaupa því fyrirfarandi ár hafði mjög fallið fé á Norðurlandi. Síðar um haustið sendi og Halldór yngri son sinn suður, er Einar hét, ellefu ára að aldri, og mann með honum, er Sigurður hét, og áttu þeir að hjálpa hinum til að reka féð norður er þeir höfðu keypt. Það er mælt að Einar hafi nauðugur farið þessa för og hafi sagt að hann mundi ekki aftur heim koma.",
  },
  {
    id: 10,
    position: [65.6579815, -20.2929826],
    title: "Húnavatnssýsla",
    category: "Helgisögur",
    description:
      "Um lok 18. aldar bjó sá bóndi í Húnavatnssýslu sem Ketill hét. Meðan kona hans var þunguð dreymdi hana að satan kæmi til sín og beiddi sig að láta barnið sem hún gengi með heita í höfuðið á sér. Af því það er almenn trú að það verði barninu fyrir einhverju góðu ef maður verður við tilmælum þess sem vitjar nafns til konu ætluðu hjónin að láta barnið heita Satan.",
  },
  {
    id: 11,
    position: [64.1384228, -20.2621234],
    title: "Hruni",
    category: "Helgisögur",
    description:
      "Einu sinni til forna var prestur í Hruna í Árnessýslu, sem mjög var gefinn fyrir skemmtanir og gleðskap. Það var ávallt vani þessa prests, þegar fólkið var komið til kirkju á jólanóttina, að hann embættaði ekki fyrri part næturinnar, heldur hafði dansferð mikla í kirkjunni með sóknarfólkinu, drykkju og spil og aðrar ósæmilegar skemmtanir langt fram á nótt. Presturinn átti gamla móður, sem Una hét; henni var mjög á móti skapi þetta athæfi sonar síns og fann oft að því við hann.",
  },
];

const Map: React.FC = () => {
  const [userPosition, setUserPosition] = useState<[number, number] | null>(
    null
  );

  // Geolocation logic
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserPosition([
            position.coords.latitude,
            position.coords.longitude,
          ]);
        },
        (error) => {
          console.error("Error obtaining geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="relative w-full h-full">
      <MapContainer
        center={[64.9631, -19.0208]} // Center of Iceland
        zoom={6} // Zoom level
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        />

        {/* Render each marker */}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            icon={customIcon} // Use the custom icon for each marker
          >
            <Popup className="custom-popup">
              <div className="!bg-sagnir-100 !text-sagnir-200 !border-sagnir-200 !rounded-none !w-[19rem] !h-auto !p-2 !shadow-none !m-1">
                <h2 className="!text-xl !font-serifExtra">{marker.title}</h2>
                <h3 className="!text-sagnir-200 !text-md !font-serifExtra !inline-block">
                  {marker.category}
                </h3>
                <p className="!text-sagnir-200 !font-glare">
                  {marker.description}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
        {/* User's Geolocation Marker */}
        {userPosition && (
          <Marker position={userPosition} icon={geolocationIcon}>
            <Popup className="custom-popup">
              <div className="!bg-sagnir-100 !text-sagnir-200 !border-sagnir-200 !rounded-none !w-auto !h-auto !p-0.5 !shadow-none">
                <h3 className="!text-sagnir-200 !text-lg !font-glare !inline-block">
                  Þú ert her !
                </h3>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
