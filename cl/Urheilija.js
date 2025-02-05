const Henkilo = require("./Henkilo");

// Urheilija luokka, joka perii Henkilo luokan ominaisuudet
class Urheilija extends Henkilo {
  constructor(
    linkToPicture,
    weight,
    sport,
    achievements,
    firstName,
    middleName,
    lastName,
    favName,
    birthYear
  ) {
    super(firstName, middleName, lastName, favName, birthYear);
    this.linkToPicture = linkToPicture;
    this.weight = weight;
    this.sport = sport;
    this.achievements = achievements;
  }

  //#region Setterit ominaisuuksille
  setPicture(newLink) {
    this.linkToPicture = newLink;
  }

  setAchievements(newAchievements) {
    this.achievements = newAchievements;
  }

  setWeight(newWeight) {
    this.weight = newWeight;
  }

  setSport(newSport) {
    this.sport = newSport;
  }

  //#endregion Setters

  //#region Gettert ominaisuuksille
  getPicture() {
    return this.linkToPicture;
  }

  getAchievements() {
    return this.achievements;
  }

  getweight() {
    return this.weight;
  }

  getSport() {
    return this.sport;
  }

  //#endregion Getters
}

module.exports = Urheilija;
