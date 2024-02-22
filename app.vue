<template>
  <div>
    <NuxtLayout>
      <NuxtPage
        :transition="{
          name: 'page',
          mode: 'out-in',
          onBeforeEnter,
        }"
      />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => (titleChunk ? `Gen for me | ${titleChunk}` : 'Gen for me'),
})

const { finalizePendingLocaleChange, locale } = useI18n()

const onBeforeEnter = async () => {
  await finalizePendingLocaleChange()
}

const initLang = () => {
  const lang = localStorage.getItem('gen-language')
  if (lang) locale.value = lang
}

onMounted(async () => {
  initLang()
  // await initAuth()
  // connectSocket()
})
</script>

<style>
.qwe {
  border: 1px solid salmon;
}
.qwe2 > * {
  border: 1px solid salmon;
}
.qwe3 * {
  border: 1px solid salmon;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.05rem);
}
</style>
