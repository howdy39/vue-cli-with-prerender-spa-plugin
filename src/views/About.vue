<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  metaInfo: {
    title: 'About Us',
    meta: [
      { description: 'About.vueのdescription' },
      { 'og:title': 'About.vueのog:title' }
    ]
  }
}
</script>
