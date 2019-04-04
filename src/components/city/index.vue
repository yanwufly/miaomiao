<template></template>

<script>
export default {
  name: "City",
  data() {
    return {
      cityList: [],
      hotList: []
    };
  },
  mounted() {
    this.axios.get("/api/cityList").then(res => {
      var msg = res.data.msg;
      if (msg === "ok") {
        var cities = res.data.data.cities;
        var { cityList, hotList } = this.formatCityList(cities);
        this.cityList = cityList;
        this.hotList = hotList;
      }
    });
  },
  methods: {
    formatCityList(cities) {
      var cityList = [],
        hotList = [];

      for (var i = 0; i < cities.length; i++) {
        if (cities[i].isHot === 1) {
          hotList.push(cities[i]);
        }
      }

      for (var i = 0; i < cities.length; i++) {
        var firstLetter = cities[i].py.substring(0, 1).toUpperCase();
        if (isFirst(firstLetter)) {
          cityList.push({
            index: firstLetter,
            list: [{ nm: cities[i].nm, id: cities[i].id }]
          });
        } else {
          for (var j = 0; j < cityList.length; j++) {
            if (cityList[j].index === firstLetter) {
              cityList[j].list.push({ nm: cities[i].nm, id: cities[i].id });
            }
          }
        }
      }

      cityList.sort((n1, n2) => {
        if (n1.index < n2.index) {
          return -1;
        } else if (n1.index > n2.index) {
          return 1;
        }
      });

      return {
        cityList,
        hotList
      };

      function isFirst(letter) {
        for (var i = 0; i < cityList.length; i++) {
          if (cityList[i].index === letter) {
            return false;
          }
        }
        return true;
      }
    }
  }
};
</script>

<style></style>
