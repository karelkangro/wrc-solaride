<template>
  <div class="container">
    <div class="message-board">
      <p>Hüppe pikkus</p>
      <h2>{{ current.jump }}</h2>
      <p>Sõitjad:</p>
      <h2>{{ teamMembers[0] }},<br> {{ teamMembers[1]}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RallyEstonia',
  data() {
    return {
      team: {
        name: 'Ott TÄNAK, Martin JÄRVEOJA',
        jump: 27
      }
   }
  },
  computed: {
    current(){
      return this.team
    },
    teamMembers() {
      return this.team.name.split(',')
    }
  },
  created() {
    // fetch data, update team object
  },
  watch: {
    team() {
      // triggers when data object changes
    }
  },
  methods: {
    fetchData() {
      // fetch data from API
    }
  }
}
</script>

<style lang="scss">

  .message-board {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 1rem;
    margin-top: 2rem;
    background: rgb(231,149,66);
    width: 90vw;

    @media(min-width: 576px) {
      width: 70vw;
    }

    p {
      font-family: 'Montserrat';
      font-weight: 700;
      font-size: 1.5rem;

      @media(min-width: 768px) {
        font-size: 2.188rem;
      }
    }

    h2 {
      font-family: 'Montserrat';
      font-weight: 700;
      font-size: 3rem;

      @media(min-width: 768px) {
        font-size: 6.25rem;
      }
    }
  }
</style>