<template>
  <div class="scoreboard container">
    <div class="table">
      <span class="table__header">Koht</span>
      <span class="table__header">Sõitjad</span>
      <span class="table__header">Hüppe pikkus</span>
      <template v-for="(result, index) in tableData">
        <span class="table__content" :style="{fontWeight: '400'}" :key="index">{{ index + 1 }}</span>
        <span class="table__content" :key="`team-${index}`">{{ result.team }}</span>
        <span class="table__content" :key="`jump-${index}`">{{ result.jump }} m</span>
      </template>
    </div>
  </div>
</template>

<script>
const DATA_FROM_API = [
  {
    team: 'Sebastien OGIER, Julien INGRASSIA',
    jump: 22
  },
  {
    team: 'Elfyn EVANS, Scott MARTIN',
    jump: 24
  },
  {
    team: 'Thierry NEUVILLE, Nicolas GILSOUL',
    jump: 21
  },
  {
    team: 'Kalle ROVANPERÄ, Jonne HALTTUNEN',
    jump: 22
  },
  {
    team: 'Ott TÄNAK, Martin JÄRVEOJA',
    jump: 27
  },
  {
    team: 'Teemu SUNINEN, Jarmo LEHTINEN',
    jump: 25
  },
  {
    team: 'Esapekka LAPPI, Janne FERM',
    jump: 24
  },
  {
    team: 'Takamoto KATSUTA, Daniel BARRITT',
    jump: 23
  },
  {
    team: 'Craig BREEN, Paul NAGLE',
    jump: 21
  },
  {
    team: 'Gus GREENSMITH, Elliott EDMONDSON',
    jump: 12
  },
  {
    team: 'Pierre-Louis LOUBET, Vincent LANDAIS',
    jump: 22
  },
  {
    team: 'Mads OSTBERG, Torstein ERIKSEN',
    jump: 23
  },
  {
    team: 'Nikolay GRYAZIN, Konstantin ALEKSANDROV',
    jump: 21
  },
  {
    team: 'Pontus TIDEMAND, Patrik BARTH',
    jump: 21
  },
  {
    team: 'Ole Christian VEIBY, Jonas ANDERSSON',
    jump: 21
  },
  {
    team: 'Adrien FOURMAUX, Renaud JAMOUL',
    jump: 21
  },
  {
    team: 'Eyvind BRYNILDSEN, Ilka MINOR',
    jump: 21
  },
  {
    team: 'Jari HUTTUNEN, Mikko LUKKA',
    jump: 21
  },
  {
    team: 'Marco BULACIA WILKINSON, Marcelo DER OHANNESIAN',
    jump: 21
  },
  {
    team: 'Nicolas CIAMIN, Yannick ROCHE',
    jump: 21
  },
  {
    team: 'Emilio FERNANDEZ, Ruben GARCIA',
    jump: 22
  },
  {
    team: 'Yohan ROSSEL, Benoît FULCRAND',
    jump: 22
  },
  {
    team: 'Eerik PIETARINEN, Antti LINNAKETO',
    jump: 19
  },
  {
    team: 'Kajetan KAJETANOWICZ, Maciej SZCZEPANIAK',
    jump: 19
  },
  {
    team: 'Oliver SOLBERG, Aaron JOHNSTON',
    jump: 19
  },
  {
    team: 'Grégoire MUNSTER, Louis LOUKA',
    jump: 19
  },
  {
    team: 'Raul JEETS, Andrus TOOM',
    jump: 19
  },
  {
    team: 'Roland POOM, Erik LEPIKSON',
    jump: 19
  },
  {
    team: 'Karl KRUUDA, Dale MOSCATT',
    jump: 19
  },
  {
    team: 'Rainer AUS, Simo KOSKINEN',
    jump: 20
  },
  {
    team: 'Egon KAUR, Silver SIMM',
    jump: 19
  },
  {
    team: 'Priit KOIK, Alari-Uku HELDNA',
    jump: 21
  },
  {
    team: 'Georg LINNAMÄE, Volodymyr KORSIA',
    jump: 22
  },
  {
    team: 'Gustav KRUUDA, Ken JÄRVEOJA',
    jump: 23
  },
  {
    team: 'Jan SOLANS, Mauro BARREIRO',
    jump: 24
  },
  {
    team: 'Radik SHAYMIEV, Alexey ARNAUTOV',
    jump: 25
  },
  {
    team: 'Jarosław KOŁTUN, Ireneusz PLESKOT',
    jump: 25
  },
  {
    team: 'Sean JOHNSTON, Alexander KIHURANI',
    jump: 24
  },
  {
    team: 'Rakan ALRASHED, Hugo MAGALHAES',
    jump: 22
  },
  {
    team: 'Tom KRISTENSSON, Joakim SJOBERG',
    jump: 21
  },
  {
    team: 'Martins SESKS, Renars FRANCIS',
    jump: 14
  },
  {
    team: 'Ken TORN, Kauri PANNAS',
    jump: 21
  },
  {
    team: 'Sami PAJARI, Antti HAAPALA',
    jump: 23
  },
  {
    team: 'Raul BADIU, Gabriel LAZAR',
    jump: 20
  },
  {
    team: 'Fabrizio ZALDIVAR, Fernando MUSSANO',
    jump: 21
  },
  {
    team: 'Ruairi BELL, Darren GARROD',
    jump: 24
  },
  {
    team: 'Pontus LÖNNSTRÖM, Stefan GUSTAVSSON',
    jump: 22
  },
  {
    team: 'Marco POLLARA, Maurizio MESSINA',
    jump: 26
  },
  {
    team: 'Fabio ANDOLFI, Stefano SAVOIA',
    jump: 24
  },
  {
    team: 'Enrico OLDRATI, Elia DE GUIO',
    jump: 13
  },
  {
    team: 'Robert VIRVES, Sander PRUUL',
    jump: 19
  },
  {
    team: 'Georg GROSS, Raigo MÕLDER',
    jump: 17
  },
  {
    team: 'Kimmo KURKELA, Reeta HÄMÄLÄINEN',
    jump: 27
  },
  {
    team: 'Alexander RZHEVKIN, Maxim KARAYANIDI',
    jump: 15
  },
  {
    team: 'Mika KARPPANEN, Anne HEINONEN',
    jump: 14
  },
  {
    team: 'Gustavo SOSA, Rogelio PEÑATE',
    jump: 12
  },
  {
    team: 'Kaspar KASARI, Jakko VIILO',
    jump: 10
  },
  {
    team: 'Vladas JURKEVICIUS, Aisvydas PALIUKENAS',
    jump: 14
  },
  {
    team: 'Gregor JEETS, Kuldar SIKK',
    jump: ''
  },
  {
    team: 'Justas SIMASKA, Titas SIMASKA',
    jump: ''
  }
];

