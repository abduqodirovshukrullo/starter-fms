<script setup>

import { useRoute } from 'vue-router';
import UserBioPanel from '../../views/pages/users/UserBioPanel.vue';
import UserTabActions from '../../views/pages/users/UserTabActions.vue';
const route = useRoute()

definePage({
  meta:{
    action:'manage',
    subject:'permission'
  }
})

const tabs = [
  {
    icon: 'tabler-notes',
    title: 'Actions',
  },
]

const userTab = ref(null)

const { data: userData } = await useApi(`/dashboard/admin/user/${ route.params.id }`)
</script>
<template>
  <VRow>
    <VCol
      cols="12"
      md="5"
      lg="4"
    >
      <UserBioPanel :user-data="userData.result" />
    </VCol>
    
    <VCol
      cols="12"
      md="7"
      lg="8"
    >

      <VTabs
        v-model="userTab"
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
        v-model="userTab"
        class="mt-6 disable-tab-transition"
        :touch="false"
      >
        <VWindowItem>
          <UserTabActions/>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
