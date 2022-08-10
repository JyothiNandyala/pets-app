<template>
  <div class="home">Please Fill the Form to Add the Pet</div>
  <AddPet @add-pet="addPet" />
  <Pets :pets="pets" @remove-pet="removePet" @add-favorite="addFavorite" />
</template>

<script>
import Pets from "../components/ListOfPets.vue";
import AddPet from "../components/AddPet.vue";
export default {
  name: "HomeView",
  components: { AddPet, Pets },
  methods: {
    addPet(pet) {
      this.pets = [...this.pets, pet];
    },
    removePet(id) {
      if (confirm("Are you sure you want to remove this pet?")) {
        this.pets = this.pets.filter((pet) => pet.id !== id);
      }
    },
    addFavorite(id) {
      this.pets = this.pets.map((pet) =>
        pet.id === id ? { ...pet, isFavorite: !pet.isFavorite } : pet
      );
    },
  },
  data() {
    return {
      pets: [],
    };
  },
  created() {
    this.pets = [
      {
        id: 1,
        name: "Ruby",
        age: 2,
        url: "https://images.dog.ceo/breeds/terrier-american/n02093428_4552.jpg",
        isFavorite: true,
      },
      {
        id: 2,
        name: "Coco",
        age: 4,
        url: "https://images.dog.ceo/breeds/pointer-german/n02100236_3025.jpg",
        isFavorite: false,
      },
      {
        id: 3,
        name: "Bean",
        age: 4,
        url: "https://assets.aboutamazon.com/dims4/default/f844d7d/2147483647/strip/true/crop/5500x3094+0+444/resize/1200x675!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F84%2Fd4%2F641b6c9644be9293be3b2064ad1d%2Famazon-alexa-battersea-edit-11.jpg",
        isFavorite: true,
      },
      {
        id: 4,
        name: "Coco",
        age: 6,
        url: "https://images.dog.ceo/breeds/pointer-german/n02100236_3025.jpg",
        isFavorite: false,
      },
    ];
  },
};
</script>
<style>
.home {
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  color: green;
}
</style>
