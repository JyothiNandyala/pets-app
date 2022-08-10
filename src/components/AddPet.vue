<template>
  <div class="addpet">
    <form @submit="onSubmit" class="formgroup-inline">
      <div class="field">
        <label for="name" class="p-sr-only">Name</label>
        <InputText
          v-model="name"
          id="name"
          type="text"
          class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary"
          placeholder="name"
        />
      </div>
      <div class="field">
        <label for="age" class="p-sr-only">Age</label>
        <InputText
          v-model="age"
          id="age"
          type="number"
          class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary"
          placeholder="age"
        />
      </div>
      <div class="field">
        <label for="url" class="p-sr-only">Url</label>
        <InputText
          v-model="url"
          id="url"
          type="text"
          class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary"
          placeholder="url"
        />
      </div>
      <Button type="submit" label="save" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AddPet",
  data() {
    return {
      name: "",
      age: "",
      url: "",
      isFavorite: false,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const newPet = {
        id: Math.random(),
        name: this.name,
        age: this.age,
        url: this.url,
      };
      this.$emit("add-pet", newPet);
      this.name = "";
      this.age = "";
      this.url = "";
    },
  },
};
</script>

<style>
.addpet {
  margin: 20px;
}
</style>
