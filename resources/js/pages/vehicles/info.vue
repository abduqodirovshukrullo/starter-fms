<script setup>

import { useRoute } from 'vue-router';
const route = useRoute()

definePage({
  meta:{
    action:'monitor',
    subject:'own'
  }
})


const tabs = [
  {
    icon: 'tabler-notes',
    title: 'Actions',
  },
]

const infoTab = ref(null)


</script>

<template>
  <section>
    <VRow>
      <VCol
        cols="12"
        md="12"
        lg="12"
      >
        <VTabs
          v-model="infoTab"
          class="v-tabs-pill"
        >
          <VTab
            v-for="tab in tabs"
            :key="tab.icon"
          >
            <VIcon
              :size="18"
              :icon="tab.icon"
              class="me-1"
            />
            <span>{{ tab.title }}</span>
          </VTab>
        </VTabs>
        <VWindow
          v-model="infoTab"
          class="mt-6 disable-tab-transition"
          :touch="false"
        >
          <VWindowItem>
            <UserTabActions/>
          </VWindowItem>
        </VWindow>
      </VCol> 
    </VRow>
  </section>

</template>
