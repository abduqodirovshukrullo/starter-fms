<script setup>
import ServicesTab from '@/views/pages/robots/ServicesTab.vue';
import ActionsTab from '@/views/pages/robots/ActionsTab.vue'
import SensorInfoTab from '@/views/pages/robots/SensorInfoTab.vue';
import LocationsInfoTab from '@/views/pages/robots/LocationsInfoTab.vue';
import { useRoute } from 'vue-router';
import Echo from 'laravel-echo-vue3';
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
    title: 'Info',
  },
  // {
  //   icon: 'tabler-notes',
  //   title: 'Actions',
  // },
  // {
  //   icon: 'tabler-notes',
  //   title: 'Location history',
  // },
  // {
  //   icon: 'tabler-notes',
  //   title: 'Services',
  // },
]

const infoTab = ref(0)

const robotData = ref({
  Send:0,
  Target_X:0,
  Target_Y:0,
  Current_X:0,
  Current_Y:0,
  RobotStatus:0,
  Battery:0,
  Velocity:0,
  Distance:0,
  EmgStop:0,
  AutoDrv:0,
  Waring:0,
  Light:0,
  SetPosition:0
})

const setRobotData = async (data)=>{
  robotData.value = data.Data
}

onMounted((e)=>{
  window.Echo.channel('robotdata')
    .listen('.data.received', (e) => {
      setRobotData(e.data.body)
      console.log(e.data.body);
  })
})

const snackColor = ref()
const snackMessage = ref()
const isSnackbarVisible = ref()
const onProgress = ref(false)
const sendCommand = async formData => {
  onProgress.value = true
  const { data, pending, error, refresh }  = await useApi(createUrl("/kafka/produce")).post(formData)
  
  if(!pending){
    onProgress.value = false
    if(error.value){
      
      isSnackbarVisible.value = true
      snackMessage.value = "Error"
      snackColor.value = 'error'
      return
    }
    isSnackbarVisible.value = true
    snackMessage.value = "Success"
    snackColor.value = 'success'
    console.log(data)
    return
  }
  
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
        <VRow>
          <VCol
            cols="4"
          >
         
            <SensorInfoTab :infoData="robotData"
              @sendToRobot = "sendCommand"
              :onProgress = "onProgress"
            />
         
          </VCol>
          <VCol
            cols="8"
          >
            <LocationsInfoTab
              :infoData = "robotData"
            />
          </VCol>
          
        </VRow>
      </VWindowItem>
        
         
          <!-- <VWindowItem>
            <ActionsTab/>
          </VWindowItem> -->
         
          <!-- <VWindowItem>
            <ServicesTab/>
          </VWindowItem> -->
        </VWindow>
      </VCol> 
    </VRow>
    <VSnackbar
        v-model="isSnackbarVisible"
        location="top right"
        variant="flat"
        :color="snackColor"
      >
      {{ snackMessage }}
    </VSnackbar>
  </section>

</template>
