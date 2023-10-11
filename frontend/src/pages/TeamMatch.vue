<template>
    <div class="main" id="main-container">
      <div class="container">
        <div class="row align-items-md-stretch">
          <div class="py-3 main-bg rounded-3">
            <h1>Line - Random</h1>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text " id="topLine">TOP</span>
              </div>
              <input type="text" class="form-control" v-model="topLine[0]" placeholder="text를 입력해 주세요">
              <input type="text" class="form-control" v-model="topLine[1]" placeholder="text를 입력해 주세요">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text " id="jugLine">JUG</span>
              </div>
              <input type="text" class="form-control" v-model="jugLine[0]" placeholder="text를 입력해 주세요">
              <input type="text" class="form-control" v-model="jugLine[1]" placeholder="text를 입력해 주세요">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="midLine">MID</span>
              </div>
              <input type="text" class="form-control" v-model="midLine[0]" placeholder="text를 입력해 주세요">
              <input type="text" class="form-control" v-model="midLine[1]" placeholder="text를 입력해 주세요">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="adcLine">ADC</span>
              </div>
              <input type="text" class="form-control" v-model="adcLine[0]" placeholder="text를 입력해 주세요">
              <input type="text" class="form-control" v-model="adcLine[1]" placeholder="text를 입력해 주세요">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="supLine">SUP</span>
              </div>
              <input type="text" class="form-control" v-model="supLine[0]" placeholder="text를 입력해 주세요">
              <input type="text" class="form-control" v-model="supLine[1]" placeholder="text를 입력해 주세요">
            </div>
            <button type="button" class="btn btn-outline-warning m-3" @click="shuffleTeams">Shuffle</button>
          </div>
        </div>
      </div>
      <div class="mb-5"></div>
      <div class="container">
        <div class="row align-items-md-stretch">
          <div class="col-md-6">
            <div class="h-100 p-5 con-blue rounded-3">
              <h2>Blue</h2>
              <div v-for="(player, index) in blueTeam" :key="index">
                <input type="text" class="rounded-3" v-model="blueTeam[index]">
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="h-100 p-5 con-red rounded-3">
              <h2>Red</h2>
              <div v-for="(player, index) in redTeam" :key="index">
                <input type="text" class="rounded-3" v-model="redTeam[index]">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        topLine: ["", ""],
        jugLine: ["", ""],
        midLine: ["", ""],
        adcLine: ["", ""],
        supLine: ["", ""],
        blueTeam: ["", "", "", "", ""],
        redTeam: ["", "", "", "", ""],
      };
    },
    methods: {
      shuffleTeams() {
        // 먼저 입력된 값을 복사하여 배열에 넣습니다.s
        let topLineCopy = [...this.topLine];
        let jugLineCopy = [...this.jugLine];
        let midLineCopy = [...this.midLine];
        let adcLineCopy = [...this.adcLine];
        let supLineCopy = [...this.supLine];
  
        // blueTeam에 랜덤하게 선택된 값을 할당하고, 그 값을 다른 팀에서 제거합니다.
        this.blueTeam = [
          topLineCopy.splice(Math.floor(Math.random() * 2), 1)[0],
          jugLineCopy.splice(Math.floor(Math.random() * 2), 1)[0],
          midLineCopy.splice(Math.floor(Math.random() * 2), 1)[0],
          adcLineCopy.splice(Math.floor(Math.random() * 2), 1)[0],
          supLineCopy.splice(Math.floor(Math.random() * 2), 1)[0],
        ];
  
        // 나머지 선수들을 redTeam에 할당합니다.
        this.redTeam = [
          topLineCopy[0],
          jugLineCopy[0],
          midLineCopy[0],
          adcLineCopy[0],
          supLineCopy[0],
        ];
      },
    },
  };
  </script>
  
  <style scoped>
  .main-bg {
    background-color: gray;
  }
  
  .con-blue {
    background-color: rgb(83, 83, 171);
  }
  
  .con-red {
    background-color: rgb(209, 87, 87);
  }
  </style>