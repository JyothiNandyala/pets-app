<template>
  <div class="grid p-jc-around">
    <div class="p-col-12 p-md-6 p-lg-3" v-for="pet in pets" :key="pet.id">
      <SinglePet
        :pet="pet"
        @remove-pet="$emit('remove-pet', pet.id)"
        @add-favorite="$emit('add-favorite', pet.id)"
      />
    </div>
  </div>
</template>

<script>
import SinglePet from "./SinglePet";
export default {
  components: { SinglePet },
  props: {
    pets: Array,
  },
  emits: ["remove-pet", "add-favorite"],
};
</script>

<style></style>