export default {
  name: 'ScoreBoard',
  data() {
    return {
      scoreBoard: DATA_FROM_API
    }
  },
  computed: {
    tableData() {
      const sortedData = this.scoreBoard.map(el => el)
      sortedData.sort((resultA, resultB) => resultB.jump - resultA.jump)

      return sortedData
    }
  },
  created() {
    // fetch data from API
  }
}
</script>
<style lang="scss">
  .table {
		display: grid;
    width: 80vw;
		grid-template-columns: minmax(2rem, 4rem) 1fr 1fr;
		border-top: 1px solid black;
		border-right: 1px solid black;
		margin: 1rem;
    margin-top: 2rem;
    font-family: 'Montserrat';

    @media(min-width: 576px) {
      grid-template-columns: minmax(2rem, 100px) 1fr 1fr;
      margin-top: 1rem;
    }

    span {
      text-align: center;
      padding: .5rem;
      border-left: 1px solid black;
      border-bottom: 1px solid black;
    }

    &__header {
      font-size: 1rem;
      font-weight: 400;

      @media(min-width: 576px) {
        font-size: 1.25rem;
      }
    }

    &__content {
      font-size: 1rem;
      font-weight: 500;

      @media(min-width: 576px) {
        font-size: 1.5625rem;
      }
    }
  }
</style>