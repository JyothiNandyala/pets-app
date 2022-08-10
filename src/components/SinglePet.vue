<template>
  <div class="pets">
    <Card style="width: 16em">
      <template #header>
        <img :src="pet.url" alt="pet" />
      </template>
      <template #title>
        {{ pet.name }}
      </template>
      <template #subtitle> Age:{{ pet.age }} </template>

      <template #footer>
        <Button
          @click="onRemove(pet.id)"
          icon="pi pi-times"
          label="Remove"
          class="p-button-danger"
          style="margin-right: 4em"
        />
        <Button
          @click="addFavorite(pet.id)"
          icon="pi pi-heart"
          :class="[
            pet.isFavorite ? '' : 'p-button-outlined',
            'p-button-rounded',
            'p-button-danger',
          ]"
        />
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  props: {
    pet: Object,
  },
  methods: {
    onRemove(id) {
      this.$emit("remove-pet", id);
    },
    addFavorite(id) {
      this.$emit("add-favorite", id);
    },
  },
};
</script>

<style>
.pets {
  margin: 20px;
}
img {
  height: 200px;
  object-fit: cover;
}
</style>
