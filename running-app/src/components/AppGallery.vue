<template>
  <div class="app-gallery">
    <form action="" class="form">
        <h2 class="h2">Add some cool pictures from races</h2>
        <div class="form-group">
            <label for="distance">Upload image</label>
            <input type="text" id="upload-input" class="form-control" required>
        </div>
        <button type="submit" id="button-upload">Upload</button>
    </form>
    <div class="app-gallery--container">
        <span class="app-gallery--container-item"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppGallery'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.app-gallery {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

</style>