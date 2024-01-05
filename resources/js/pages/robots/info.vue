<script setup>
import ServicesTab from '@/views/pages/robots/ServicesTab.vue';
import ActionsTab from '@/views/pages/robots/ActionsTab.vue'
import SensorInfoTab from '@/views/pages/robots/SensorInfoTab.vue';
import LocationsInfoTab from '@/views/pages/robots/LocationsInfoTab.vue';
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
    title: 'Sensor info',
  },
  {
    icon: 'tabler-notes',
    title: 'Actions',
  },
  {
    icon: 'tabler-notes',
    title: 'Location history',
  },
  {
    icon: 'tabler-notes',
    title: 'Services',
  },
]

const infoTab = ref(2)

const log = ()=>{
  console.log('1')
}
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
            <SensorInfoTab/>
          </VWindowItem>
          <VWindowItem @group:selected=log()>
            <ActionsTab/>
          </VWindowItem>
          <VWindowItem>
            <LocationsInfoTab/>
          </VWindowItem>
          <VWindowItem>
            <ServicesTab/>
          </VWindowItem>
        </VWindow>
      </VCol> 
    </VRow>
  </section>

</template>
